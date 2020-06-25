import React from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import { BackButton } from '../styled/BackButton';

export default class ClientInformation extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { navigation } = this.props;
        const construction = navigation.getParam('construction', 'None');
        const project = navigation.getParam('project', 'None');
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text>Estimator Information</Text>
                <Text>First Name</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Type the First Name"
                    onChangeText={(text) => this.setState({ text })}
                />
                <Text>Last Name</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Type the Last Name"
                    onChangeText={(text) => this.setState({ text })}
                />
                <Text>Email</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Type the Email"
                    onChangeText={(text) => this.setState({ text })}
                />
                <Text>Phone Number</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Type the Phone Number"
                    onChangeText={(text) => this.setState({ text })}
                />
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Add another contact"
                    onChangeText={(text) => this.setState({ text })}
                />
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('BuildingInformation')}
                />
                <BackButton title="Back" onPress={() => navigation.goBack()} />
            </View>
        );
    }
}
