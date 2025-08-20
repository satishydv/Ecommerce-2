import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { getCategories } from "@/sanity/queries";
import { client } from "@/sanity/lib/client";
import React from "react";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const categories = await getCategories();
  const { slug } = await params;
  
  // Fetch products on server side
  let products = [];
  try {
    const query = `
      *[_type == 'product' && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc){
        ...,"categories": categories[]->title
      }
    `;
    products = await client.fetch(query, { categorySlug: slug });
    console.log(`Fetched ${products.length} products for category: ${slug}`);
  } catch (error) {
    console.error("Error fetching products:", error);
    products = [];
  }

  return (
    <div className="py-10">
      <Container>
        <Title>
          Products by Category:{" "}
          <span className="font-bold text-green-600 capitalize tracking-wide">
            {slug && slug}
          </span>
        </Title>
        <CategoryProducts categories={categories} slug={slug} initialProducts={products} />
      </Container>
    </div>
  );
};

export default CategoryPage;
