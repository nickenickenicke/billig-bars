import { SvgFooter } from './svgs/SvgFooter'

export const Footer = () => {
  return (
    <footer className="mt-8 flex w-full flex-col items-center">
      <SvgFooter className="-mb-1 max-h-24 max-w-[100vw]" />
      <div className="flex min-h-40 w-full flex-col gap-2 bg-black px-4 py-6 text-white">
        <h3 className="text-xl font-medium">Billig Bärs</h3>
        <p>Tillbaka till starten av sidan</p>
        <ul className="">
          <li>Hem</li>
          <li>Hitta barer</li>
          <li>Om Billig Bärs</li>
        </ul>
        <p className="mb-20 block max-w-[25ch]">
          Bla bla lite info kanske som till exempel att Nicke har gjort den här och han är så bra!
        </p>
      </div>
    </footer>
  )
}
