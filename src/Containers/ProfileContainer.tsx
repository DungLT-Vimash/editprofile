import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Back from '@/Assets/Images/left.svg'
import Pencil from '@/Assets/Images/pencil.svg'
import Down from '@/Assets/Images/down.svg'
import Circle from '@/Assets/Images/circle.svg'
import { styles } from './style'
import CountryPicker, { Country, CountryCode, DARK_THEME } from 'react-native-country-picker-modal'


interface ProfileContainerProps { }

const ProfileContainer = (props: ProfileContainerProps) => {
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity style={styles.BackButton}><Back height={15} width={8} fill="black" /></TouchableOpacity>
        <View style={styles.nameTitle}><Text style={styles.nameTitleText}>Edit Profile</Text></View>
        <View style={styles.editTitle}><Pencil height={19} width={19} /></View>
      </View>
      <View style={styles.user}>
        <View style={styles.editImageUser}>
          <View style={styles.frameImageUser}>
            <Image resizeMode="cover" style={styles.ImageUser} source={require('@/Assets/Images/profile.png')} />
          </View>
          <TouchableOpacity style={styles.editImageUserButton}>
            <Circle height={32} width={32} style={styles.svgEditImageUserCircle} />
            <Pencil height={14.25} width={14.25} style={styles.svgEditImageUserPencil} fill="white" />
          </TouchableOpacity>
        </View>
        <View >
          <Text style={styles.userName}>John Doe</Text>
        </View>
        <Text style={styles.positionUser}>UI Designer at SMD</Text>
      </View>
      <View style={styles.information}>
        <View style={styles.email}>
          <Text style={styles.emailLabel}>Email</Text>
          <TextInput placeholder='john.doe@smartdev.com' style={styles.emailInput} />
        </View>
        <View style={styles.name}>
          <Text style={styles.nameLabel}>Name</Text>
          <TextInput value='John Doe' style={styles.nameInput} />
        </View>
        <View style={styles.tel}>
          <Text style={styles.telLabel}>Phone</Text>
          <View style={styles.phoneNumber}>
            <View style={styles.editCountryCode}>
              <TextInput style={styles.countryCode} value="VN +84" />

              <TouchableOpacity >
                <Down height={7.57} width={12.14} fill="#0A1B50" />
               
              </TouchableOpacity>
            </View>
            <TextInput style={styles.telephoneNumber} />
          </View>
        </View>

        <View style={styles.timeZone}>
          <Text style={styles.timeZoneLabel}>Time Zone</Text>
          <View style={styles.editTimeZone}>
            <Text style={styles.inputTimeZone}>(UTC) Coordinated Universal Time</Text>
            <TouchableOpacity style={styles.buttonSelectTimeZone}>
              <Down style={styles.svgDown} fill="#0A1B50" width={12.14} height={7.57} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
      </View>
      <View style={styles.buttonSave}>
        <TouchableOpacity style={styles.buttonSaveClick}><Text>Save Changes</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileContainer;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFF',
//   },
//   title: {
//     justifyContent: 'space-between',
//     flexDirection: "row",
//     width: 54,
//     alignItems: "center",
//     paddingBottom: 41.5
//   },
//   user: {
//     alignItems: 'center',
//     paddingBottom: 62
//   },
//   img: {
//     width: 84,
//     height: 84,
//     overflow: 'hidden',
//     borderRadius: 42,


//   }

// });
