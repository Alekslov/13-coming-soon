import {countTimeDiff} from './countTimeDiff.js';

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
    const time = countTimeDiff();
    
    const HTML = ` <div class="time">
                        <h2>${time.days}</h2>
                        <span>Days</span>
                    </div>
                    <div class="time">
                        <h2>${time.hours}</h2>
                        <span>Hours</span>
                    </div>
                    <div class="time">
                        <h2>${time.minutes}</h2>
                        <span>Minutes</span>
                    </div>
                    <div class="time">
                        <h2>${time.seconds}</h2>
                        <span>Seconds</span>
                    </div>`;
    DOM.innerHTML = HTML;
    const timesDOM = DOM.querySelectorAll('.time')
    // paleidziame laikr mechanizma
    let timePassed = 0;
    setInterval(() => {
        const time = countTimeDiff();
        timesDOM[0].innerText = time.days; 
        timesDOM[1].innerText = time.hours; 
        timesDOM[2].innerText = time.minutes; 
        timesDOM[3].innerText = time.seconds; 

    }, 1000);
}
export {renderClock}