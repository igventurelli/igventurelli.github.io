import Image from 'next/image'
import Avatar01 from '@/public/images/avatar-01.jpg'
import Avatar02 from '@/public/images/avatar-02.jpg'
import Avatar03 from '@/public/images/avatar-03.jpg'
import Avatar04 from '@/public/images/avatar-04.jpg'
import Avatar05 from '@/public/images/avatar-05.jpg'
import Link from 'next/link'

export default function WidgetNewsletter() {
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 p-5">
      <div className="text-center mb-5">
        <div className="font-aspekta font-[650] mb-1">Join the Newsletter!</div>
        <p className="text-sm text-slate-500 dark:text-slate-400">Join for latest tech updates & insights!</p>
      </div>
      <Link className="btn-sm w-full  text-slate-100 bg-sky-500 hover:bg-sky-600" target="_blank" href="https://embeds.beehiiv.com/4572ba6b-21cf-4d30-8319-a6e3c6087642">
        Subscribe
      </Link>
    </div>
  )
}