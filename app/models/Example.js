const Sequelize = require('sequelize')
const { INTEGER, STRING, Model } = Sequelize

const sequelize = require('../common/db')

class Example extends Model {

}

Example.init(
	{
		id: {
			type: INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		content: {
			type: STRING,
			allowNull: true
		},
	},
	{
		sequelize: sequelize,
		modelName: 'example',
		timestamps: false
	}
)

module.exports = Example