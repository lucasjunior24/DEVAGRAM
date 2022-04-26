import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get("screen");

import { colors } from '../../app.json';

export const communStyles = StyleSheet.create({
    textErro: {
        fontWeight: '400',
        fontSize: 14,
        color: colors.primaryColor,
        lineHeight: 21,
        marginBottom: height * 0.02
    }
})