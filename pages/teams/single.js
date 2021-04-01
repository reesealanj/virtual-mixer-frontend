import Layout from "../../components/Layout";
import Link from "next/link";

export default function SingleTeam({ team, scores }) {
    const noScores =
        scores.length > 0 ? (
            ""
        ) : (
            <li>
                <a className="border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md">
                    <h1 className="text-center mx-auto text-xl font-bold">
                        <span className="mx-auto text-gray-600">
                            {team} has no scores entered!
                        </span>
                    </h1>
                </a>
            </li>
        );
    return (
        <Layout title="TKE Mixer Scoreboard">
            <h1 className="text-center text-4xl font-extrabold my-5">
                {team} Scores by Game
            </h1>

            <ul className="py-5">
                {noScores}
                {scores.map((score, index) => (
                    <li key={index}>
                        <a className="border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md">
                            <h1 className="text-center mr-auto text-2xl font-bold">
                                {score.game}
                            </h1>
                            <h1 className="text-center ml-auto text-xl font-bold">
                                <span className="text-purple-600">
                                    {score.score} points
                                </span>
                            </h1>
                        </a>
                    </li>
                ))}
            </ul>
            <Link href={"/"}>
                <button className="my-5 w-full px-3 py-3 rounded text-white font-bold items-center justify-center hover:bg-blue-400 hover:text-white bg-blue-500">
                    Return to Leaderboard
                </button>
            </Link>
        </Layout>
    );
}

export async function getServerSideProps({ query }) {
    const id = query.id;
    try {
        const team = await fetch(`${process.env.API_BASE}/teams/${id}`);
        const teamResponse = await team.json();
        const scores = teamResponse.scores;
        let games = [];
        for (let i = 0; i < scores.length; i++) {
            let gameId = scores[i].game;
            try {
                const game = await fetch(
                    `${process.env.API_BASE}/games/${gameId}`
                );
                const gameResponse = await game.json();

                games.push({
                    game: gameResponse.Title,
                    gameId: gameResponse.id,
                    score: scores[i].score,
                    scoreId: scores[i].id,
                });
            } catch (error) {
                console.error(error);
            }
        }

        games.sort((a, b) => (a.score < b.score ? 1 : -1));

        return {
            props: { team: teamResponse.Name, scores: games },
        };
    } catch (error) {
        console.error(error);
    }
}
