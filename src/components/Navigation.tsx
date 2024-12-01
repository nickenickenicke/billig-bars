import Link from 'next/link'

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Hem</Link>
        </li>
        <li>
          <Link href="/bars">Till barerna</Link>
        </li>
      </ul>
    </nav>
  )
}
