import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get("screen");

import { colors } from '../../../app.json';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteColor,
        alignItems: 'center',
        justifyContent: "center",
    },
    logo: {
        width: 110,
        height: 110,
        marginBottom: height * 0.04,
    },
    containerWithAccount: {
        marginTop: height * 0.04,
        alignItems: 'center',
    },
    textSignUp: {
        marginTop: 5,
        fontSize: 14,
        color: colors.primaryColor,
        textDecorationLine: "underline"
    }
})