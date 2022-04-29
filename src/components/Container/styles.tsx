import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get("screen");

import { colors } from '../../../app.json';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteColor
    },
    content: {
        flex: 1,
        backgroundColor: colors.gray05
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    }
})