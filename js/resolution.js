// Resolution Values
export const RESOLUTION_VALUES = [
    { name: 'Full Refund', value: 'Full Refund' },
    { name: 'Partial Refund', value: 'Partial Refund' },
    { name: 'Reprint', value: 'Reprint' },
    { name: 'Reprint (Await)', value: 'Reprint (Await)' }, // Moved next to other Reprint values
    { name: 'Reprint (Collection)', value: 'Reprint (Collection)' }, // Moved next to other Reprint values
    { name: 'Coupon', value: 'Coupon' },
    { name: 'Coupon (Reprint Preferred)', value: 'Coupon (Reprint Preferred)' },
    { name: 'Coupon (Refund Preferred)', value: 'Coupon (Refund Preferred)' }
];

// Messages for each Resolution value
export const RESOLUTION_MESSAGES = {
    'Full Refund': "We apologize for the inconvenience. As requested, we have issued a full refund of **AMT**. Just a heads up, it might take 10 to 20 business days to show up in your account. If you'd like to check the refund status, please reach out to your bank directly.<br><br>We appreciate your utmost understanding in this matter. Please let us know if you need further assistance.",
    'Partial Refund': "We apologize for the inconvenience. As requested, we have issued a partial refund of **AMT**. Just a heads up, it might take 10 to 20 business days to show up in your account. If you'd like to check the refund status, please reach out to your bank directly.<br><br>We appreciate your utmost understanding in this matter. Please let us know if you need further assistance.",
    'Reprint': "We value your experience using Canva. We've quickly taken care of your request and processed a reprint of your order and upgraded it to **NEW** shipping. You may expect to receive it between **INSERT_ETA**.<br><br>Your new order ID is **REPRINTED_ID**.<br><br>__Note that reprinted orders processed by Canva won't appear on your account. We’ll send you order updates through your Canva-registered email address.__",
    'Reprint (Await)': "Rest assured, we can fix this by adjusting your design and reprinting your order. It'll be shipped via **INSERT_METHOD** (**X_to_X** business days).<br><br>Please see the image below for the suggested fix:<br><br>**INSERT_SCREENSHOT_HERE**<br><br>Just let us know if you want us to go ahead with the reprint using the suggested design, and we'll get right on it!<br><br>We are looking forward to hearing from you.",
    'Reprint (Collection)': "We value your experience using Canva. We've quickly taken care of your request and processed a reprint of your order. You may expect it to be ready for pick up between **INSERT_ETA**.<br><br>Your new order ID is **REPRINTED_ID**.<br><br>__Note that reprinted orders processed by Canva won't appear on your account. We’ll send you order updates through your Canva-registered email address.__",
    'Coupon': "We’re glad to provide you with a reorder coupon equivalent to the affected item **INSERT_AMT**. In this way, you can adjust the design and place a new order.<br><br>Code: **COUPON_CODE**<br><br>Valid until: **EXP_DATE**. Kindly make sure to apply it on or before this date.<br><br>The code can only be redeemed under the Canva team **INSERT_TEAM_NAME**. Make sure you’re on this team before placing the order. Learn more about using Canva Print coupon codes.",
    'Coupon (Reprint Preferred)': "Although we would love to process this as a reprint for you, we’d like to empower our users to be confident in creating and proofing their designs. Instead, we’re glad to provide you with a reorder coupon equivalent to the affected item (**AMT**). You can use it to adjust the design and place a new order.<br><br>Code: **COUPON_CODE**<br><br>Valid until: **EXP_DATE**. Kindly make sure to apply it on or before this date.<br><br>The code can only be redeemed under the Canva team **INSERT_TEAM_NAME**. Make sure you’re on this team before placing the order. Learn more about <a href='https://www.canva.com/help/canva-print-coupons/'>using Canva Print coupon codes</a>.",
    'Coupon (Refund Preferred)': "Although we would love to process this as a refund for you, we’d like to empower our users to be confident in creating and proofing their designs. Instead, we’re glad to provide you with a reorder coupon equivalent to the affected item (**AMT**). You can use it to adjust the design and place a new order.<br><br>Code: **COUPON_CODE**<br><br>Valid until: **EXP_DATE**. Kindly make sure to apply it on or before this date.<br><br>The code can only be redeemed under the Canva team **INSERT_TEAM_NAME**. Make sure you’re on this team before placing the order. Learn more about <a href='https://www.canva.com/help/canva-print-coupons/'>using Canva Print coupon codes</a>."
};

// Debugging statement to check if this file is loaded
console.log("RESOLUTION_VALUES loaded:", RESOLUTION_VALUES);
console.log("RESOLUTION_MESSAGES loaded:", RESOLUTION_MESSAGES);
