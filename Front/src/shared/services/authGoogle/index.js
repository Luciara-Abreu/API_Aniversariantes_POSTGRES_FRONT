//import * as firebase from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../../../libs/firebase';
import GoogleButton from "../../components/buttons/buttonAuthGoogle";

const provider = new GoogleAuthProvider();

const AuthGoogle = () => {
  const auth = getAuth(app);

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
    <GoogleButton  onClick={actionLoginGoogle}>Logar com Google</GoogleButton>  
    </>
  )
}
export default AuthGoogle;
