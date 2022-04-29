import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get("screen");

import { colors } from '../../../app.json';

export const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: colors.whiteColor,
        borderBottomColor: colors.gray01,
        borderBottomWidth: 1,
    },
    icon: {
        marginLeft: 9
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 16,
        paddingVertical: 20
    },
    containerInputSearch: {
        flexDirection: "row",
        width: width / 1.8,
        height: 40,
        alignItems: "center",
        backgroundColor: colors.whiteColor,
        borderRadius: 4
    },
    input: {
        width: width / 2.1,
        paddingHorizontal: 12,
        color: colors.gray04
    },
    inputActive: {
        width: width / 2.1,
        paddingHorizontal: 12,
        color: colors.primaryColor
    }
})