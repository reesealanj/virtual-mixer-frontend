import Head from "next/head";
import Navigation from "./Navigation";

export default function Home({ children, title }) {
    return (
        <div className="bg-gray-300">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <main className="container mx-auto max-w-xl pt-8 min-h-screen">
                {children}
            </main>

            <footer className="text-center">
                <a
                    href="https://www.instagram.com/reesealanj"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Created by Reese Jones
                </a>
            </footer>
        </div>
    );
}
