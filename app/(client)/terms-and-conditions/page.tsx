import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms and Conditions | Rudh Shopzone",
  description: "Terms and Conditions for purchases made on Rudh Shopzone.",
};

const TermsAndConditionsPage = () => {
  return (
    <Container className="py-10 md:py-14">
      <article className="mx-auto max-w-3xl space-y-6 text-sm leading-7 text-gray-700 md:text-base">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Terms and Conditions
          </h1>
          <p>
            Effective date: April 23, 2026
            <br />
            Business name: Rudhved Infotech
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">1. Acceptance of Terms</h2>
          <p>
            By accessing and placing an order on this website, you agree to be bound by these Terms and
            Conditions, our Privacy Policy, Refund Policy, Return Policy, and Shipping Policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">2. Products and Pricing</h2>
          <p>
            We make every effort to display accurate product information and pricing. In case of pricing
            or technical errors, we reserve the right to cancel or refuse orders and process refunds, if
            applicable.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">3. Order Confirmation and Cancellation</h2>
          <p>
            Orders are confirmed only after successful payment and order acceptance by us. We may cancel
            orders due to stock unavailability, payment issues, or suspected fraudulent activity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">4. User Responsibilities</h2>
          <p>
            You agree to provide accurate details, keep account credentials secure, and use the website
            only for lawful purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">5. Limitation of Liability</h2>
          <p>
            To the extent permitted by law, Rudhved Infotech will not be liable for indirect, incidental,
            or consequential damages arising from website use or product purchases.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">6. Contact Information</h2>
          <p>
            For support or policy-related questions, contact us at:
            <br />
            Email: support@rudhvedinfotech.com
            <br />
            Website: https://rudhvedinfotech.com
          </p>
        </section>
      </article>
    </Container>
  );
};

export default TermsAndConditionsPage;