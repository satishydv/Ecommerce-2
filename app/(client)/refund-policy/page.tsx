import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Refund Policy | Rudh Shopzone",
  description: "Refund policy for purchases made on Rudh Shopzone.",
};

const RefundPolicyPage = () => {
  return (
    <Container className="py-10 md:py-14">
      <article className="mx-auto max-w-3xl space-y-6 text-sm leading-7 text-gray-700 md:text-base">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">Refund Policy</h1>
          <p>
            Effective date: April 23, 2026
            <br />
            Business name: Rudhved Infotech
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">1. Eligible Refund Cases</h2>
          <p>
            Refunds are processed for eligible scenarios such as damaged products, wrong item delivered,
            duplicate payment, or order cancellation accepted by our team.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">2. Refund Request Window</h2>
          <p>
            Customers must raise a refund request within 7 days from delivery or payment date, depending
            on the issue type.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">3. Processing Timeline</h2>
          <p>
            Once approved, refunds are initiated to the original payment method and generally credited
            within 5 to 7 business days, based on bank or payment partner timelines.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">4. Non-Refundable Situations</h2>
          <p>
            Refunds are not applicable for claims made outside the refund window, items damaged due to
            misuse, or products clearly marked as non-refundable.
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

export default RefundPolicyPage;