import { generateOutput } from './generate.js';
import { clearDropdown } from './clearDropdown.js'; // Import the clearDropdown function

export function attachEventListeners() {
    const nameInput = document.getElementById('name');
    const userInput = document.getElementById('user');
    const orderIdInput = document.getElementById('order-id');
    const aerDropdown = document.getElementById('aer-dropdown');
    const outroDropdown = document.getElementById('outro-dropdown');
    const closingDropdown = document.getElementById('closing-dropdown');
    const errorDropdown = document.getElementById('error-dropdown');
    const intro2Dropdown = document.getElementById('intro2-dropdown');
    const resolutionDropdown = document.getElementById('resolution-dropdown');
    const draftTypeDropdown = document.getElementById('draft-type-dropdown'); // New Draft Type dropdown
    const insertGuidesCheckbox = document.getElementById('insert-guides');

    // Event listeners for input fields and checkboxes
    if (nameInput && userInput && orderIdInput && aerDropdown && outroDropdown && closingDropdown && errorDropdown && intro2Dropdown && resolutionDropdown && draftTypeDropdown && insertGuidesCheckbox) {
        console.log("Event listeners attached successfully");

        nameInput.addEventListener('input', generateOutput);
        userInput.addEventListener('input', generateOutput);
        orderIdInput.addEventListener('input', generateOutput);

        nameInput.addEventListener('keypress', handleEnterKey);
        userInput.addEventListener('keypress', handleEnterKey);
        orderIdInput.addEventListener('keypress', handleEnterKey);

        $(aerDropdown).dropdown('setting', 'onChange', generateOutput);
        $(outroDropdown).dropdown('setting', 'onChange', generateOutput);
        $(closingDropdown).dropdown('setting', 'onChange', generateOutput);
        $(errorDropdown).dropdown('setting', 'onChange', generateOutput);
        $(intro2Dropdown).dropdown('setting', 'onChange', generateOutput);
        $(resolutionDropdown).dropdown('setting', 'onChange', generateOutput);
        $(draftTypeDropdown).dropdown('setting', 'onChange', generateOutput); // Add listener for Draft Type
        insertGuidesCheckbox.addEventListener('change', generateOutput);

        // Add event listeners for the clear dropdown buttons
        document.getElementById('draft-type-icon-button').addEventListener('click', () => clearDropdown('draft-type-dropdown'));
        document.getElementById('intro-icon-button').addEventListener('click', () => clearDropdown('aer-dropdown'));
        document.getElementById('intro2-icon-button').addEventListener('click', () => clearDropdown('intro2-dropdown'));
        document.getElementById('error-icon-button').addEventListener('click', () => clearDropdown('error-dropdown'));
        document.getElementById('resolution-icon-button').addEventListener('click', () => clearDropdown('resolution-dropdown'));
        document.getElementById('outro-icon-button').addEventListener('click', () => clearDropdown('outro-dropdown'));
        document.getElementById('closing-icon-button').addEventListener('click', () => clearDropdown('closing-dropdown'));

    } else {
        console.error("One or more elements not found");
    }
}

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const inputs = ['name', 'user', 'order-id', 'aer-dropdown', 'outro-dropdown', 'closing-dropdown', 'error-dropdown', 'intro2-dropdown', 'resolution-dropdown', 'draft-type-dropdown']; // Include new Draft Type
        const currentIndex = inputs.indexOf(event.target.id);
        if (currentIndex < inputs.length - 1) {
            const nextInput = document.getElementById(inputs[currentIndex + 1]);
            if (nextInput) {
                nextInput.focus();
            }
        }
    }
}
