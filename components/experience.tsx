import Image from 'next/image'
import Truelogic from '@/public/images/empresas/truelogic.png'
import Exacta from '@/public/images/empresas/exacta.png'
import Sciensa from '@/public/images/empresas/sciensa.png'
import CleanCloud from '@/public/images/empresas/cleancloud.png'
import Mult from '@/public/images/empresas/mult.png'
import Embraer from '@/public/images/empresas/embraer.png'

export default function Experience() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Work Experience</h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image
                className="rounded-full"
                src={Truelogic}
                width={32}
                height={32}
                alt="Truelogic"
              />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">Jul 2023 <span className="text-slate-400 dark:text-slate-600">·</span> Present</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Senior Software Engineer</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Truelogic</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">In my role as a Senior Software Engineer for Google, I am responsible for developing and maintaining the Chrome Web Experience.</div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
            <Image
                className="rounded-full"
                src={Exacta}
                width={32}
                height={32}
                alt="Exactaworks"
              />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">Feb 2022 <span className="text-slate-400 dark:text-slate-600">·</span> Jul 2023</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Senior Software Engineer</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Exactaworks</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">In my role as a Senior Software Engineer for Google, I am responsible for developing and maintaining the Chrome Web Experience.</div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
            <Image
                className="rounded-full"
                src={Sciensa}
                width={32}
                height={32}
                alt="Sciensa"
              />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">May 2021 <span className="text-slate-400 dark:text-slate-600">·</span> Jan 2022</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Tech Lead</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Sciensa</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">In my role as a Senior Software Engineer for Google, I am responsible for developing and maintaining the Chrome Web Experience.</div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
            <Image
                className="rounded-full"
                src={CleanCloud}
                width={32}
                height={32}
                alt="CleanCloud"
              />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">Sep 2019 <span className="text-slate-400 dark:text-slate-600">·</span> May 2021</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Senior Software Engineer</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">CleanCloud</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">In my role as a Senior Software Engineer for Google, I am responsible for developing and maintaining the Chrome Web Experience.</div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
            <Image
                className="rounded-full"
                src={Mult}
                width={32}
                height={32}
                alt="Mult-e"
              />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">Nov 2016 <span className="text-slate-400 dark:text-slate-600">·</span> Sep 2019</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Mid Level Software Engineer</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Mult-e</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">In my role as a Senior Software Engineer for Google, I am responsible for developing and maintaining the Chrome Web Experience.</div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
            <Image
                className="rounded-full"
                src={Embraer}
                width={32}
                height={32}
                alt="Embraer"
              />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">Sep 2010 <span className="text-slate-400 dark:text-slate-600">·</span> Nov 2016</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Intern / Jr Software Engineer</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Embraer</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">In my role as a Senior Software Engineer for Google, I am responsible for developing and maintaining the Chrome Web Experience.</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}