//style sheet relate to login page. 
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 2,
        padding: 21,
        alignSelf: 'stretch',
        backgroundColor: '#3d5b69',
    },
    input:{
        height: 45,
        backgroundColor: 'gray',
        marginBottom: 12,
        padding: 12,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#268fd1',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600'
    },
    error: {
        color: 'red',
        paddingTop: 12
    },
    errorMsg: {
        marginBottom: 8,
        backgroundColor: '#fee8e6',
        padding: 8,
        borderRadius: 4,
      },
      errorMsgTxt: {
        color: '#db2828',
        textAlign: 'center',
        fontSize: 12,
      },
});

export default styles;