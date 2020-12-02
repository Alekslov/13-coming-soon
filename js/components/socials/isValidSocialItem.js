/**
 * renderSocial () funkcijos metu vykdamome cikle skirtu duomenu valdijca
 * @param {object} itemObject objektas aprasantis viena social nuoroda, kuri sudaro ikona ir nuoroda (href)
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida grazina - `false`, priesingu atveju `true`
 */
function isValidSocialItem(itemObject) {
    if (typeof itemObject !== 'object') {
        console.warn('ERROR: social elementas turetu buti objektas');
        return false;
    }
    if (typeof itemObject.link !== 'string' || itemObject.link === '') {
        console.warn('ERROR: social elemento nuoroda turetu buti tekstine ir ne tuscia');
        return false;
    }
    if (typeof itemObject.icon !== 'string' || itemObject.icon === '') {
        console.warn('ERROR: social elemento ikona turetu buti tkestine ir ne tuscia');  
        return false;      
    }
    return true;
}
export { isValidSocialItem }