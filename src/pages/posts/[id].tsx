import Layout from "@/components/layout/Layout";
import {NextPage} from "next";
import {GetStaticPaths, GetStaticProps} from 'next'
import {getAllPostIds, getPostData} from "../../../lib/posts";
import Head from "next/head";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = await getPostData(params?.id as string);
    return {
        props: {
            postData,
        },
    };
}

interface PostData {
    postData: {
        id: string,
        title: string,
        date: string,
        contentHtml: string,
    }
}

const Post: NextPage<PostData> = ({postData}) => {
    return <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        {postData.title}
        <br/>
        {postData.id}
        <br/>
        {postData.date}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <form method={'POST'} action="http://localhost:3000/api/hello">
            <input name={'title'} value={"asdads"} onChange={()=>{}}/>
            <button type={'submit'}>POST</button>
        </form>
    </Layout>;
}

export default Post