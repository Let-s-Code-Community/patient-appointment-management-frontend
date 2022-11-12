import React from 'react';
import './Footer.css';
import FooterDetail from './FooterDetail';

const Footer = () => {
    const noNamed = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
    ]
    const ourAddress = [
        { name: "New York - 101010 Hudson", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },

    ]
    const oralHealth = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" }
    ]
    const services = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" }
    ]

    return (
        <footer className="w-full bg-accent px-8 py-3 sm:pr-6">
            <div className="pt-5">
                <div className="flex justify-between md:py-5 ">
                    <FooterDetail key={1} menuTitle={" . "} menuItems={noNamed} /> 
                    <FooterDetail key={2} menuTitle="Services" menuItems={services} />
                    <FooterDetail key={3} menuTitle="Oral Health" menuItems={oralHealth} />
                    <FooterDetail key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="!#">dgf</a></li>
                            <li className="list-inline-item"><a href="!#">fhg</a></li>
                            <li className="list-inline-item"><a href="!#">fhh</a></li>
                        </ul>
                        <div className="md-mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+2025550295</button>
                        </div>
                    </FooterDetail>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;