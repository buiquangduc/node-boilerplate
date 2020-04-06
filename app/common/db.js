const Sequelize = require('sequelize')
const config = require('config')

const sequelize = new Sequelize(config.get('mysql.database'), config.get('mysql.user'), config.get('mysql.password'), {
	dialect: 'mysql',
	host: config.get('mysql.host'),
	logging: false
})

module.exports = sequelize
