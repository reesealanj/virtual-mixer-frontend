import Link from "next/link";

export default function Navigation() {
    return (
        <>
            <nav className="flex items-center flex-wrap bg-grey-600 p-4">
                <Link href="/">
                    <a className="inline-flex items-center p-3 mr-4">
                        <span className="text-xl text-black font-bold tracking-wide">
                            TKE Virtual Mixer Leaderboard
                        </span>
                    </a>
                </Link>
                <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                        <Link href="/">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-red-500 hover:text-white ">
                                Leaderboard
                            </a>
                        </Link>
                        <Link href="/teams/view">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-red-500 hover:text-white">
                                View Teams
                            </a>
                        </Link>
                        <Link href="/teams/create">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-red-500 hover:text-white">
                                Create Teams
                            </a>
                        </Link>
                        <Link href="/scores/submit">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-red-500 hover:text-white">
                                Submit Scores
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
