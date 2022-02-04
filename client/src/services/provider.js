// import { handleResponse, handleError } from './response'; 

// Define your api url from any source.
// Pulling from your .env file when on the server or from localhost when locally
const BASE_URL = 'http://localhost:5000/gelatos'; 

export const getGelatos = async (queryString) => { 
    try {
        const response = await fetch(`${BASE_URL}?title=${queryString}`);
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.log(error)
    }
}; 

export const create = async (body) => { 
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: body
          };
          await fetch(`${BASE_URL}`, requestOptions)
            .then(response => response.json());
    } catch (error) {
        console.log(error);
    }
}; 

export const update = async (body, id) => { 
    try {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: body
          };
          await fetch(`${BASE_URL}/${id}`, requestOptions)
            .then(response => response.json());
    } catch (error) {
        
    }
}; 

export const remove = async (id) => { 
    try {
        await fetch(`${BASE_URL}/${id}`, {
          method: "DELETE"
        });
      } catch (err) {
        console.error(err.message);
      }
};