import React, { useEffect } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {logout} from '../../actions/userAction';

const Logout = () => {
    const { logout} = useSelector((state) => state.user);
   const dispatch = useDispatch();
   const alert = useAlert();
   const navigate = useNavigate();

   useEffect(()=>{
    if(logout){
        dispatch(logout());
        alert.success("Logot Successfully");
        navigate('/login');
    }
   },[dispatch,alert,navigate]);

  return (
    <div>
      
    </div>
  )
}

export default Logout
