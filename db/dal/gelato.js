import Gelato from '../model/gelato.js';
import { Sequelize } from 'sequelize';
const Op = Sequelize.Op;

// get all gelatos, sorting is delegated to the database
export const getAllGelatos = async () => {
    const gelatos = await Gelato.findAll({ order: [['updatedAt', 'DESC']] });
    return gelatos;
};

// get gelato by id
export const getGelatoById = async (id) => {
    const gelato = Gelato.findByPk(id);
    if (!gelato) {
        throw new Error('not found');
    };
    return gelato;
};

// create a gelato
export const create = async (gelatoAttributes) => {
    const gelato = await Gelato.create(gelatoAttributes);
    return gelato;
};

// update a gelato
export const update = async (id, gelatoAttributes) => {
    await Gelato.update(gelatoAttributes, { where: { id: id } });
    const updatedGelato = Gelato.findByPk(id);
    return updatedGelato;
};

// delete a gelato
export const destroy = async (id) => {
    const deletedGelatoCount = await Gelato.destroy({
        where: {id}
    });
    return !!deletedGelatoCount;
};
// search gelatos, sorting is delegated to the database
export const getByTitle = async (title) => {
    const gelatos = Gelato.findAll({
        where: {
            title: {
                [Op.iLike]: `%${title}%`
            }
        },
        order: [['updatedAt', 'DESC']]
    })
    return gelatos;
}