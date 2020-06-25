/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ButtonTouch = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 5px;
    background: ${(props) =>
        (props.type === 'primary' && '#3ac1e1') || '#000000'};
    width: 100%;
    margin-bottom: ${(props) => (props.last ? 0 : 12)};
`;

const ButtonView = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ButtonTitle = styled.Text`
    font-size: 21;
    font-weight: 900;
    color: #ffffff;
`;

export const Button = ({ onPress, title, type }) => (
    <ButtonTouch onPress={onPress} type={type}>
        <ButtonView>
            <ButtonTitle>{title}</ButtonTitle>
        </ButtonView>
    </ButtonTouch>
);
