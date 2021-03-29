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
            <button onClick={handleLogout}>Log Out</button>
        </Layout>
    );
}
