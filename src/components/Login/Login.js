import React, { useCallback, useState } from 'react';
import './Login.css';
import {
  LoginSocialGoogle,
  LoginSocialAmazon,
  LoginSocialFacebook,
  LoginSocialGithub,
  LoginSocialInstagram,
  LoginSocialLinkedin,
  LoginSocialMicrosoft,
  LoginSocialPinterest,
  LoginSocialTwitter,
  LoginSocialApple,
  IResolveParams,
} from 'reactjs-social-login';

import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  TwitterLoginButton,
  AppleLoginButton,
} from 'react-social-login-buttons';

const REDIRECT_URI = 'http://localhost:3000'

function Login({profile, setProfile}) {
  const [provider, setProvider] = useState('');
  
  console.log(profile)
  const onLoginStart = useCallback(() => {
    alert('login start');
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider('');
    alert('logout success');
  }, []);

  const onLogout = useCallback(() => {}, []);
  return (
    <>
      <div className={`App ${provider && profile ? 'hide' : ''}`}>
      {!profile ? <><h1 className="title">ReactJS Social Login</h1>
        <LoginSocialGoogle
          client_id={process.env.REACT_APP_GG_APP_ID || ''}
          onLoginStart={onLoginStart}
          redirect_uri={REDIRECT_URI}
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={err => {
            console.log(err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle></> : <><h1>Welcome {profile.name}!</h1></>}
        
      </div>
    </>
  );
};

export default Login;