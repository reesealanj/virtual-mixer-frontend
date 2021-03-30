import Layout from "../../components/Layout";
import Router from "next/router";
import { destroyCookie } from "nookies";
import Link from "next/link";

export default function Dashboard({ context }) {
    async function handleLogout() {
        destroyCookie(null, "jwt", {
            path: "/",
        });
        Router.push("/");
    }

    return (
        <Layout title="TKE Mixer Scoreboard">
            <h1 className="text-center text-4xl mb-5 font-extrabold">
                Admin Dashboard
            </h1>
            <Link href={"/admin/create"}>
                <button className="my-5 w-full px-3 py-3 rounded text-white font-bold items-center justify-center hover:bg-green-400 hover:text-white bg-green-500">
                    Create Team
                </button>
            </Link>
            <Link href={"/admin/submit"}>
                <button className="my-5 w-full px-3 py-3 rounded text-white font-bold items-center justify-center hover:bg-green-400 hover:text-white bg-green-500">
                    Submit Score
                </button>
            </Link>
            <button
                onClick={handleLogout}
                className="mt-5 w-full px-3 py-3 rounded text-white font-bold items-center justify-center hover:bg-blue-400 hover:text-white bg-blue-500"
            >
                Log Out
            </button>
        </Layout>
    );
}
