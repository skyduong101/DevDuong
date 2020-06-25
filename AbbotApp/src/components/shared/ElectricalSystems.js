import React, { useState } from 'react';
import { useStateValue } from '../../js/Hooks';
import { Container, PageTitle, Section, SectionTitle } from '../styled/Theme';
import { RadioButtonGroup, Radio } from '../styled/RadioButtonGroup';
import { MenuButton } from '../styled/MenuButton';
import { InfoSection } from '../styled/InfoSection';
import { BackButton } from '../styled/BackButton';

const ElectricalSystems = (props) => {
    // eslint-disable-next-line no-empty-pattern
    const [{ }, dispatch] = useStateValue();
    const { navigation } = props;

    return (
        <Container>
            <PageTitle>Electrical Systems</PageTitle>
            <Section>
                <InfoSection text="All standard electrical systems are automatically calculated for you." />
            </Section>

            <MenuButton
                title="Next"
                onPress={() => {
                    navigation.navigate('TenantImprovementBudget');
                }}
            />
            <BackButton title="Back" onPress={() => navigation.goBack()} />
        </Container>
    );
};

export default ElectricalSystems;
