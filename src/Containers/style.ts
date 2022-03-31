import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
    },
    title: {
        justifyContent: 'space-between',
        flexDirection: "row",
        width: 54,
        paddingBottom: 41.5,
    },
    BackButton: {
        marginLeft: 24,
        width: 34
    },
    nameTitle: {
        width: 274,
        height: 22,
        alignItems: "center",

    },
    editTitle: {
        width: 24, height: 24
    },
    nameTitleText: {
        fontSize: 16,
        color: '#000000'
    },
    user: {
        alignItems: 'center',
        paddingBottom: 62
    },
    editImageUser: {
        position: 'relative', paddingBottom: 14
    },
    ImageUser: {
        paddingTop: 500,
        width: 84,
        height: 84
    },
    editImageUserButton: {
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    svgEditImageUserCircle: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        zIndex: 1
    },
    svgEditImageUserPencil: {
        position: 'absolute',
        right: 9,
        bottom: 9,
        zIndex: 2,
    },
    userName: {
        fontFamily: 'Gilroy-Bold',
        fontSize: 24,
        lineHeight: 28.13,
        letterSpacing: -0.3,
        alignItems: 'center',
        paddingBottom: 8,
        color: '#052555'
    },
    positionUser: {
        fontFamily: 'Gilroy-Bold',
        fontSize: 16,
        lineHeight: 18.75,
        letterSpacing: -0.3,
        alignItems: 'center',
        color: '#052555'
    },
    frameImageUser: {
        width: 84,
        height: 84,
        overflow: 'hidden',
        borderRadius: 42,
    },
    information: {
        alignItems: 'center',
        marginBottom: 77
    },
    email: {
        width: 341, paddingBottom: 24
    },
    emailLabel: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 16,
        lineHeight: 18.75,
        letterSpacing: -0.3,
        color: '#8B98AB'
    },
    emailInput: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 16,
        lineHeight: 18.75,
        letterSpacing: -0.3,
        color: '#B8BEC8'
    },
    name: {
        width: 341,
        paddingBottom: 24
    },
    nameLabel: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 16,
        lineHeight: 18.75,
        letterSpacing: -0.3,
        color: '#8B98AB'
    },
    nameInput: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 16,
        lineHeight: 18.75,
        letterSpacing: -0.3,
        color: '#052555'
    },
    tel: {
        width: 341,
        paddingBottom: 24
    },
    telLabel: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 16,
        lineHeight: 18.75,
        letterSpacing: -0.3
    },
    phoneNumber: {
        flexDirection: 'row'
    },
    editCountryCode: {
        width: 91,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    countryCode: {
        height: '100%',
        fontFamily: 'Gilroy-Regular',
        fontSize: 16,
        letterSpacing: -0.3,
        color: '#052555'
    },
    telephoneNumber: {
        width: 250,
        height: 24,
        fontSize: 16,
        fontFamily: 'Gilroy-Medium',
        letterSpacing: 4,
        alignContent: 'flex-end',
        lineHeight: 18.75,
        color: '#052555'
    },
    timeZone: {
        width: 341,
        paddingBottom: 24
    },
    timeZoneLabel: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 16,
        lineHeight: 18.75,
        letterSpacing: -0.3
    },
    editTimeZone: {
        flexDirection: 'row'
    },
    inputTimeZone: {
        width: 309,
        height: 24,
        fontFamily: 'Gilroy-Regular',
        fontSize: 16,
        lineHeight: 18.75,
        letterSpacing: -0.3,
        color: '#052555'
    },
    buttonSelectTimeZone: {
        width: 32, alignItems: 'center'
    },
    svgDown: {
        paddingLeft: 13.93
    },
    buttonSave: {
        alignItems: 'center'
    },
    buttonSaveClick: {
        width: 341,
        height: 48,
        borderRadius: 12,
        backgroundColor: '#2D7AD8',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
