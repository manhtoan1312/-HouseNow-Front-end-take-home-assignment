import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [filterStatus, setFilterStatus] = useState<
    'all' | 'pending' | 'completed'
  >('all')
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <div className="pt-10">
          <Tabs.Root
            value={filterStatus}
            onValueChange={(value) =>
              setFilterStatus(value as 'all' | 'pending' | 'completed')
            }
          >
            <Tabs.List className="grid h-11 w-fit grid-flow-col gap-2">
              <Tabs.Trigger
                value="all"
                className="rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-center font-sans text-sm font-bold text-[#334155] data-[state=active]:border-none data-[state=active]:bg-[#334155] data-[state=active]:text-white"
              >
                All
              </Tabs.Trigger>
              <Tabs.Trigger
                value="pending"
                className="rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-center font-sans text-sm font-bold text-[#334155] data-[state=active]:border-none data-[state=active]:bg-[#334155] data-[state=active]:text-white"
              >
                Pending
              </Tabs.Trigger>
              <Tabs.Trigger
                value="completed"
                className="rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-center font-sans text-sm font-bold text-[#334155] data-[state=active]:border-none data-[state=active]:bg-[#334155] data-[state=active]:text-white"
              >
                Completed
              </Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </div>
        <div className="pt-10">
          <TodoList filterStatus={filterStatus} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
