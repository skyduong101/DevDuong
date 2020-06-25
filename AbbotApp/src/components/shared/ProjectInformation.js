import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { useStateValue } from '../../js/Hooks';
import { ContainerView, Container, PageTitle, Section, SectionTitle, SectionInput } from '../styled/Theme';
import { RadioButtonGroup, Radio } from '../styled/RadioButtonGroup';
import { MenuButton } from '../styled/MenuButton';
import { BackButton } from '../styled/BackButton';

const ProjectInformation = (props) => {
    // eslint-disable-next-line no-empty-pattern
    const [{ constructionType, projectName }] = useStateValue();

    const [{}, dispatch] = useStateValue();
    const [inputProjectName, setProjectName] = useState('');
    const [inputCompanyName, setCompanyName] = useState('');
    const [inputIntendedDate, setIntendedDate] = useState('');
    const [buttonArchEng, setArchEng] = useState('default');
    const [isStateTaxEmpty, setIsStateTaxEmpty] = useState(false);
    const [isArchEngEmpty, setIsArchEngEmpty] = useState(false);
    const [buttonStateTax, setButtonStateTax] = useState('default');
    const { navigation } = props;

    const handleOnPressNext = () => {
        switch (constructionType) {
            case 'Tenant Improvement':
                navigation.navigate('BuildingInformation');
                break;
            default:
                navigation.navigate('BuildingInformation');
                break;
        }
    };

    const RadioButtonArchEng = () => {
        const RadioButton = ({ title, value, first, last }) => {
            const handleOnPress = () => {
                setArchEng(value);
                setIsArchEngEmpty(false);
                dispatch({
                    type: 'updateHasArchEng',
                    newHasArchEng: value,
                });
            };

            return (
                <Radio
                    onPress={handleOnPress}
                    button={buttonArchEng}
                    title={title}
                    first={first}
                    last={last}
                    value={value}
                />
            );
        };
        return (
            <RadioButtonGroup error={isArchEngEmpty}>
                <RadioButton title="Yes" value first />
                <RadioButton title="No" value={false} last />
            </RadioButtonGroup>
        );
    };

    const RadioButtonStateTax = () => {
        const RadioButton = ({ title, value, first, last, disabled }) => {
            const handleOnPress = () => {
                setButtonStateTax(value);
                setIsStateTaxEmpty(false);
                dispatch({
                    type: 'updateStateTax',
                    newStateTax: value,
                });
                dispatch({
                    type: 'updateLocation',
                    newLocation: title,
                })
            };

            return (
                <Radio
                    onPress={handleOnPress}
                    button={buttonStateTax}
                    title={title}
                    first={first}
                    last={last}
                    value={value}
                    disabled={disabled}
                />
            );
        };

        return (
            <RadioButtonGroup error={isStateTaxEmpty}>
                <RadioButton title="Washington State" value={0.1} first />
                <RadioButton title="California State" value={0.0725} last />
            </RadioButtonGroup>
        );
    };

    return (
        <Container>
            <KeyboardAvoidingView>
                <ScrollView>
                    <ContainerView>
                        <PageTitle>Project Information</PageTitle>
                        <Section>
                            <SectionTitle>Project Name</SectionTitle>
                            <SectionInput
                                placeholder="Insert Project Name"
                                onChangeText={(text) => {
                                    setProjectName(text);
                                }}
                                value={inputProjectName}
                            />
                        </Section>

                        <Section>
                            <SectionTitle>Company Name</SectionTitle>
                            <SectionInput
                                placeholder="Insert Company Name"
                                onChangeText={(text) => {
                                    setCompanyName(text);
                                }}
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Location of Project*</SectionTitle>
                            <RadioButtonStateTax />
                        </Section>
                        <Section>
                            <SectionTitle>Include Architectural Services?*</SectionTitle>
                            <RadioButtonArchEng />
                        </Section>
                        <MenuButton
                            title="Next"
                            onPress={() => {
                                if (buttonStateTax !== 'default' && buttonArchEng !== 'default') {
                                    handleOnPressNext();
                                    dispatch({
                                        type: 'updateProjectName',
                                        newProjectName: inputProjectName,
                                    });
                                    dispatch({
                                        type: 'updateCompanyName',
                                        newCompanyName: inputCompanyName,
                                    });
                                    dispatch({
                                        type: 'updateIntendedDate',
                                        newIntendedDate: inputIntendedDate,
                                    });
                                }
                                if (buttonStateTax === 'default') {
                                    setIsStateTaxEmpty(true);
                                }
                                if (buttonArchEng === 'default') {
                                    setIsArchEngEmpty(true);
                                }
                            }}
                        />
                    </ContainerView>
                </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    );
};

export default ProjectInformation;
