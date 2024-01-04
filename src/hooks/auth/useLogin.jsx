import { useHistory } from 'react-router-dom';
import { useAuthContext } from './useAuthContext';
import { useState } from 'react';
import {auth, googleProvider} from '../../DB/firebase';
import {signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';

export const UseLogin = () => {
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const history = useHistory()
    const {dispatch} = useAuthContext()

    const login = async(email, password) => {
        setIsPending(false)
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredentail) => {
            const user = userCredentail.user.email
            //storege
            localStorage.setItem('user', JSON.stringify(user))
            //update state
            dispatch({type: 'LOGIN', payload: user})
            //redirect
            history.push('/')
        })
        .catch(err => {
            setError("Erro no email ou na palavra-passe")
        })
    }
    const signInWithGoogle = async() => {
        await signInWithPopup(auth, googleProvider)
            .then((userCredentail) => {
                const user = userCredentail.user.email
                //storege
                localStorage.setItem('user', JSON.stringify(user))
                //update state
                dispatch({type: 'LOGIN', payload: user})
                //redirect
                history.push('/')
            })
            .catch(err => {
                setError('O email já está em uso')
            })
        }
    
        return {
            isPending, login, error, signInWithGoogle  
        }
    }
    