import React, { Component } from 'react';
import { Text, Linking, ScrollView, View } from 'react-native';
import { Container, PageTitle, Section, SectionTitle } from '../styled/Theme';
import { MenuButton } from '../styled/MenuButton';
import { BackButton } from '../styled/BackButton';

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <ScrollView>
                    <View>
                        <PageTitle>Contact Us</PageTitle>
                        <Section>
                            <SectionTitle>Phone</SectionTitle>
                            <MenuButton
                                title="(206) 467-8500"
                                onPress={() => {
                                    Linking.openURL('tel:2064678500');
                                }}
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Email</SectionTitle>
                            <MenuButton
                                title="estimating@abbottconstruction.com"
                                onPress={() => {
                                    Linking.openURL('mailto:estimating@abbottconstruction.com');
                                }}
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Address</SectionTitle>
                            <Text style={{ marginBottom: 10 }}>3408 1st Ave S, Seattle, WA 98134</Text>
                            <MenuButton
                                title="Open in Maps"
                                onPress={() => {
                                    const latitude = 47.573672;
                                    const longitude = -122.333671;
                                    const label = 'Abbott Construction';
                                    Linking.openURL(
                                        Platform.select({
                                            ios: `maps:${latitude},${longitude}?q=${label}`,
                                            android: `geo:${latitude},${longitude}?q=${label}`,
                                        })
                                    );
                                }}
                            />
                        </Section>

                        <BackButton title="Back" onPress={() => navigation.goBack()} />
                    </View>
                </ScrollView>
            </Container>
        );
    }
}
