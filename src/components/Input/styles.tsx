import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get("screen");

import { colors } from '../../../app.json';

export const styles = StyleSheet.create({
    containerInput: {
        marginTop: height * 0.03,
        width: width/1.3,
        height: height/25,
        borderBottomColor: colors.primaryColor,
        borderBottomWidth: 2
    },
    input: {
        width: width/1.4,
        paddingHorizontal: 12,
        fontSize: 14,
        color: colors.gray02,
        fontWeight: '400',
        fontStyle: "normal"
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    }
})