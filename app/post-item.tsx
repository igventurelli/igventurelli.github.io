import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'

export interface CData {
  _cdata: string
}

export interface Text {
  _text: string
}

export interface Post {
  title: CData
  pubDate: Text
  link: Text
  'content:encoded': CData
  category: [CData]
}

export default function PostItem({ post }: { post: Post }) {

  const getContent = (description: string) => description
            .substring(description.indexOf('<p>') + 3, description.indexOf('</p>'))
            .replace(/<[^>]*>/, '').
            replace(/<\/[^>]*>/, '')
            .substring(0, 200)
            .trim() 
            + '...'

    const getImageUrl = (description: string) => description
        .substring(
            description.indexOf('https://cdn-images-1.medium.com'), 
            description.indexOf('\" /><figcaption>')
        )

  return (
    <article className="py-5 border-b border-slate-100 dark:border-slate-800">
      <div className="flex items-start">
        <Image className="rounded w-16 h-16 sm:w-[88px] sm:h-[88px] object-cover mr-6" src={getImageUrl(post['content:encoded']._cdata)} width={88} height={88} alt={post.title._cdata} />
        <div>
          <div className="text-xs text-slate-500 uppercase mb-1">
            <span className="text-sky-500">—</span> <PostDate dateString={post.pubDate._text} />
          </div>
          <h3 className="font-aspekta text-lg font-[650] mb-1">
            <Link
              className="inline-flex relative hover:text-sky-500 duration-150 ease-out before:scale-x-0 before:origin-center before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:translate-y-1/4 before:-rotate-2 hover:before:scale-100 before:duration-150 before:ease-in-out"
              href={post.link._text} target="_blank"
            >
              {post.title._cdata}
            </Link>
          </h3>
          <div className="flex">
            <div className="grow text-sm text-slate-500 dark:text-slate-400">{getContent(post['content:encoded']._cdata)}</div>
            <Link className="hidden lg:flex shrink-0 text-sky-500 items-center justify-center w-12 group" target="_blank" href={post.link._text} tabIndex={-1}>
              <svg
                className="fill-current group-hover:translate-x-2 duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
              >
                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
              </svg>
            </Link>
          </div>
          <div className="mt-2">
            {post.category.map((category, index) => (
              <div key={index} className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                <Link href="https://medium.com/@igventurelli" target="_blank">{category._cdata}</Link></div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
