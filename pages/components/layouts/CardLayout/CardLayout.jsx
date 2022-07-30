import React, { useContext } from 'react'
import { ResourceContext } from '../../../../providers/ResourceContext';

import {
    CustomCardLayout,
    TimeLine,
    SectionTitle,
    StatsSectionWrapper
} from './CardLayout.styles';
import Card from '../../Card/Card';

const CardLayout = () => {
    const properties = useContext(ResourceContext);

    return (
        <StatsSectionWrapper>
            <SectionTitle>
                <h3>{properties.titleStats}</h3>
                <p>{properties.descStats}</p>
            </SectionTitle>
            <CustomCardLayout>
                <TimeLine />
                <Card />
                <Card />
                <Card />
            </CustomCardLayout>
        </StatsSectionWrapper>
    )
}

export default CardLayout