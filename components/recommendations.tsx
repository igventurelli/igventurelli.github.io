import Image from 'next/image'

import Laudier from '@/public/images/depoimentos/laudier.png'
import Caui from '@/public/images/depoimentos/caui.png'

export default function Recommendations() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Recommendations</h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image className="rounded-full" src={Laudier} width={56} height={56} alt="Laudier Jacques" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Laudier Jacques</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Engineer at Embraer</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 italic">
                “Igor is a highly skilled developer, very proactive, and a great team player. I thoroughly enjoyed working with him on software development projects, as he consistently came up with different and optimized solutions for our product. I highly recommend him for positions that require proactivity, out-of-the-box thinking, and dynamic solutions.”
              </div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image className="rounded-full" src={Caui} width={56} height={56} alt="Cauí Chagas" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Cauí Chagas</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Tech Manager at Pismo</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 italic">
                “Igor is an excellent developer, seeking creative solutions for everyday problems and handling group work well, always proactive and willing to tackle new challenges. I learned a lot from him during the time we worked together!”
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}