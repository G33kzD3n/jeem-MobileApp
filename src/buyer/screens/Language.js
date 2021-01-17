import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from '../../common/components/AppButton';
import ComponentHeading from '../../common/components/ComponentHeading';
// import { useNavigation } from '@react-navigation/native';
// import { useSelector, useDispatch } from 'react-redux';
// import { addressesAction, } from '../../../store/actions';
// import {
//   GET_ADDRESSES,
// } from '../../../store/actions/actionTypes';
import AppText from '../../common/components/AppText';
import persistStore from '../../utils/persistStore';
import appAlert from '../../common/components/appAlert';
import { getDefaultLanguage } from '../../languages/i18n';

const Language = () => {

  const [language, setLanguage] = useState([
    { value: 'ar', name: 'Arabic', isActive: 1 },
    { value: 'en', name: 'English', isActive: 0 }
  ])


  // const navigation = useNavigation();

  // const getAddresses = useSelector((state) => state.address.addresses);
  // const dispatch = useDispatch();

  const getCurrentDefaultLanguage = async () => {
    try {
      const defaultLanguage = await persistStore.getDetails('language');
      // console.log(defaultLanguage, 'in Language screen');
      if (defaultLanguage) {
        const setLan = language.map(data => {
          if (data.value !== defaultLanguage) {
            return { ...data, isActive: data.isActive = 0 }
          } else {
            return { ...data, isActive: data.isActive = 1 }
          }
        })
        setLanguage(setLan)
      }
    } catch (error) {

    }

  }

  useEffect(() => {
    getCurrentDefaultLanguage()
    // dispatch(addressesAction(GET_ADDRESSES)); //get called if the user refreshes the page to get data
  }, []);


  const handleLanguage = async () => {
    const selectLanguage = language.filter(data => data.isActive === 1)
    await persistStore.storeDetails('language', selectLanguage[0].value);
    appAlert('Success', 'Language changed successfully');
    getDefaultLanguage()
    // navigation.navigate('Payments');
  };

  const handleLanguageChange = (item) => {
    const setLan = language.map(data => {
      if (data.value !== item.value) {
        return { ...data, isActive: data.isActive = 0 }
      } else {
        return { ...data, isActive: data.isActive = 1 }
      }
    })
    setLanguage(setLan)
    // dispatch(addAddressAction(ADD_ADDRESS, {id:item.id}));
  }

  return (
    <>
      <ScrollView style={{ backgroundColor: colors.primaryShade24 }}>
        <ComponentHeading />
        {language.map((item, index) => (
          <React.Fragment key={index}>
            <TouchableWithoutFeedback onPress={() => handleLanguageChange(item)}>
              <View style={styles.topContainer}>
                <View style={styles.cartImage}>
                  <MaterialCommunityIcons
                    name={
                      item.isActive
                        ? 'radiobox-marked'
                        : 'radiobox-blank'
                    }
                    size={24}
                    color={colors.primary1}
                  />
                </View>
                <View style={styles.dataContainer}>
                  <AppText style={styles.text}>{item.name}</AppText>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </React.Fragment>
        ))}
      </ScrollView>
      <View style={styles.appButton}>
        <AppButton
          color1={colors.primaryShade11}
          color2={colors.primaryShade13}
          text="CONFIRM"
          borderRadius={3}
          textColor={colors.white}
          textTransform="uppercase"
          handleClick={() => handleLanguage()}
        />
      </View>
    </>
  );
};

export default Language;

const styles = StyleSheet.create({
  text: {
    color: colors.primary1
  },
  topContainer: {
    backgroundColor: colors.white,
    marginBottom: 1,
    flexDirection: 'row',
    flex: 1,
    // height: 150,
    borderColor: 'red',
    padding: 10,
    justifyContent: 'space-evenly',
  },
  cartImage: {
    flex: 1,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: colors.primary1,
    // borderWidth: 1,
  },
  dataContainer: {
    // paddingBottom: 5,
    flex: 4,
    //  justifyContent:'space-around'
  },
  addAdressContainer: {
    padding: 10,
    backgroundColor: colors.white,
  },
  addAdress: {
    borderColor: colors.primary1,
    borderWidth: 1,
    borderRadius: 3,
  },
  appButton: {
    padding: 5,
    backgroundColor: colors.white,
  },
});
