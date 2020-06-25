/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const Button = styled.TouchableOpacity`
    padding: 10px;
    border-width: 2px;
    border-top-right-radius: ${(props) =>
        props.first ? 5 : props.single ? 5 : 0};
    border-top-left-radius: ${(props) =>
        props.first ? 5 : props.single ? 5 : 0};
    border-bottom-right-radius: ${(props) =>
        props.last ? 5 : props.single ? 5 : 0};
    border-bottom-left-radius: ${(props) =>
        props.last ? 5 : props.single ? 5 : 0};
    border-color: ${(props) =>
        props.error ? '#bd0e02' : '#ffffff'};
        
    background-color: ${(props) =>
        props.selected
            ? '#3AC1E1'
            : props.dark
            ? '#1c1c1c'
            : props.disabled
            ? '#D3D3D3'
            : '#ffffff'};
    min-height: 42;
    width: 100%;
    /* opacity: ${(props) => (props.dark ? '#ffffff' : '#1c1c1c')}; */
`;

const ButtonView = styled.View`
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
`;

const ButtonIcon = styled.View`
    margin-right: 6;
    margin-top: 6;
`;

const ButtonTitle = styled.Text`
    font-size: 16;
    color: ${(props) =>
        props.dark ? '#ffffff' : props.disabled ? '#656565' : '#1c1c1c'};
    flex-wrap: wrap;
    flex: 1;
`;

export const RadioButtonGroup = styled.View`
    border-width: ${(props) =>
        props.error ? 2 : 0};
    border-color: ${(props) =>
        props.error ? '#ff1100' : '#ffffff'};
`;

export const Radio = ({
    onPress,
    button,
    title,
    value,
    first,
    last,
    single,
    dark,
    error,
    disabled,
}) => {
    const selected = button === title || button === value; //TODO update these in other files
    return (
        <Button
            first={first}
            last={last}
            single={single}
            onPress={onPress}
            selected={selected}
            dark={dark}
            error={error}
            disabled={disabled}
        >
            <ButtonView>
                <ButtonIcon>
                    {selected ? (
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            size={21}
                            color="#FFFFFF"
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faCircle}
                            size={21}
                            color={disabled ? '#656565' : '#3AC1E1'}
                        />
                    )}
                </ButtonIcon>
                <ButtonTitle dark={dark}>{title}</ButtonTitle>
            </ButtonView>
        </Button>
    );
};
