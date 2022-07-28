import React, { useContext } from 'react'
import { ResourceContext } from '../../../providers/ResourceContext';

import {
    BannerWrapper,
    BannerCont,
    BannerTitle,
    BannerCTA
} from './BottomBanner.styles';

const BottomBanner = () => {
    const properties = useContext(ResourceContext);

    return (
        <BannerWrapper>
            <BannerCont>
                <BannerTitle>{properties.uppperFooter.boostLinks}</BannerTitle>
                <BannerCTA>{properties.uppperFooter.started}</BannerCTA>
            </BannerCont>
        </BannerWrapper>
    )
}

export default BottomBanner