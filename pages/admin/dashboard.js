import Layout from "../../components/Layout";
import Router from "next/router";
import { destroyCookie } from "nookies";

export default function Dashboard({ context }) {
    async function handleLogout() {
        destroyCookie(null, "jwt", {
            path: "/",
        });
        Router.push("/");
    }

    return (
        <Layout title="TKE Mixer Scoreboard">
            <h1 className="text-center text-4xl font-extrabold">
                Admin Dashboard
            </h1>
            <button
                onClick={handleLogout}
                className="mt-5 w-full px-3 py-3 rounded text-white font-bold items-center justify-center hover:bg-blue-400 hover:text-white bg-blue-500"
            >
                Log Out
            </button>
        </Layout>
    );
}
