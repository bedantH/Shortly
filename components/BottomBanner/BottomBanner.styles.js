import styled from "@emotion/styled";

const BannerWrapper = styled.section`
    margin-top: 2rem;
    background-image: url('/Meteor.svg');
    background-repeat: no-repeat;
    background-position: center;
    padding: 3rem;
`;

const BannerCont = styled.div`
    text-align: center;
`;

const BannerTitle = styled.p`
    font-size: 1.6rem;
    font-weight: ${({ theme }) => theme.fontWeights.font7};
    margin-bottom: 1rem;
    color: #fff;
`;

const BannerCTA = styled.button`
    padding: 0.7rem 2rem;
    font-size: 1rem;
    border-radius: 20rem;
    font-weight: ${({ theme }) => theme.fontWeights.font7};
    font-family: ${({ theme }) => theme.fonts.main};
    border: none;
    background-color: ${({ theme }) => theme.colors.primary.cyan};
    color: #fff;
    cursor: pointer;
`;

export {
    BannerWrapper,
    BannerCont,
    BannerTitle,
    BannerCTA
};