import { Sequelize } from 'sequelize';
import db from '../config/database.js';
import JobCategories from './jobCategories.js';
const { DataTypes } = Sequelize;

const Job = db.define(
  'job',
  {
    title: {
      type: DataTypes.STRING,
    },
    title_ar: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT('long'),
    },
    description_ar: {
      type: DataTypes.TEXT('long'),
    },
    location: {
      type: DataTypes.STRING,
    },
    location_ar: {
      type: DataTypes.STRING,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'jobCategories',
        key: 'id',
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  },
);

Job.belongsTo(JobCategories, {
  foreignKey: 'categoryId',
});
(async () => {
  await db.sync();
})();

export default Job;
