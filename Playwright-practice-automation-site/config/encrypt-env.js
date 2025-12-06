import { encrypt } from './cryptoHelper.js';

//file to help us encrypt everything in .env file
const values = {
  baseURL: 'https://practice-automation.com/',
  name: 'Admin',
  password: 'admin123',
  email: 'test@example.com',
  message: 'Hello this is test message'
};

for (const [key, value] of Object.entries(values)) {
  console.log(`${key}=${encrypt(value)}`);
}
