import { SvgFooter } from './svgs/SvgFooter'

export const Footer = () => {
  return (
    <footer className="mt-8 flex w-full flex-col items-center">
      <SvgFooter className="-mb-1 h-24" />
      <div className="min-h-40 w-full bg-black">Footer copy</div>
    </footer>
  )
}
