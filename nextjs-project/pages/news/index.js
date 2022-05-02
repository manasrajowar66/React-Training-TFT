import React from 'react';
import Link from 'next/link';

const News = () => {
    return (
        <>
            <h1>News Page</h1>
            <ul>
                <li>
                    <Link href='/news/1234442'>Next Js is greate framework</Link>
                </li>
                <li>
                    <Link href='/news/something-else'>Something Else</Link>
                </li>
            </ul>
        </>
    )
}

export default News
