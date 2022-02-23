export default function validateLoginData(email, password){
    const emailValidator = new RegExp(/^\S+@\S+\.\S+$/);
    const passwordValidator = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
      if (emailValidator.test(email)) {
        if(passwordValidator.test(password)){
          return `Welcome to The Jungle`;
        } else {
          return `tolong masukan password sesuai dengan ketentuan`;
        }
      }
     return `tolong masukan email yang valid`;

}
