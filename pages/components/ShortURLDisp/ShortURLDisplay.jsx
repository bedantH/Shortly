import React, { useContext, useEffect } from 'react'
import { ResourceContext } from '../../../providers/ResourceContext';
import { UrlContext } from '../layouts/URLShorten/URLShortenLayout';

import {
    DisplayWrapper,
    DisplayContainer,
    NormalLink,
    LeftSideContainer,
    ShortenURL,
    CopyButton
} from './ShortURLDisplay.styles';

const ShortURLDisplay = ({ uri }) => {
    const properties = useContext(ResourceContext);

    return (
        <DisplayWrapper>
            <DisplayContainer>
                <NormalLink>
                    {uri.result.original_link}
                </NormalLink>
                <hr />
                <LeftSideContainer>
                    <ShortenURL href={uri.result.short_link}>{uri.result.short_link}</ShortenURL>
                    <CopyButton>
                        {properties.buttons.copy}
                    </CopyButton>
                </LeftSideContainer>
            </DisplayContainer>
        </DisplayWrapper>
    )
}

export default ShortURLDisplay