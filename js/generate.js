import { DRAFT_TYPE_VALUES, DRAFT_TYPE_MESSAGES } from './DRAFT_TYPE.js';
import { AER_MESSAGES, INTRO2_VALUES, INTRO2_MESSAGES } from './AER.js';
import { OUTRO_MESSAGES } from './OUTRO.js';
import { CLOSING_VALUES } from './CLOSING.js';
import { ERROR_MESSAGES, ERROR_ADDITIONAL_INFO, ERROR_AER_MESSAGE } from './ERROR.js';
import { RESOLUTION_MESSAGES } from './RESOLUTION.js';

function capitalizeFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function formatBoldText(str) {
    return str.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
}

function formatItalicText(str) {
    return str.replace(/__(.*?)__/g, '<i>$1</i>');
}

function formatText(str) {
    return formatItalicText(formatBoldText(str));
}

export function generateOutput() {
    const closing = document.getElementById('closing-dropdown').querySelector('input').value.trim();
    const name = capitalizeFirstLetter(document.getElementById('name').value.trim());
    const user = capitalizeFirstLetter(document.getElementById('user').value.trim());
    const orderId = document.getElementById('order-id').value.trim();
    const aerDropdown = document.getElementById('aer-dropdown').querySelector('input').value.trim();
    const intro2Dropdown = document.getElementById('intro2-dropdown').querySelector('input').value.trim();
    const outroDropdown = document.getElementById('outro-dropdown').querySelector('input').value.trim();
    const errorDropdown = document.getElementById('error-dropdown').querySelector('input').value.trim();
    const resolutionDropdown = document.getElementById('resolution-dropdown').querySelector('input').value.trim();
    const draftTypeDropdown = document.getElementById('draft-type-dropdown').querySelector('input').value.trim();
    const insertGuides = document.getElementById('insert-guides').checked;

    let outputText = '';

    // Determine the standard message based on draft type
    let standardMessage = DRAFT_TYPE_MESSAGES['standard']; // Default message
    if (draftTypeDropdown && DRAFT_TYPE_MESSAGES[draftTypeDropdown]) {
        standardMessage = DRAFT_TYPE_MESSAGES[draftTypeDropdown];
    }

    // Include "Hi [user]," if user has a value
    if (user) {
        outputText += `Hi ${user},<br><br>`;
        outputText += `${standardMessage}<br><br>`;
    }

    // Append the AER message if selected
    let aerMessage = '';
    if (aerDropdown && AER_MESSAGES[aerDropdown]) {
        let orderPlaceholder = orderId ? `<b>${orderId}</b>` : `<i>[INSERT_ORDER_ID]</i>`;
        aerMessage = formatText(AER_MESSAGES[aerDropdown].replace('ORDERID', orderPlaceholder)).trim();

        // Append the error-specific message if an error is selected
        if (errorDropdown && ERROR_AER_MESSAGE[errorDropdown]) {
            aerMessage += `, ${ERROR_AER_MESSAGE[errorDropdown].trim()}`;
        } else {
            aerMessage += '.';
        }

        // Add AER message to output
        outputText += aerMessage;
    }

    // Append the Intro 2 message if selected
    if (intro2Dropdown && INTRO2_MESSAGES[intro2Dropdown]) {
        let intro2Message = formatText(INTRO2_MESSAGES[intro2Dropdown]).trim();
        if (outputText) {
            outputText += ' ';
        }
        outputText += intro2Message;
    }

    // Append the Error message if selected
    if (errorDropdown && ERROR_MESSAGES[errorDropdown]) {
        let errorMessage = formatText(ERROR_MESSAGES[errorDropdown]).trim();
        if (outputText) {
            outputText += '<br><br>'; // Added <br><br> for spacing
        }
        outputText += errorMessage;

        // Append additional information if checkbox is checked and error is selected
        if (insertGuides && ERROR_ADDITIONAL_INFO[errorDropdown]) {
            outputText += '<br><br>' + formatText(ERROR_ADDITIONAL_INFO[errorDropdown]).trim() + '<br>'; // Added <br><br> for spacing and <br> after checkbox message
        }
    }

    // Append the Resolution message if selected
    if (resolutionDropdown && RESOLUTION_MESSAGES[resolutionDropdown]) {
        let resolutionMessage = formatText(RESOLUTION_MESSAGES[resolutionDropdown].replace('ORDERID', orderId ? `<b>${orderId}</b>` : `<i>[INSERT_ORDER_ID]</i>`)).trim();
        if (outputText) {
            outputText += '<br>';
        }
        outputText += resolutionMessage; // No extra <br> after resolution message
    }

    // Append the Outro message if selected
    if (outroDropdown && OUTRO_MESSAGES[outroDropdown]) {
        let outroMessage = formatText(OUTRO_MESSAGES[outroDropdown]).trim();
        if (outputText) {
            outputText += '<br><br>'; // Added <br><br> for spacing before outro
        }
        outputText += outroMessage + '<br><br>'; // Added <br><br> for spacing after outro
    }

    // Append the Closing message if selected
    if (closing) {
        outputText += `${closing},<br>${name}<br>`;
    }

    // Update the output div with formatted text
    document.getElementById('output').innerHTML = outputText;
}

// Trigger output generation when dropdown values change
document.getElementById('aer-dropdown').addEventListener('change', generateOutput);
document.getElementById('intro2-dropdown').addEventListener('change', generateOutput);
document.getElementById('outro-dropdown').addEventListener('change', generateOutput);
document.getElementById('closing-dropdown').addEventListener('change', generateOutput);
document.getElementById('error-dropdown').addEventListener('change', generateOutput);
document.getElementById('resolution-dropdown').addEventListener('change', generateOutput);
document.getElementById('draft-type-dropdown').addEventListener('change', generateOutput);
document.getElementById('insert-guides').addEventListener('change', generateOutput);
