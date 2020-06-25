/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const InfoView = styled.View`
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
`;

const InfoIcon = styled.View`
    margin-right: 6;
    margin-top: 6;
`;

const InfoText = styled.Text`
    font-size: 16;
    color: #656565;
    flex-wrap: wrap;
    flex: 1;
`;

export const InfoSection = ({ text }) => {
    return (
        <InfoView>
            <InfoIcon>
                <FontAwesomeIcon
                    icon={faInfoCircle}
                    size={21}
                    color="#656565"
                />
            </InfoIcon>
            <InfoText>{text}</InfoText>
        </InfoView>
    );
};
