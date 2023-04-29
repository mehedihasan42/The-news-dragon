import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';

const Catagorys = () => {
    const {id} = useParams()
    const categoryNews = useLoaderData()
    return (
        <div>
           { id &&<h2>This categorys news:{categoryNews.length}</h2>}
            {
                categoryNews.map(news =><NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Catagorys;