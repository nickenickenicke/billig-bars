import { BarsList } from '@/components/BarsList'
import { GeolocateButton } from '@/components/GeolocateButton'
import { Mascot } from '@/components/svgs/Mascot'

export default function Home() {
  return (
    <article className="-mt-navbar flex min-h-[90svh] items-center justify-center px-2">
      <Mascot className="w-2/3" />
    </article>
  )
}
