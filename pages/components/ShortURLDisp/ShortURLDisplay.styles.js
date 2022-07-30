import styled from "@emotion/styled";

const DisplayWrapper = styled.section`
    background-color: #fff;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    margin: 1.4rem auto;
    border-radius: 5px;

    @media only screen and (max-width: 375px){
        width: 90vw;
    }
`;

const DisplayContainer = styled.div`
    padding: 1rem 2rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: relative;

    hr{
        display: none;
    }

    @media only screen and (max-width: 375px){
        flex-direction: column;
        padding: 0rem;

        hr{
            display: block;
            width: 100%;
            border: 1px solid #bfbfbf;
        }
    }
`;

const NormalLink = styled.p`
    font-weight: ${({ theme }) => theme.fontWeights.font7};
    color: ${({ theme }) => theme.colors.neutral.veryDarkViolet};

    @media only screen and (max-width: 375px){
        font-size: 0.9rem;
        overflow: hidden;
        width: 78vw;
        text-overflow: ellipsis;
        white-space: nowrap;
        
        margin: 1rem 2rem;
    }
`;

const LeftSideContainer = styled.div`
    @media only screen and (max-width: 375px){
        width: 78vw;
        text-align: left;
        margin: 0rem 1rem 1rem;
    }
`;

const ShortenURL = styled.a`
    font-weight: ${({ theme }) => theme.fontWeights.font5};
    color: ${({ theme }) => theme.colors.primary.cyan};
    
    @media only screen and (max-width: 375px){
        display: block;
        margin: 0.7rem 0rem;
    }
`;

const CopyButton = styled.button`
    font-family: ${({ theme }) => theme.fonts.main};
    font-weight: ${({ theme }) => theme.fontWeights.font5};
    padding: 0.5rem 1.5rem;
    font-size: 0.8rem;
    color: #fff;
    border: none;
    border-radius: 5px;
    margin-left: 2rem;
    background-color: ${({ theme }) => theme.colors.primary.cyan};

    @media only screen and (max-width: 375px){
        width: 100%;
        margin-left: 0rem;
    }
`;

export {
    DisplayWrapper,
    DisplayContainer,
    NormalLink,
    LeftSideContainer,
    ShortenURL,
    CopyButton
}