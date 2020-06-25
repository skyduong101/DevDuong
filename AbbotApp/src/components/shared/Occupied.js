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

const Occupied = (props) => {
    const [{ constructionType }, dispatch] = useStateValue();
    const [occupied, setOccupied] = useState('');
    const { navigation } = props;
    const RadioButtonOccupied = () => {
        const RadioButton = ({ title, first, last }) => {
            const handleOnPress = () => {
                setOccupied(title);
                dispatch({
                    type: 'updateOccupied',
                    newOccupied: title,
                });
            };

            return (
                <Radio
                    onPress={handleOnPress}
                    button={occupied}
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
                    <PageTitle>Occupied Space</PageTitle>
                    <Section>
                        <SectionTitle>
                            Will this space be occupied?
                        </SectionTitle>
                        <RadioButtonOccupied />
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

export default Occupied;
