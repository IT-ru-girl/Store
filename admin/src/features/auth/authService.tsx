import apiClient from '../../utils/apiClient';

export interface ICredentials {
  email: string;
  password: string;
}
const AuthService = {
  login: async (credentials: ICredentials) => {
    const response = await apiClient.post('/auth/login', credentials);
    if (response.status === 200) {
      localStorage.setItem('token', response.data.token);
      return response.data.user;
    }
    throw new Error('Login failed');
  },
};

export default AuthService;
