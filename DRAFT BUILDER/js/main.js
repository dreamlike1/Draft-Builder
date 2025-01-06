import { DRAFT_TYPE_VALUES } from './DRAFT_TYPE.js'; // Import draft type values
import { attachEventListeners } from './eventListeners.js'; // Import attachEventListeners
import { AER_VALUES } from './AER.js'; // Import AER values
import { OUTRO_VALUES } from './OUTRO.js'; // Import Outro values
import { CLOSING_VALUES } from './CLOSING.js'; // Import Closing values
import { ERROR_VALUES } from './ERROR.js'; // Import Error values
import { INTRO2_VALUES } from './AER.js'; // Import Intro2 values
import { RESOLUTION_VALUES } from './RESOLUTION.js'; // Import Resolution values
import { setupCopyOnClick } from './copyOnClick.js'; // Import the copy-on-click functionality
import { clearDropdown } from './clearDropdown.js'; // Import the clearDropdown function

// Initialize event listeners and any other setup
document.addEventListener('DOMContentLoaded', () => {
    attachEventListeners();
    initializeDropdowns();
    setupCopyOnClick(); // Setup click-to-copy functionality
});

function initializeDropdowns() {
    console.log("Initializing dropdowns");

    const aerDropdownValues = AER_VALUES.map(item => ({ name: item.name, value: item.value }));
    const outroDropdownValues = OUTRO_VALUES.map(item => ({ name: item.name, value: item.value }));
    const closingDropdownValues = CLOSING_VALUES.map(item => ({ name: item.name, value: item.value }));
    const errorDropdownValues = ERROR_VALUES.map(item => ({ name: item.name, value: item.value }));
    const intro2DropdownValues = INTRO2_VALUES.map(item => ({ name: item.name, value: item.value }));
    const resolutionDropdownValues = RESOLUTION_VALUES.map(item => ({ name: item.name, value: item.value }));
    const draftTypeDropdownValues = DRAFT_TYPE_VALUES.map(item => ({ name: item.name, value: item.value })); // New Draft Type values

    $('#aer-dropdown').dropdown({
        values: aerDropdownValues,
        placeholder: 'Select Intro',
        on: 'click',
        allowAdditions: false,
        onChange: function (value, text, $selectedItem) {
            console.log('Selected Intro value:', value);
        }
    });

    $('#outro-dropdown').dropdown({
        values: outroDropdownValues,
        placeholder: 'Select Outro',
        on: 'click',
        allowAdditions: false,
        onChange: function (value, text, $selectedItem) {
            console.log('Selected Outro value:', value);
        }
    });

    $('#closing-dropdown').dropdown({
        values: closingDropdownValues,
        placeholder: 'Select Closing',
        on: 'click',
        allowAdditions: false,
        onChange: function (value, text, $selectedItem) {
            console.log('Selected Closing value:', value);
        }
    });

    $('#error-dropdown').dropdown({
        values: errorDropdownValues,
        placeholder: 'Select Error',
        on: 'click',
        allowAdditions: false,
        onChange: function (value, text, $selectedItem) {
            console.log('Selected Error value:', value);
        }
    });

    $('#intro2-dropdown').dropdown({
        values: intro2DropdownValues,
        placeholder: 'Select Suffix',
        on: 'click',
        allowAdditions: false,
        onChange: function (value, text, $selectedItem) {
            console.log('Selected Intro 2 value:', value);
        }
    });

    $('#resolution-dropdown').dropdown({
        values: resolutionDropdownValues,
        placeholder: 'Select Resolution',
        on: 'click',
        allowAdditions: false,
        onChange: function (value, text, $selectedItem) {
            console.log('Selected Resolution value:', value);
        }
    });

    $('#draft-type-dropdown').dropdown({ // Initialize Draft Type dropdown
        values: draftTypeDropdownValues,
        placeholder: 'Select Draft Type',
        on: 'click',
        allowAdditions: false,
        onChange: function (value, text, $selectedItem) {
            console.log('Selected Draft Type value:', value);
            generateOutput(); // Trigger output generation on change
        }
    });

    console.log("Dropdowns initialized with values:", {
        aerDropdownValues,
        outroDropdownValues,
        closingDropdownValues,
        errorDropdownValues,
        intro2DropdownValues,
        resolutionDropdownValues,
        draftTypeDropdownValues // Log new Draft Type values
    });
}
