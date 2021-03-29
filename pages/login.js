import Layout from "../components/Layout";
import { useState } from "react";
import { setCookie } from "nookies";
import Router from "next/router";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        const loginInfo = {
            identifier: username,
            password: password,
        };

        const login = await fetch("http://localhost:1337/auth/local", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginInfo),
        });

        const loginResponse = await login.json();

        setCookie(null, "jwt", loginResponse.jwt, {
            maxAge: 30 * 30 * 60 * 60,
            path: "/",
        });

        Router.push("/admin/dashboard");
    }
    return (
        <Layout title="TKE Mixer Scoreboard">
            <h1 className="text-center text-2xl font-extrabold">
                Log In to create and update content!
            </h1>
            <form>
                <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <br />
                <br />
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <br />
                <br />
                <button type="button" onClick={() => handleLogin()}>
                    Login
                </button>
            </form>
        </Layout>
    );
}
