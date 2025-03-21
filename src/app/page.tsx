import { BarCard } from '@/components/BarCard'
import { ButtonLink } from '@/components/ButtonLink'
import { PutBarsIntoContext } from '@/components/PutBarsIntoContext'
import { Subheading } from '@/components/Subheading'
import { SvgMascot } from '@/components/svgs/SvgMascot'
import { getCurrentlyCheapestBars } from '@/services/barServices'
import Link from 'next/link'

export default async function Home() {
  const bars = await getCurrentlyCheapestBars()
  return (
    <>
      <PutBarsIntoContext bars={bars} />
      <article className="mt-6 grid grid-cols-12 grid-rows-[auto_auto_3fr_4fr_auto_auto] px-2 md:mx-auto md:max-w-[1700px] md:gap-x-10 md:px-8 md:pt-10 lg:grid-rows-[auto_auto_3fr_4fr_auto]">
        <div className="col-span-full row-[1/4] rounded-lg bg-bg-mustard md:col-[1/11] md:row-[1/3] lg:col-[3/10]"></div>
        <h2 className="col-span-full row-[1/2] px-3 pt-4 text-2xl font-medium md:col-[1/11] md:px-6 md:pt-8 md:text-4xl lg:col-[3/10]">
          Söders billigaste bärs
        </h2>
        <section className="col-span-full row-[2/3] p-3 pb-6 md:col-[1/11] md:px-6 md:pb-14 md:pt-6 md:text-xl lg:col-[3/10]">
          <p className="md:max-w-[55ch]">
            Törstig och pank? Var hittar du egentligen Söders billigaste bärs? Är det ens öppet nu?
            Och kan du fortfarande få tre stora stark för under en hundring?
          </p>
          <p className="md:max-w-[55ch]">
            Du är inte ensam om dessa tankar. Och nu har du svaret på alla dina frågor framför dig.
          </p>
          <div className="flex basis-0 justify-center pt-4 md:pt-10">
            <ButtonLink href="/bars">Till barerna</ButtonLink>
          </div>
        </section>
        <figure className="col-span-full row-[3/6] justify-self-center md:col-[8/13] md:-mt-28 lg:col-[7/13] lg:-mt-48">
          <SvgMascot className="w-48 md:w-64 lg:h-[400px] lg:w-[unset]" />
        </figure>

        <section className="col-span-full row-[6/7] lg:col-[1/7] lg:mt-4">
          {bars.length > 0 && (
            <>
              <Subheading>
                {bars[0]?.is_open ? 'Billigast just nu' : 'Billigaste bärsen'}
              </Subheading>
              <BarCard bar={bars[0]} />
              {bars[1] && <BarCard bar={bars[1]} className="hidden md:grid" />}
              {bars[2] && <BarCard bar={bars[2]} className="hidden md:grid" />}
            </>
          )}
        </section>

        <section className="col-span-full row-[7/8] mt-8 self-start rounded-lg bg-bg-pink px-3 pb-8 pt-4 md:col-[2/12] md:px-6 md:pb-14 md:pt-8 md:text-xl lg:col-[7/13] lg:row-[6/7] lg:mt-14">
          <h2 className="text-2xl font-medium md:text-4xl">Hur funkar det?</h2>
          <p className="pt-3 md:max-w-[55ch] md:pt-6">
            Billig Bärs räknar på hur många centiliter öl man får per krona på en krog och ger efter
            det grönt, gult eller rött ljust. Då behöver inte du sitta där och räkna ut ifall en
            50-centilitare på ett ställe egentligen är billigare än en 40-centilitare med ett annat
            ställe. Vi räknar alltid på det billigaste priset och du kan fokusera på att spara
            pengar till mer öl.
          </p>
          <p className="md:max-w-[55ch]">
            Om du är pigg i bollen kan du{' '}
            <Link href="/about">läsa precis hur det fungerar här</Link>.
          </p>
          <div className="flex basis-0 justify-center pt-4 md:pt-10">
            <ButtonLink href="/about">Om Billig Bärs</ButtonLink>
          </div>
        </section>
      </article>
    </>
  )
}
