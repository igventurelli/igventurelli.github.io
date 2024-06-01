import Hero from '@/components/hero'
import PostItem from './post-item'
import Talks from '@/components/talks'
import FeaturedProjects from '@/components/featured-projects'
import WidgetNewsletter from '@/components/widget-newsletter'
import WidgetSponsor from '@/components/widget-sponsor'
import WidgetBook from '@/components/widget-book'
import PostsList from '@/components/posts-list'

export const metadata = {
  title: 'Igor Venturelli | Software Engineer',
  description: 'Welcome to the personal website of Igor Venturelli, a skilled software engineer. Discover my professional journey, including work experience, education, side hustles, and testimonials. Dive into my personal blog to explore insights on technology and more. Let\'s connect and collaborate on innovative projects.',
}

export default async function Home() {

  return (
    <>
      <Hero />
      { /* Content */}
      <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">

        { /* Middle area */}
        <div className="grow">
          <div className="max-w-[700px]">
            <div className="space-y-10">

              <section>
                <h2 className="font-aspekta text-xl font-[650] mb-3">Latest Articles</h2>
                <PostsList />
                {/* Articles list */}
              </section>

              {/* <Talks /> */}
              <FeaturedProjects />

            </div>
          </div>
        </div>

        { /* Right sidebar */}
        <aside className="md:w-[240px] lg:w-[300px] shrink-0">
          <div className="space-y-6">

            <WidgetNewsletter />
            {/* <WidgetSponsor />
            <WidgetBook /> */}

          </div>
        </aside>

      </div>
    </>
  )
}
