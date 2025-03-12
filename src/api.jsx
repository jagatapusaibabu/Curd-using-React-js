import axios from 'axios';
const url = "http://localhost:3001/products";

export async function getData() {
    return await axios.get(`${url}`);
}

export async function postData(data) {
    const response = await axios.get(url);
    const products = response.data;

    const maxId = products.length > 0 ? Math.max(...products.map(p => parseInt(p.id) || 0)) : 0;
    const newId = (maxId + 1).toString();
    const newProduct = { ...data, id: newId };
    return await axios.post(url, newProduct, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function putData(id, data) {
    return await axios.put(`${url}/${id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}


export async function deleteData(id) {
    return await axios.delete(`${url}/${id}`);
}