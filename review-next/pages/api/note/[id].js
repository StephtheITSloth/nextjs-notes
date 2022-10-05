import notes from '../../../src/data/data'
import nc from 'next-connect'

const getNote = id => notes.find(n => n.id === parseInt(id))


const handler = nc()

.get((req, res) => {
    const {id} =  req.query

    try{
        
        const note = notes.filter(note => note.id = requestId)
        res.status(200)
        res.json({data: note})
    }
    catch (e) {
        res.status(404)
        console.error(e)
        res.end()
    
    }
})

.put()

export default handler