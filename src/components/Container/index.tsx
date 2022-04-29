
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { IContainer } from "./types";
import { View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export const Container = (props: IContainer) => {
    const [filter, setFilter] = useState<string>('');
    
    return (
        <SafeAreaView style={styles.container}>
            <Header 
                default={props.headerProps.default}
                headerNewPublication={props.headerProps.headerNewPublication}    
                searchBar={{
                    value: filter,
                    onChange: (value: string) => setFilter(value)
                }}
            />
            <View style={styles.content}>
                {props.children}
            </View>
            <Footer currentTab={props.footerProps.currentTab} />
        </SafeAreaView>
    )
}