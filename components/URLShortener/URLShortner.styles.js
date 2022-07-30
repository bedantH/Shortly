import styled from "@emotion/styled";

const ShortnerInputWrapper = styled.div`
    background-image: url('/Meteor.svg');
    background-repeat: no-repeat;
    background-position: center;
    padding: 3rem 2rem;
    width: 85vw;
    display: block;
    margin: auto;
    margin-top: -4.5rem;
    position: relative;

    @media only screen and (max-width: 425px){
        width: 90vw;
        padding: 1.6rem 0rem;
        margin-top: 0rem;
    }
`;

const InputContainer = styled.div`
    width: fit-content;
    display: block;
    margin: auto;
    
`;

const CustomInput = styled.input`
    padding: 0.8rem 1.3rem;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 0.9rem;
    border-radius: 6px;
    border: none;
    width: 60vw;

    @media only screen and (max-width: 425px){
        width: 80vw;
        font-size: 0.7rem;
        display: block;
        margin: auto;
    }

    &::placeholder{
        color: ${({ theme }) => theme.colors.secondary.red};
    }

    &:focus{
        outline: none;
    }
`;

const CustomButton = styled.button`
    padding: 0.8rem 2rem;
    border-radius: 6px;
    border: none;
    font-size: 0.9rem;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    margin-left: 2rem;
    background-color: ${({ theme }) => theme.colors.primary.cyan};
    font-family: ${({ theme }) => theme.fonts.main};

    @media only screen and (max-width: 425px){
        width: 80vw;
        font-size: 0.8rem;
        display: block;
        margin: auto;
        font-weight: 500;
        margin-top: 2rem;
    }
`;

export {
    ShortnerInputWrapper,
    InputContainer,
    CustomInput,
    CustomButton
}