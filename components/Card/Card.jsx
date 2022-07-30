import React, { useContext } from 'react';
import { ResourceContext } from '../../providers/ResourceContext';
import Image from 'next/image';
import {
    CardWrapper,
    CardCont,
    CardLogo,
    CardMainContent,
    CardContentWrapper,
    CardTitle,
    CardContent,
} from './Card.styles';

const Card = () => {

    const properties = useContext(ResourceContext);

    return (
        <CardWrapper>
            <CardCont>
                <CardLogo>
                    <Image className='card-image' src={'/icon-brand-recognition.svg'} alt="Brand Recognition" width={36} height={36} />
                </CardLogo>
                <CardMainContent>
                    <CardContentWrapper>
                        {/* h4 */}
                        <CardTitle>
                            {properties.card.cardTitle}
                        </CardTitle>
                        {/* p */}
                        <CardContent>
                            {properties.card.cardDesc}
                        </CardContent>
                    </CardContentWrapper>
                </CardMainContent>
            </CardCont>
        </CardWrapper>
    )
}

export default Card