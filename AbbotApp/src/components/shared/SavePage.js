/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { MenuButton } from '../styled/MenuButton';
import { Container, PageTitle } from '../styled/Theme';
import { BackButton } from '../styled/BackButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default class SavePage extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <PageTitle>Save & Send Estimate</PageTitle>
                <MenuButton
                    title="Next"
                    onPress={() => {
                        /* 1. Navigate to the Homepage route with params */
                        navigation.navigate('Home', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}
                />
                <BackButton title="Back" onPress={() => navigation.goBack()} />
            </Container>
        );
    }
}
