import { Button, Container } from "react-bootstrap";
import { useFetch } from "../hooks/useFeth"; 
import { useEffect } from "react";
import { db } from "../DB/firebase";
import ProductList from "../components/ProductList";
import {doc, deleteDoc} from 'firebase/firestore'
const Home = () => {
    
    const {data, fetching, error, isPending } = useFetch()

    useEffect(() => {
        fetching()
    }, [])
    const deleteM = async (id) => {
        const product = doc(db, "produtos", id);
        await deleteDoc(product)
        fetching()
    }
    return ( 
        <Container>
            {!isPending && <div className="spinner-border text-secondary my-3" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>}
            {error && <div className="error">{error}</div>}
            {data && <ProductList del={deleteM} product={data} title='Todos os produtos'/>}
        </Container>
     );
}
 
export default Home;