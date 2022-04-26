import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get("screen");

import { colors } from '../../../app.json';

export const styles = StyleSheet.create({
    containerAvatar: {
        marginBottom: height/35
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 100
    }
})