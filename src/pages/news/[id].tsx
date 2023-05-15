import Head from 'next/head';
import {useRouter} from "next/router";

export default function News() {
    const router = useRouter();

    return <div>
            <Head>
                <title>My page title</title>
            </Head>
        <h1>Page: {router.query.id}</h1>
    </div>
}