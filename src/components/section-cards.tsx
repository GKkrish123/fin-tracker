/* eslint-disable react/no-unescaped-entities */
import {
  IconClock,
  IconPigMoney,
  IconCalendarEvent,
  IconFileDollar,
} from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      
      {/* 1. Progress Tracker */}
      <Card className="transition duration-300 hover:shadow-md @container/card flex flex-col justify-between bg-gradient-to-tl from-white to-gray-200 border border-gray-300">
        <CardHeader className="pb-0">
          <CardDescription className="text-gray">Milestone Progress</CardDescription>
          <CardTitle className="text-2xl font-semibold @[250px]/card:text-3xl">
            2 of 3 Payments
          </CardTitle>
          <CardAction className="pt-2">
            <Badge variant="outline" className="border-gray-400">
              <IconClock className="mr-1 h-4 w-4" />
              Next in 27 days
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex flex-col gap-2 mt-4">
          <Progress value={67} className="h-2" />
          <div className="text-sm text-muted-foreground">
            You're making great progress — 1 more to go!
          </div>
        </CardFooter>
      </Card>

      {/* 2. Interest Saved */}
      <Card className="transition duration-300 hover:shadow-lg @container/card flex flex-col justify-between bg-gradient-to-tl from-white to-emerald-100 border border-emerald-200 text-white">
        <CardHeader className="pb-0">
          <CardDescription className="text-emerald-900 dark:text-emerald-200">
            Interest Saved
          </CardDescription>
          <CardTitle className="text-2xl font-bold text-emerald-800 dark:text-emerald-100 @[250px]/card:text-3xl">
            $412.67
          </CardTitle>
          <CardAction className="pt-2">
            <Badge variant="outline" className="text-emerald-800 border-emerald-400 dark:text-emerald-200">
              <IconPigMoney className="mr-1 h-4 w-4" />
              On Track
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="text-sm text-emerald-800 dark:text-emerald-200 mt-4">
          Keep it up! You’re saving money by staying on track.
        </CardFooter>
      </Card>

      {/* 3. Next Payment Summary */}
      <Card className="transition duration-300 hover:shadow-lg @container/card flex flex-col justify-between bg-gradient-to-tl from-white to-neutral-200 border border-neutral-300">
        <CardHeader className="pb-0">
          <CardDescription className="text-neutral">Next Payment</CardDescription>
          <CardTitle className="text-2xl font-semibold @[250px]/card:text-3xl">
            $500.00
          </CardTitle>
          <CardAction className="pt-2">
            <Badge variant="outline" className="border-neutral-400">
              <IconCalendarEvent className="mr-1 h-4 w-4" />
              Due Aug 17, 2025
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="text-sm text-muted-foreground mt-4">
          Scheduled and auto-pay enabled
        </CardFooter>
      </Card>

      {/* 4. Loan Overview */}
      <Card className="transition duration-300 hover:shadow-lg @container/card flex flex-col justify-between bg-gradient-to-tl from-white to-slate-200 border border-slate-300">
        <CardHeader className="pb-0">
          <CardDescription className="text-slate">Loan Overview</CardDescription>
          <CardTitle className="text-2xl font-semibold @[250px]/card:text-3xl">
            $12,450 / $25,000
          </CardTitle>
          <CardAction className="pt-2">
            <Badge variant="outline" className="border-slate-400">
              <IconFileDollar className="mr-1 h-4 w-4" />
              17.99% APR
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="text-sm text-muted-foreground mt-4">
          You’re halfway there — keep going strong.
        </CardFooter>
      </Card>
    </div>
  )
}
