import { isInputValid } from "./isInputValid.js";
import { isValidSocialItem } from './isValidSocialItem.js';


function renderSocials(selector, data) {
    if (!isInputValid(selector, data)) {
        return false;
    }
    const socialsDOM = document.querySelector(selector);
    if (!socialsDOM) {
        console.error('ERROR: nerasta turinio generavimo vieta');
        return false; 
    }
    let HTML = '';
for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (!isValidSocialItem(item)) {
        continue;
    }
    HTML += `<a href="${item.link}" target="_blank" class="fa fa-${item.icon}" aria-hidden="true"></a>`;
}
    if (HTML === '') {
        console.error('ERROR: nepavyko sugeneruoti social ikonu/nuorodu.');
        return false;
    }

    socialsDOM.innerHTML += HTML;
    return true;
}
export { renderSocials }