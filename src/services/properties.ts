import {
  IPropertyCreate,
  IPropertyUpdate,
  IPropertyGet,
} from "../interfaces/property";
import { propertyCreationMapper } from "../helpers/property-mapper";
import * as propertyRepo from "../repositories/properties";
import { IPropertyAttributes } from "../interfaces/models/properties";
import { setEmptyToNull } from "../helpers/auth";
import { validatePropertyCreate } from "../schema/validations/properties";

// arrow function create with return type of promise
export const create = async (payload: IPropertyCreate) => {
  payload = await validatePropertyCreate.validateAsync(payload);
  const formatedPayload = propertyCreationMapper(payload);
  return await propertyRepo.createProperty(formatedPayload);
  //   return formatedPayload;
};

// getALLproperties;
export const getAll = async (payload: IPropertyGet) => {
  return await propertyRepo.getAllProperties(payload);
};

// update

export const update = async (payload: IPropertyUpdate) => {
  payload = setEmptyToNull(payload);
  console.log("🚀 ~ file: properties.ts ~ line 27 ~ update ~ payload", payload);
  // handle validation
  const popertyId = payload.propertyId;
  delete payload.propertyId;
  return await propertyRepo.updateProperty(popertyId!, payload);
};

// getById;
export const getById = async (id: number) => {
  return await propertyRepo.getPropertyById(id);
};