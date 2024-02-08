import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/Accordion'

import { TrashIcon } from '@radix-ui/react-icons'

export default function Home() {
  return (
    <main className="max-w-4xl m-auto h-screen flex flex-col items-center justify-center">
      <h1 className="">Hello Word</h1>
      <h2>GET START - FINANCE MANAGEMENT</h2>

      <AccordionDemo />
    </main>
  )
}

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="">Purchases of the month</AccordionTrigger>
        <AccordionContent className="">
          <div className="w-full bg-slate-200 p-2 rounded-sm flex gap-6 items-center justify-between text-center font-medium text-base font-sans mb-4 ">
            <span className="w-full flex items-center justify-center ">
              Itens
            </span>
            <span className="w-full flex items-center justify-center ">
              Purchase date
            </span>
            <span className="w-full flex items-center justify-center ">
              Payment method
            </span>
            <span className="w-full flex items-center justify-center ">
              Price
            </span>
            <span className="w-full flex items-center justify-center ">
              Already paid
            </span>
            <span className="w-full flex items-center justify-center ">
              Due date day
            </span>
          </div>

          <div className="w-full p-2 rounded-sm flex gap-6 items-center justify-between text-center font-medium text-gray-700 text-sm font-sans mb-2 border-b-2 border-gray-200">
            <span className="w-full flex items-center justify-center flex-col gap-2">
              <div>
                <span className="text-xs font-light text-orange-600 rounded-sm py-1 px-2 bg-orange-200 flex items-center justify-center gap-1">
                  Economia - Jecé
                </span>
              </div>
              Curso Rocketseat
            </span>
            <span className="w-full flex items-center justify-center ">
              01/01
            </span>
            <span className="w-full flex items-center justify-center ">
              PIX KETHY
            </span>
            <span className="w-full flex items-center justify-center ">
              R$ 597,00
            </span>
            <span className="w-full flex items-center justify-center ">
              true
            </span>
            <span className="w-full flex items-center justify-center ">
              5/02
            </span>
          </div>

          <div className="w-full p-2 rounded-sm flex gap-6 items-center justify-between text-center font-medium text-gray-700 text-sm font-sans mb-2 border-b-2 border-gray-200">
            <span className="w-full flex items-center justify-center flex-col gap-2">
              <div>
                <span className="text-xs font-light text-orange-600 rounded-sm py-1 px-2 bg-orange-200 flex items-center justify-center gap-1">
                  Alimentação - Casal
                </span>
              </div>
              Sorvetes
            </span>
            <span className="w-full flex items-center justify-center ">
              06/01
            </span>
            <span className="w-full flex items-center justify-center ">
              PIX KETHY
            </span>
            <span className="w-full flex items-center justify-center ">
              R$ 61,70
            </span>
            <span className="w-full flex items-center justify-center ">
              true
            </span>
            <span className="w-full flex items-center justify-center ">
              5/02
            </span>
          </div>

          <div className="w-full p-2 rounded-sm flex gap-6 items-center justify-between text-center font-medium text-gray-700 text-sm font-sans mb-2 ">
            <span className="w-full flex items-center justify-center flex-col gap-2">
              <div>
                <span className="text-xs font-light text-orange-600 rounded-sm py-1 px-2 bg-orange-200 flex items-center justify-center gap-1">
                  Casa - Jecé
                </span>
              </div>
              Coop: Queijo, Banana 2 sucos
            </span>
            <span className="w-full flex items-center justify-center ">
              18/01
            </span>
            <span className="w-full flex items-center justify-center ">
              Crédito C6 Jecé
            </span>
            <span className="w-full flex items-center justify-center ">
              R$ 56,46
            </span>
            <span className="w-full flex items-center justify-center ">
              false
            </span>
            <span className="w-full flex items-center justify-center ">
              25/02
            </span>
          </div>

          <div className="w-full bg-slate-200 py-2 px-6 rounded-sm flex gap-6 items-center justify-between text-center font-medium text-base font-sans mb-0">
            <span className="w-full flex items-center justify-start ">
              Total Spend
            </span>

            <span className="w-full flex items-center justify-end">
              R$ 715.16
            </span>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="">Purchases Installments</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="">Signatures</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
