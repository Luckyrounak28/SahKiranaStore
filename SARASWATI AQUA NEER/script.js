const pricePerBottle = 30;

document.getElementById('quantity').addEventListener('input', function() {
    const quantity = document.getElementById('quantity').value || 0;
    const totalPrice = quantity * pricePerBottle;
    document.getElementById('total-price').textContent = `Total Price: ₹${totalPrice}`;
});

document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const quantity = document.getElementById('quantity').value;
    const isEvent = document.getElementById('event').value === 'yes' ? 'Yes' : 'No';
    const totalPrice = quantity * pricePerBottle;

    const orderDetails = `
        Name: ${name}
        Address: ${address}
        Phone: ${phone}
        Quantity: ${quantity}
        For Event: ${isEvent}
        Total Price: ₹${totalPrice}
    `;

    document.getElementById('order-response').textContent = `Order placed! Details: ${orderDetails}`;
});

// Translation functionality
const translations = {
    en: {
        title: "SARASWATI AQUA NEER",
        subtitle: "Purified Water Delivered at Your Doorstep",
        language: "Select Language:",
        order-title: "Order Water Now",
        name: "Full Name:",
        address: "Delivery Address:",
        phone: "Phone Number:",
        quantity: "Number of 20L Bottles:",
        event: "Is this for an event/wedding?",
        total-price: "Total Price: ₹",
        place-order: "Place Order"
    },
    hi: {
        title: "सरस्वती एक्वा नीर",
        subtitle: "शुद्ध पानी आपके दरवाजे पर पहुंचाया गया",
        language: "भाषा चुनें:",
        order-title: "पानी का ऑर्डर करें",
        name: "पूरा नाम:",
        address: "डिलीवरी का पता:",
        phone: "फ़ोन नंबर:",
        quantity: "20 लीटर बोतल की संख्या:",
        event: "क्या यह शादी/इवेंट के लिए है?",
        total-price: "कुल कीमत: ₹",
        place-order: "ऑर्डर करें"
    }
};

document.getElementById('language-select').addEventListener('change', function() {
    const selectedLang = this.value;
    translatePage(selectedLang);
});

function translatePage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[lang][key];
    });
}
