import { createContext, useEffect, useReducer } from "react";

export const ProjectContext = createContext();

export const ProjectReducer = (state, action) => {
        switch (action.type) {
            case 'SET': 
              return {
                products: action.payload
              }
            case 'CREATE':
              return {
                products: [action.payload, ...state.products]
              }
            case 'DELETE':
              return {
                products: state.products.filter((w) => w.id !== action.payload.id)
              }
            default:
              return state
    }
}

export const ProjectContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(ProjectReducer, {
        products: null
    });

    console.log('ProjectContext state:', state);

    return (
        <ProjectContext.Provider value={{...state, dispatch}}>
            {children}
        </ProjectContext.Provider>
    ) 
}