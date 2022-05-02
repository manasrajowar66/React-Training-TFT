import React from 'react';
import { useRouter } from 'next/router';

const DetailPage = () => {
    const router = useRouter();
    const newsID = router.query.newsId;
    return (
        <h1>Detail Page</h1>
    )
}

export default DetailPage;