import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get("screen");

import { colors } from '../../../app.json';

export const styles = StyleSheet.create({
    containerButton: {
        marginTop: height/20
    },
    button: {
        width: width/1.3,
        height: height/15,
        backgroundColor: colors.primaryColor,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: "center"
    },
    text: {
        color: colors.whiteColor,
        fontWeight: '600',
        fontSize: 16,
        fontStyle: "normal"
    },
    buttonDisabled: {
        backgroundColor: colors.gray03
    }
})