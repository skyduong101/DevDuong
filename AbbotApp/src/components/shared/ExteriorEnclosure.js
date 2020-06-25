import React, { useState } from 'react';
import { useStateValue } from '../../js/Hooks';
import { Container, PageTitle, Section, SectionTitle } from '../styled/Theme';
import { RadioButtonGroup, Radio } from '../styled/RadioButtonGroup';
import { MenuButton } from '../styled/MenuButton';
import { InfoSection } from '../styled/InfoSection';
import { BackButton } from '../styled/BackButton';

const ExteriorEnclosure = (props) => {
    const [{ exteriorSkinGlazing, exteriorRoofing }, dispatch] = useStateValue();
    const { navigation } = props;

    const [buttonSkinGlazing, setSkinGlazing] = useState(exteriorSkinGlazing);
    const [isSkinGlazingEmpty, setIsSkinGlazingEmpty] = useState(false);
    const [buttonRoofing, setRoofing] = useState(exteriorRoofing);
    const [isRoofingEmpty, setIsRoofingEmpty] = useState(false);

    const RadioButtonSkinGlazing = () => {
        const RadioButton = ({ title, value, first, last, disabled, button }) => {
            const handleOnPress = () => {
                setSkinGlazing(value);
                setIsSkinGlazingEmpty(false);
                dispatch({
                    type: 'updateExteriorSkinGlazing',
                    newExteriorSkinGlazing: value,
                });
                dispatch({
                    type: 'updateExtSG',
                    newExtSG: title,
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

        const [{ constructionType }] = useStateValue();

        if (constructionType === 'Remodel') {
            return (
                <RadioButtonGroup error={isSkinGlazingEmpty}>
                    <RadioButton
                        title="Opaque Surface: Rainscreen Assembly w/ Metal
                    Siding"
                        value={48}
                        first
                        button={exteriorSkinGlazing}
                    />
                    <RadioButton
                        title="Opaque Surface: Rainscreen Assembly w/ Trespa
                    or High End Panel Finish"
                        value={65}
                        last
                        button={exteriorSkinGlazing}
                    />
                </RadioButtonGroup>
            );
        }

        return (
            <RadioButtonGroup error={isSkinGlazingEmpty}>
                <RadioButton
                    title="Opaque Surface: Concrete Tilt Panel Walls w/
                    Board Form Inlay (includes Insulation & Concrete Sealer)"
                    value={35}
                    first
                    button={exteriorSkinGlazing}
                />
                <RadioButton
                    title="Opaque Surface: Rainscreen Assembly w/ Metal
                    Siding"
                    value={48}
                    button={exteriorSkinGlazing}
                />
                <RadioButton
                    title="Opaque Surface: Rainscreen Assembly w/ Trespa
                    or High End Panel Finish"
                    value={65}
                    button={exteriorSkinGlazing}
                    last
                />
            </RadioButtonGroup>
        );
    };

    const RadioButtonRoofing = () => {
        const RadioButton = ({ title, value, first, last, disabled, button }) => {
            const handleOnPress = () => {
                setRoofing(value);
                setIsRoofingEmpty(false);
                dispatch({
                    type: 'updateExteriorRoofing',
                    newExteriorRoofing: value,
                });
                dispatch({
                    type: 'updateRoofing',
                    newRoofing: title,
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
            <RadioButtonGroup error={isRoofingEmpty}>
                <RadioButton
                    title="Single Ply 60 Mil TPO Roof
                    Assembly, R-38 w/ Coverboard"
                    value={15}
                    first
                    button={exteriorRoofing}
                />
                <RadioButton title="Built Up Roofing" value={20} button={exteriorRoofing} />
                <RadioButton title="Metal Roofing" value={35} button={exteriorRoofing} last />
            </RadioButtonGroup>
        );
    };

    return (
        <Container>
            <PageTitle>Exterior Enclosure</PageTitle>

            <Section>
                <SectionTitle>Exterior Skin and Glazing*</SectionTitle>
                <RadioButtonSkinGlazing />
            </Section>

            <Section>
                <SectionTitle>Roofing*</SectionTitle>
                <RadioButtonRoofing />
            </Section>

            <MenuButton
                title="Next"
                onPress={() => {
                    if (buttonSkinGlazing !== 0 && buttonRoofing !== 0) {
                        navigation.navigate('InteriorFinishes');
                    }
                    if (buttonSkinGlazing === 0) {
                        setIsSkinGlazingEmpty(true);
                    }
                    if (buttonRoofing === 0) {
                        setIsRoofingEmpty(true);
                    }
                }}
            />
            <BackButton title="Back" onPress={() => navigation.goBack()} />
        </Container>
    );
};

export default ExteriorEnclosure;
