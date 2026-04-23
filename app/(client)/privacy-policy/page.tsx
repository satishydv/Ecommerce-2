import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | Rudh Shopzone",
  description: "Privacy Policy for Rudh Shopzone users and customers.",
};

const PrivacyPolicyPage = () => {
  return (
    <Container className="py-10 md:py-14">
      <article className="mx-auto max-w-3xl space-y-6 text-sm leading-7 text-gray-700 md:text-base">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">Privacy Policy</h1>
          <p>
            Effective date: April 23, 2026
            <br />
            Business name: Rudhved Infotech
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">1. Information We Collect</h2>
          <p>
            We collect information you provide while ordering or contacting us, such as name, phone
            number, email address, shipping address, and payment status details.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">2. How We Use Information</h2>
          <p>
            We use your data to process orders, provide customer support, send order updates, prevent
            fraud, and comply with legal obligations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">3. Data Sharing</h2>
          <p>
            We share data only with trusted service providers such as payment processors, delivery
            partners, and technology platforms that help us operate our business.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">4. Data Security and Retention</h2>
          <p>
            We apply reasonable technical and organizational safeguards to protect your personal data and
            retain it only for as long as required for business and legal purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">5. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal information by contacting us
            through the support details below.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">6. Contact Information</h2>
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

export default PrivacyPolicyPage;
