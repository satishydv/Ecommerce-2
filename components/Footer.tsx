"use client";
import React, { useState } from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./ui/text";
import { categoriesData, quickLinksData } from "@/constants/data";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import PolicyModal from "./PolicyModal";

const Footer = () => {
  const [isShippingModalOpen, setIsShippingModalOpen] = useState(false);
  const [isReturnModalOpen, setIsReturnModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isFAQsModalOpen, setIsFAQsModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, title: string) => {
    switch (title) {
      case "Shipping Policy":
        e.preventDefault();
        setIsShippingModalOpen(true);
        break;
      case "Return and Refund Policy":
        e.preventDefault();
        setIsReturnModalOpen(true);
        break;
      case "About us":
        e.preventDefault();
        setIsAboutModalOpen(true);
        break;
      case "Contact us":
        e.preventDefault();
        setIsContactModalOpen(true);
        break;
      case "Terms & Conditions":
        e.preventDefault();
        setIsTermsModalOpen(true);
        break;
      case "Privacy Policy":
        e.preventDefault();
        setIsPrivacyModalOpen(true);
        break;
      case "FAQs":
        e.preventDefault();
        setIsFAQsModalOpen(true);
        break;
      case "Help":
        e.preventDefault();
        setIsHelpModalOpen(true);
        break;
      default:
        break;
    }
  };

  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <SubText>
              Discover curated furniture collections at Rudh Shopzone, blending
              style and comfort to elevate your living spaces.
            </SubText>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    onClick={(e) => handleLinkClick(e, item?.title)}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Categories</SubTitle>
            <ul className="space-y-3 mt-4">
              {categoriesData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Newsletter</SubTitle>
            <SubText>
              Subscribe to our newsletter to receive updates and exclusive
              offers
            </SubText>
            <form className="space-y-3">
              <Input placeholder="Enter your email" type="email" required />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            © {new Date().getFullYear()} <Logo className="text-sm" />. All
            rights reserved.
          </div>
        </div>
      </Container>

      {/* Policy Modals */}
      <PolicyModal
        isOpen={isShippingModalOpen}
        onClose={() => setIsShippingModalOpen(false)}
        title="Shipping Policy"
      >
        <div className="space-y-4">
          <p>
            Welcome to <strong>Rudh Shopzone</strong>! We are committed to
            delivering your orders as quickly and safely as possible.
          </p>
          <section>
            <h4 className="font-bold text-darkColor mb-1">Processing Time</h4>
            <p>Orders are typically processed within 1-2 business days.</p>
          </section>
          <section>
            <h4 className="font-bold text-darkColor mb-1">Shipping Rates</h4>
            <p>
              We offer standard shipping at a flat rate, with{" "}
              <strong>free shipping</strong> on orders over $500.
            </p>
          </section>
          <section>
            <h4 className="font-bold text-darkColor mb-1">Delivery Locations</h4>
            <p>
              We currently ship to all major cities and regions nationwide.
            </p>
          </section>
          <section>
            <h4 className="font-bold text-darkColor mb-1">Tracking</h4>
            <p>
              Once your order is shipped, you will receive a tracking number via
              email to monitor its progress.
            </p>
          </section>
        </div>
      </PolicyModal>

      <PolicyModal
        isOpen={isReturnModalOpen}
        onClose={() => setIsReturnModalOpen(false)}
        title="Return and Refund Policy"
      >
        <div className="space-y-4">
          <p>
            At <strong>Rudh Shopzone</strong>, customer satisfaction is our top
            priority. If you are not completely satisfied with your purchase,
            we&apos;re here to help.
          </p>
          <section>
            <h4 className="font-bold text-darkColor mb-1">Returns</h4>
            <p>
              You have <strong>30 calendar days</strong> to return an item from
              the date you received it. To be eligible for a return, your item
              must be unused and in the same condition that you received it.
            </p>
          </section>
          <section>
            <h4 className="font-bold text-darkColor mb-1">Refunds</h4>
            <p>
              Once we receive your item, we will inspect it and notify you that
              we have received your returned item. We will immediately notify
              you on the status of your refund after inspecting the item.
            </p>
          </section>
          <section>
            <h4 className="font-bold text-darkColor mb-1">Shipping Cost</h4>
            <p>
              You will be responsible for paying for your own shipping costs for
              returning your item unless the item is damaged or defective.
            </p>
          </section>
        </div>
      </PolicyModal>

      <PolicyModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        title="About us"
      >
        <div className="space-y-4">
          <p>
            Welcome to <strong>Rudh Shopzone</strong>! We are dedicated to providing the best shopping experience for our customers.
          </p>
          <section>
            <h4 className="font-bold text-darkColor mb-1">Our Mission</h4>
            <p>Our mission is to bring you curated, high-quality furniture that elevates your living spaces.</p>
          </section>
        </div>
      </PolicyModal>

      <PolicyModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Contact us"
      >
        <div className="space-y-4">
          <p>We would love to hear from you!</p>
          <section>
            <h4 className="font-bold text-darkColor mb-1">Email</h4>
            <p>support@rudhshopzone.com</p>
          </section>
          <section>
            <h4 className="font-bold text-darkColor mb-1">Phone</h4>
            <p>+1 (800) 123-4567</p>
          </section>
        </div>
      </PolicyModal>

      <PolicyModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
        title="Terms & Conditions"
      >
        <div className="space-y-4">
          <p>
            Please read these terms and conditions carefully before using our website.
          </p>
          <section>
            <h4 className="font-bold text-darkColor mb-1">Usage</h4>
            <p>By using this site, you agree to comply with and be bound by the following terms of use.</p>
          </section>
        </div>
      </PolicyModal>

      <PolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        title="Privacy Policy"
      >
        <div className="space-y-4">
          <p>
            Your privacy is important to us.
          </p>
          <section>
            <h4 className="font-bold text-darkColor mb-1">Data Collection</h4>
            <p>We only collect personal information that you provide to us to process your orders and improve our services.</p>
          </section>
        </div>
      </PolicyModal>

      <PolicyModal
        isOpen={isFAQsModalOpen}
        onClose={() => setIsFAQsModalOpen(false)}
        title="FAQs"
      >
        <div className="space-y-4">
          <section>
            <h4 className="font-bold text-darkColor mb-1">How do I track my order?</h4>
            <p>You can track your order using the tracking link sent to your email after purchase.</p>
          </section>
          <section>
            <h4 className="font-bold text-darkColor mb-1">Do you ship internationally?</h4>
            <p>Currently, we only ship nationwide, but we plan to expand in the future.</p>
          </section>
        </div>
      </PolicyModal>

      <PolicyModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
        title="Help"
      >
        <div className="space-y-4">
          <p>Need some assistance?</p>
          <section>
            <h4 className="font-bold text-darkColor mb-1">Customer Support</h4>
            <p>Our support team is available 24/7. Reach out via the Contact Us page or email us directly.</p>
          </section>
        </div>
      </PolicyModal>
    </footer>
  );
};

export default Footer;
