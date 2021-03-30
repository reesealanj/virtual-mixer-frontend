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

        const login = await fetch(`${process.env.API_BASE}/auth/local`, {
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
            <form className="pt-5">
                <label className="block">
                    <span className="text-gray-700">Username</span>
                    <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </label>
                <br />
                <br />
                <label className="block">
                    <span class="text-gray-700">Password</span>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </label>

                <br />
                <br />
                <button
                    type="button"
                    onClick={() => handleLogin()}
                    className="w-full px-3 py-3 rounded text-white font-bold items-center justify-center hover:bg-blue-400 hover:text-white bg-blue-500"
                >
                    Login
                </button>
            </form>
        </Layout>
    );
}
