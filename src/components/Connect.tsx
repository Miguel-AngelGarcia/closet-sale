import React from "react";
import Twitter from "../../public/twitter.svg";
import Facebook from "../../public/facebook.svg";
import LinkedIn from "../../public/linkedin.svg";
import Instagram from "../../public/instagram.svg";

const Connect = () => {
  const socials = [
    {
      id: "0",
      name: "Twitter",
      photo: "./twitter.svg",
      alt: "alt",
      url: "https://twitter.com/nycddc",
      text: "Follow us on Twitter for the latest news on civic architecture and engineering.",
    },
    {
      id: "1",
      name: "Facebook",
      photo: "./facebook.svg",
      alt: "alt",
      url: "https://twitter.com/nycddc",
      text: "Follow our Facebook page for the latest on our projects and events around the city.",
    },
    {
      id: "2",
      name: "LinkedIn",
      photo: "./linkedin.svg",
      alt: "alt",
      url: "https://twitter.com/nycddc",
      text: "Learn more about job opportunities within our agency.",
    },
    {
      id: "3",
      name: "Instagram",
      photo: "./instagram.svg",
      alt: "alt",
      url: "https://twitter.com/nycddc",
      text: "Follow us on Instagram to learn how we work to build a sustainable and resilient city for all.",
    },
  ];
  return (
    <div className="connect-wrapper">
      <div className="connect-cont">
        <h2>Connect with us</h2>
        {socials.map((social) => (
          <div key={social.id} className="social-cont">
            <img src={social.photo} alt={social.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect;
