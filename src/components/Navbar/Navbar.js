import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavItem,
} from './NavbarStyles.js';
import { useHistory } from 'react-router-dom';

const data = [
    {
        to: '/',
        text: 'Home',
        id: 'Home',
    },
    {
        to: '/myPokemon',
        text: 'My Pokemon',
    },
];
const Navbar = () => {
    const [show, setShow] = useState(false);

    let history = useHistory();

    const handleClick = () => {
        setShow(!show);
    };


    const closeMobileMenu = (to, id) => {
        history.push(to);
        setShow(false);
    };

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon src="./assets/logo.png" alt="logo" />
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {show ? <FaTimes /> : <CgMenuRight />}
                    </MobileIcon>
                    <NavMenu show={show}>
                        {data.map((el, index) => (
                            <NavItem key={index}>
                                <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
                                    {el.text}
                                </NavLinks>
                            </NavItem>
                        ))}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    );
};

export default Navbar;
