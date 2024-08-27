export default function generatePassword() {
  let password: string = '';
  let characters: string =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%¨&*()_-+={[}]~^;:.>/?';
  let passwordLength = 8;

  for (let index = 0; index < passwordLength; index++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
}
