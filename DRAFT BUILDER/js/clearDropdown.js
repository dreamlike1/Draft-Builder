// clearDropdown.js

// Function to clear dropdown selection
export function clearDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        $(dropdown).dropdown('hide'); // Hide the dropdown
        $(dropdown).dropdown('clear'); // Clear the selected value
    }
}

// Attach event listeners to button elements to clear corresponding dropdowns
export function attachClearDropdownListeners() {
    // Assuming buttons have specific IDs for clearing dropdowns
    document.getElementById('draft-type-icon-button').addEventListener('click', () => clearDropdown('draft-type-dropdown'));
    document.getElementById('intro-icon-button').addEventListener('click', () => clearDropdown('aer-dropdown'));
    document.getElementById('intro2-icon-button').addEventListener('click', () => clearDropdown('intro2-dropdown'));
    document.getElementById('error-icon-button').addEventListener('click', () => clearDropdown('error-dropdown'));
    document.getElementById('resolution-icon-button').addEventListener('click', () => clearDropdown('resolution-dropdown'));
    document.getElementById('outro-icon-button').addEventListener('click', () => clearDropdown('outro-dropdown'));
    document.getElementById('closing-icon-button').addEventListener('click', () => clearDropdown('closing-dropdown'));
}
