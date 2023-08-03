import './Profile.scss'
import { useAuth0 } from '@auth0/auth0-react'

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
    {isAuthenticated && (
      <div className='ProfileCont'>
        <img src={user.picture} alt={user.name} className='ProfileImg'/>
        <h2 className='Profileh2'>{user.name}</h2>
        {/* <p className='Profilep'>{user.email}</p> */}
      </div>
    )}    
    </>
    );
    
}



        
      
  