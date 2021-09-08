/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import PricingCards from "../components/utils/pricing/PricingCards";

describe("render the pricing page", () => {
  it("test if the pricing cards are visible", () => {
    render(<PricingCards />);

    const tier1 = screen.getByRole("heading", { name: /lifetime/i });
    const tier2 = screen.getByRole("heading", { name: /annual/i });

    expect(tier1).toBeInTheDocument();
    expect(tier2).toBeInTheDocument();
  });
});
