import React, { useContext } from 'react'
import { ResourceContext } from '../../../providers/ResourceContext'
import Image from 'next/image';

import { HeroWrapper, HeroTitle, HeroImage } from './PageHero.styles';

const Hero = () => {
    const properties = useContext(ResourceContext);

    return (
        <HeroWrapper>
            <HeroTitle>
                <h2>{properties.mainTitle}</h2>
            </HeroTitle>
            <HeroImage>
                <Image src={'/people%20working.png'} alt="People Working" width={360} height={360} />
            </HeroImage>
        </HeroWrapper>
    )
}

export default Hero