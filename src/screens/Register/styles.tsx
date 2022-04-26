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
    containerWithAccount: {
        marginTop: height * 0.04,
        alignItems: 'center',
    },
    textSignIn: {
        marginTop: 5,
        fontSize: 14,
        color: colors.primaryColor,
        textDecorationLine: "underline"
    }
})