import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram"; // Ganti nama impor sesuai
import TwitterIcon from "@mui/icons-material/Twitter"; // Ganti nama impor sesuai
import FacebookIcon from "@mui/icons-material/Facebook"; // Ganti nama impor sesuai
import LinkedInIcon from "@mui/icons-material/LinkedIn"; // Ganti nama impor sesuai
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p> &copy; 2024 vinpizza.com</p>
    </div>
  );
}

export default Footer;
