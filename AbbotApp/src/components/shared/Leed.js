import React, { useState } from 'react';
import { useStateValue } from '../../js/Hooks';
import { Container, PageTitle, Section, SectionTitle } from '../styled/Theme';
import { RadioButtonGroup, Radio } from '../styled/RadioButtonGroup';
import { MenuButton } from '../styled/MenuButton';
import { BackButton } from '../styled/BackButton';

const Leed = (props) => {
    const [{ leedHasLeed, leedType }, dispatch] = useStateValue();
    const { navigation } = props;

    const [buttonHasLeed, setButtonHasLeed] = useState('');
    const [buttonLeedType, setButtonLeedType] = useState('');

    const RadioButtonLeed = () => {
        const RadioButton = ({ title, first, last, value, button }) => {
            const handleOnPress = () => {
                setButtonHasLeed(value);
                dispatch({
                    type: 'updateHasLeed',
                    newHasLeed: value,
                });

                setButtonLeedType('');
            };

            return (
                <Radio
                    onPress={handleOnPress}
                    button={button}
                    title={title}
                    first={first}
                    value={value}
                    last={last}
                />
            );
        };
        return (
            <RadioButtonGroup>
                <RadioButton title="Yes" value button={leedHasLeed} first />
                <RadioButton title="No" value={false} button={leedHasLeed} last />
            </RadioButtonGroup>
        );
    };

    const RadioButtonLeedType = () => {
        const RadioButton = ({ title, first, last, value, button }) => {
            const handleOnPress = () => {
                setButtonLeedType(value);
                dispatch({
                    type: 'updateLeedType',
                    newLeedType: value,
                });
                console.log(leedType.toString());
            };

            return (
                <Radio
                    onPress={handleOnPress}
                    button={button}
                    title={title}
                    first={first}
                    value={value}
                    last={last}
                />
            );
        };
        return (
            <RadioButtonGroup>
                <RadioButton title="Silver" value="Silver" button={leedType} first />
                <RadioButton title="Gold" value="Gold" button={leedType} />
                <RadioButton title="Platinum" value="Platinum" button={leedType} last />
            </RadioButtonGroup>
        );
    };

    const [
        {
            constructionType,
        },
    ] = useStateValue();


    const handleOnPressNext = () => {
        switch (constructionType) {
            case "Tenant Improvement":
                navigation.navigate('Demolition');
                break;
            case "Remodel":
                navigation.navigate('ExteriorEnclosure');
                break;
            default:
                navigation.navigate('Substructure');
                break;
        }
    }

    return (
        <Container>
            <PageTitle>LEED</PageTitle>

            <Section>
                <SectionTitle>LEED</SectionTitle>
                <RadioButtonLeed />
            </Section>

            {leedHasLeed === true && (
                <Section>
                    <SectionTitle>Type of LEED</SectionTitle>
                    <RadioButtonLeedType />
                </Section>
            )}

            <MenuButton
                title="Next"
                onPress={() => handleOnPressNext()}
            />
            <BackButton title="Back" onPress={() => navigation.goBack()} />
        </Container>
    );
};

export default Leed;
