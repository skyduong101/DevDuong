/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 5px;
    background: transparent;
    min-height: 42;
    width: 100%;
    margin-bottom: 21;
`;

const ButtonView = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const ButtonTitle = styled.Text`
    font-size: 20;
    color: #ffffff;
    flex: 1;
    flex-wrap: wrap;
    font-weight: 900;
`;

export const NavButton = ({ onPress, title }) => (
    <Button onPress={onPress}>
        <ButtonView>
            <ButtonTitle>{title}</ButtonTitle>
        </ButtonView>
    </Button>
);
