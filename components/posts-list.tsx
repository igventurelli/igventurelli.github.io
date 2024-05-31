'use client'

import PostItem from '@/app/post-item';
import { useEffect, useState } from 'react'

export default function PostsList() {
    const [items, setItems] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@igventurelli')
                const data = await res.json()
                const items = data.items
                setItems(items)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);

    return (<p>{items.slice(0, 4).map((item, index) => {
        const start = item.description.indexOf('<p>')
        const end = item.description.indexOf('</p>')
        const content = item.description.substring(start + 3, end)

        const imageStart = item.description.indexOf('<img alt=\"\" src=\"')
        const imageEnd = item.description.indexOf('\"><figcaption>')
        const imageUrl = item.description.substring(imageStart + 17, imageEnd)

        return (<PostItem key={index} 
            title={item.title}
            image={imageUrl}
            publishedAt={item.pubDate}
            url={item.link}
            content={content}
            categories={item.categories}
        />)
   })}</p>)
}