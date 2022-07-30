import React, { useContext, useState } from 'react'
import { ResourceContext } from '../../../providers/ResourceContext';
import {
    ShortnerInputWrapper,
    InputContainer,
    CustomInput,
    CustomButton
} from './URLShortner.styles';

const URLShortner = ({ checkClick }) => {
    const properties = useContext(ResourceContext);
    const [uri, setURI] = useState("");

    return (
        <ShortnerInputWrapper>
            <InputContainer>
                <CustomInput placeholder={properties.placeholders.shortnerPlaceholder} onChange={(e) => { setURI(e.target.value) }} />
                <CustomButton onClick={checkClick}>
                    {properties.buttons.shortnerButton}
                </CustomButton>
            </InputContainer>
        </ShortnerInputWrapper>
    )
}

export default URLShortner