import styled from "@emotion/styled";

const Footer = styled.footer`
    background-color: ${({ theme }) => theme.colors.neutral.veryDarkViolet};
    width: 100vw;
    height: auto;
    position: relative;
`;

const SectionWrapper = styled.section`
    display: grid;
    grid-template-columns: 30rem 40rem;
    grid-template-rows: 1fr;
    height: auto;

    @media ${({ theme }) => theme.mdq.md} {
        grid-template-columns: 1fr;
        grid-template-rows: 10rem 1fr;
    }

    @media ${({ theme }) => theme.mdq.sm} {
        grid-template-columns: 1fr;
        grid-template-rows: 35px 1fr;
    }
`;

const FirstSection = styled.section`
    margin-left: 7rem;
    height: fit-content;
    margin-top: 5rem;

    @media ${({ theme }) => theme.mdq.sm} {
        margin-top: 3rem;
        margin-left: 0;
    }
`;

const SecondSection = styled.section`
    margin-top: 4.5rem;
    margin-bottom: 5rem;

    @media ${({ theme }) => theme.mdq.sm} {
        margin-bottom: 7rem;
    }
`;

const SocialIconWrapper = styled.div`
    display: flex;
    margin-top: 1.2rem;

    @media ${({ theme }) => theme.mdq.sm} {
        width: fit-content;
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const SocialIcon = styled.a`
    margin: 0rem 0.8rem;
`;

const Logo = styled.div`
    width: 100%;
    margin-left: 0.3rem;

    @media ${({ theme }) => theme.mdq.sm} {
        width: fit-content;
        display: block;
        margin: auto;
    }
`;

const BottomNavigation = styled.div`

`;

const NavigationList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    color: #fff;

    @media ${({ theme }) => theme.mdq.md} {
        grid-template-columns: 1fr;
        grid-template-rows: 10rem 1fr;
        justify-content: space-between;
        width: 60%;
        margin-left: 7.5rem;
    }

    @media ${({ theme }) => theme.mdq.sm} {
        flex-direction: column;
        justify-content: space-between;
        width: fit-content;
        margin: auto;
    }
`;

const BottomNavigationItem = styled.li`
    list-style: none;

    @media ${({ theme }) => theme.mdq.sm} {
        margin: 1rem 0rem;
    }
`;

const BottomNavHead = styled.p`
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.font7};
    margin-bottom: 1.2rem;

    @media ${({ theme }) => theme.mdq.sm} {
       text-align: center;
    }
`;

const NavList = styled.ul`
    @media ${({ theme }) => theme.mdq.sm} {
        width: fit-content;
        margin: auto;
        display: block;
    }
`;

const NavListItem = styled.li`
    list-style: none;
    margin: 0.6rem 0rem;

    @media ${({ theme }) => theme.mdq.sm} {
        text-align: center;
    }
`;

const NavListItemLink = styled.a`
    color: ${({ theme }) => theme.colors.neutral.gray};
    text-decoration: none;
    font-weight: ${({ theme }) => theme.fontWeights.font5};
    transition: all 0.4s;

    &:hover{
        color: ${({ theme }) => theme.colors.primary.cyan};
    }
`;

export {
    Footer,
    SocialIcon,
    SocialIconWrapper,
    Logo, FirstSection,
    SectionWrapper,
    SecondSection,
    BottomNavigation,
    NavigationList,
    BottomNavigationItem,
    BottomNavHead,
    NavList,
    NavListItem,
    NavListItemLink
};