import { createContext, useContext, useMemo } from "react";
import useAuthState from "../hooks/useAuthState";
import useAuthActions from "../hooks/useAuthActions";

const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext)
};

export function AuthProvider({ children }) {
    const { authState, setAuthState } = useAuthState();
    const { register, login, logout, loading, error } = useAuthActions(setAuthState);

    console.log(authState);

    const value = useMemo(() => ({
        register,
        login,
        logout,
        authState,
        loading,
        error,
    }), [register, login, logout, authState, loading, error]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}