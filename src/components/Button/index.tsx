import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native"
import { Ibutton } from "./types"

import { colors } from '../../../app.json';
import { styles } from "./styles";

export const Button = (props: Ibutton) => {
    return (
        <View style={styles.containerButton}>
            <TouchableOpacity
                onPress={props.onPress}
                disabled={props.disabled}
                style={props.disabled ? [styles.button, props.style, styles.buttonDisabled] : [styles.button, props.style]}
            >
                {   
                    props.loading ?
                    <ActivityIndicator size={30} color={colors.whiteColor} /> : 
                    <Text style={styles.text}>{props.placeholder}</Text>
                }
            </TouchableOpacity>
        </View>
       
    )
}