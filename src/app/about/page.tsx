import { BeerPriceCircle } from '@/components/BeerPriceCircle'
import { SvgMascot } from '@/components/svgs/SvgMascot'
import { SvgVortex } from '@/components/svgs/SvgVortex'

export default async function About() {
  return (
    <>
      <article className="px-2 pt-6 md:px-8 md:pt-10">
        <section className="mx-auto block w-fit rounded-lg bg-bg-mustard px-3 py-4 md:px-6 md:py-8 md:text-xl">
          <h2 className="mb-3 text-2xl font-medium md:mb-6 md:text-4xl">Hur funkar det?</h2>
          <p className="max-w-[55ch]">
            Billig Bärs är en prisjämförelsesajt som hjälper dig hitta bärs billigt. Vi har
            sammanställt priser, öppettider och happy hours från barer på Söder. Vi räknar också ut
            priserna och visar om det är billig eller ej.
          </p>
          <p className="max-w-[55ch]">
            Då behöver inte du sitta där och räkna ut ifall en 50-centilitare på ett ställe
            egentligen är billigare än en 40-centilitare med ett annat ställe. Vi räknar alltid på
            det billigaste priset och du kan fokusera på att spara pengar till mer öl.
          </p>
          <p className="max-w-[55ch]">
            Alla priser är insamlade av en representant från Billig Bärs. Vi har varit på plats och
            samlat in priserna själva.
          </p>
        </section>
        <SvgVortex className="mx-auto my-8 block w-[min(100%,_300px)] md:my-14" />
        <section className="mx-auto grid w-fit grid-cols-[auto,_100px] items-start gap-x-3 gap-y-1 self-start rounded-lg bg-bg-pink px-3 py-4 md:grid-cols-[minmax(auto,_55ch),_auto] md:gap-x-6 md:px-6 md:py-8 md:text-xl">
          <h2 className="col-span-2 mb-2 text-2xl font-medium md:mb-5 md:text-4xl">
            Prisjämförelse
          </h2>
          <h3 className="col-span-2 text-xl font-medium md:text-2xl">Billig</h3>
          <p className="max-w-[55ch] md:mb-5">
            Ett grönt pris betyder att ölen kostar 1.125 kr eller midre per centiliter. Det
            mostvarar en vanlig 40 centiliter stor stark för 45 kr eller mindre.
            <br />
            Tyvärr är det var en billig bärs kostar nuförtiden.
          </p>
          <BeerPriceCircle beer_ppv={0.875} beer_price={35} example />
          <h3 className="col-span-2 text-xl font-medium md:text-2xl">Mellan</h3>
          <p className="max-w-[55ch] md:mb-5">
            Ett gult pris betyder att ölen kostar mellan 1.125 kr och 1.5 kr per centiliter. Det
            mostvarar en vanlig 40 centiliter stor stark för mellan 45 kr och 60 kr.
            <br />
            Ett pris som tar emot men ändå är acceptabelt.
          </p>
          <BeerPriceCircle beer_ppv={1.375} beer_price={55} example />
          <h3 className="col-span-2 text-xl font-medium md:text-2xl">Dyr</h3>
          <p className="max-w-[55ch]">
            Ett rött pris betyder att ölen kostar över 1.50 kr per centiliter. Det mostvarar en
            vanlig 40 centiliter stor stark för över 60 kr.
            <br />
            Alldeles för dyrt!
          </p>
          <BeerPriceCircle beer_ppv={2.225} beer_price={89} example />
        </section>
      </article>
    </>
  )
}
