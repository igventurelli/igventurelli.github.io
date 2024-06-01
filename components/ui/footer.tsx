export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="py-8">
        <div className="text-center md:flex md:items-center md:justify-between">
          {/* Social links */}
          <ul className="inline-flex mb-4 md:order-1 md:ml-4 md:mb-0 space-x-2">
          <li>
              <a
                className="flex justify-center items-center text-sky-500 hover:text-sky-600 transition duration-150 ease-in-out"
                href="https://github.com/igventurelli"
                target="_blank"
                aria-label="Github"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="flex justify-center items-center text-sky-500 hover:text-sky-600 transition duration-150 ease-in-out"
                href="https://blog.igventurelli.io/"
                aria-label="Medium"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 icon icon-tabler icon-tabler-brand-medium" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1" stroke="#0EA5E9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M8 9h1l3 3l3 -3h1" />
                  <path d="M8 15l2 0" />
                  <path d="M14 15l2 0" />
                  <path d="M9 9l0 6" />
                  <path d="M15 9l0 6" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyright */}
          <div className="text-sm text-slate-500 dark:text-slate-400">Copyright © Igor Venturelli. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
