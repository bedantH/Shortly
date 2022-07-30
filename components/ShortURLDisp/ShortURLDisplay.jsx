import React, { useContext, useEffect, useState } from 'react'
import { ResourceContext } from '../../providers/ResourceContext';
import { UrlContext } from '../layouts/URLShorten/URLShortenLayout';

import { CopyToClipboard } from 'react-copy-to-clipboard';

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
    const [copied, setCopied] = useState(false);

    return (
        <DisplayWrapper>
            <DisplayContainer>
                <NormalLink>
                    {uri.result.original_link}
                </NormalLink>
                <hr />
                <LeftSideContainer>
                    <ShortenURL href={uri.result.short_link}>{uri.result.short_link}</ShortenURL>
                    <CopyToClipboard text={uri.result.short_link}>
                        <CopyButton onClick={() => { setCopied(!copied) }} className={copied && 'clicked'}>
                            {copied ? properties.buttons.copied : properties.buttons.copy}
                        </CopyButton>
                    </CopyToClipboard>
                </LeftSideContainer>
            </DisplayContainer>
        </DisplayWrapper>
    )
}

export default ShortURLDisplay