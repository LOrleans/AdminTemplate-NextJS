'use client'

import { createContext, useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    onIdTokenChanged,
    User as FirebaseUser, 
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "firebase/auth";
import Cookies from 'js-cookie'
import User from "@/src/model/User";
import app from "../../firebase/config"; 

interface AuthContextProps {
    user?: User | null;
    register?: (email: string, password: string) => Promise<void>
    login?: (email: string, password: string) => Promise<void>
    loginGoogle?: () => Promise<void>;
    loading?: boolean;
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({});

// Função para normalizar o usuário do Firebase com base no model
async function userNormalized(userFirebase: FirebaseUser): Promise<User> {
    const token = await userFirebase.getIdToken();
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName!,
        email: userFirebase.email!,
        token,
        provider: userFirebase.providerData[0].providerId,
        imgUrl: userFirebase.photoURL!, 
    };
}

export function AuthProvider(props: any) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const router = useRouter()
    const auth = getAuth(app);

    function manageCookie(logged: boolean) {
        if(logged) {
            Cookies.set('admin-template-auth', 'true', { expires: 7 })
        } else {
            Cookies.remove('admin-template-auth')
        }
    }

    async function manageSession(userFirebase: any){
        if(userFirebase?.email) {
            const usuario = await userNormalized(userFirebase);
            setUser(usuario);
            manageCookie(true);
            setLoading(false);
            return usuario.email
        } else {
            setUser(null);
            manageCookie(false);
            setLoading(false);
            return false
        }
    }

    // Configura o monitoramento do estado do usuário
    useEffect(() => {
        const unsubscribe = onIdTokenChanged(auth, manageSession);
        return () => unsubscribe();    
    }, [auth]);

    async function register(email: string, password: string) {
        try {
            setLoading(true)
            const result = await createUserWithEmailAndPassword(auth, email, password)
            await manageSession(result.user)
            router.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function login(email: string, password: string) {
        try {
            setLoading(true)
            const result = await signInWithEmailAndPassword(auth, email, password)
            await manageSession(result.user)
            router.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function loginGoogle() {
        try {
            setLoading(true)
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
              
            await manageSession(result.user)
            router.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function logout(){
        try {
            setLoading(true);
            await signOut(auth); 
            router.push('/Authentication');
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            register,
            login,
            loginGoogle,
            loading,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;