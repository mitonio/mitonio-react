import axios from 'axios';

export const getByBusLineNumber = async (lineNumber) => {
    const { data } =  await axios.get('http://api.olhovivo.sptrans.com.br/v2.1/Posicao', {
        params: {
            'token': '5243fc248bc5f64a2f29f29b106e9b1b6a0985a837063ce76a12e4bea7a325a9',
            'codigoLinha': 33674
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    });
    
    return data;
} 