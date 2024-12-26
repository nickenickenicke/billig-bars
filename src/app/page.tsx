import { BarCard } from '@/components/BarCard'
import { Subheading } from '@/components/Subheading'
import { SvgMascot } from '@/components/svgs/SvgMascot'
import { getCurrentlyCheapestBar } from '@/services/barServices'
import Link from 'next/link'

export default async function Home() {
  const bars = await getCurrentlyCheapestBar()
  return (
    <article className="mt-6 grid grid-cols-12 grid-rows-[auto_auto_3fr_4fr_auto_auto] px-2 md:grid-rows-[auto_auto_auto_auto] md:gap-x-8 md:px-8 md:pt-10">
      <div className="col-span-full row-[1/4] rounded-lg bg-bg-mustard lg:col-[1/8] lg:row-[1/3]"></div>
      <h2 className="col-span-full row-[1/2] px-3 pt-4 text-2xl font-medium md:px-6 md:pt-8 md:text-4xl lg:col-[1/8]">
        Söders billigaste bärs
      </h2>
      <section className="col-span-full row-[2/3] p-3 pb-6 md:px-6 md:pb-14 md:pt-6 md:text-xl lg:col-[1/8]">
        <p className="md:max-w-[55ch]">
          Törstig och pank? Var hittar du egentligen Söders billigaste bärs? Är det ens öppet nu?
          Och kan du fortfarande få tre stora stark för under en hundring?
        </p>
        <p className="md:max-w-[55ch]">
          Du är inte ensam om dessa tankar. Och nu har du svaret på alla dina frågor framför dig.
        </p>
        <div className="flex basis-0 justify-center pt-4 md:pt-10">
          <Link
            href="/bars"
            className="rounded-full border-2 border-black bg-black px-10 py-3 font-medium uppercase tracking-wider text-white"
          >
            Till barerna
          </Link>
        </div>
      </section>
      <figure className="col-span-full row-[3/6] justify-self-center lg:col-[8/12] lg:row-[1/3]">
        <SvgMascot className="w-48 lg:h-full lg:w-[unset]" />
      </figure>

      <section className="col-span-full row-[6/7] lg:col-[1/7] lg:row-[3/4] lg:mt-4">
        {bars.length > 0 && bars[0].is_open && (
          <>
            <Subheading>Billigast just nu</Subheading>
            <BarCard bar={bars[0]} />
            <BarCard bar={bars[0]} className="hidden md:grid" />
            <BarCard bar={bars[0]} className="hidden md:grid" />
          </>
        )}
      </section>

      <section className="col-span-full row-[7/8] mt-8 self-start rounded-lg bg-bg-pink px-3 pb-8 pt-4 md:px-6 md:pb-14 md:pt-8 md:text-xl lg:col-[7/13] lg:row-[3/4] lg:mt-14">
        <h2 className="text-2xl font-medium md:text-4xl">Hur funkar det?</h2>
        <p className="pt-3 md:max-w-[55ch] md:pt-6">
          Billig Bärs räknar på hur många centiliter öl man får per krona på en krog och ger efter
          det grönt, gult eller rött ljust. Då behöver inte du sitta där och räkna ut ifall en
          50-centilitare på ett ställe egentligen är billigare än en 40-centilitare med ett annat
          ställe. Vi räknar alltid på det billigaste priset och du kan fokusera på att spara pengar
          till mer öl.
        </p>
        <p className="md:max-w-[55ch]">
          Om du är pigg i bollen kan du <Link href="/about">läsa precis hur det fungerar här</Link>.
        </p>
        <div className="flex basis-0 justify-center pt-4 md:pt-10">
          <Link
            href="/about"
            className="rounded-full border-2 border-black bg-black px-10 py-3 font-medium uppercase tracking-wider text-white"
          >
            Om Billig Bärs
          </Link>
        </div>
      </section>
    </article>
  )
}
