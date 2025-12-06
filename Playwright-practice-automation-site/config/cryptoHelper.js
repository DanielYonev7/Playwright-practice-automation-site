import CryptoJS from 'crypto-js';
import dotenv from 'dotenv';

dotenv.config(); //loading the config

const SECRET_KEY = process.env.SECRET_KEY;

//if we have not set the secret key it should throw an exception
if (!SECRET_KEY) {
  throw new Error('SECRET_KEY environment variable is not set');
}

export function encrypt(plainText) {
  return CryptoJS.AES.encrypt(plainText, SECRET_KEY).toString();
}

export function decrypt(cipherText) {
  const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
}
