import styled from "@emotion/styled";

const CardWrapper = styled.section`
    background-color: #fff;
    width: fit-content;
    max-width: 20rem;
    padding: 2rem;
    border-radius: 6px;
    position: relative;
    margin: auto;

    @media ${({ theme }) => theme.mdq.sm}{
        max-width: 18rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
`;

const CardCont = styled.div`

`;

const CardLogo = styled.div`
    background-color: ${({ theme }) => theme.colors.neutral.veryDarkBlue};
    width: fit-content;
    padding: 1rem 1.2rem;
    border-radius: 50%;
    position: absolute;
    top: -50%;
    transform: translateY(100%);

    span {
        overflow: visible !important;
    }
    
    .card-image {
        margin-top: 0.3rem !important;
    }

    @media ${({ theme }) => theme.mdq.sm}{
        left: 50%;
        transform: translate(-50%, 100%)
    }
`;

const CardMainContent = styled.div`

`;

const CardContentWrapper = styled.div``;

const CardTitle = styled.h4`
    font-size: 1.16rem;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
`;

const CardContent = styled.p`
    width: auto;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.neutral.grayishViolet};
    line-height: 1.3rem;
`;

export {
    CardWrapper,
    CardCont,
    CardLogo,
    CardMainContent,
    CardContentWrapper,
    CardTitle,
    CardContent,
};