import React from "react";

const Footer = ({ theme }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={theme === "light" ? "footer light" : "footer dark"}> 
            &copy; {currentYear} David Varga. All rights reserved.
        </footer>
    );
};

export default Footer;