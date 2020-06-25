import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import ApiManager from '../../js/ApiManager';
import SecureStoreService from '../../js/SecureStoreService';
import { useStateValue } from '../../js/Hooks';
import { ContainerView, Container, PageTitle, Section, SectionTitle, SectionInput } from '../styled/Theme';
import { MenuButton } from '../styled/MenuButton';
import { BackButton } from '../styled/BackButton';

const Login = (props) => {
    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue();
    const { navigation } = props;
    const apiManager = ApiManager.getInstance();
    const [email, setEmail] = useState('');
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const [loginResultColor, setLoginResultColor] = useState('#bd0e02');
    const [loginResultMessage, setLoginResultMessage] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

    // request and authorization for user token using axios
    const handleOnPressLogin = () => {
        // Validate form inputs
        const isEmailValid = email !== '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        const isPasswordValid = password !== '';
        if (!isEmailValid || !isPasswordValid) {
            setIsEmailInvalid(!isEmailValid);
            setIsPasswordInvalid(!isPasswordValid);
            setLoginResultColor('#bd0e02');
            setLoginResultMessage('A valid email address and password is required to login.');

            return;
        }

        setLoginResultColor('#0000FF');
        setLoginResultMessage('Logging in...');

        // Form inputs are valid, continue with login.
        // JSON.stringify() to remove trailing comma. Requires setting header 'Content-Type' to 'application/json'
        apiManager.axios
            .post('users/login', JSON.stringify({ email, password }))
            .then(async (res) => {
                const { token, tokenExpires } = res.data;

                await SecureStoreService.setAuthTokenAsync(token, tokenExpires);

                dispatch({
                    type: 'updateIsLoggedIn',
                    newIsLoggedIn: true,
                });

                await apiManager.useAuthHeader();

                // Success, so redirect to home page
                navigation.navigate('Home');
            })
            .catch(() => {
                setLoginResultColor('#bd0e02');
                setLoginResultMessage(
                    'Something went wrong. Please check that you entered the correct credentials and that you have data connectivity.'
                );
            });
    };

    return (
        <Container>
            <ScrollView>
                <ContainerView>
                    <PageTitle>Login</PageTitle>
                    <Section>
                        <SectionTitle>Email</SectionTitle>
                        <SectionInput
                            value={email}
                            placeholder="Your Email"
                            onChangeText={(val) => {
                                setEmail(val);
                                setIsEmailInvalid(false);
                                setLoginResultMessage('');
                            }}
                            error={isEmailInvalid}
                            spellCheck={false}
                        />
                    </Section>

                    <Section>
                        <SectionTitle>Password</SectionTitle>
                        <SectionInput
                            value={password}
                            placeholder="Your Password"
                            onChangeText={(val) => {
                                setPassword(val);
                                setIsPasswordInvalid(false);
                                setLoginResultMessage('');
                            }}
                            error={isPasswordInvalid}
                            spellCheck={false}
                            autoCorrect={false}
                            secureTextEntry
                        />
                    </Section>

                    {loginResultMessage !== '' ? (
                        <Text style={{ color: loginResultColor, marginBottom: 20 }}>{loginResultMessage}</Text>
                    ) : null}

                    <MenuButton title="Login" onPress={() => handleOnPressLogin()} />
                    <BackButton title="Back" onPress={() => navigation.goBack()} />
                </ContainerView>
            </ScrollView>
        </Container>
    );
};

export default Login;
