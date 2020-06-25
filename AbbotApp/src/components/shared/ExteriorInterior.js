import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { useStateValue } from '../../js/Hooks';
import {
    ContainerView,
    PageTitle,
    Section,
    SectionTitle,
} from '../styled/Theme';
import { RadioButtonGroup, Radio } from '../styled/RadioButtonGroup';
import { MenuButton } from '../styled/MenuButton';
import { BackButton } from '../styled/BackButton';

const ExteriorInterior = (props) => {
    const [{ constructionType }, dispatch] = useStateValue();
    const [exteriorInterior, setExteriorInterior] = useState('');
    const { navigation } = props;
    const RadioButtonExteriorInterior = () => {
        const RadioButton = ({ title, first, last }) => {
            const handleOnPress = () => {
                setExteriorInterior(title);
                dispatch({
                    type: 'updateExteriorInterior',
                    newExteriorInterior: title,
                });
            };

            return (
                <Radio
                    onPress={handleOnPress}
                    button={exteriorInterior}
                    title={title}
                    first={first}
                    last={last}
                />
            );
        };
        return (
            <RadioButtonGroup>
                <RadioButton title="Yes" first />
                <RadioButton title="No" last />
            </RadioButtonGroup>
        );
    };

    return (
        <KeyboardAvoidingView behavior="position">
            <ScrollView>
                <ContainerView>
                    <PageTitle>Exterior VS Interior</PageTitle>
                    <Section>
                        <SectionTitle>
                            Exterior or Interior Remodel?
                        </SectionTitle>
                        <RadioButtonExteriorInterior />
                    </Section>

                    <MenuButton
                        title="Next"
                        onPress={() => {
                            navigation.navigate(constructionType);
                        }}
                    />
                    <BackButton
                        title="Back"
                        onPress={() => navigation.goBack()}
                    />
                </ContainerView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default ExteriorInterior;
