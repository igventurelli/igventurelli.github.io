import Image from 'next/image'
import WidgetNewsletter from '@/components/widget-newsletter'
import WidgetSponsor from '@/components/widget-sponsor'
import AboutImg from '@/public/images/about.png'
import Experience from '@/components/experience'
import Link from 'next/link'

export const metadata = {
  title: 'About - Igor Venturelli',
  description: 'Learn more about Igor Venturelli, a passionate software engineer with a strong background in technology and innovation. Discover my professional journey, personal interests, and the values that drive my work. Get to know the person behind the code.',
}

export default function About() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

      { /* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">

          <section>
            { /* Page title */}
            <h1 className="h1 font-aspekta mb-5">Hi. I'm Igor <span className="inline-flex relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4"><Link href="https://links.igventurelli.io" target="_blank">@igventurelli</Link></span> Venturelli ✌🏻</h1>
            <Image className="w-full mt-5 mb-5" src={AboutImg} width={692} height={390} alt="About" />
            { /* Page content */}
            <div className="text-slate-500 dark:text-slate-400 space-y-8">
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Short Bio</h2>
                <p>
                  I'm a software engineer with 15 years of experience in a variety of domains. For the past few years, I've focused on highload server-side projects, distributed systems, and platform development - tinkering with infrastructure, all things containers and Cloud Native.
                </p>
                <p>
                  I know the picture above is pretty strange for this context, but you know what? This is who I am, I love CrossFit and technology, so this is me (in essence).
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Career</h2>
                <p>
                  In my role as a Senior Software Engineer for <a className="font-medium text-sky-500 hover:underline" href="https://www.truelogic.io/">Truelogic</a>, I am responsible for developing and maintaining the <a className="font-medium text-sky-500 hover:underline" href="https://www.rakuten.com/">Rakuten Rewards</a>.
                </p>
                <p>
                  My work involves developing and testing new features, optimizing performance and security, and ensuring the cashback system works for users around the world.
                </p>
              </div>
              
              <Experience />

              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Let's Connect</h2>
                <p>
                  I'm excited to connect with others via <a className="font-medium text-sky-500 hover:underline" href="mailto:igventurelli@gmail.com">email</a> and <a className="font-medium text-sky-500 hover:underline" href="https://www.linkedin.com/in/igventurelli/">LinkedIn</a> to chat about projects and ideas. I am open to hearing about potential opportunities, discussing them with you and then potentially collaborating if it's a good fit.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>

      { /* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">

          <WidgetNewsletter />
          {/* <WidgetSponsor /> */}

        </div>
      </aside>

    </div>
  )
}
