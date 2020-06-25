import React, { useState } from 'react';
import { useStateValue } from '../../js/Hooks';
import { Container, PageTitle, Section, SectionTitle } from '../styled/Theme';
import { RadioButtonGroup, Radio } from '../styled/RadioButtonGroup';
import { MenuButton } from '../styled/MenuButton';
import { InfoSection } from '../styled/InfoSection';
import { BackButton } from '../styled/BackButton';

const Superstructure = (props) => {
    const [{ superstructureType }, dispatch] = useStateValue();
    const { navigation } = props;

    const [buttonStructure, setStructure] = useState(superstructureType);
    const [isStructureEmpty, setIsStructureEmpty] = useState(false);

    const RadioButtonStructure = () => {
        const RadioButton = ({ title, value, first, last, disabled, button }) => {
            const handleOnPress = () => {
                setStructure(value);
                setIsStructureEmpty(false);
                dispatch({
                    type: 'updateSuperstructureType',
                    newSuperstructureType: value,
                });
                dispatch({
                    type: 'updateSuperstructureDisplay',
                    newSuperstructureDisplay: title,
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
            <RadioButtonGroup error={isStructureEmpty}>
                <RadioButton title="Steel / Concrete on Metal Deck" value={28.5} button={superstructureType} first />
                <RadioButton title="Heavy Timberwood + Gypcrete Flooring" value={38.5} button={superstructureType} />
                <RadioButton title="Concrete Structure" value={48.5} last button={superstructureType} />
            </RadioButtonGroup>
        );
    };

    const [{ constructionType }] = useStateValue();

    if (constructionType === 'Remodel') {
        return (
            <Container>
                <PageTitle>Superstructure</PageTitle>

                <Section>
                    <InfoSection text="All standard remodeling costs for superstructure is calculated for you." />
                </Section>

                <MenuButton
                    title="Next"
                    onPress={() => {
                        navigation.navigate('ExteriorEnclosure');
                    }}
                />
                <MenuButton title="Back" onPress={() => navigation.goBack()} />
            </Container>
        );
    }

    return (
        <Container>
            <PageTitle>Superstructure</PageTitle>

            <Section>
                <SectionTitle>Type of Structure*</SectionTitle>
                <RadioButtonStructure />
            </Section>

            <MenuButton
                title="Next"
                onPress={() => {
                    if (buttonStructure !== 0) {
                        navigation.navigate('ExteriorEnclosure');
                    }
                    if (buttonStructure === 0) {
                        setIsStructureEmpty(true);
                    }
                }}
            />
            <BackButton title="Back" onPress={() => navigation.goBack()} />
        </Container>
    );
};

export default Superstructure;
