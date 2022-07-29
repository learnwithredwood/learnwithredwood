import { db } from 'api/src/lib/db'
import CryptoJS from 'crypto-js';

const { USER_EMAIL = 'fake@email.com', USER_PASSWORD = 'password' } = process.env

// Redwoods' hashing algorithm. In case you find it useful elsewhere.
export const hashPassword = (password: string, salt = 'LEARN_REDWOOD') => {
  const saltToUse = salt || CryptoJS.lib.WordArray.random(128 / 8).toString();
  return [
    CryptoJS.PBKDF2(password, saltToUse, { keySize: 256 / 32 }).toString(),
    saltToUse,
  ];
};

const [hashedPassword, salt] = hashPassword(USER_PASSWORD)

const USER = {
  email: USER_EMAIL,
  name: 'foobar',
  hashedPassword,
  salt
}

export default async () => {
  try {
    await db.user.create({ data: USER })
  } catch (error) {
    console.error(error.message)
    return null
  }
}
