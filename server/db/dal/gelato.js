import Gelato from '../models/gelato.js';

// import { v4 as uuidv4 } from 'uuid';

export const create = async (gelatoAttributes) => {
    const gelato = await Gelato.create(gelatoAttributes)
    return gelato
}