import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get("screen");

import { colors } from '../../../app.json';

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height * 0.05,
        backgroundColor: colors.primaryColor
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around',
        marginVertical: height * 0.009
    }
})