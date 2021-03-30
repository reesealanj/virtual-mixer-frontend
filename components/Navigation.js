import Link from "next/link";

export default function Navigation() {
    return (
        <>
            <nav className="flex items-center flex-wrap bg-gray-400 p-4">
                <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
                    <div className="lg:inline-flex lg:flex-row lg:mx-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                        <Link href="/">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-red-500 hover:text-white ">
                                Leaderboard
                            </a>
                        </Link>

                        <Link href="/admin/dashboard">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-red-500 hover:text-white">
                                Admin Dashboard
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
