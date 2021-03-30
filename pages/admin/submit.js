import Layout from "../../components/Layout";
import Link from "next/link";
import { useState } from "react";
import { parseCookies } from "nookies";
import Router from "next/router";

export default function SubmitScores({ games, teams }) {
    const [teamId, setTeamId] = useState("1");
    const [gameId, setGameId] = useState("1");
    const [score, setScore] = useState("");

    async function handleSubmit() {
        const jwt = parseCookies().jwt;
        let scoreInfo = {
            game: {
                id: gameId,
            },
            team: {
                id: teamId,
            },
            score: score,
        };
        console.log(scoreInfo);
        const submitScore = await fetch("http://localhost:1337/scores", {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${jwt}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(scoreInfo),
        });

        const submitScoreResponse = await submitScore.json();
        console.log(submitScoreResponse);
        Router.push("/");
    }

    let gameItems = games.map((game) => (
        <option key={game.id} value={game.id}>
            {game.Title}
        </option>
    ));

    let teamItems = teams.map((team) => (
        <option key={team.id} value={team.id}>
            {team.Name}
        </option>
    ));

    return (
        <Layout title="TKE Mixer Scoreboard">
            <h1 className="text-center text-4xl font-extrabold">
                Submit Team Scores
            </h1>
            <form className="pt-5 my-5">
                <label className="block">
                    <span className="text-gray-700 font-bold">Game</span>
                    <select
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        onChange={(e) => {
                            setGameId(e.target.value);
                            console.log(e.target.value);
                        }}
                    >
                        <option value="0">Select a Game</option>
                        {gameItems}
                    </select>
                </label>
                <br />
                <br />
                <label className="block">
                    <span className="text-gray-700 font-bold">Team</span>
                    <select
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        onChange={(e) => {
                            setTeamId(e.target.value);
                            console.log(e.target.value);
                        }}
                    >
                        <option value="0">Select a Team</option>
                        {teamItems}
                    </select>
                </label>
                <br />
                <br />
                <label className="block">
                    <span className="text-gray-700 font-bold">Score</span>
                    <input
                        type="number"
                        onChange={(e) => setScore(e.target.value)}
                        value={score}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </label>
                <br />
                <br />
                <button
                    type="button"
                    onClick={() => handleSubmit()}
                    className="w-full px-3 py-3 rounded text-white font-bold items-center justify-center hover:bg-green-400 hover:text-white bg-green-500"
                >
                    Submit Score
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

export async function getServerSideProps() {
    try {
        const gameRequest = await fetch("http://localhost:1337/games");
        const gamesResponse = await gameRequest.json();
        const teamRequest = await fetch("http://localhost:1337/teams");
        const teamResponse = await teamRequest.json();

        return {
            props: { games: gamesResponse, teams: teamResponse },
        };
    } catch (error) {
        return {
            props: { games: games, teams: teams },
        };
    }
}
