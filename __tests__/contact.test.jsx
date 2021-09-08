/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import ContactDetails from "../components/utils/contact/ContactDetails";
import OfficeBearerContacts from "../components/utils/contact/OfficeBearerContacts";
import Social from "../components/utils/contact/Social";

jest.mock("next/image", () => {
  return () => <></>;
});

describe("renders the contact page", () => {
  it("test if the contact page heading is visible", () => {
    render(<ContactDetails />);

    const heading = screen.getByRole("heading", {
      name: /contact the committee members/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("test if the president's email is displayed", () => {
    render(<OfficeBearerContacts />);

    const presidentEmail = screen.getByText(
      /president@mesalumniassociation.com/i
    );

    expect(presidentEmail).toBeInTheDocument();
  });

  it("test if the social section is displayed", () => {
    render(<Social />);

    const social = screen.getByText(/connect with us/i);

    expect(social).toBeInTheDocument();
  });
});
