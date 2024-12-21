import { BarsList } from '@/components/BarsList'
import { GeolocateButton } from '@/components/GeolocateButton'
import { SvgMascot } from '@/components/svgs/SvgMascot'
import Link from 'next/link'

export default function Home() {
  return (
    <article className="mt-6 px-2">
      <article className="grid grid-cols-3 grid-rows-[auto_auto_1fr_2fr]">
        <div className="col-[1/4] row-[1/4] rounded-lg bg-bg-mustard"></div>
        <h2 className="col-[1/4] row-[1/2] px-3 pt-4 text-2xl font-medium">
          Söders billigaste bärs
        </h2>
        <section className="col-[1/4] row-[2/3] p-3">
          <p>
            Törstig och pank? Var hittar du egentligen Söders billigaste bärs? Är det ens öppet nu?
            Och kan du fortfarande få tre stora stark för under en hundring?
          </p>
          <p>
            Du är inte ensam om dessa tankar. Och nu har du svaret på alla dina frågor framför dig.
          </p>
          <div className="flex basis-0 justify-center">
            <Link
              href="/bars"
              className="rounded-full border-2 border-black bg-black px-10 py-3 font-medium uppercase tracking-wider text-white"
            >
              Till barerna
            </Link>
          </div>
        </section>
        <figure className="col-[1/4] row-[3/5] place-items-center">
          <SvgMascot className="w-48" />
        </figure>
      </article>
    </article>
  )
}
