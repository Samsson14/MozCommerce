import { AuthContext } from "../../context/Authcontext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw Error ('useAuthContext must be used on AuthContextProvider')
    }

    return context
}