//import * as firebase from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ButtonGoogle } from "../../pages/stylesGlobal/styles";
import firebaseConfig from '../config/firebase';

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
        console.log(user)
      }).catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        //console.log(credential)
      });

  }

  const actionLoginGoogle = () => {
    LogarComGoogle()
  }

  return (
    <>
      <ButtonGoogle>
      <button  className="btn third" onClick={actionLoginGoogle}/>
      </ButtonGoogle>
    </>
  )
}
export default AuthGoogle;
