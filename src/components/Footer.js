import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Footer>
      <p>© {currentYear} Github Management</p>
    </Footer>
  );
}
