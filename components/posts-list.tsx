'use client'

import PostItem from '@/app/post-item';
import { useEffect, useState } from 'react'

export class PostType {
    title: string
    pubDate: string
    link: string
    description: string
    categories: []
  
    constructor(title: string, pubDate: string, link: string, description: string, categories: []) {
      this.title = title
      this.pubDate = pubDate
      this.link = link
      this.description = description
      this.categories = categories
    }
  }

export default function PostsList() {
    const [items, setItems] = useState<PostType[]>([])

    const getContent = (description: string) => description
            .substring(description.indexOf('<p>') + 3, description.indexOf('</p>'))
            .replace(/<[^>]*>/, '').
            replace(/<\/[^>]*>/, '')
            .substring(0, 200)
            .trim() 
            + '...'

    const getImageUrl = (description: string) => description
        .substring(
            description.indexOf('<img alt=\"\" src=\"') + 17, 
            description.indexOf('\"><figcaption>')
        )

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

    return (<div>{items.slice(0, 4).map((item, index) => <PostItem 
        key={index} 
        title={item.title}
        image={getImageUrl(item.description)}
        publishedAt={item.pubDate}
        url={item.link}
        content={getContent(item.description)}
        categories={item.categories}
    />)}</div>)
}