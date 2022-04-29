import { Text, View } from "react-native"
import { Container } from "../../components/Container"

export const Home = () => {
    return (
        <Container
            headerProps={{default: true}}
            footerProps={{currentTab: 'Home'}}
        >
            <Text>Home</Text>
        </Container>
    )
}