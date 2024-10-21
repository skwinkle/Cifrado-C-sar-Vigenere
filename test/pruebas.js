import { cifrar, descifrar } from '../cifrado.js';
import { expect } from 'chai';

describe('Funciones de Cifrado y Descifrado', () => {
    it('debería cifrar un mensaje correctamente', () => {
        const mensaje = 'HOLA MUNDO';
        const clave = 'PYTHON';
        const NewClave = ['P', 'Y', 'T', 'H', '', 'O','N', 'P', 'Y', 'T']; 
        const resultadoEsperado = 'WNEH AHCBI'; 

        const resultado = cifrar(mensaje, NewClave);
        expect(resultado).to.equal(resultadoEsperado);
    });

    it('debería descifrar un mensaje correctamente', () => {
        const mensaje = 'WNEH AHCBI';
        const clave = 'PYTHON';
        const NewClave = ['P', 'Y', 'T', 'H', '', 'O','N', 'P', 'Y', 'T']; 
        const resultadoEsperado = 'HOLA MUNDO';

        const resultado = descifrar(mensaje, NewClave);
        expect(resultado).to.equal(resultadoEsperado);
    });
});
