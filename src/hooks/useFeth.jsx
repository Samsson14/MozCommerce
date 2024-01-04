import { db } from '../DB/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { useState } from 'react';
import useProjectConstext from './project/useProjectContext';
export const useFetch = () => {
    const [data, setData] = useState('');
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)
    const collRef = collection(db, "produtos");
    const {dispatch} = useProjectConstext()
    const fetching = async() => {
        setIsPending(false)
        try {
            const data = await getDocs(collRef);
            const fetchData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
            if(fetchData) {
                setIsPending(true);
                setData(fetchData);
                dispatch({type: 'SET', payload: fetchData})
                console.log(fetchData);
            }
            } catch (error) {
            console.log(error.message);
            setError(error.message);
        }        
    }
    return { data, isPending, fetching, error } 
}

