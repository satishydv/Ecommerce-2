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

  const handleLinkClick = (e: React.MouseEvent, title: string) => {
    if (title === "Shipping Policy") {
      e.preventDefault();
      setIsShippingModalOpen(true);
    } else if (title === "Return and Refund Policy") {
      e.preventDefault();
      setIsReturnModalOpen(true);
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
    </footer>
  );
};

export default Footer;
