const express = require('express')
const router = express.Router()

const db = require('../database.js');


router.get('/', async (req, res) => {
	const response = await db.getCollection('matches')

	if (typeof response === 'number') {
		res.sendStatus(response)
		return
	}
	res.send(response)
})

router.get('/latest', async (req, res) => {
	const response = await db.getOrderedCollection('matches', 'timestamp', 'desc', 10)

	res.send(response)
})

router.get('/:id', async (req, res) => {
	const response = await db.getDocById('matches', req.params.id)

	if (typeof response === 'number') {
		res.sendStatus(response)
		return
	}
	res.send(response)
})

router.post('/', async (req, res) => {
	const obj = req.body

	obj.timestamp = Date.now()

	if (!obj.winnerId || !obj.loserId) {
		res.sendStatus(400)
		return
	}
	const response = await db.postToCollection('matches', obj)

	if (typeof response === 'number') {
		res.sendStatus(response)
		return
	}

	res.send({ id: response })
})

router.delete('/:id', async (req, res) => {
	const response = await db.deleteFromCollection('matches', req.params.id)

	res.sendStatus(response)
})

module.exports = router;