'use client'

import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { OpeningHours } from '@/models/Bar'
import { getClosingHour, getOpeningHour } from '@/utils/timeTools'
import { useContext } from 'react'

interface BarOpenOrClosedTextProps {
  is_open: boolean
  opening_hours: OpeningHours[]
  opens_at: string
  now?: boolean
}

export const BarOpenOrClosedText = ({
  is_open,
  opening_hours,
  opens_at,
  now
}: BarOpenOrClosedTextProps) => {
  const {
    globalState: { currentQuery }
  } = useContext(GlobalStateContext)
  return (
    <>
      {is_open
        ? 'Öppet till ' + getClosingHour(opening_hours, now ? null : currentQuery.day)
        : getOpeningHour(opens_at)}
    </>
  )
}
