import React from 'react';
import { Container, PageTitle } from '../styled/Theme';
import { BackButton } from '../styled/BackButton';

export default class Remodel extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { navigation } = this.props;
        const construction = navigation.getParam('construction', 'None');
        const project = navigation.getParam('project', 'None');
        const leed = navigation.getParam('leed', 'no');
        return (
            <Container>
                <PageTitle>
                    {construction}
                    {'>'}
                    {project}
                    {'>'}
                    {leed}
                </PageTitle>
                <BackButton title="Back" onPress={() => navigation.goBack()} />
            </Container>
        );
    }
}
