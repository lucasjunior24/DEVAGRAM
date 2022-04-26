import { Image, TextInput, View } from "react-native"
import { IInput } from "./types"

import { colors } from '../../../app.json';
import { styles } from "./styles";

export const Input = (props: IInput) => {
    return (
        <View style={styles.containerInput}>
            <View style={styles.row}>
                {props.icone && 
                    <Image source={props.icone} />
                }
                <TextInput 
                    placeholder={props.placeholder}
                    style={[styles.input, props.style]}
                    secureTextEntry={props.secureTextEntry}
                    value={props.value}
                    onChangeText={props.onChange}
                    autoCapitalize="none"
                />
            </View>
        </View>
    )
}