import axios from 'axios';
import { signOut } from 'firebase/auth';
import { auth } from './libs/firebase';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.post('/validate', { token });
        return response.data;
        return {
            user: { id: 3, name: 'José', email: 'jose@gmail.com' }
        };
    },

    signin: async (email: string, password: string) => {
        const response = await api.post('/login', { auth, email, password  });   
        if (localStorage.getItem("response") !== null) {
            // Não está na localStorage
            console.log('usuário =====>',response)
        } 
        return response;
    },

    signout:  async () => {
        await signOut(auth);
    }
});