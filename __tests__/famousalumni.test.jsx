/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import FamousAlumni from "../components/utils/famous-alumni/FamousAlumni";

const famousAlumni = [
  {
    name: "name",
    description: "description",
    award: null,
    batch: null,
    year: null,
    image: null,
    id: 19,
    category: "Sports",
  },
];

describe("Render the famous alumni page", () => {
  it("test if the famous alumni page is displayed", () => {
    render(<FamousAlumni famousAlumni={famousAlumni} />);

    const heading = screen.getByRole("heading", {
      name: /the stars of MES college/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
