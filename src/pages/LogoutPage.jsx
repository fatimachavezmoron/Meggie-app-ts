import { useAuth0 } from '@auth0/auth0-react'
import './Log.scss'

  export const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <>
        <button className='btnLogout' onClick={() => logout({ returnTo: window.location.origin })}>
        Sign out
        </button>
        </>
      )
  }