import React, { useContext } from 'react'
import Image from 'next/image'

import {
  Footer as CustomFooter,
  SocialIcon,
  SocialIconWrapper,
  Logo,
  FirstSection,
  SectionWrapper,
  SecondSection,
  BottomNavigation,
  NavigationList,
  BottomNavigationItem,
  BottomNavHead,
  NavList,
  NavListItem,
  NavListItemLink
} from './Footer.styles';
import { ResourceContext } from '../../providers/ResourceContext';

const Footer = () => {
  const properties = useContext(ResourceContext);

  return (
    <CustomFooter>
      <section>
        <SectionWrapper>
          <SectionOne properties={properties} />
          <SectionTwo properties={properties} />
        </SectionWrapper>
      </section>
    </CustomFooter>
  )
}


function SectionOne({ properties }) {
  return (
    <FirstSection>
      <div>
        <Logo>
          <Image src={'/logo_white.svg'} alt='Shortly' width={130} height={30} objectFit='contain' />
        </Logo>
        <SocialIconWrapper>
          <SocialIcon href='#'>
            <Image width={24} height={24} src={'/icon-facebook.svg'} alt={properties.social.facebook} />
          </SocialIcon>
          <SocialIcon href='#'>
            <Image width={24} height={24} src={'/icon-twitter.svg'} alt={properties.social.twitter} />
          </SocialIcon>
          <SocialIcon href='#'>
            <Image width={24} height={24} src={'/icon-pinterest.svg'} alt={properties.social.pinterest} />
          </SocialIcon>
          <SocialIcon href='#'>
            <Image width={24} height={24} src={'/icon-instagram.svg'} alt={properties.social.instagram} />
          </SocialIcon>
        </SocialIconWrapper>
      </div>
    </FirstSection>
  );
}

function SectionTwo({ properties }) {
  return (<SecondSection>
    <BottomNavigation>
      <NavigationList>
        <BottomNavigationItem>
          <NavList>
            <BottomNavHead>
              {properties.features}
            </BottomNavHead>
            <NavListItem>
              <NavListItemLink href='#'>
                {properties.footer.links.shortening}
              </NavListItemLink>
            </NavListItem>
            <NavListItem>
              <NavListItemLink href='#'>
                {properties.footer.links.branded}
              </NavListItemLink>
            </NavListItem>
            <NavListItem>
              <NavListItemLink href='#'>
                {properties.footer.links.analytics}
              </NavListItemLink>
            </NavListItem>
          </NavList>
        </BottomNavigationItem>
        <BottomNavigationItem>
          <NavList>
            <BottomNavHead>
              {properties.resources}
            </BottomNavHead>
            <NavListItem>
              <NavListItemLink href='#'>
                {properties.footer.links.blog}
              </NavListItemLink>
            </NavListItem>
            <NavListItem>
              <NavListItemLink href='#'>
                {properties.footer.links.developers}
              </NavListItemLink>
            </NavListItem>
            <NavListItem>
              <NavListItemLink href='#'>
                {properties.footer.links.support}
              </NavListItemLink>
            </NavListItem>
          </NavList>
        </BottomNavigationItem>
        <BottomNavigationItem>
          <NavList>
            <BottomNavHead>
              {properties.footer.headers.company}
            </BottomNavHead>
            <NavListItem>
              <NavListItemLink href='#'>
                {properties.footer.links.about}
              </NavListItemLink>
            </NavListItem>
            <NavListItem>
              <NavListItemLink href='#'>
                {properties.footer.links.team}
              </NavListItemLink>
            </NavListItem>
            <NavListItem>
              <NavListItemLink href='#'>
                {properties.footer.links.careers}
              </NavListItemLink>
            </NavListItem>
            <NavListItem>
              <NavListItemLink href='#'>
                {properties.footer.links.contact}
              </NavListItemLink>
            </NavListItem>
          </NavList>
        </BottomNavigationItem>
      </NavigationList>
    </BottomNavigation>
  </SecondSection>);
}
export default Footer