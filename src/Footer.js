import React from "react";
import "./styles.css";
import Sticky from "react-sticky-el";

export default function Footer() {
  return (
    <Sticky mode="bottom" boundaryElement=".block" scrollElement=".scroll-area">
      <h2 className="footer">Footer</h2>
    </Sticky>
  );
}
