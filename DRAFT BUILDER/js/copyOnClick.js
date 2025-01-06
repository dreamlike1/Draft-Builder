// js/copyOnClick.js

export function setupCopyOnClick() {
    const outputDiv = document.getElementById('output');

    if (outputDiv) {
        outputDiv.addEventListener('click', () => {
            const range = document.createRange();
            range.selectNode(outputDiv);
            window.getSelection().removeAllRanges(); // Clear any current selections
            window.getSelection().addRange(range); // Select the text
            document.execCommand('copy'); // Copy the selected text
            window.getSelection().removeAllRanges(); // Deselect the text

            // Show toast message using Toastr
            toastr.success('TEXT IS COPIED!', '', {
                positionClass: 'toast-bottom-right', // Position of the toast
                timeOut: 2000, // Duration of the toast
                progressBar: true // Show progress bar
            });
        });
    }
}
