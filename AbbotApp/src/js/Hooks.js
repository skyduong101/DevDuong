import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

// Wraps it’s children with Provider that accepts value prop
export const StateProvider = ({ reducer, initialState, children }) => (
    // Pass useReducer hook to Provider so it becomes available to all components
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Hook to access state across components; returns a [state, dispatch] array
export const useStateValue = () => useContext(StateContext);
