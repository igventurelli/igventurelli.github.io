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
              <div className="text-sm text-slate-500 dark:text-slate-400">
                At Truelogic, I optimized software testing processes, introduced embedded data stores and message brokers, and implemented Agile methodologies, significantly enhancing delivery confidence and speed. Also assisted in technical interviews for senior roles.
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Java
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Spring Boot
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Kafka
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                AWS
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Kubernetes
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                PostgresSQL
              </div>
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
              <div className="text-sm text-slate-500 dark:text-slate-400">
                At Exactaworks, I enhanced software security post-cyber attack by securing microservices, managing dependencies, and developing new B2B features compliant with legal standards. Also assisted in technical interviews for HR.
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Java
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Spring Boot
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                AWS
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Kubernetes
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                MySQL
              </div>
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
              <div className="text-sm text-slate-500 dark:text-slate-400">
                At Sciensa, I led the creation of a microservice based Single Source of Truth for customer data using NoSQL, implementing event-based architecture with Kafka to ensure real-time updates.
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Java
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Spring Boot
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                AWS
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Kubernetes
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Kafka
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                MongoDB
              </div>
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
              <div className="text-sm text-slate-500 dark:text-slate-400">
                At CleanCloud, as the sole developer outside the founding team, I established CI pipelines, created a front-end component library, and implemented automated testing. Also helped design and build the second SaaS product and its cloud infrastructure.
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Java
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Spring
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                AWS
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Azure
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Vue
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Neo4j
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                DynamoDB
              </div>
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
              <div className="text-sm text-slate-500 dark:text-slate-400">
                At Mult-e, I accelerated development for enterprise systems managing aircraft maintenance, manuals, invoices, and purchases by creating integrations and enabling single sign-on. I developed and maintained applications for aircraft structural damage analysis and change history management, ensuring compliance with regulatory authorities. Implemented a Single Source of Truth for aircraft documentation and enhanced front-end development with BFFs. Additionally, I developed a web scraper for auction data integration.
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Java
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Spring Boot
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                RabbitMQ
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Elastic Search
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                AWS
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                PostgresSQL
              </div>
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
              <div className="text-sm text-slate-500 dark:text-slate-400">
                I began my career developing applications to present aircraft data and charts to leadership, integrating data from ERP systems and spreadsheets into internal databases and displaying it via web applications.
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Java
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                JSF
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                Oracle
              </div>
              <div className="text-xs inline-flex items-center font-medium bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-300 rounded-full text-center px-3 h-5 mr-1">
                MySQL
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}