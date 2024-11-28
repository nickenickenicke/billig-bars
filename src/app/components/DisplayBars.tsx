'use client'

import { Bar } from '@/models/Bar'
import { CurrentLocation } from '@/models/Location'
import { useState } from 'react'
import { getBars, getBarsByLocation } from '../actions/getBars'

interface Props {
  bars: Bar[]
}

export default function DisplayBars({ bars }: Props) {
  const [barsState, setBarsState] = useState<Bar[]>(bars)

  //   useEffect(() => {
  //     if (barsState.length > 0) {
  //       return
  //     }
  //     const getBarsLetsGo = async () => {
  //       const supabase = await createClient()
  //       const { data, error } = await supabase.rpc('nearby_bars', bysistorget)
  //       if (error) {
  //         console.error(error)
  //         return setBarsState([])
  //       }
  //       setBarsState(data)
  //     }

  //     getBarsLetsGo()
  //   }, [])
  const bysistorget: CurrentLocation = {
    currentlat: 59.31803212061374,
    currentlong: 18.054961588411196
  }
  const medborgarplatsen: CurrentLocation = {
    currentlat: 59.31493080050378,
    currentlong: 18.072152827709495
  }

  return (
    <>
      <button
        type="button"
        onClick={async () => {
          const newBars = await getBarsByLocation(bysistorget)
          setBarsState(newBars)
        }}
      >
        Från Bysistorget
      </button>
      <button
        type="button"
        onClick={async () => {
          const newBars = await getBarsByLocation(medborgarplatsen)
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
