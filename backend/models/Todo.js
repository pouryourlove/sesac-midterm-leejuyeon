function Todo (Sequelize, DataTypes) {
    return Sequelize.define(
        "visitor", 
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING(255)
            },
            done: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
        },
        {
            tableName: "Todo",
            freezeTableName: true,
            timestamps: false

        }
    )
}

module.exports = Visitor