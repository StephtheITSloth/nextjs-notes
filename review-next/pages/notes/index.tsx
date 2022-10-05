import React from 'react'
import Link from 'next/link'
const NoteIndex = () => {
  return (
    <>

    <div>NoteIndex page </div>
    <Link href='/notes/[id]' as={`/notes/best`}>bext notes</Link>
    </>

  )
}

export default NoteIndex