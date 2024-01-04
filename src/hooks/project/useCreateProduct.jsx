import React, { useState } from 'react';
import {useHistory} from "react-router-dom"
import { ref ,uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../../DB/firebase';
import useProjectContext from './useProjectContext';
import { addDoc, collection } from 'firebase/firestore';
const useCreateProduct = () => {
    const [progress, setProgress] = useState(0);
    const history = useHistory();
    const {dispatch} = useProjectContext() 
    const submitForm = (title, foneNumber, address, brand, categ, desc, img, inStock, size, price, ) => {
        
        const storageRef = ref(storage, `images/${img.name}`);
        const uploadTask = uploadBytesResumable(storageRef, img)

        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log(progress)
                setProgress(progress)
            }, 
            error => {
                console.log(error)
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    addDoc(collection(db, 'produtos'), {
                        title: title, foneNumber: Number(foneNumber), categories: categ.toLowerCase().split(','),
                        address: address, brand: brand, desc: desc, image: url, inStock: Number(inStock),
                        size: size.split(','), price: Number(price)

                    }) .then((data) => {
                        dispatch({type: "CREATE", payload: data.id});
                        // history.push("/");
                    })   
                })
            } 
        )
    }
    return {submitForm, progress}
}
export default useCreateProduct