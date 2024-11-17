import React from "react";

function Footer() {
    return (
      <footer className="footer">
        <a href="/about">
          <img
            src="/github-mark.png"
            alt="GitHub"
            className="footer-gif"
          />
        </a>
        <a href="/contact">
          <img
            src="/In-Blue-72.png"
            alt="LinkedIn"
            className="footer-gif"
          />
        </a>
        <a href="/privacy-policy">
          <img
            src="/stack-logo.png"
            alt="Stack Overflow"
            className="footer-gif"
          />
        </a>
      </footer>
    );
  }
  
  export default Footer;