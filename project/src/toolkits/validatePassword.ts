const pattern = /(?=.*\d)(?=.*[a-zA-Z]).{2,}/;

function validatePassword(value: string) {
  return pattern.test(value);
}

export default validatePassword;
