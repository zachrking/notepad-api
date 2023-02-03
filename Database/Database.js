const { Sequelize, Op } = require("sequelize");

module.exports = {
  isConnectionCreated: false,
  errorMessage: null,
  db: {},
  init: async function () {
    try {
      //To create a dynamoDB connection
      const sequelize = new Sequelize(
        "sql12595361",
        "sql12595361",
        "JgVhR5zh2m",
        {
          dialect: "mysql",
          host: "sql12.freemysqlhosting.net",
          port: 3306,
          logging: false,
          define: {
            freezeTableName: true
          }
        }
      );
      await sequelize.authenticate();
      console.log("DB Authenticated Successfully");

      this.db.sequelize = sequelize;
      this.db.notepad = require("../model/Notepad")(Sequelize, sequelize);
      await sequelize.sync();
    //   if (process.env.DATABASE_DDL_GENERATE == "CREATE") await sequelize.sync({ force: true });
    //   else if (process.env.DATABASE_DDL_GENERATE == "UPDATE") await sequelize.sync();

      this.isConnectionCreated = true;
    } catch (err) {
      this.isConnectionCreated = false;
      this.errorMessage = err;
      console.log("Error while Authentication ", err);
    }
  }
};