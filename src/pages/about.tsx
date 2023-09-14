import {ChangeEventHandler, FC, KeyboardEventHandler, useEffect, useRef, useState} from "react";
import {Inter} from 'next/font/google'
import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import {FileProps, getSortedPostsData} from "../../lib/posts";
import {GetStaticProps} from 'next'

const inter = Inter({subsets: ['latin']})

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        },
    };
}

interface TestINT {
    allPostsData: FileProps[];
}

const AboutPage: FC<TestINT> = ({allPostsData}) => {
    const [startTime, setStartTime] = useState<number>(0);
    const [now, setNow] = useState<number>(0);
    const [value, setValue] = useState('');
    const btnRef = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);

    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());

        setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    let secondsPassed = 0;
    if (startTime != 0 && now != 0) {
        secondsPassed = (now - startTime) / 1000;
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        if (inputRef.current != null) {
            inputRef.current.focus();
        }
    })

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (inputRef.current != null && e.key == "Enter") {
            alert(inputRef.current.value)
        }
    }

    return (
        <Layout>
            <Head>
                <title>About page</title>
            </Head>
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart} ref={btnRef}>
                Start
            </button>
            <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef}/>
            <h2>
                <Link href="/">Back to home sad</Link>
            </h2>
            {allPostsData.map(({id, date, title}) => (
                <li key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br/>
                    {id}
                    <br/>
                    {date}
                </li>
            ))}
        </Layout>
    );
}
export default AboutPage