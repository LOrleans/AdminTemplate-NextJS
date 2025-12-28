'use client'

import { createContext, useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    onIdTokenChanged,
    User as FirebaseUser 
} from "firebase/auth";

import User from "@/src/model/User";
import app from "../../firebase/config"; // Importa o app que você configurou

interface AuthContextProps {
    user?: User | null;
    loginGoogle?: () => Promise<void>;
    loading?: boolean;
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

    // Configura o monitoramento do estado do usuário
    useEffect(() => {
        // onIdTokenChanged é o que o professor costuma usar para garantir que o token esteja sempre atualizado
        const unsubscribe = onIdTokenChanged(auth, async (userFirebase) => {
            if (userFirebase) {
                const usuario = await userNormalized(userFirebase);
                setUser(usuario);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    async function loginGoogle() {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            
            if (result.user) {
                const usuario = await userNormalized(result.user);
                setUser(usuario);
                router.push('/');
            }
        } catch (error) {
            console.error("Erro no login Google:", error);
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            loginGoogle,
            loading
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;