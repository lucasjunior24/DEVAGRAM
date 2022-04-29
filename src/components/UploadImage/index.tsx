import { Image, TextInput, TouchableOpacity, View } from "react-native"
import { IInput } from "./types"

import * as ImagePicker from 'expo-image-picker'; 

import { colors } from '../../../app.json';
import { styles } from "./styles";

export const UploadImage = (props: {
    setImage: (image: ImagePicker.ImagePickerResult | null) => void,
    image: any
}) => {
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
        if(!result.cancelled) {
            props.setImage(result);
        }
    }
    return (
        <View>
            <TouchableOpacity style={styles.containerAvatar} onPress={pickImage}>
                {props.image ? 
                    <Image style={styles.image} source={{uri: props.image.uri}} />
                    :
                    <Image source={require('../../_assets/images/Avatar_Foto.png')}></Image>
                }
                {/* <Image source={require('../../../assets/icon.png')} /> */}
            </TouchableOpacity>
        </View>
       
    )
}