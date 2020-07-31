import React, { useState } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import AppText from '../components/AppText'
import colors from '../../config/colors';
import AppSwitch from '../components/AppSwitch'
import AppButton from '../components/AppButton';
import TextClick from '../components/TextClick';
import useKeyboardDetect from '../../hooks/useKeyboardDetect';
import AppFormFeild from '../components/forms/AppFormFeild';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';
import appAlert from '../components/appAlert';
import validation from '../components/forms/validationSchema';




const RegisterScreen = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const showKeyboard = useKeyboardDetect();

    const handleSubmit = (values) => {
       if(!isEnabled){
           appAlert('Info!','Please agree on the terms and privacy policy');
       }
       else{
           console.log(values)
       }
    }

    const handleLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <ImageBackground source={require('../../assets/background.png')}
            blurRadius={3} style={styles.parentContainer}>

            <View style={styles.firstContainer}>
                <AppText weight='bold' color={colors.white} size={42}>Create{"\n"}your account</AppText>
            </View>

            <View style={styles.secondContainer}>

            <AppForm initialValues={{name:'',email:'', password:''}} onSubmit={values=>handleSubmit(values)}
                     validationSchema={validation.validationRegister}>
                <View style={styles.textBox}  >
                    <AppFormFeild placeholder="Your Name"  name='name'/>
                    <AppFormFeild placeholder="Email" keyboardType='email-address' name='email'/>
                    <AppFormFeild name="password" placeholder="Password" secureTextEntry/>

                </View>
                <AppSwitch isEnabled={isEnabled} toggleSwitch={toggleSwitch} text='You agree the terms and privacy policy' />
                <SubmitButton text='Sign Up'/>
                  
            </AppForm>
               
                <AppText size={15} style={styles.msg}>Or continue with</AppText>
                <View style={styles.social}>
                    <AppButton color1='#808cba' color2='#808cba' width='45%' iconColor={colors.white} iconSize={20} icon='facebook' handleClick={handleLogin} />
                    <AppButton color1='#f18a77' color2='#f18a77' width='45%' iconColor={colors.white} iconSize={20} icon='google' handleClick={handleLogin} />
                </View>
            </View>

            {!showKeyboard && <View style={styles.thirdContainer}>
                <View style={styles.innerThird}>
                    <AppText style={styles.signUp}>Already have an account? </AppText>
                    <TextClick weight='bold' textDecorationLine='underline' text='Log In' onClick={handleLogin} size={16} color={colors.white} />
                </View>
            </View>}
        </ImageBackground>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    innerThird: {
        flex: 1,
        paddingBottom: 40,
        flexDirection: 'row',
        alignItems: 'flex-end',

    },
    signUp: {
        color: colors.white,
        fontSize: 16,

    },
    social: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    msg: {
        paddingVertical: 20,
        textAlign: 'center',
        color: colors.white
    },
    parentContainer: {
        flex: 1,
        paddingHorizontal: 15,
    },
    firstContainer: {
        flex: 0.7,
        justifyContent: 'flex-end',
    },
    textBox: {
    },
    secondContainer: {
        flex: 2,
       // maxHeight: "65%"
    },
    thirdContainer: {
        flex: 1,
    }
})
