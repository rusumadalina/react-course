import React from 'react';
import './Header.scss';

function Header(props) {
    let menuItems = [...props.organizationalMenuItems, ...props.petsMenuItems];
    return (
        <div className="header">
            <h2>Adop A Pet</h2>
            <section className="menu-items">
                {menuItems.map((menuItem) =>
                    <h4 key={menuItem}>{menuItem}</h4>)
                }
            </section>
        </div>
    );
}

export default Header;
