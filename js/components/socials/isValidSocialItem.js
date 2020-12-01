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