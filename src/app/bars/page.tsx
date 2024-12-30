import { BarsView } from '@/components/BarsView'
import { CheckSearchParams } from '@/components/CheckSearchParams'
import { Suspense } from 'react'

export default function Bars() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <CheckSearchParams />
        <BarsView />
      </Suspense>
    </>
  )
}
