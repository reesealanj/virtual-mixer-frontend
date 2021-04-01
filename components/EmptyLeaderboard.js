export default function EmptyLeaderboard() {
    return (
        <>
            <ul className="py-5">
                <li>
                    <a className="border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md">
                        <h1 className="text-center mx-auto text-xl font-bold">
                            <span className="text-gray-600">
                                There are no teams on the Leaderboard!
                            </span>
                        </h1>
                    </a>
                </li>
            </ul>
        </>
    );
}
