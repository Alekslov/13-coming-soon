import { isInputValidation } from "./isInputValidation.js";

function renderSocials(data) {
    if (!isInputValidation(data)) {
        return false;
    }
let HTML = '';
const socialsDOM = document.querySelector('footer > .row');

for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (typeof item !== 'object') {
        continue;
    }
    if (typeof item.link !== 'string' || item.link === '') {
        continue;
    }
    if (typeof item.icon !== 'string' || item.icon === '') {
        continue;        
    }
    HTML +=  `<a href="${item.link}" target="_blank" class="fa fa-${item.icon}" aria-hidden="true"></a>`;
}
    if (HTML === '') {
        console.error('ERROR: nepavyko sugeneruoti social ikonu/nuorodu.');
        return false;
    }

    socialsDOM.innerHTML = HTML;
}
export { renderSocials }