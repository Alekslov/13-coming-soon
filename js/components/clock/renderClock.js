// selector
// target date nis New Year evening
// 2021-01-01 00:00:00
/**
 * Generuoja statini laikrodi, kuris rodo kiek liko laiko iki artimiausiu naujuju metu
 * @param {string} selector css taisykle, kaip rasti vieta, kur bus generuojamas laikrodzio html turinys
 * @returns {boolean} jei funkcija sekmingai ivykdo savo funkcionaluma - grazina true, priesingu atveju -false
 */
function renderClock(selector) {
    if (typeof selector !== 'string') {
        console.error('ERROR: selektorius turi buti tekstinio tipo');
        return false;
    }
    if (selector == '') {
        console.error('ERROR: selektorius negali buti tuscias tekstas');
        return false;
        
    }
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: nerasta vieta kur segenuruoti laikrodzio html turini');
        return false;
    }
    // einamieji metai (2020)
    const date = new Date ();
    const currentYear = date.getFullYear();
    // naujakas = einamieji metai + 1 (2020 + 1 = 2021)
    const newYear = currentYear + 1;
    // susikonstruojama pilna data: $(naujakas) -01-01 00:00:00
    const newYearDate = `${newYear}-01-01 00:00:00`;
    const newYearObject = new Date(newYearDate);
    const newYearMiliseconds = newYearObject.getTime();
    // einamasis laikas yyy-mm-dd hh:mm:ss
    const currentTimeMiliseconds = date.getTime();
    // suskaiciuojame laiko skirtuma
    const timeLeft = newYearMiliseconds - currentTimeMiliseconds;
    let secondsLeft = timeLeft / 1000;
    // is skirtumo apskaiciuojame likusias dienas, val, minu, sekundes
    const days = Math.floor(secondsLeft / 60 / 60 / 24);
    secondsLeft -= days * 60 * 60 * 24;
    const hours = Math.floor(secondsLeft / 60 / 60);
    secondsLeft -= hours * 60 * 60;
    const minutes = Math.floor (secondsLeft / 60) ;
    const seconds = Math.floor(secondsLeft - minutes * 60);
    const HTML = ` <div class="time">
                        <h2>${days}</h2>
                        <span>Days</span>
                    </div>
                    <div class="time">
                        <h2>${hours}</h2>
                        <span>Hours</span>
                    </div>
                    <div class="time">
                        <h2>${minutes}</h2>
                        <span>Minutes</span>
                    </div>
                    <div class="time">
                        <h2>${seconds}</h2>
                        <span>Seconds</span>
                    </div>`;
    DOM.innerHTML = HTML;
}
export {renderClock}