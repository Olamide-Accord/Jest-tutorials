import axios, { AxiosResponse } from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUser(): Promise<User> {
  try {
    const response: AxiosResponse<User> = await axios.get(`https://jsonplaceholder.typicode.com/users/1`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
}


export default fetchUser;