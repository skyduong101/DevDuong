import React, { useState } from 'react';
import { useStateValue } from '../../js/Hooks';
import { Container, PageTitle, Section, SectionTitle } from '../styled/Theme';
import { RadioButtonGroup, Radio } from '../styled/RadioButtonGroup';
import { MenuButton } from '../styled/MenuButton';
import { BackButton } from '../styled/BackButton';

const TenantImprovementBudget = (props) => {
    // eslint-disable-next-line no-empty-pattern
    const [{ constructionType, tenantImprovementBudget }, dispatch] = useStateValue();
    const { navigation } = props;

    const [buttonTenantImprovementBudget, setTenantImprovementBudget] = useState(tenantImprovementBudget);
    const [isTenantImprovementBudgetEmpty, setIsTenantImprovementBudgetEmpty] = useState(false);

    const RadioButtonTenantImprovementBudget = () => {
        const RadioButton = ({ title, value, first, last, disabled, button }) => {
            const handleOnPress = () => {
                setTenantImprovementBudget(value);
                setIsTenantImprovementBudgetEmpty(false);
                dispatch({
                    type: 'updateTenantImprovementBudget',
                    newTenantImprovementBudget: value,
                });
                dispatch({
                    type: 'updateTenantImprovementBudgetDisplay',
                    newTenantImprovementBudgetDisplay: title,
                });
            };

            return (
                <Radio
                    onPress={handleOnPress}
                    button={button}
                    title={title}
                    first={first}
                    last={last}
                    value={value}
                    disabled={disabled}
                />
            );
        };

        if (constructionType === 'Tenant Improvement') {
            return (
                <RadioButtonGroup error={isTenantImprovementBudgetEmpty}>
                    <RadioButton title="Low" value={85} button={buttonTenantImprovementBudget} />
                    <RadioButton title="Mid" value={135} button={buttonTenantImprovementBudget} />
                    <RadioButton title="High" value={175} button={buttonTenantImprovementBudget} last />
                </RadioButtonGroup>
            );
        }
        return (
            <RadioButtonGroup error={isTenantImprovementBudgetEmpty}>
                <RadioButton title="NONE (C&S Only)" value={0} button={buttonTenantImprovementBudget} first />
                <RadioButton title="Low" value={85} button={buttonTenantImprovementBudget} />
                <RadioButton title="Mid" value={135} button={buttonTenantImprovementBudget} />
                <RadioButton title="High" value={175} button={buttonTenantImprovementBudget} last />
            </RadioButtonGroup>
        );
    };

    const handleOnPressNext = () => {
        switch (constructionType) {
            case 'Tenant Improvement':
                navigation.navigate('SummaryOfCostsTenantImprovement');
                break;
            case 'Remodel':
                navigation.navigate('SummaryOfCostsRemodel');
                break;
            default:
                navigation.navigate('SummaryOfCosts');
                break;
        }
    }

    return (
        <Container>
            <PageTitle>Tenant Improvement Budget</PageTitle>

            <Section>
                <SectionTitle>TI Budget*</SectionTitle>
                <RadioButtonTenantImprovementBudget />
            </Section>

            <MenuButton
                title="Next"
                onPress={() => {
                    if (buttonTenantImprovementBudget !== '') {
                        handleOnPressNext();
                    }
                    if (buttonTenantImprovementBudget === '') {
                        setIsTenantImprovementBudgetEmpty(true);
                    }
                }}
            />
            <BackButton title="Back" onPress={() => navigation.goBack()} />
        </Container>
    );
};

export default TenantImprovementBudget;
