import * as dal from '../db/dal/gelato.js'

export const getGelatoById = async (id) => {
    return await dal.getGelatoById(id);
};

export const getAllGelatos = async () => {
    return await dal.getAllGelatos();
};

export const create = async (gelatoAttributes) => {
    return await dal.create(gelatoAttributes);
};

export const update = async (id, gelatoAttributes) => {
    return await dal.update(id, gelatoAttributes);
};

export const destroy = async (id) => {
    return await dal.destroy(id);
};