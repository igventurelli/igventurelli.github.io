export default function WidgetSkills() {
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 p-5">
      <div className="font-aspekta font-[650] mb-3">Technical Skills</div>
      <ul className="space-y-3">
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <span className="text-sky-500 mr-2">—</span> <a className="font-aspekta font-[650] text-sm truncate">Java</a>
          </div>
          <div className="shrink-0 relative w-20 h-1.5 bg-slate-200 dark:bg-slate-700 before:absolute before:inset-0 before:bg-sky-500 before:w-[100%]" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <span className="text-sky-500 mr-2">—</span> <a className="font-aspekta font-[650] text-sm truncate">Spring / Boot</a>
          </div>
          <div className="shrink-0 relative w-20 h-1.5 bg-slate-200 dark:bg-slate-700 before:absolute before:inset-0 before:bg-sky-500 before:w-[100%]" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <span className="text-sky-500 mr-2">—</span> <a className="font-aspekta font-[650] text-sm truncate">Typescript</a>
          </div>
          <div className="shrink-0 relative w-20 h-1.5 bg-slate-200 dark:bg-slate-700 before:absolute before:inset-0 before:bg-sky-500 before:w-[75%]" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <span className="text-sky-500 mr-2">—</span> <a className="font-aspekta font-[650] text-sm truncate">Node / Nest</a>
          </div>
          <div className="shrink-0 relative w-20 h-1.5 bg-slate-200 dark:bg-slate-700 before:absolute before:inset-0 before:bg-sky-500 before:w-[75%]" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <span className="text-sky-500 mr-2">—</span> <a className="font-aspekta font-[650] text-sm truncate">React / Next</a>
          </div>
          <div className="shrink-0 relative w-20 h-1.5 bg-slate-200 dark:bg-slate-700 before:absolute before:inset-0 before:bg-sky-500 before:w-[60%]" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
      </ul>
    </div>
  )
}