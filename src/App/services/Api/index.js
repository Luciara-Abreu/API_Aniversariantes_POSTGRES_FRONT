
import * as firebase from "firebase/app";
import { getAuth, getRedirectResult, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ButtonGoogle } from "../../pages/stylesGlobal/styles";
import firebaseConfig from '../config/firebase';

// img ='C:\_PROJETOS\Agenda_Aniversariantes\src\App\assets\Imag\ícone Google.jpg'

const provider = new GoogleAuthProvider();

const AuthGoogle = () => {
  const auth = getAuth(firebaseConfig);  
  
  const LogarComGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        //console.log( token, user)
      }).catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
          //console.log(credential)
      });
  }
  
  const actionLoginGoogle = () => {
    LogarComGoogle()
  }  

  getRedirectResult(auth)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
  
      const user = result.user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });

  return (
    <>
    <ButtonGoogle onClick={actionLoginGoogle}>
      Autenticar com Google
    </ButtonGoogle>
    </>
  )
}
export default AuthGoogle;
