import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>DREAMY</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder="E-mail" />
            <button>Subscribe</button>
          </div>
          <p>Sign up with your email address to receice news and updates!</p>
        </div>
      

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} DREAMY'S Events. All rights reserved.
          </p>
        </div>
      </div>
      
      
    </footer>
  );
};

export default Footer;