import AsyncStorage from "@react-native-async-storage/async-storage";
import * as api  from "../DevagramApiServices"
import { Ilogin } from "./types"

const login = async (body: Ilogin) => {
    const { data } = await api.post('/login', body);

    await AsyncStorage.setItem('token', data.token);
    updateCurrentUser();
}

const updateCurrentUser = async () => {
    const user = await api.get('/usuario');

    await AsyncStorage.setItem('name', user.data.name);
    await AsyncStorage.setItem('email', user.data.email);
    await AsyncStorage.setItem('id', user.data._id);
    await AsyncStorage.setItem('avatar', user.data.avatar);
};

export {login};