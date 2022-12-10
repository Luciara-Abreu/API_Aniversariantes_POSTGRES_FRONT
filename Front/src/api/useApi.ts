import axios from 'axios';
import { signOut } from 'firebase/auth';
import { auth } from './libs/firebase';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: { id: 3, name: 'José', email: 'jose@gmail.com' }
        };
        const response = await api.post('/validate', { token });
        return response.data;
    },
    /*signin: async (email: string, password: string) => {
        const response = await api.post('/login', { auth, email, password  });    
        console.log('usuário =====>',response)
        return response;
    },*/

    signout:  async () => {
        await signOut(auth);
    }
});