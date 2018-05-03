import axios from 'axios';

export const quoteService = {
    getQuote
}

function getQuote() {
    return new Promise((resolve, reject) => {
        let headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Token token="3d9fd1b5bb0547860eebc15d0104f41c"'
        }
        axios.get('https://favqs.com/api/quotes', { headers })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    })
}