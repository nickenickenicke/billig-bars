'use client'

import { Bar } from '@/models/Bar'
import { useState } from 'react'
import { getBars, getBarsByLocation } from '@/actions/getBars'
import { locationsSuggestions } from '@/lib/loactions'

interface Props {
  bars: Bar[]
}

export default function DisplayBars({ bars }: Props) {
  const [barsState, setBarsState] = useState<Bar[]>(bars)

  return (
    <>
      <button
        type="button"
        onClick={async () => {
          const newBars = await getBarsByLocation(locationsSuggestions.bysistorget)
          setBarsState(newBars)
        }}
      >
        Från Bysistorget
      </button>
      <button
        type="button"
        onClick={async () => {
          const newBars = await getBarsByLocation(locationsSuggestions.medborgarplatsen)
          setBarsState(newBars)
        }}
      >
        Från Medis
      </button>
      <button
        type="button"
        onClick={async () => {
          const newBars = await getBars()
          setBarsState(newBars)
        }}
      >
        Ta alla
      </button>
      <pre>
        HEJ!
        {JSON.stringify(barsState, null, 2)}
      </pre>
    </>
  )
}
