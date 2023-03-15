const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        firstName: { type: DataTypes.STRING, allowNull: false },
        surnName: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        otherNames: { type: DataTypes.STRING, allowNull: false },
        pin: { type: DataTypes.STRING, allowNull: false },
        gender: { type: DataTypes.STRING, allowNull: false },
        ssn: { type: DataTypes.STRING, allowNull: false },
        permanent_Address: { type: DataTypes.STRING, allowNull: false },
        employer_name: { type: DataTypes.STRING, allowNull: false },
        employer_rcno: { type: DataTypes.STRING, allowNull: false },
        employer_address: { type: DataTypes.STRING, allowNull: false },
        username: { type: DataTypes.STRING, allowNull: false },
        hash: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('Employees', attributes, options);
}