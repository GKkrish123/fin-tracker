'use client'

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Select } from '@/components/ui/select'
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useMemo, useState } from 'react'

// Utility to generate mock data
function generateMockData(months: number) {
  const now = new Date()
  const data = []
  for (let i = months - 1; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1)
    const label = date.toLocaleString('default', { month: 'short', year: months > 12 ? '2-digit' : undefined })
    const principal = 1000 + Math.floor(Math.random() * 2000)
    const interest = 150 + Math.floor(Math.random() * 500)
    data.push({ date: label, principal, interest })
  }
  return data
}

const timeOptions = {
  '3m': 3,
  '6m': 6,
  '1y': 12,
}

export function PaymentActivityChart() {
  const [range, setRange] = useState<'3m' | '6m' | '1y'>('1y')

  const data = useMemo(() => generateMockData(timeOptions[range]), [range])

  return (
    <Card className="border border-muted bg-muted/30 shadow-sm">
      <CardHeader className="pb-2 flex flex-row items-start justify-between">
        <div>
          <CardTitle className="text-lg">Payment Activity</CardTitle>
          <CardDescription>
            Principal vs Interest -{' '}
            {{
              '3m': 'Last 3 Months',
              '6m': 'Last 6 Months',
              '1y': 'Last 1 Year',
            }[range]}
          </CardDescription>
        </div>
        <Select value={range} onValueChange={(v) => setRange(v as typeof range)}>
          <SelectTrigger className="w-[120px] text-xs h-8">
            <SelectValue placeholder="Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3m">3 Months</SelectItem>
            <SelectItem value="6m">6 Months</SelectItem>
            <SelectItem value="1y">1 Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="p-0">
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={data} margin={{ top: 0, right: 16, left: 8, bottom: 0 }}>
            <defs>
              <linearGradient id="fillPrincipal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="fillInterest" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                fontSize: '0.875rem',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
            />
            <Area
              type="monotone"
              dataKey="principal"
              stroke="#3b82f6"
              fill="url(#fillPrincipal)"
              strokeWidth={2}
              dot={false}
            />
            <Area
              type="monotone"
              dataKey="interest"
              stroke="#10b981"
              fill="url(#fillInterest)"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
