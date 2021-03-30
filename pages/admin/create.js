import Layout from "../../components/Layout";
import Link from "next/link";
import { useState } from "react";
import { parseCookies } from "nookies";
import Router from "next/router";

export default function CreateTeam() {
    const [teamName, setTeamName] = useState("");

    async function handleCreate() {
        const jwt = parseCookies().jwt;
        let teamInfo = {};
        teamInfo.Name = teamName;

        const createTeam = await fetch("http://localhost:1337/teams", {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${jwt}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(teamInfo),
        });

        const createTeamResponse = await createTeam.json();
        console.log(createTeamResponse);
        Router.push("/");
    }

    return (
        <Layout title="TKE Mixer Scoreboard">
            <h1 className="text-center text-4xl font-extrabold my-5">
                Create a new Team
            </h1>
            <form className="pt-5 my-5">
                <label className="block">
                    <span className="text-gray-700 font-bold">Team Name</span>
                    <input
                        type="text"
                        onChange={(e) => setTeamName(e.target.value)}
                        value={teamName}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </label>
                <br />
                <br />
                <button
                    type="button"
                    onClick={() => handleCreate()}
                    className="w-full px-3 py-3 rounded text-white font-bold items-center justify-center hover:bg-green-400 hover:text-white bg-green-500"
                >
                    Create Team
                </button>
            </form>
            <Link href={"/admin/dashboard"}>
                <button className="my-5 w-full px-3 py-3 rounded text-white font-bold items-center justify-center hover:bg-blue-400 hover:text-white bg-blue-500">
                    Return to Admin Dashboard
                </button>
            </Link>
        </Layout>
    );
}
