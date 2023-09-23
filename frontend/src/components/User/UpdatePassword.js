import React,{Fragment} from 'react';
import MetaData from '../Layout/MetaData';
import './UpdatePassword.css';
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";


const UpdatePassword = () => {
  return (
    <Fragment>
        <MetaData title={'Update Password'}/>
        <div className='updatePasswordContainer'>
            <div className='updatePasswordBox'>
                <h2 className='updatePasswordHeading'>Update Your Password</h2>
                <form className='updatePasswordForm'>
                    <div className='loginPassword'>
                        <VpnKeyIcon/>
                        <input 
                        type='password'
                        placeholder='Old Password'
                        required
                        />
                    </div>
                    <div className='loginPassword'>
                        <LockOpenIcon/>
                        <input 
                        type='password'
                        placeholder='New Password'
                        required
                        />
                    </div>
                    <div className='loginPassword'>
                        <LockIcon/>
                        <input 
                        type='password'
                        placeholder='Confirm Password'
                        required
                        />
                    </div>
                    <input 
                    type='submit'
                    value='Change Password'
                    className='updatePasswordBtn'
                    />
                </form>
            </div>
        </div>
    </Fragment>
  )
}

export default UpdatePassword
