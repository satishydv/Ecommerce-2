import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Shipping Policy | Rudh Shopzone",
  description: "Shipping policy for orders placed on Rudh Shopzone.",
};

const ShippingPolicyPage = () => {
  return (
    <Container className="py-10 md:py-14">
      <article className="mx-auto max-w-3xl space-y-6 text-sm leading-7 text-gray-700 md:text-base">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">Shipping Policy</h1>
          <p>
            Effective date: April 23, 2026
            <br />
            Business name: Rudhved Infotech
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">1. Serviceable Locations</h2>
          <p>
            We ship to serviceable pin codes across India through our logistics partners. Availability may
            vary based on product type and destination.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">2. Dispatch and Delivery Timeline</h2>
          <p>
            Orders are typically dispatched within 1 to 3 business days after confirmation. Delivery
            usually takes 3 to 7 business days depending on destination and courier network.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">3. Shipping Charges</h2>
          <p>
            Shipping charges, if applicable, are displayed during checkout. Promotional free-shipping
            offers may apply for selected products or order values.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">4. Delays and Failed Delivery</h2>
          <p>
            Delays may occur due to weather, holidays, regional restrictions, or courier disruptions. If a
            shipment is undelivered due to incorrect address or unavailability, our support team will help
            with reattempt or resolution.
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

export default ShippingPolicyPage;