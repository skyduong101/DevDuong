import React, { Component } from 'react';
import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation';
import { View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import HomePage from '../pages/HomePage';
import Disclaimer from '../pages/Disclaimer';
import Menu from './Menu';
import Contact from './ContactUs';
import Login from './Login';

class NavigationDrawerStructure extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { navigationProps } = this.props;
        return (
            <View style={{ flexDirection: 'row', paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <TouchableOpacity onPress={navigationProps.toggleDrawer}>
                    <FontAwesomeIcon
                        icon={faBars}
                        size={38}
                        marginBottom={Dimensions.get('window').height * 0.06}
                        color="#FFFFFF"
                        style={{
                            marginLeft: Dimensions.get('window').width * 0.05,
                            marginTop: Dimensions.get('window').height * 0.02, 
                        }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const firstActivityStackNavigator = createStackNavigator({
    // All the screen from the Screen1 will be indexed here
    First: {
        screen: HomePage,
        navigationOptions: ({ navigation }) => ({
            headerTitle: (
                <Image
                    // eslint-disable-next-line global-require
                    source={require('../../assets/images/abbott-construction-logo.png')}
                    resizeMode="cover"
                    style={{
                        marginLeft: Dimensions.get('window').width * 0.05,
                        marginTop: Dimensions.get('window').height * 0.01, 

                    }}
                />
            ),
            headerTitleContainerStyle: {
                marginBottom: Dimensions.get('window').height * 0.05,
                marginLeft: Dimensions.get('window').width * 0.05,
                paddingTop: Platform.OS === 'ios' ? 0 : Dimensions.get('window').height * 0.01
            },
            headerLeft: (
                <NavigationDrawerStructure navigationProps={navigation}
                 />
            ),
            headerStyle: {
                backgroundColor: '#191919',
            },
            headerTintColor: '#fff',
        }),
    },
});

const screen2StackNavigator = createStackNavigator({
    // All the screen from the Screen2 will be indexed here
    Second: {
        screen: Menu,
        navigationOptions: ({ navigation }) => ({
            title: 'Menu',
            headerLeft: (
                <NavigationDrawerStructure navigationProps={navigation} 
              />
            ),

            headerStyle: {
                backgroundColor: '#191919',
            },
            headerTintColor: '#fff',
        }),
    },
});

const screen3StackNavigator = createStackNavigator({
    // All the screen from the Screen3 will be indexed here
    Third: {
        screen: Login,
        navigationOptions: ({ navigation }) => ({
            title: 'Login',
            headerLeft: (
                <NavigationDrawerStructure navigationProps={navigation} />
            ),
            headerStyle: {
                backgroundColor: '#191919',
            },
            headerTintColor: '#fff',
        }),
    },
});

const screen4StackNavigator = createStackNavigator({
    Fourth: {
        screen: Contact,
        navigationOptions: ({ navigation }) => ({
            title: 'Contact',
            headerLeft: (
                <NavigationDrawerStructure navigationProps={navigation} />
            ),
            headerStyle: {
                backgroundColor: '#191919',
            },
            headerTintColor: '#fff',
        }),
    },
});

const DrawerNavigator = createDrawerNavigator(
    {
        // Drawer Optons and indexing
        Screen1: {
            // Title
            screen: firstActivityStackNavigator,
            navigationOptions: {
                drawerLabel: 'Home',
            },
        },

        Screen2: {
            // Title
            screen: screen2StackNavigator,
            navigationOptions: {
                drawerLabel: 'Menu',
            },
        },

        Screen3: {
            // Title
            screen: screen3StackNavigator,
            navigationOptions: {
                drawerLabel: 'Login',
            },
        },
        Screen4: {
            // Title
            screen: screen4StackNavigator,
            navigationOptions: {
                drawerLabel: 'Contact',
            },
        },

    },
    {
        hideStatusBar: true,
        contentComponent: Menu
    }
);


const AuthStack = createStackNavigator(
    { Disclaimer },
    { defaultNavigationOptions: { header: null } }
);

const NavigationStack = createAppContainer(
    createSwitchNavigator(
        {
            App: DrawerNavigator,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'Auth',
        }
    )
);

export default NavigationStack;
