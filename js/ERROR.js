// Error Values
export const ERROR_VALUES = [
    { name: 'Bleed', value: 'Bleed' },
    { name: 'IDM', value: 'IDM' },
    { name: 'IDM (Multi)', value: 'IDM (Multi)' },
    { name: 'Incorrect Orientation', value: 'Incorrect Orientation' },
    { name: 'Misaligned Trifold', value: 'Misaligned Trifold' },
    { name: 'Uneven Trimming', value: 'Uneven Trimming' },
    { name: 'Unmatched Colors', value: 'Unmatched Colors' },
    { name: 'Unmatched Blacks', value: 'Unmatched Blacks' },
    { name: 'Color Issues', value: 'Color Issues' },
    { name: 'Production Error', value: 'Production Error' } // New error value
];

// Error Messages
export const ERROR_MESSAGES = {
    'Bleed': "Upon checking, it appears that the design has insufficient bleed or allowance beyond the trim area. It's recommended that a **design extends past its printed edge** so there’s no chance of unintended borders when it’s trimmed down after printing.",
    'IDM': "Upon checking, it appears that the design has an insufficient margin. The red outline on the screenshot below represents the danger zone — any element that touches or falls outside it is prone to be trimmed off.",
    'IDM (Multi)': "Upon checking, some elements in the design are **placed too close to the margin or binding**.",
    'Incorrect Orientation': "Upon review, one of the panels in your design is **incorrectly oriented** and needs to be rotated.",
    'Misaligned Trifold': "Upon checking, we noticed that your trifold brochure design isn't aligned with the folded sections that make up each brochure panel, which may cause folding and/or trimming issues.",
    'Uneven Trimming': "Upon review, _TRIMMING_ISSUE_MACRO_INSERT_<br>",
    'Unmatched Colors': "The element has a background color that doesn’t match the design’s background color. It's recommended to update the design to use the same HEX code **INSERT_HEX** for both the element and the image background.",
    'Unmatched Blacks': "The black background in the image doesn’t match the rest of the design, making it look off in print. The design must be adjusted to ensure that the color of the image blends nicely with the background.",
    'Color Issues': "Upon review, it appears that a color issue occurred during production.<br>",
    'Production Error': "Upon checking, _QUALITY_ISSUE_MACRO_INSERT_<br>" // New error message
};

// Error Additional Info
export const ERROR_ADDITIONAL_INFO = {
    'Bleed': `Learn how to extend your design to the bleed area:<ul><li><a href="https://www.canva.com/help/margins-bleed-crop-marks/#:~:text=inside%20the%20margin.-,Using%20bleed,-Avoid%20unintended%20white" target="_blank">Using margins, bleed, rulers, and crop marks - Canva Help Center</a></li><li><a href="https://www.canva.com/design/DAFvgxG6JrE/FzcWUhbHEXiCbSeeIEilkg/watch?utm_content=DAFvgxG6JrE&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">Fixing unintended white borders (demo)</a></li></ul><br>__Please refer to the image below__<br>`,
    'IDM': `Moving forward, you may check if your design has sufficient margin by following the steps here: <a href="https://www.canva.com/help/margins-bleed-crop-marks/" target="_blank">Using margins, bleed, rulers, and crop marks</a>.`,
    'IDM (Multi)': `You may watch a quick tutorial on how to fix it: <a href="https://www.canva.com/design/DAFyCwh1IXA/u32wq_2nmjA-t9Qwoen8uA/watch?utm_content=DAFyCwh1IXA&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">Fixing margin in multi-page designs</a>.<br><br>**__[INCLUDE STEPS TO FIX BELOW FOR NON-ENGLISH USERS ONLY]__**<ol><li>Click File, then View Settings. Select Show rulers and guides.</li><li>Add guides to your design space by clicking the ruler and dragging a guide into your design.</li><li>Set the guides to 0.5 inch (or 1.25 cm) from the edge on all sides.</li><li>Select the elements near the edge of the page (shown in red in the attached preview images).</li><li>Move or scale the elements to the inside of the guides.</li><li>Adjust the affected design elements on the remaining pages.</li></ol>`,
    'Incorrect Orientation': `Moving forward, refer to these Help Center articles to avoid this issue in the future:<ul><li><a href="https://www.canva.com/help/print-correct-orientation" target="_blank">Print designs in the correct orientation</a></li><li><a href="https://www.canva.com/help/flip-and-rotate/" target="_blank">Flipping and rotating elements</a></li></ul>`,
    'Misaligned Trifold': 'You may watch a quick tutorial on how to fix it: <a href="https://www.canva.com/design/DAF994WwMoM/PDSszmlbbIeFRc3hMaDrHw/watch?utm_content=DAF994WwMoM&utm_campaign=designshare&utm_medium=link&utm_source=editor">Adjusting trifold brochure panels.</a>',
    'Uneven Trimming': '',
    'Unmatched Colors': `For more tips on how to design with print colors, kindly check this article from our Help Center: <a href="https://www.canva.com/help/cmyk-for-print/" target="_blank">Designing with print colors</a>.`,
    'Unmatched Blacks': 'To fix this in future designs, use only one black image in your layout.',
    'Color Issues': '',
    'Production Error': '' // New additional info
};

// Error Aer Messages
export const ERROR_AER_MESSAGE = {
    'Bleed': "especially due to the misalignment with the edges on your print.",
    'IDM': "especially considering the overall uneven trimming and misalignment.",
    'IDM (Multi)': "particularly given the overall uneven appearance of the pages.",
    'Incorrect Orientation': "especially with the design being printed upside down.",
    'Misaligned Trifold': 'especially with the misaligned panels.',
    'Uneven Trimming': "especially with the uneven and off-centered trimming.",
    'Unmatched Colors': "especially with the unmatched colors.",
    'Unmatched Blacks': "especially with the different shades of black.",
    'Color Issues': "especially with the color inconsistency.",
    'Production Error': "especially with the poor quality of the print." // New aer message
};

// Debugging statement to check if this file is loaded
console.log("ERROR_VALUES loaded:", ERROR_VALUES);
console.log("ERROR_MESSAGES loaded:", ERROR_MESSAGES);
console.log("ERROR_ADDITIONAL_INFO loaded:", ERROR_ADDITIONAL_INFO);
console.log("ERROR_AER_MESSAGE loaded:", ERROR_AER_MESSAGE);
