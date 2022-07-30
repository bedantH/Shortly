import styled from "@emotion/styled";

const HeroWrapper = styled.section`
    background-color: #fff;
`;

const HeroTitle = styled.div`
    width: fit-content;
    display: block;
    margin: auto;
    max-width: 80%;
    
    h2{
        letter-spacing: 4px;
        text-align: center;
        font-size: 6rem;
        line-height: 1.3;
        color: ${({ theme }) => theme.colors.neutral.veryDarkViolet};
        font-weight: ${({ theme }) => theme.fontWeights.font7}; 
    
        @media only screen and (max-width: 375px){
            font-size: 2.5rem;
        }
    }
`;

const HeroImage = styled.div`
    width: fit-content;
    display: block;
    margin: auto;

    @media only screen and (max-width: 375px){
        margin-top: 1rem;
    }
`;

export {
    HeroWrapper,
    HeroTitle,
    HeroImage
}