import React, { useState } from 'react';
import { InfoSection } from '../styled/InfoSection';
import { useStateValue } from '../../js/Hooks';
import { Container, PageTitle, Section, SectionTitle } from '../styled/Theme';
import { RadioButtonGroup, Radio } from '../styled/RadioButtonGroup';
import { MenuButton } from '../styled/MenuButton';
import { BackButton } from '../styled/BackButton';

const InteriorFinishes = (props) => {
    const [{ constructionType, shellDryWall, shellConcrete }, dispatch] = useStateValue();
    const { navigation } = props;
    const [buttonDryWall, setButtonDryWall] = useState(shellDryWall);
    const [isDryWallEmpty, setIsDryWallEmpty] = useState(false);
    const [buttonConcrete, setButtonConcrete] = useState(shellConcrete);
    const [isConcreteEmpty, setIsConcreteEmpty] = useState(false);

    const handleOnPressNext = () => {
        switch (constructionType) {
            case 'Tenant Improvement':
                navigation.navigate('SummaryOfCostsTenantImprovement');
                break;
            default:
                navigation.navigate('VerticalCirculationSystems');
                break;
        }
    }

    const RadioButtonDryWall = () => {
        const RadioButton = ({ title, value, first, last, disabled, button }) => {
            const handleOnPress = () => {
                setButtonDryWall(value);
                setIsDryWallEmpty(false);
                dispatch({
                    type: 'updateShellDryWall',
                    newShellDryWall: value,
                });
                dispatch({
                    type: 'updateShellDryWallDisplay',
                    newShellDryWallDisplay: title,
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
            <RadioButtonGroup error={isDryWallEmpty}>
                <RadioButton title="No Drywall Around Perimeter Walls" value={0} button={buttonDryWall} first />
                <RadioButton title="Unfinished Drywall Around Perimeter Walls" value={1.5} button={buttonDryWall} />
                <RadioButton title="Finished Drywall Around Perimeter Walls (level 4)" value={2.25} button={buttonDryWall} last />
            </RadioButtonGroup>
        );
    };

    const RadioButtonConcrete = () => {
        const RadioButton = ({ title, value, first, last, disabled, button }) => {
            const handleOnPress = () => {
                setButtonConcrete(value);
                setIsConcreteEmpty(false);
                dispatch({
                    type: 'updateShellConcrete',
                    newShellConcrete: value,
                });
                dispatch({
                    type: 'updateShellConcreteDisplay',
                    newShellConcreteDisplay: title,
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
            <RadioButtonGroup error={isConcreteEmpty}>
                <RadioButton title="Bare Concrete (no sealer)" value={0} button={buttonConcrete} first />
                <RadioButton title="Sealed Concrete" value={1.5} button={buttonConcrete} />
                <RadioButton title="Polished Concrete" value={5} button={buttonConcrete} last />
            </RadioButtonGroup>
        );
    };

    return (
        <Container>
            <PageTitle>Shell & Core Interior Finishes</PageTitle>

            <Section>
                <SectionTitle>Drywall*</SectionTitle>
                <RadioButtonDryWall />
            </Section>

            <Section>
                <SectionTitle>Concrete*</SectionTitle>
                <RadioButtonConcrete />
            </Section>

            <Section>
                {constructionType === 'Core and Shell' ? (
                    <InfoSection text="Static interior finishes occur per floor and do not change." />
                ) : (
                        <InfoSection
                            text="Static interior finishes occur per floor which includes doors,
                            case work, specialties, flooring, walls, windows, paint,
                            mechanicals, electricals, and plumbing."
                        />
                    )}
            </Section>

            <MenuButton
                title="Next"
                onPress={() => {
                    if (buttonConcrete !== '' && buttonDryWall !== '') {
                        handleOnPressNext();
                    }
                    if (buttonConcrete === '') {
                        setIsConcreteEmpty(true);
                    }
                    if (buttonDryWall === '') {
                        setIsDryWallEmpty(true);
                    }
                }}
            />
            <BackButton title="Back" onPress={() => navigation.goBack()} />
        </Container>
    );
};

export default InteriorFinishes;
