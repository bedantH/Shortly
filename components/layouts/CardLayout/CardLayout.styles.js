import styled from "@emotion/styled";

const StatsSectionWrapper = styled.section`

`;

const CustomCardLayout = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,2fr));
    margin: auto;
    width: 100vw;
    height: auto;
    position: relative;
    margin-bottom: 7rem;
    margin-top: 7rem;

    @media only screen and (max-width: 1100px){
        gap: 2rem;
    }

    @media only screen and (max-width: 425px){
        margin-top: 4rem;
    }
`;

const TimeLine = styled.div`
    width: 80vw;
    height: 0.8rem;
    background-color: ${({ theme }) => theme.colors.primary.cyan};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media ${({ theme }) => theme.mdq.sm}{
        top: 0;
        width: 0.8rem;
        height: 90vh;
        transform: rotate(180deg) translate(50%);
    }
`;

const SectionTitle = styled.div`
    width: fit-content;
    display: block;
    margin: auto;
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 5rem;

    h3{
        font-size: 2rem;
        
        @media only screen and (max-width: 425px){
            font-size: 1.4rem;
        }
    }

    p{
        max-width: 63%;
        display: block;
        margin: auto;
        color: #9e9aa7;

        @media only screen and (max-width: 425px){
            font-size: 0.8rem;
            max-width: 70%;
        }
    }

    @media only screen and (max-width: 425px){
        margin-bottom: 2rem;
    }
`;

export {
    CustomCardLayout,
    TimeLine,
    SectionTitle,
    StatsSectionWrapper
}