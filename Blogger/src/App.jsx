import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authService} from  './appwrite/auth'
import {logIn, logOut} from './store/authSlice'
import './App.css'

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then( (userData) => {
        if(userData){
          dispatch(logIn({userData}));
        }else{
          dispatch(logOut());
        }
      })
      .finally(() => {
        setLoading(false);
      })
  },[]);
  
  return !loading ? (
    <div className='min-h-screen flex items-center justify-center'>Loading....</div>
  ) : null;
}

export default App
