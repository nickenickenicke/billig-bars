import { BeerPriceCircle } from '@/components/BeerPriceCircle'
import { SvgMascot } from '@/components/svgs/SvgMascot'

export default async function About() {
  return (
    <>
      <article className="mt-6 grid grid-cols-12 grid-rows-[auto_auto_3fr_4fr_auto_auto] px-2 md:gap-x-10 md:px-8 md:pt-10 lg:grid-rows-[auto_auto_3fr_4fr_auto]">
        <div className="col-span-full row-[1/4] rounded-lg bg-bg-mustard md:col-[1/11] md:row-[1/3] lg:col-[3/10]"></div>
        <h2 className="col-span-full row-[1/2] px-3 pt-4 text-2xl font-medium md:col-[1/11] md:px-6 md:pt-8 md:text-4xl lg:col-[3/10]">
          Hur funkar det?
        </h2>
        <section className="col-span-full row-[2/3] p-3 pb-6 md:col-[1/11] md:px-6 md:pb-14 md:pt-6 md:text-xl lg:col-[3/10]">
          <p className="md:max-w-[55ch]">
            Billig Bärs är en prisjämförelsesajt som hjälper dig hitta bärs billigt. Vi har
            sammanställt priser, öppettider och happy hours från barer på Söder. Vi räknar också ut
            priserna och visar om det är billig eller ej.
          </p>
          <p className="md:max-w-[55ch]">
            Då behöver inte du sitta där och räkna ut ifall en 50-centilitare på ett ställe
            egentligen är billigare än en 40-centilitare med ett annat ställe. Vi räknar alltid på
            det billigaste priset och du kan fokusera på att spara pengar till mer öl.
          </p>
          <p className="md:max-w-[55ch]">
            Alla priser är insamlade av en representant från Billig Bärs. Vi har varit på plats och
            samlat in priserna själva.
          </p>
        </section>
        <figure className="col-span-full row-[3/6] justify-self-center md:col-[8/13] md:-mt-28 lg:col-[7/13] lg:-mt-48">
          <SvgMascot className="w-48 md:w-64 lg:h-[400px] lg:w-[unset]" />
        </figure>

        <section className="col-span-full row-[7/8] mt-8 grid w-fit grid-cols-[auto,_100px] items-start gap-3 self-start rounded-lg bg-bg-pink px-3 pb-8 pt-4 md:col-[2/12] md:grid-cols-[minmax(auto,_55ch),_auto] md:gap-6 md:px-6 md:pb-14 md:pt-8 md:text-xl lg:col-[2/13] lg:row-[6/7] lg:mt-14">
          <h2 className="col-span-2 text-2xl font-medium md:text-4xl">Prisjämförelse</h2>
          <p className="md:max-w-[55ch]">
            Ett grönt pris betyder att ölen kostar 1.125 kr eller midre per centiliter. Det
            mostvarar en vanlig 40 centiliter stor stark för 45 kr eller mindre. Tyvärr är det var
            en billig bärs kostar nuförtiden.
          </p>
          <BeerPriceCircle beer_ppv={0.875} beer_price={35} example />
          <p className="md:max-w-[55ch]">
            Ett gult pris betyder att ölen kostar mellan 1.125 kr och 1.5 kr per centiliter. Det
            mostvarar en vanlig 40 centiliter stor stark för mellan 45 kr och 60 kr. Ett pris som
            tar emot men ändå är acceptabelt.
          </p>
          <BeerPriceCircle beer_ppv={1.375} beer_price={55} example />
          <p className="md:max-w-[55ch]">
            Ett rött pris betyder att ölen kostar över 1.50 kr per centiliter. Det mostvarar en
            vanlig 40 centiliter stor stark för över 60 kr. Alldeles för dyrt!
          </p>
          <BeerPriceCircle beer_ppv={2.225} beer_price={89} example />
        </section>
      </article>
    </>
  )
}
