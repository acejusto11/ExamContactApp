import { httpMethodHelper } from "./httpMethodHelper";

const baseUrl = 'http://localhost:3004/contacts';

const getAll = () => {
    return httpMethodHelper.get(baseUrl);
}

const getById = (id) => {
    return httpMethodHelper.get(`${baseUrl}/${id}`);
}

const create = (params) => {
    return httpMethodHelper.post(baseUrl, params);
}

const update = (id, params) => {
    return httpMethodHelper.put(`${baseUrl}/${id}`, params);
}

const _delete = (id) => {
    return httpMethodHelper.delete(`${baseUrl}/${id}`);
}

export const contactService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};
