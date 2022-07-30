import React, { useContext, useEffect, useState } from 'react'
import { ResourceContext } from '../../providers/ResourceContext';

import { Header as CustomHeader, HamburgerMenu, HeaderTitle, NavigationLink, Nav, NavigationWrapper, NavigationListItem, HamburgMenuMain, CloseIcon } from './Header.styles';

const Header = () => {
    const properties = useContext(ResourceContext);
    const [isShowing, setShowing] = useState(false);

    const handleClick = () => {
        setShowing(true);
        console.log("open");
    }

    const handleClose = () => {
        setShowing(false);
        console.log("close");
    }

    return (
        <CustomHeader>
            <Nav>
                <HeaderTitle>{properties.logo}</HeaderTitle>
                <NavigationWrapper>
                    <NavigationListItem>
                        <NavigationLink href='#'>
                            {properties.features}
                        </NavigationLink>
                    </NavigationListItem>
                    <NavigationListItem>
                        <NavigationLink href='#'>
                            {properties.pricing}
                        </NavigationLink>
                    </NavigationListItem>
                    <NavigationListItem>
                        <NavigationLink href='#'>
                            {properties.resources}
                        </NavigationLink>
                    </NavigationListItem>
                </NavigationWrapper>
                <HamburgerMenu onClick={handleClick}>
                    <div className='first'></div>
                    <div className='second'></div>
                    <div className='third'></div>
                </HamburgerMenu>
                <HamburgMenuMain className={isShowing ? 'show' : 'hidden'}>
                    <CloseIcon onClick={handleClose}>+</CloseIcon>
                    <ul>
                        <li>{properties.features}</li>
                        <li>{properties.pricing}</li>
                        <li>{properties.resources}</li>
                    </ul>
                </HamburgMenuMain>
            </Nav>
        </CustomHeader>
    )
}

export default Header