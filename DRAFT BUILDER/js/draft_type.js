// Draft Type values
export const DRAFT_TYPE_VALUES = [
    { name: 'Standard', value: 'standard' },
    { name: 'User Reply', value: 'user-reply' },
    { name: 'Reply Reply', value: 'reply-user' },
    { name: 'Thank', value: 'thank' },
    { name: 'Thank You Response', value: 'thank-you-response' } // Added new draft type value
];

// Draft Type messages
export const DRAFT_TYPE_MESSAGES = {
    'standard': 'Thanks for reaching out and for using Canva Print.',
    'user-reply': 'Thanks for your swift reply and confirmation.',
    'reply-user': 'Thanks for getting back to us.',
    'thank': 'Thank you for patiently waiting.',
    'thank-you-response': "You’re very welcome!<br><br>We’re always glad to be able to help. Your unending support and love for Canva are greatly appreciated.<br><br>We have a lot of great and exciting features in store for you, so please stay tuned. If you have other questions or concerns, feel free to reach out to us anytime. Stay safe and have a wonderful day!" // Added new draft type message
};

// Debugging statement to check if this file is loaded
console.log("DRAFT_TYPE_VALUES loaded:", DRAFT_TYPE_VALUES);
console.log("DRAFT_TYPE_MESSAGES loaded:", DRAFT_TYPE_MESSAGES);
