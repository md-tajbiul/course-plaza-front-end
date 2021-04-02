import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import firebaseConfig from "./firebase.config";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {pathname: '/'};

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(googleProvider)
    .then((result) => {     
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email};
        setLoggedInUser(signedInUser);        
        history.replace(from);
    }).catch((error) => {
    console.log('Error: ', error.message );
  });
    }
    const handleFacebookSignIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth()
    .signInWithPopup(fbProvider)
    .then((result) => {
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email};
        setLoggedInUser(signedInUser);
        history.replace(from);
    }).catch((error) => {
    console.log('Error: ', error.message );
  });
    }
    const handleGithubSignIn = () => {
        const githubProvider = new firebase.auth.GithubAuthProvider()
    firebase.auth()
    .signInWithPopup(githubProvider)
    .then((result) => {
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email};
        setLoggedInUser(signedInUser);
        history.replace(from);
    }).catch((error) => {
    console.log('Error: ', error.message );
  });
    }

    return (
        <div className="container">
            <div style={{marginTop:'280px'}}>
            <Button onClick={handleGoogleSignIn} variant="primary" size="lg" block>
                Google SignIn
            </Button>
            <Button onClick={handleFacebookSignIn} variant="primary" size="lg" block>
                Facebook SignIn
            </Button>
            <Button onClick={handleGithubSignIn} variant="primary" size="lg" block>
                Github SignIn
            </Button>
            </div>
        </div>
    );
};

export default Login;