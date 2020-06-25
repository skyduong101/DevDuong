import React, { useState } from 'react';
import { Text, Image, Alert, ScrollView } from 'react-native';
import { Container, Section, SectionTitle } from '../styled/Theme';
import { Button } from '../styled/Button';
import { RadioButtonGroup, Radio } from '../styled/RadioButtonGroup';

const Disclaimer = (props) => {
    const [buttonDisclaimer, setDisclaimer] = useState(false);
    const { navigation } = props;

    const RadioButtonDisclaimer = () => {
        const RadioButton = ({ title }) => {
            const handleOnPress = () => {
                setDisclaimer(!buttonDisclaimer);
            };

            return <Radio onPress={handleOnPress} button={buttonDisclaimer} title={title} value single dark />;
        };
        return (
            <RadioButtonGroup style={{ marginBottom: 21 }}>
                <RadioButton title="Yes, I accept the disclaimer for using this app." />
            </RadioButtonGroup>
        );
    };

    const signIn = () => {
        if (buttonDisclaimer === true) {
            navigation.navigate('App');
        } else {
            Alert.alert(
                'Disclaimer Not Accepted',
                'You need to accept the disclaimer in order to continue. If you do not accept, please exit the app.',
                [{ text: 'OK' }]
            );
        }
    };

    return (
        <Container dark>
            <ScrollView>
                <Image
                    source={require('../../assets/images/abbott-construction-logo.png')}
                    style={{
                        display: 'flex',
                        alignSelf: 'center',
                        marginTop: 42,
                        marginBottom: 42,
                    }}
                />
                <Section dark>
                    <SectionTitle>Welcome to Abbott Construction&apos;s project estimator. </SectionTitle>
                    <SectionTitle style={{ color: 'red', fontWeight: 'bold' }}>Disclaimer:</SectionTitle>
                    <Text>
                        This app only provides a rough estimation and Abbott Construction is not liable for the
                        estimation. Please contact Abbott Construction for a full estimation.
                    </Text>
                </Section>

                <RadioButtonDisclaimer />

                <Button title="Start an Estimation" onPress={signIn} type="primary" />
            </ScrollView>
        </Container>
    );
};

export default Disclaimer;
