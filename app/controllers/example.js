const sequelize = require('../common/db')

async function getAll(req, res) {
	try {
		const examples = await sequelize.models.example.findAll()

		return res.status(200).send({ examples })
	} catch (err) {
		return res.status(400).send({ message: 'Could not get all.' })
	}
}

async function getSingle(req, res) {
	try {
		const id = req.params.id

		const example = await sequelize.models.example.findByPk(id)

		return res.status(200).send({ example })
	} catch (err) {
		return res.status(400).send({ message: 'Could not get single.' })
	}
}

async function create(req, res) {
	try {
		const { content } = req.body

		const example = await sequelize.models.example.create({ content })

		return res.status(200).send({ example })
	} catch (err) {
		return res.status(400).send({ message: 'Could not create.' })
	}
}

async function update(req, res) {
	try {
		const content = req.body.content
		const id = req.params.id

		const example = await sequelize.models.example.update({ where: { id }}, { content })

		return res.status(200).send({ example })
	} catch (err) {
		return res.status(400).send({ message: 'Could not update.' })
	}
}

async function remove(req, res) {
	try {
		const id = req.body.id

		const example = await sequelize.models.example.findByPk(id)

		await example.destroy()

		return res.status(200).send({ message: 'Remove example success.'})
	} catch (err) {
		return res.status(400).send({ message: 'Could not remove.' })
	}
}

module.exports = {
	getAll,
	create,
	update,
	remove,
	getSingle
}
