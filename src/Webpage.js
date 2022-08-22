import React from "react";

export default function Webpage({ children }) {
  return (
    <section>
      <div className="left">{children}</div>

      <div className="right">{children}</div>
    </section>
  );
}
