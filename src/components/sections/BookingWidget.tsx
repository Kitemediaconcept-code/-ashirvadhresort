import React from "react";

export function BookingWidget() {
  return (
    <section className="w-full relative z-30 py-4 md:py-6 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-[1170px] mx-auto">
        <div
          className="crs-booking-wrap"
          style={{
            position: "relative",
            height: "clamp(70px, calc((1200px - 100vw) * 100), 160px)",
          }}
        >
          <iframe
            id="bookingFrame"
            scrolling="no"
            title="Online Reservation"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "300px",
              border: "none",
              background: "transparent",
              zIndex: 999,
            }}
            src="https://webreservation.innfinitcrs.co.in/Home/landingpage?theme=ashirvadh"
          />
        </div>
      </div>
    </section>
  );
}

