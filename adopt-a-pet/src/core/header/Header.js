import React from 'react';
import './Header.scss';

function Header(props) {
    const menuItems = [...props.organizationalMenuItems, ...props.petsMenuItems];
    const {firstName, lastName} = props.userInfo;
    return (
        <div className="header">
            <h2>Adop A Pet</h2>
            <section className="menu-items">
                {menuItems.map((menuItem) =>
                    <h4 key={menuItem}>{menuItem}</h4>)
                }
            </section>
            <section className="user-info">
                <h4>Hi, {firstName} {lastName}!</h4>
            </section>
        </div>
    );
}

export default Header;
