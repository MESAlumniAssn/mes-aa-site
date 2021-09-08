/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import CompletedEvents from "../components/utils/events/CompletedEvents";
import UpcomingEvents from "../components/utils/events/UpcomingEvents";
import SelectedEventDetails from "../components/utils/events/SelectedEventDetails";
import SiteContext from "../context/siteContext";

describe("render the events page", () => {
  it("test if completed events are visible", () => {
    const fetchEventByStatus = jest.fn();
    const loading = "";
    const setLoading = jest.fn();
    const searchEvents = jest.fn();
    const completedEvents = [
      {
        event_id: "event_id",
        name: "test name",
        description: "description",
        date: "date",
        time: "time",
        venue: "venue",
        chief_guest: "chief guest",
      },
    ];

    render(
      <SiteContext.Provider
        value={{
          fetchEventByStatus,
          loading,
          setLoading,
          completedEvents,
          searchEvents,
        }}
      >
        <CompletedEvents />
      </SiteContext.Provider>
    );

    const detailsButton = screen.getByRole("button", { name: /details/i });

    expect(detailsButton).toBeInTheDocument();
  });

  it("test if completed events are visible", () => {
    const fetchEventByStatus = jest.fn();
    const loading = "";
    const setLoading = jest.fn();
    const upcomingEvents = [
      {
        event_id: "event_id",
        name: "test name",
        description: "description",
        date: "date",
        time: "time",
        venue: "venue",
        chief_guest: "chief guest",
      },
    ];

    render(
      <SiteContext.Provider
        value={{
          fetchEventByStatus,
          loading,
          setLoading,
          upcomingEvents,
        }}
      >
        <UpcomingEvents />
      </SiteContext.Provider>
    );

    const detailsButton = screen.getByRole("button", { name: /details/i });

    expect(detailsButton).toBeInTheDocument();
  });

  it("test if specific event details are visible", () => {
    const event = {
      name: "Test event",
      description: "This is a test event",
      date: "2021-09-02",
      time: "4 PM",
      venue: "The college",
      chief_guest: "God",
      images: [],
    };

    render(<SelectedEventDetails event={event} />);

    const eventName = screen.getByText(/college/i);

    expect(eventName).toBeInTheDocument();
  });
});
