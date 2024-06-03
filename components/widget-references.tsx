import Image from 'next/image'

import Bruno from '@/public/images/referencias/bruno.png'
import Danilo from '@/public/images/referencias/danilo.png'

export default function WidgetReferences() {
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 p-5">
      <div className="font-aspekta font-[650] mb-3">References</div>
      <ul className="space-y-3">
        <li>
          <a className="flex justify-between items-center space-x-2 group" href="https://www.linkedin.com/in/bruno-vieira-vitoria-956326/" target="_blank">
            <div className="grow flex items-center space-x-3 truncate">
              <Image className="rounded-full" src={Bruno} width={32} height={32} alt="Bruno Vitoria" />
                <div className="truncate">
                  <div className="font-aspekta font-[650] text-sm truncate mb-1">Bruno Vitoria</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Founder, Exactaworks</div>
                </div>
            </div>
            <div className="shrink-0 text-sky-500">
              <svg className="fill-current -rotate-45 group-hover:rotate-0 transition-transform ease-out" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a className="flex justify-between items-center space-x-2 group" href="https://www.linkedin.com/in/danilomilano/" target="_blank">
            <div className="grow flex items-center space-x-3 truncate">
              <Image className="rounded-full" src={Danilo} width={32} height={32} alt="Danilo Damilano" />
                <div className="truncate">
                  <div className="font-aspekta font-[650] text-sm truncate mb-1">Danilo Damilano</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">CIO, CleanCloud by SEK</div>
                </div>
            </div>
            <div className="shrink-0 text-sky-500">
              <svg className="fill-current -rotate-45 group-hover:rotate-0 transition-transform ease-out" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
              </svg>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}