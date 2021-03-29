import Layout from "../../components/Layout";

export default function CreateTeam({ authData }) {
    console.log(authData);
    return (
        <Layout title="TKE Mixer Scoreboard">
            <h1 className="text-center text-4xl font-extrabold">Create Team</h1>
        </Layout>
    );
}
