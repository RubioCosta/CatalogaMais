import axios from 'axios';

const URL_CNPJA = process.env.REACT_APP_URL_CNPJA
const TOKEN_API_CNPJ = process.env.REACT_APP_TOKEN_API_CNPJA

async function validateCnpj(cnpj) {
    try {

        const config = {
            headers: {
                'Authorization': TOKEN_API_CNPJ,
            }
        };

        const response = await axios.get(`${URL_CNPJA}/${cnpj}`, config);

        return response.data;
        
    } catch (error) {
        throw "CNPJ informado é inválido!";
    }
}

const ValidationService = {
    validateCnpj
};

export default ValidationService;