import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Return Policy | Rudh Shopzone",
  description: "Return policy for purchases made on Rudh Shopzone.",
};

const ReturnPolicyPage = () => {
  return (
    <Container className="py-10 md:py-14">
      <article className="mx-auto max-w-3xl space-y-6 text-sm leading-7 text-gray-700 md:text-base">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">Return Policy</h1>
          <p>
            Effective date: April 23, 2026
            <br />
            Business name: Rudhved Infotech
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">1. Return Eligibility</h2>
          <p>
            Returns are accepted for eligible products that are unused, in original condition, and with
            intact packaging, tags, and proof of purchase.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">2. Return Request Window</h2>
          <p>
            Return requests must be submitted within 7 days of delivery. Requests outside this timeline
            may not be approved.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">3. Return Process</h2>
          <p>
            To initiate a return, contact our support team with order details and reason for return. After
            approval, pickup or return shipment instructions will be shared.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">4. Non-Returnable Items</h2>
          <p>
            Items categorized as personal-use, damaged due to customer misuse, or marked non-returnable at
            purchase are not eligible for return.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">5. Support Contact</h2>
          <p>
            Email: support@rudhvedinfotech.com
            <br />
            Website: https://rudhvedinfotech.com
          </p>
        </section>
      </article>
    </Container>
  );
};

export default ReturnPolicyPage;