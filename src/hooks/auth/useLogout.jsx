import {auth} from '../../DB/firebase';
import {signOut} from 'firebase/auth';
import { useAuthContext } from './useAuthContext';
import { useHistory } from 'react-router-dom';

export const Logout = () => {
    const {dispatch} = useAuthContext();
    const history = useHistory()
    const logoutUser = async() => {
            await signOut(auth)
            .then((res) => {
            //storage
                localStorage.removeItem('user')
            //state
                dispatch({type: 'LOGOUT'})
            //redirect
                history.push('/')
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return {logoutUser}
}