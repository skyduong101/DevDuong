/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Button = styled.TouchableHighlight`
    padding: 10px;
    border-radius: 5px;
    background: #ffffff;
    min-height: 42;
    width: 100%;
    margin-bottom: ${(props) => (props.last ? 0 : 12)};
    /* border: 1px solid #d8d8d8; */
`;

const ButtonView = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

const ButtonTitle = styled.Text`
    font-size: 16;
    color: #1c1c1c;
`;

export const MenuButton = ({ onPress, last, title }) => (
    <Button
        last={last} // Pass in props to add styles for last button
        onPress={onPress}
        activeOpacity={1}
        underlayColor="#3ac1e1"
    >
        <ButtonView>
            <ButtonTitle>{title}</ButtonTitle>
            <FontAwesomeIcon icon={faAngleRight} size={21} color="#3AC1E1" />
        </ButtonView>
    </Button>
);
