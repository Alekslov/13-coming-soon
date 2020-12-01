/**
 * renderSocials funkcijai skirtu ivesties duomenu (input params) validacija
 * @param {string} selector selektorius, kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas
 * @param {Array} data duomenu masyvas su objektais, kurie reprezentuoja social nuorodas
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida grazina - `false`, priesingu atveju `true`
 */
function isInputValid (selector, data) {
    if (typeof selector !== 'string') {
        console.error('ERROR: selektorius turi buti tekstinio tipo.')
        return false;
    }
    if ( selector === '') {
        console.error('ERROR: selektorius turi buti tuscias tekstas.')
        return false;
    }
    if (!Array.isArray(data)) {
        console.error('ERROR: social ikonom generuoti reikia array tipo duomenu.')
        return false;
    }   
    if (data.length === 0) {
        console.error('ERROR: social ikonom reikia ne tuscio array.')
        return false;
    }
    return true;
}
export {isInputValid}