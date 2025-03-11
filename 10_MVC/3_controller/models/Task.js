const { DataTypes } = require('sequelize');

const db = require('../../1_estrutura/db/conn');

const Task = db.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    done: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

module.exports = Task;
