import React from 'react';
import { Link } from 'react-router-dom';

const FooterDetail = (props) => {
    return (
        <div className="footer-desc1 md:w-1/4">
            <h6 className="text-blue-600 text-xl font-semibold ">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-4">
                {
                    props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-gray-600 hover:text-blue-400">{item.name}</Link></li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterDetail;