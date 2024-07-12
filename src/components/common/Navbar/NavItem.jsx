import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const NavItem = ({ NavIcon, NavText, NavRoute, setIsOpen }) => {
    const location = useLocation();
    const className = location.pathname === `${NavRoute}` ? "rounded-xl !text-DeepNightBlack bg-Green font-bold tracking-widest" : '';

    return (
        <Link
            onClick={() => setIsOpen(false)}
            to={NavRoute}
            className={`${className} transition flex items-center px-2 hover:bg-EveningBlack text-SilverGray hover:text-SilverGray rounded-xl py-1.5 font-semibold space-x-4 text-base`}
        >
            {NavIcon}
            <span>{NavText}</span>
        </Link>
    );
}

export default NavItem;
