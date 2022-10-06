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

export async function getServerSideProps(){
  const response = await fetch(`http://localhost:3000/api/note/`)
  const {data} = await response.json()
  return {
    props: {notes: data}
  }
}