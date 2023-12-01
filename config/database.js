const { Sequelize } = require('sequelize');
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const host = process.env.DB_HOST;
const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: 'mysql'
})

module.exports = sequelize;