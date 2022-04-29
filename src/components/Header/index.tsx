import { Image, Text, TextInput, View } from "react-native"
import { IHeader } from "./types"

import { colors } from '../../../app.json';
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export const Header = (props: IHeader) => {
    return (
        <View style={styles.container}>
            {props.default && (
                <View style={styles.row}>
                    <View>
                        <Image source={require('../../../assets/icon.png')} style={styles.icon}></Image>
                    </View>

                    <View 
                        style={props?.searchBar?.value.length == 0 ? 
                            styles.containerInputSearch : 
                            [styles.containerInputSearch, 
                            { borderColor: colors.primaryColor, 
                            borderWidth: 1}]}>
                        <Image 
                            source={require('../../../assets/icon.png')} 
                            style={styles.icon} />
                        <TextInput
                            placeholder="Pesquisar"
                            style={props?.searchBar?.value.length == 0 ? styles.input : styles.inputActive}
                            value={props?.searchBar?.value}
                            onChangeText={props?.searchBar?.onChange}
                            autoCapitalize='none'
                        />
                    </View>
                </View>
            )}
        </View>
    )
}