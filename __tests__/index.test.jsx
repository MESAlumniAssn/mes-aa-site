/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/utils/home/Header";
import Welcome from "../components/utils/home/Welcome";
import TestimonialSection from "../components/utils/home/TestimonialSection";
import Footer from "../components/layout/Footer";
import CreateTestimonialForm from "../components/forms/testimonials/CreateTestmonialForm";
import styles from "../styles/Home.module.css";
import SiteContext from "../context/siteContext";

beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

const mockSetOpenTestimonialForm = jest.fn();

jest.mock("next/image", () => {
  return () => <></>;
});

const testimonials = [
  {
    name: "name",
    initial: "n",
    batch: "1961",
    message: "message",
  },
];

describe("render the home page", () => {
  it("test if the main heading of the site is displayed", () => {
    render(<Header styles={styles} />);

    const heading = screen.getByRole("heading", {
      name: /the mes college alumni association/i,
    });

    expect(heading).toBeInTheDocument();
  });

  // it("test if the CTA button is rendered", () => {
  //   render(<Header styles={styles} />);

  //   const button = screen.getByRole("button", {
  //     name: /register/i,
  //   });

  //   expect(button).toBeInTheDocument();
  // });

  it("test if the welcome message is displayed", () => {
    render(<Welcome styles={styles} />);

    const heading = screen.getByRole("heading", {
      name: /from our president\'s desk/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("test if the testimonial section is displayed", () => {
    render(<TestimonialSection styles={styles} testimonials={testimonials} />);

    const heading = screen.getByRole("heading", {
      name: /alumni speak/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("test if the submit testimonial button is displayed", async () => {
    render(<TestimonialSection styles={styles} testimonials={testimonials} />);

    const button = screen.getByRole("button", {
      name: /write a testimonial/i,
    });

    expect(button).toBeInTheDocument();
  });

  it("test if submit testimonial modal opens", () => {
    const testimonial = "";
    const createTestimonial = jest.fn();
    const sendTestimonialApprovalEmail = jest.fn();

    render(
      <SiteContext.Provider
        value={(testimonial, createTestimonial, sendTestimonialApprovalEmail)}
      >
        <CreateTestimonialForm
          openTestimonialForm={true}
          setOpenTestimonialForm={mockSetOpenTestimonialForm}
        />
      </SiteContext.Provider>
    );

    const heading = screen.getByRole("heading", {
      name: /We\'d love to hear from you/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("test if footer displays quick links", () => {
    render(<Footer />);

    const privacyLink = screen.getByRole("link", {
      name: /privacy policy/i,
    });

    const termsLink = screen.getByRole("link", {
      name: /terms of use/i,
    });

    const sitemapLink = screen.getByRole("link", {
      name: /sitemap/i,
    });

    expect(privacyLink).toBeInTheDocument();
    expect(termsLink).toBeInTheDocument();
    expect(sitemapLink).toBeInTheDocument();
  });
});
