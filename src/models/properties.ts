import * as Sequelize from "sequelize";
import { IMemberAttributes, IMemberInstance } from "../interfaces/models/user";
import { DataTypes } from "sequelize";
import {
  IPropertyInstance,
  IPropertyAttributes,
} from "../interfaces/models/properties";

const DataTypes = Sequelize;

/**
 * Defining main sequelize function for binding on the model index
 *
 * @param {Sequelize.Sequelize} sequelize
 * @returns
 */
export default function (
  sequelize: Sequelize.Sequelize
): Sequelize.Model<IPropertyInstance, IPropertyAttributes> {
  const Property = sequelize.define<IPropertyInstance, IPropertyAttributes>(
    "property",
    {
      memberId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      propertyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zip: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      closing: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rent: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      taxes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      insurance: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maint: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hoa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      capExp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mortgageMonth: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cashFlow: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cashFlowYear1: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cashFlowYear2: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cashFlowYear3: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      capRate: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      coc: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      roi: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      noi: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      irr: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      eqMult: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      rentMult: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      createDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      lastModified: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      y01pay: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      y05pay: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      y10pay: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      y15pay: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      y20pay: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      y25pay: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      y30pay: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      // freezeTableName: true,
      timestamps: false,
    }
  );

  Property.associate = (models) => {
    Property.belongsTo(models.user, {
      foreignKey: "memberid",
    });
  };

  return Property;
}
