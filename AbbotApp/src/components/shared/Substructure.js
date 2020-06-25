import React, { useState } from 'react';
import { useStateValue } from '../../js/Hooks';
import { Container, PageTitle, Section, SectionTitle } from '../styled/Theme';
import { RadioButtonGroup, Radio } from '../styled/RadioButtonGroup';
import { MenuButton } from '../styled/MenuButton';
import { InfoSection } from '../styled/InfoSection';
import { BackButton } from '../styled/BackButton';

const Substructure = (props) => {
    const [{ substructureFoundation, substructureSog }, dispatch] = useStateValue();
    const { navigation } = props;

    const [buttonFoundation, setButtonFoundation] = useState(substructureFoundation);
    const [isFoundationEmpty, setIsFoundationEmpty] = useState(false);
    const [buttonSog, setButtonSog] = useState(substructureSog);
    const [isSogEmpty, setIsSogEmpty] = useState(false);

    const handleOnPressNext = () => { // TODO: Fix button, figure out flow
        switch (constructionType) {
            case 'Tenant Improvement':
                navigation.navigate('CoreAndShellLandlordWork');
                break;
            default:
                navigation.navigate('Superstructure');
                break;
        }
    }

    const RadioButtonFoundation = () => {
        const RadioButton = ({ title, value, first, last, disabled, button }) => {
            const handleOnPress = () => {
                setButtonFoundation(value);
                setIsFoundationEmpty(false);
                dispatch({
                    type: 'updateSubstructureFoundation',
                    newSubstructureFoundation: value,
                });
                dispatch({
                    type: 'updateFoundation',
                    newFoundation: title,
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
            <RadioButtonGroup error={isFoundationEmpty}>
                <RadioButton title="Standard Foundations: Shallow Spread & Strip Footings" value={7.5} button={substructureFoundation} first />
                <RadioButton title="Deep Foundations - Light: Aggregate Piers / Rock Columns" value={20} button={substructureFoundation} />
                <RadioButton title="Deep Foundations - Heavy: Augercast Piles" value={30} last button={substructureFoundation} />
            </RadioButtonGroup>
        );
    };

    const RadioButtonSog = () => {
        const RadioButton = ({ title, value, first, last, disabled, button }) => {
            const handleOnPress = () => {
                setButtonSog(value);
                setIsSogEmpty(false);
                dispatch({
                    type: 'updateSubstructureSog',
                    newSubstructureSog: value,
                });
                dispatch({
                    type: 'updateSOG',
                    newSOG: title,
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
            <RadioButtonGroup error={isSogEmpty}>
                <RadioButton title="Minimal Reinforcing" value={8} button={substructureSog} first />
                <RadioButton title="Mild Reinforcing" value={10} button={substructureSog} />
                <RadioButton title="Heavy Reinforcing" value={12} button={substructureSog} last />
            </RadioButtonGroup>
        );
    };

    const [{ constructionType }] = useStateValue();

    if (constructionType === 'Remodel' || constructionType === 'Tenant Improvement') {
        return (
            <Container>
                <PageTitle>Substructure</PageTitle>

                <Section>
                    <InfoSection text="All standard remodeling costs for substructure is calculated for you." />
                </Section>

                <MenuButton
                    title="Next"
                    onPress={() => {
                        handleOnPressNext();
                    }}
                />
                <MenuButton title="Back" onPress={() => navigation.goBack()} />
            </Container>
        );
    }

    return (
        <Container>
            <PageTitle>Substructure</PageTitle>

            <Section>
                <SectionTitle>Foundation*</SectionTitle>
                <RadioButtonFoundation />
            </Section>

            <Section>
                <SectionTitle>Slab on Grade*</SectionTitle>
                <RadioButtonSog />
            </Section>

            <MenuButton
                title="Next"
                onPress={() => {
                    if (buttonFoundation !== 0 && buttonSog !== 0) {
                        handleOnPressNext();
                    }
                    if (buttonFoundation === 0) {
                        setIsFoundationEmpty(true);
                    }
                    if (buttonSog === 0) {
                        setIsSogEmpty(true);
                    }
                }}
            />
            <BackButton title="Back" onPress={() => navigation.goBack()} />
        </Container>
    );
};

export default Substructure;
