import Image from 'next/image'

import AWS from '@/public/images/aws.png'

export default function Awards() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Awards</h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start mb-1">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image className="rounded-full" src={AWS} width={32} height={32} alt="Amazon Web Services" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">2019</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">AWS Certified Cloud Practitioner</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Amazon Web Services</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
              Achieving the AWS Certified Cloud Practitioner certification, I have demonstrated foundational expertise in AWS cloud services, architecture, and best practices, strengthening my ability to deliver robust cloud solutions.
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}