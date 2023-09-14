import Layout from "@/components/layout/Layout";
import ContactsInfo from "@/components/ContactsInfo";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersFC: {id: number}[] = await res.json();

    const paths = usersFC.map(({id}) => ({
        params: {
            id: id.toString()
        },
    }))
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params?.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const contact = await res.json();

    return {
        props: {
            contact
        },
    };
}

interface ContactInfo {
    contact: any;
}

const Users: NextPage<ContactInfo> = ({contact}) => {

    return <Layout>
        <Link href={'/users'}>{`<-BACK`}</Link>
        <ContactsInfo contact={contact}></ContactsInfo>
    </Layout>
}

export default Users;