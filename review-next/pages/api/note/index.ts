import type { NextApiHandler, NextApiResponse, NextApiRequest } from "next";
import nc from 'next-connect'
import notes from '../../../src/data/data'

const handler = nc()

handler.get((req: NextApiRequest, res: NextApiResponse) => {
    res.json({data: notes})
})

handler.post((req: NextApiRequest, res: NextApiResponse) => {
    const note = {...req.body}

    notes.push({
        note,
        id: Date.now()
    })

    res.json({data: note})
})


export default handler