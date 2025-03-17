'use client'
import Link from "next/link";
import "./styles.css"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();
    const disabledButton = (!email || !(password.length >= 8))
    async function handleSubmit() {

        router.replace("/")

        // EXEMPLO DE REQUISIÇÂO
        // const respose = await fetch("http://localhost/login", {
        //     method: "POST",
        //     body: {
        //         email: email,
        //         password: password
        //     } as any
        // })        
    }

    return (
        <div className="container">
            <div className="form">
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="E-mail"
                    id="user"
                    className="input"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className="input"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button
                    onClick={() => handleSubmit()}
                    className="input button"
                    disabled={disabledButton}
                >
                    Entrar
                </button>
            </div>
        </div>
    );
}
