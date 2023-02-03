//Category table model.
module.exports = function (Sequelize, sequelize) {
    return sequelize.define("notepad", {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: Sequelize.DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        description: {
            type: Sequelize.DataTypes.STRING
        }
    });
}