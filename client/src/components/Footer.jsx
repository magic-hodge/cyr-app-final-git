import React from "react";

function Footer() {
    
    const year = new Date().getFullYear();
    
    return (
        <footer>
            <p>Nick Hodge Circus - Copyright ⓒ {year}</p>
        </footer>
    );
}

export default Footer;