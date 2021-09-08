/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import AboutHeader from "../components/utils/about/AboutHeader";
import SubCommittees from "../components/utils/about/SubCommittees";

jest.mock("next/image", () => {
  return () => <></>;
});

describe("render the about page", () => {
  it("test if the page heading is visible", () => {
    render(<AboutHeader />);

    const heading = screen.getByRole("heading", {
      name: /get to know us better/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("test if the alma mater link is visible", () => {
    render(<AboutHeader />);

    const link = screen.getByText(/a little about your alma mater/i);

    expect(link).toBeInTheDocument();
  });

  it("test if sub committee section is visible", () => {
    render(<SubCommittees />);

    const membershipCommittee = screen.getByText(/membership committee/i);
    const sportsCommittee = screen.getByText(/sports committee/i);

    expect(membershipCommittee).toBeInTheDocument();
    expect(sportsCommittee).toBeInTheDocument();
  });
});
