import AsyncStorage from "@react-native-async-storage/async-storage";
import * as api  from "../DevagramApiServices"
import { Ilogin, IUser } from "./types"

const login = async (body: Ilogin) => {
    const { data } = await api.post('/login', body);

    await AsyncStorage.setItem('token', data.token);
    updateCurrentUser();
}

const register = async (body?: FormData) => {
    await api.post('/cadastro', body, {"content-Type": "multipart/form-data"})
}

const updateCurrentUser = async () => {
    const user = await api.get('/usuario');

    await AsyncStorage.setItem('name', user.data.name);
    await AsyncStorage.setItem('email', user.data.email);
    await AsyncStorage.setItem('id', user.data._id);
    await AsyncStorage.setItem('avatar', user.data.avatar);
};

const getCurrentUser = async () => {
    const user: IUser = {
        id: await AsyncStorage.getItem('id'),
        name: await AsyncStorage.getItem('name'),
        email: await AsyncStorage.getItem('email'),
        token: await AsyncStorage.getItem('token'),
        avatar: await AsyncStorage.getItem('avatar'),
    } 
    return user;
};
export {login, getCurrentUser, register};