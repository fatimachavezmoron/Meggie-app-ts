import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './Log.scss'


interface LoginButtonProp {
  title: string;
}

  export const LoginButton: React.FC<LoginButtonProp>  = ({title}: LoginButtonProp) => {
    const { loginWithRedirect } = useAuth0();
    return (
      <>
        <div className='title'>
          {title}
        </div>
        <br/>
        <button className='btnLog' onClick={() => loginWithRedirect()}>
        Sign in
        </button>
        </>
      )
  }
