import React, { useState } from 'react';
import { useStateValue } from '../../js/Hooks';
import { Container, PageTitle, Section, SectionTitle } from '../styled/Theme';
import { RadioButtonGroup, Radio } from '../styled/RadioButtonGroup';
import { MenuButton } from '../styled/MenuButton';
import { BackButton } from '../styled/BackButton';

const VerticalCirculationSystems = (props) => {
    // eslint-disable-next-line no-empty-pattern
    const [{ stairSystem }, dispatch] = useStateValue();
    const { navigation } = props;

    const [buttonStairSystem, setStairSystem] = useState(stairSystem);
    const [isStairSystemEmpty, setIsStairSystemEmpty] = useState(false);

    const RadioButtonStairSystem = () => {
        const RadioButton = ({ title, value, first, last, disabled, button }) => {
            const handleOnPress = () => {
                setStairSystem(value);
                setIsStairSystemEmpty(false);
                dispatch({
                    type: 'updateStairSystem',
                    newStairSystem: value,
                });
                dispatch({
                    type: 'updateStairSystemDisplay',
                    newStairSystemDisplay: title,
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
            <RadioButtonGroup error={isStairSystemEmpty}>
                <RadioButton
                    title="Standard Stair System: Metal Pan - Concrete Filled / Pipe Rails"
                    value={850}
                    first
                    button={stairSystem}
                />
                <RadioButton
                    title="Upgraded Standard Stair System: Metal Pan - Concrete Filled / Pipe Rails / Metal Panel - Infills"
                    value={1000}
                    button={stairSystem}
                />
                <RadioButton
                    title="Architectural Stair System: Metal Pan - Concrete Filled / Hardwood Handrails / Metal Panels - Infills"
                    value={1500}
                    last
                    button={stairSystem}
                />
            </RadioButtonGroup>
        );
    };

    return (
        <Container>
            <PageTitle>Vertical Circulation Systems</PageTitle>

            <Section>
                <SectionTitle>Stair System*</SectionTitle>
                <RadioButtonStairSystem />
            </Section>
            <MenuButton
                title="Next"
                onPress={() => {
                    if (buttonStairSystem !== 0) {
                        navigation.navigate('MechanicalSystems');
                    }
                    if (buttonStairSystem === 0) {
                        setIsStairSystemEmpty(true);
                    }
                }}
            />
            <BackButton title="Back" onPress={() => navigation.goBack()} />
        </Container>
    );
};

export default VerticalCirculationSystems;
