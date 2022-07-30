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
        background-color: ${({ theme }) => theme.colors.neutral.gray};
        margin: 0.5rem 0rem;
    }

    display: none;
    @media ${({ theme }) => theme.mdq.sm} {
        display: block;
        margin-right: 1.1rem;
    }
`;

const HamburgMenuMain = styled.section`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #F0F1F6;
    top: 0;
    left: 0;
    z-index: 1;
    transition: all 1.3s;

    ul{
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); 

        li{
            font-size: 1.3rem;
            margin: 1rem;
            list-style: none;
            font-weight: 700;
        }
    }

    &.hidden{
        transform: translateX(100%);
    }

    &.show {
        transform: translateX(0%);
    }
`;

const CloseIcon = styled.span`
    display: block;
    width: fit-content;
    transform: rotate(45deg);
    font-size: 3rem;
    margin: 0.3rem 1rem 0rem auto;
`;

export { Header, HamburgerMenu, HeaderTitle, Nav, NavigationLink, NavigationWrapper, NavigationListItem, HamburgMenuMain, CloseIcon }