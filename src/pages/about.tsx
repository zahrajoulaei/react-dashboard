import Layout from "../components/layout/Layout";
import Message from "../components/Message";

export default function About() {
    return (
        <div>
             <Layout children={<Message />} />
        </div>
    );
}

