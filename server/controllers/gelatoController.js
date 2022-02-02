import * as service from '../services/gelatoService.js'


export const getGelatoById = async (id) => {
    return await service.getGelatoById(id);
};

export const getAllGelatos = async () => {
    try {
        return await service.getAllGelatos();
    } catch (error) {
        console.log("ERROR: ____", error);
    };
};

export const create = async (gelatoAttributes) => {
    try {
        return await service.create(gelatoAttributes);
    } catch (error) {
        console.log("ERROR: ____", error);
    };
};

export const update = async (id, gelatoAttributes) => {
    try {
        return await service.update(id, gelatoAttributes);
    } catch (error) {
        console.log("ERROR: ____", error);
    }
}

export const destroy = async (id) => {
    return await service.destroy(id);
};
