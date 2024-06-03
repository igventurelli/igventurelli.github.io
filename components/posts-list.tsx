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
    const [loading, setLoading] = useState(true)
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
                setLoading(true)
                const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@igventurelli')
                const data = await res.json()
                setItems(data.items)
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return (
            <div role="status" className="max-w-sm animate-pulse mt-5">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <br />
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <br />
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    return (
        <div>
            {items.slice(0, 4).map((item, index) => <PostItem 
                key={index} 
                title={item.title}
                image={getImageUrl(item.description)}
                publishedAt={item.pubDate}
                url={item.link}
                content={getContent(item.description)}
                categories={item.categories}
            />)}
        </div>
    )
}