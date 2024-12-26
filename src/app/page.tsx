import { BarCard } from '@/components/BarCard'
import { Subheading } from '@/components/Subheading'
import { SvgMascot } from '@/components/svgs/SvgMascot'
import { getCurrentlyCheapestBar } from '@/services/barServices'
import Link from 'next/link'

export default async function Home() {
  const bars = await getCurrentlyCheapestBar()
  return (
    <article className="mt-6 grid grid-cols-3 grid-rows-[auto_auto_3fr_4fr_auto_auto] px-2">
      <div className="col-[1/4] row-[1/4] rounded-lg bg-bg-mustard"></div>
      <h2 className="col-[1/4] row-[1/2] px-3 pt-4 text-2xl font-medium">Söders billigaste bärs</h2>
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
      <figure className="col-[1/4] row-[3/6] justify-self-center">
        <SvgMascot className="w-48" />
      </figure>

      <section className="col-[1/4] row-[6/7]">
        {bars.length > 0 && bars[0].is_open && (
          <>
            <Subheading>Billigast just nu</Subheading>
            <BarCard bar={bars[0]} />
          </>
        )}
      </section>

      <section className="col-[1/4] row-[7/8] mt-8 rounded-lg bg-bg-pink">
        <h2 className="px-3 pt-4 text-2xl font-medium">Hur funkar det?</h2>
        <div className="p-3">
          <p>
            Billig Bärs räknar på hur många centiliter öl man får per krona på en krog och ger efter
            det grönt, gult eller rött ljust. Då behöver inte du sitta där och räkna ut ifall en
            50-centilitare på ett ställe egentligen är billigare än en 40-centilitare med ett annat
            ställe. Vi räknar alltid på det billigaste priset och du kan fokusera på att spara
            pengar till mer öl.
          </p>
          <p>
            Om du är pigg i bollen kan du{' '}
            <Link href="/about">läsa precis hur det fungerar här</Link>.
          </p>
          <div className="flex basis-0 justify-center">
            <Link
              href="/about"
              className="rounded-full border-2 border-black bg-black px-10 py-3 font-medium uppercase tracking-wider text-white"
            >
              Om Billig Bärs
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
