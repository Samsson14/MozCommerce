import { useContext } from "react";
import { ProjectContext } from "../../context/projectContext"

const useProjectContext = () => {
    const context = useContext(ProjectContext)

    if(!context) {
        throw Error ('useProjectContext must be used inside o projectProvider')
    }
    return context
};

export default useProjectContext;