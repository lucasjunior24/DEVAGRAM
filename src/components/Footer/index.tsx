import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Text, TouchableOpacity, View } from "react-native"
import { RootStackParamList } from "../../routes/RootStackParams";
import { styles } from "./styles";
import { IFooter } from "./types";

export const Footer = (props: IFooter) => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Login'>
    const navigation = useNavigation<navigationTypes>();

    const manu = [
        {
            title: "Home",
            onPress: () => navigation.navigate('Home'),
            icon: require('../../_assets/images/home.png'),
            iconActivated: require('../../_assets/images/homeAtivo.png'),
        },
        {
            title: "NewPublication",
            onPress: () => navigation.navigate('NewPublication'),
            icon: require('../../_assets/images/newPublication.png'),
            iconActivated: require('../../_assets/images/newPublicationAtivo.png'),
        },
        {
            title: "Profile",
            onPress: () => navigation.navigate('Profile'),
            icon: require('../../_assets/images/userNaoAtivo.png'),
            iconActivated: require('../../_assets/images/user.png'),
        }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {manu.map((botao, index) => (
                    <TouchableOpacity key={index} onPress={botao.onPress}>
                        <Image source={props.currentTab === botao.title ? botao.iconActivated : botao.icon}></Image>
                    </TouchableOpacity>
                ))}
            </View>
            <Text>Footwe</Text>
        </View>
    )
}