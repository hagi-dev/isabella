import React from 'react';
import "../assets/styles/components/footer.scss";
import footerBackground from '../assets/static/backgroundFooter.png'

const Footer = () => {

    return (
        <div className="footer" style={{backgroundImage:`url(${footerBackground})`, width:"100%", height:"100px"}}>
            
        </div>
    )
}

export default Footer;
