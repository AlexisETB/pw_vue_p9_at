import axios from "axios";

const BaseURL = "http://localhost:8082/auth/token";

const getToken = async (username, password, role) => {
    const token = await axios.get(`${BaseURL}?user=${username}&password=${password}&role=${role}`).then(r => r.data);
    console.log(`${BaseURL}?user=${username}&password=${password}&role=${role}`);
    return token;
}

export const getTokenFacade = async (username, password, role) =>{
    return await getToken(username, password, role);
}