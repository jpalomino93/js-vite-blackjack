



/**
 * Esta función retorna el valor de una carta
 * @param {String} carta 
 * @returns {String} retorna el valor(puntación) de una carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}