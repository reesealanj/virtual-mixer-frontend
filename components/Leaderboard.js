import Link from "next/link";

export default function Leaderboard({ teams }) {
    let totals = [];

    for (let i = 0; i < teams.length; i++) {
        let sum = 0;

        for (let j = 0; j < teams[i].scores.length; j++) {
            sum += teams[i].scores[j].score;
        }

        totals.push({
            team: teams[i].Name,
            total: sum,
            id: teams[i].id,
        });
    }

    totals.sort((a, b) => (a.total < b.total ? 1 : -1));

    return (
        <>
            <ul className="py-5">
                {totals.map((total, index) => (
                    <li key={index}>
                        <Link href={`/teams/single?id=${total.id}`}>
                            <a className="border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md">
                                <h1 className="mr-5 ml-3 font-bold text-4xl">
                                    {index < 3
                                        ? index < 1
                                            ? "🥇"
                                            : index < 2
                                            ? "🥈"
                                            : "🥉"
                                        : ` ${index + 1}.`}
                                </h1>
                                <h1 className="text-center mx-auto text-2xl font-bold">
                                    {total.team}
                                </h1>
                                <h1 className="text-center ml-auto text-xl font-bold">
                                    <span className="text-purple-600">
                                        {total.total} points
                                    </span>
                                </h1>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
