import React, { useContext, createContext, useState } from 'react'
import ShortURLDisplay from '../../ShortURLDisp/ShortURLDisplay';
import axios from "axios";
import {
    ShortnerInputWrapper,
    InputContainer,
    CustomInput,
    CustomButton
} from '../../URLShortener/URLShortner.styles';
import { ResourceContext } from '../../../../providers/ResourceContext';


const URLShortenLayout = () => {
    const properties = useContext(ResourceContext);
    const [uri, setURI] = useState("");
    const [urls, setUrls] = useState([]);

    const handleClick = async () => {
        try {
            const data = await axios.get("https://api.shrtco.de/v2/shorten",
                {
                    params: {
                        url: uri
                    }
                }).then(res => {
                    console.log(urls)
                    if (res.data) setUrls((prev) => [...prev, res.data]);
                })
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <ShortnerInputWrapper>
                <InputContainer>
                    <CustomInput placeholder={properties.placeholders.shortnerPlaceholder} onChange={(e) => { setURI(e.target.value) }} />
                    <CustomButton onClick={handleClick}>
                        {properties.buttons.shortnerButton}
                    </CustomButton>
                </InputContainer>
            </ShortnerInputWrapper>
            {
                urls.map((item, index) => {
                    console.log(item);
                    return <ShortURLDisplay key={index} uri={item} checkClick={handleClick} />
                })
            }
        </>

    )
}

export default URLShortenLayout