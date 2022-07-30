import styled from "@emotion/styled";

const Header = styled.header`
    padding: 1.7rem 8rem 0rem 8rem;
    width: 100vw;
    height: 20vh;
    background-color: #fff;

    @media ${({ theme }) => theme.mdq.sm} {
        padding: 1.7rem 0rem 0rem 1rem;
    }
`;

const HeaderTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.font7};
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.neutral.veryDarkViolet};
    user-select: none;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media ${({ theme }) => theme.mdq.sm} {
        justify-content: space-between;
    }
`;

const NavigationWrapper = styled.ul`
    display: flex;
    margin-left: 1.2rem;
    @media ${({ theme }) => theme.mdq.sm} {
        display: none;
    }
`;

const NavigationListItem = styled.li`
    list-style: none;
    margin: 0 1rem;
`;

const NavigationLink = styled.a`
    font-size: 0.8rem;
    font-weight: ${({ theme }) => theme.fontWeights.font7};
    color: ${({ theme }) => theme.colors.neutral.grayishViolet};
    list-style: none;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.5s;

    &:hover{
        color: ${({ theme }) => theme.colors.neutral.veryDarkViolet}
    }
`;

const HamburgerMenu = styled.div`
    div{
        width: 1.8rem;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.neutral.grayishViolet};
        margin: 0.5rem 0rem;
    }

    display: none;
    @media ${({ theme }) => theme.mdq.sm} {
        display: block;
        margin-right: 1.1rem;
    }
`;

export { Header, HamburgerMenu, HeaderTitle, Nav, NavigationLink, NavigationWrapper, NavigationListItem }