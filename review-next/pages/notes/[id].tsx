import React from 'react'
import {useRouter} from 'next/router'

const Dynamic = () => {
    const router = useRouter()
    const {params} = router.query
  return (
    <div>Dynamic route NoteIndex to {params}</div>
  )
}

export default Dynamic