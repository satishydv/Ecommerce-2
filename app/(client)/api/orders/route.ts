import { NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/client";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { orderData } = body;

    if (!orderData) {
      return NextResponse.json(
        { error: "Order data is required" },
        { status: 400 }
      );
    }

    // Create the order document
    const orderDoc = {
      _type: 'order',
      ...orderData,
      clerkUserId: userId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Create the order in Sanity using write client
    const result = await writeClient.create(orderDoc);

    return NextResponse.json(
      { success: true, orderId: result._id },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("CRITICAL: Error creating order in Sanity:", {
      message: error.message,
      stack: error.stack,
      details: error?.response?.body || error,
    });
    
    return NextResponse.json(
      { 
        error: "Failed to create order", 
        message: error.message || "Unknown error" 
      },
      { status: 500 }
    );
  }
}
