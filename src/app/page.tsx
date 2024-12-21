import { BarsList } from '@/components/BarsList'
import { GeolocateButton } from '@/components/GeolocateButton'
import { SvgMascot } from '@/components/svgs/SvgMascot'

export default function Home() {
  return (
    <article className="-mt-navbar flex min-h-[90svh] items-center justify-center px-2">
      <SvgMascot className="w-2/3" />
    </article>
  )
}
