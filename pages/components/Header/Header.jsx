import React, { useContext, useEffect } from 'react'
import { ResourceContext } from '../../../providers/ResourceContext';

import { Header as CustomHeader, HamburgerMenu, HeaderTitle, NavigationLink, Nav, NavigationWrapper, NavigationListItem } from './Header.styles';

const Header = () => {
    const properties = useContext(ResourceContext);

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
                <HamburgerMenu>
                    <div className='first'></div>
                    <div className='second'></div>
                    <div className='third'></div>
                </HamburgerMenu>
            </Nav>
        </CustomHeader>
    )
}

export default Header