import React, { useState } from 'react';
import { useStateValue } from '../../js/Hooks';
import { Container, PageTitle, Section, SectionTitle } from '../styled/Theme';
import { RadioButtonGroup, Radio } from '../styled/RadioButtonGroup';
import { MenuButton } from '../styled/MenuButton';
import { InfoSection } from '../styled/InfoSection';
import { BackButton } from '../styled/BackButton';

const MechanicalSystems = (props) => {
    // eslint-disable-next-line no-empty-pattern
    const [{ hvacSystems }, dispatch] = useStateValue();
    const { navigation } = props;

    const [buttonMechanicalSystems, setMechanicalSystems] = useState(hvacSystems);
    const [isMechanicalSystemsEmpty, setIsMechanicalSystemsEmpty] = useState(false);

    const RadioButtonMechanicalSystems = () => {
        const RadioButton = ({ title, value, first, last, disabled, button }) => {
            const handleOnPress = () => {
                setMechanicalSystems(value);
                setIsMechanicalSystemsEmpty(false);
                dispatch({
                    type: 'updateHVACSystems',
                    newHVACSystems: value,
                });
                dispatch({
                    type: 'updateHVAC',
                    newHVAC: title,
                });
            };

            return (
                <Radio
                    onPress={handleOnPress}
                    button={button}
                    title={title}
                    first={first}
                    last={last}
                    value={value}
                    disabled={disabled}
                />
            );
        };

        return (
            <RadioButtonGroup error={isMechanicalSystemsEmpty}>
                <RadioButton title="Standard High Efficiency VAV" value={20} button={hvacSystems} first />
                <RadioButton title="VFR Heat Pump / DOAS" value={25} button={hvacSystems} />
                <RadioButton title="Hydraulic Boiler / Chiller" value={35} button={hvacSystems} last />
            </RadioButtonGroup>
        );
    };

    const [{ constructionType }] = useStateValue();

    const handleOnPressNext = (props) => {
        if (constructionType === 'Core and Shell') {
            // Flow according to chart for TI
            navigation.navigate('SummaryOfCosts');
        } else {
            // Flow as it was originally
            navigation.navigate('TenantImprovementBudget');
        }
    }

    return (
        <Container>
            <PageTitle>Mechanical Systems</PageTitle>

            <Section>
                <SectionTitle>HVAC*</SectionTitle>
                <RadioButtonMechanicalSystems />
            </Section>
            <Section>
                <InfoSection
                    text="Includes fire protection systems, plumbing, mechanical
                    screening, and HVAC design & engineering."
                />
            </Section>
            <MenuButton
                title="Next"
                onPress={() => {
                    if (buttonMechanicalSystems !== 0) {
                        handleOnPressNext();
                    }
                    if (buttonMechanicalSystems === 0) {
                        setIsMechanicalSystemsEmpty(true);
                    }
                }}
            />
            <BackButton title="Back" onPress={() => navigation.goBack()} />
        </Container>
    );
};

export default MechanicalSystems;
