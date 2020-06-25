import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { useStateValue } from '../../js/Hooks';
import {
    ContainerView,
    Container,
    PageTitle,
    Section,
    SectionTitle,
} from '../styled/Theme';
import { RadioButtonGroup, Radio } from '../styled/RadioButtonGroup';
import { MenuButton } from '../styled/MenuButton';
import { BackButton } from '../styled/BackButton';

const Demolition = (props) => {
    const [{
        constructionType,
        slabDemolition,
        isDemolitionNeeded,
        buildingFootprintArea
    }, dispatch] = useStateValue();
    const [buttonDemolition, setButtonDemolition] = useState(isDemolitionNeeded);
    const [isDemolitionEmpty, setIsDemolitionEmpty] = useState(false);
    const { navigation } = props;
    const slabArea = buildingFootprintArea * .25;

    const handleOnPressNext = () => {
        switch (constructionType) {
            case "Tenant Improvement":
                navigation.navigate('TenantImprovementBudget');
                break;
            case "Remodel":
                navigation.navigate('ExteriorEnclosure');
                break;
            default:
                navigation.navigate('ExteriorEnclosure');
                break;
        }
    }

    const RadioButtonDemolitionGroup = () => {
        const RadioButton = ({ title, value, first, last, disabled, button }) => {
            const handleOnPress = () => {
                if (value) {
                    setButtonDemolition(value);
                    setIsDemolitionEmpty(false);
                    dispatch({
                        type: 'updateIsDemolitionNeeded',
                        newIsDemolitionNeeded: value,
                    });

                    const slabDemolitionCost = (slabArea * slabDemolition);

                    dispatch({
                        type: 'updateSlabDemolitionCost',
                        newSlabDemolitionCost: slabDemolitionCost,
                    });
                } else {
                    setButtonDemolition(value);
                    setIsDemolitionEmpty(false);
                    dispatch({
                        type: 'updateIsDemolitionNeeded',
                        newIsDemolitionNeeded: value,
                    });

                    dispatch({
                        type: 'updateSogPatchingCost',
                        newSogPatchingCost: 0,
                    });

                    dispatch({
                        type: 'updateSlabDemolitionCost',
                        newSlabDemolitionCost: 0,
                    });
                };

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
            <RadioButtonGroup error={isDemolitionEmpty}>
                <RadioButton title="Yes" value={true} button={buttonDemolition} first />
                <RadioButton title="No" value={false} button={buttonDemolition} />
            </RadioButtonGroup>
        );
    };

    return (
        <Container>
            <KeyboardAvoidingView behavior="position">
                <ScrollView>
                    <ContainerView>
                        <PageTitle>Demolition</PageTitle>

                        <SectionTitle>Demolition Needed*</SectionTitle>
                        <Section>
                            <RadioButtonDemolitionGroup />
                        </Section>
                        <MenuButton
                            title="Next"
                            onPress={() => {
                                if (buttonDemolition !== '') {
                                    handleOnPressNext();
                                }
                                if (buttonDemolition === '') {
                                    setIsDemolitionEmpty(true);
                                }
                            }}
                        />
                        <BackButton
                            title="Back"
                            onPress={() => navigation.goBack()}
                        />
                    </ContainerView>
                </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    );
};

export default Demolition;
