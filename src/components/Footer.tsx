import React from "react";

const Footer = () => {
  const footerItems = [
    { name: "about", link: "/about" },
    { name: "contact us", link: "/contact" },
    { name: "shiping & returns", link: "/shipping-returns" },
    { name: "gcs", link: "/general-conditions-of-service" },
    { name: "privacy policy", link: "/privacy-policy" },
  ];

  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-cont">
          <div className="footer-menu w-full">
            <ul className="footer-list">
              {footerItems.map((footerItem) => (
                <li key={footerItem.name} className="footer-item u-below uln">
                  <a href={footerItem.link}>{footerItem.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
