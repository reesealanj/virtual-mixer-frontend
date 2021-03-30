import Layout from "../components/Layout";
import Leaderboard from "../components/Leaderboard";
import { useState, useEffect } from "react";

export default function Home() {
    const [teamList, setTeamList] = useState([]);
    useEffect(() => {
        async function fetchTeamList() {
            try {
                const teams = await fetch(`${process.env.API_BASE}/teams`);
                const teamsResponse = await teams.json();

                setTeamList(teamsResponse);
            } catch (error) {
                console.error(error);
            }
        }
        fetchTeamList();
    }, []);

    return (
        <Layout title="TKE Mixer Scoreboard" className="min-h-screen">
            <h1 className="text-center text-4xl font-extrabold mb-5">
                TKE & SDT Mixer Leaderboard
            </h1>
            <Leaderboard teams={teamList} />
        </Layout>
    );
}
