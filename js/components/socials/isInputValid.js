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