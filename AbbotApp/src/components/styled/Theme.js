/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.ScrollView`
    background-color: ${(props) => (props.dark ? '#1c1c1c' : '#f8f8f8')};
    padding: 0 ${Dimensions.get('window').width * 0.05}px;
    flex: 1;
    flex-direction: column;
    font-family: 'System';
    
`;

export const ContainerView = styled.View`
    background-color: #f8f8f8;
    padding: 0 ${Dimensions.get('window').width * 0.05}px;
    flex: 1;
    flex-direction: column;
    font-family: 'System';
`;

export const PageTitle = styled.Text`
    text-align: center;
    font-size: 19;
    font-weight: bold;
    margin-top: 21;
    margin-bottom: 21;
`;

export const Section = styled.View`
    border-radius: ${(props) => (props.dark ? '5px' : '0px')};
    padding: ${(props) => (props.dark ? '10px' : '0px')};
    background-color: ${(props) => (props.dark ? '#ffffff' : 'transparent')};
    margin-bottom: 21;
`;

export const SectionTitle = styled.Text`
    margin-bottom: 6;
    font-weight: bold;
`;

export const SectionHelpText = styled.Text`
    margin-top: 4;
    font-size: 12;
    color: #6c757d;
`;

export const BoldedText = styled.Text`
    font-weight: bold;
`;

const Input = styled.TextInput`
    padding: 10px;
    border-radius: 5px;
    background: #ffffff;
    height: 42;
    width: 100%;
    border-width: ${(props) =>
        props.error ? 2 : 0};
    border-color: ${(props) =>
        props.error ? '#ff1100' : '#ffffff'};
`;

export const SectionInput = ({
    placeholder,
    onChangeText,
    disabled,
    keyboardType,
    error,
    value,
    spellCheck,
    autoCorrect,
    secureTextEntry,
}) => (
    <Input
        placeholder={placeholder ? `${placeholder}` : ''}
        onChangeText={onChangeText}
        disabled={disabled}
        keyboardType={keyboardType}
        error={error}
        value={value}
        spellCheck={spellCheck}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
    />
);
