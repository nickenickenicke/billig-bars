import { SvgMascot } from '@/components/svgs/SvgMascot'
import Link from 'next/link'

export default function NotFound() {
  return (
    <article className="flex min-h-[calc(100vh-var(--navbar-height))] flex-col items-center justify-center gap-5 pt-10">
      <h1 className="text-3xl font-medium uppercase">Något gick fel</h1>
      <Link href="/" className="mb-10">
        Men oroa dig inte,{' '}
        <span className="underline underline-offset-2">börja bara om från början</span>.
      </Link>
      <Link href="/" className="max-h-[50vh] max-w-[60vw]">
        <SvgMascot className="h-full w-full" />
      </Link>
    </article>
  )
}
