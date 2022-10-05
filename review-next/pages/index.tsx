import Link from 'next/link'

export default function Home() {
  return (
    <div>
     <div> This is the home</div>
      <Link href='/notes'><a>Notes page</a></Link>
    </div>
  )
}
