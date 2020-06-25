import React from 'react';
import { Container, PageTitle } from '../styled/Theme';
import { MenuButton } from '../styled/MenuButton';
import { useStateValue } from '../../js/Hooks';
import { BackButton } from '../styled/BackButton';

const TypeOfProject = (props) => {
    const { navigation } = props;
    // eslint-disable-next-line no-empty-pattern
    const [{ }, dispatch] = useStateValue();

    const [
        {
            constructionType,
        },
    ] = useStateValue();

    const handleOnPressNext = () => {
        switch (constructionType) {
            case "Tenant Improvement":
                navigation.navigate('ProjectInformation');

                // This dispatch should most likely be in the HomePage component,
                // but I am having a hard time coming up with an easy way to implement.
                dispatch({
                    type: 'updateIsTenantImprovement',
                    newIsTenantImprovement: true,
                })
                break;
        }
    }


    // ProjectInformation

    const handleChoosingType = (newState, screen) => {
        dispatch({
            type: 'updateProjectType',
            newProjectType: newState,
        });

        // This dispatch also seems out of place. This is so that the state resets to false when user
        // selects to have a different type of estimate without exiting the app. Placing the dispatch within
        // the else statement causes an "invariant violation" and the app crashes. 
        dispatch({
            type: 'updateIsTenantImprovement',
            newIsTenantImprovement: false,
        });

        if (constructionType === 'Tenant Improvement') {
            // Flow according to chart for TI
            handleOnPressNext();
        }
        else {
            // Flow as it was originally
            navigation.navigate(screen);

        }

    };


    return (
        <Container>
            <PageTitle>Type Of Project</PageTitle>
            <MenuButton
                title="Office"
                onPress={() => {
                    handleChoosingType(
                        { projectType: 'Office' },
                        'ProjectInformation');
                }}

            />
            <BackButton title="Back" onPress={() => navigation.goBack()} />
        </Container>
    );
};

export default TypeOfProject;
