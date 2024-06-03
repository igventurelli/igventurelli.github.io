import Image from 'next/image'
import WidgetSponsor from '@/components/widget-sponsor'
import WidgetBook from '@/components/widget-book'
import Avatar01 from '@/public/images/avatar-01.jpg'
import Avatar02 from '@/public/images/avatar-02.jpg'
import Avatar03 from '@/public/images/avatar-03.jpg'
import Avatar04 from '@/public/images/avatar-04.jpg'
import Avatar05 from '@/public/images/avatar-05.jpg'
import Testimonial01 from '@/public/images/testimonial-01.jpg'
import Testimonial02 from '@/public/images/testimonial-02.jpg'
import Link from 'next/link'

export const metadata = {
  title: 'Subscribe - Igor Venturelli',
  description: 'Stay updated with the latest insights and updates from Igor Venturelli. Subscribe to my newsletter for exclusive content, tech trends, project updates, and more. Join a community of like-minded enthusiasts and never miss a post.',
}

export default function Subscribe() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <div className="space-y-10">
            <section>
              {/* Page title */}
              <h1 className="h1 font-aspekta mb-5">Never miss an update</h1>
              {/* Page content */}
              <div className="text-slate-500 dark:text-slate-400 space-y-8">
                <p className="text-lg">
                  This newsletter is written by me. Here is what to expect by subscribing:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 fill-current text-sky-500 mr-3 mt-1.5 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Big tech and high-growth startups, from the inside.</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 fill-current text-sky-500 mr-3 mt-1.5 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Actionable advice for engineering managers, software engineers and tech workers.</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 fill-current text-sky-500 mr-3 mt-1.5 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>A pulse on the tech market and scoop worth knowing.</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 fill-current text-sky-500 mr-3 mt-1.5 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>An independent viewpoint.</span>
                  </li>
                </ul>
                <div>
                  {/* Subscribe form */}
                  <Link className="btn-sm w-[30%]  text-slate-100 bg-sky-500 hover:bg-sky-600" target="_blank" href="https://embeds.beehiiv.com/4572ba6b-21cf-4d30-8319-a6e3c6087642">
                    Subscribe
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">

          {/* <WidgetSponsor /> */}
          {/* <WidgetBook /> */}

        </div>
      </aside>

    </div>
  )
}
