import {GetStaticProps, NextPage} from "next";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Link from "next/link";


export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersFC = await res.json();

    return {
        props: {
            usersFC
        },
    };
}

interface UsersList {
    usersFC: { id: string, name: string }[];
}
const UsersList: NextPage<UsersList> = ({usersFC}) => {
    return (
        <Layout>
            <Head>
                <title>Users List</title>
            </Head>

            <ul>
                {usersFC && usersFC.map(({id, name}) => (
                    <li key={id}>
                        <Link href={`/users/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}

export default UsersList