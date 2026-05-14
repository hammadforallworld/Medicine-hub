// Product Database
const products = [
    { id: 1, name: "Paracetamol 500mg", desc: "Fever and mild pain relief.", price: 5.99, img: "https://cdn-icons-png.flaticon.com/512/3004/3004383.png" },
    { id: 2, name: "Amoxicillin 250mg", desc: "Antibiotic for bacterial infections.", price: 12.50, img: "https://cdn-icons-png.flaticon.com/512/883/883526.png" },
    { id: 3, name: "Vitamin C Complex", desc: "Immunity booster supplement.", price: 8.99, img: "https://cdn-icons-png.flaticon.com/512/4887/4887854.png" },
    { id: 4, name: "Ibuprofen 400mg", desc: "Anti-inflammatory pain killer.", price: 6.50, img: "https://cdn-icons-png.flaticon.com/512/3358/3358249.png" },
    { id: 5, name: "Cough Syrup", desc: "Relief for dry and chesty coughs.", price: 9.20, img: "https://cdn-icons-png.flaticon.com/512/3253/3253106.png" },
    { id: 6, name: "Cetirizine 10mg", desc: "Fast relief from allergies and itching.", price: 7.25, img: "https://cdn-icons-png.flaticon.com/512/888/888879.png" },
    { id: 7, name: "Metformin 500mg", desc: "Blood sugar control for type 2 diabetes.", price: 14.30, img: "https://cdn-icons-png.flaticon.com/512/620/620683.png" },
    { id: 8, name: "Atorvastatin 20mg", desc: "Cholesterol management support.", price: 18.99, img: "https://cdn-icons-png.flaticon.com/512/555/555490.png" },
    { id: 9, name: "Omeprazole 20mg", desc: "Heartburn and acid reflux relief.", price: 11.75, img: "https://cdn-icons-png.flaticon.com/512/2866/2866632.png" },
    { id: 10, name: "Multivitamin Gummies", desc: "Daily wellness vitamins for adults.", price: 15.49, img: "https://cdn-icons-png.flaticon.com/512/2689/2689125.png" },
    { id: 11, name: "Antiseptic Cream", desc: "Skin infection prevention and healing.", price: 6.80, img: "https://cdn-icons-png.flaticon.com/512/413/413574.png" },
    { id: 12, name: "Electrolyte Drink", desc: "Hydration restore for activity and illness.", price: 7.99, img: "https://cdn-icons-png.flaticon.com/512/3024/3024952.png" },
    { id: 13, name: "Prescription Inhaler", desc: "Respiratory relief for asthma and COPD.", price: 32.99, img: "https://cdn-icons-png.flaticon.com/512/2965/2965274.png" },
    { id: 14, name: "Sleep Aid Tablets", desc: "Gentle support for better rest.", price: 13.20, img: "https://cdn-icons-png.flaticon.com/512/755/755102.png" },
    { id: 15, name: "Aspirin 81mg", desc: "Low-dose heart health support.", price: 4.99, img: "https://cdn-icons-png.flaticon.com/512/2642/2642574.png" },
    { id: 16, name: "Naproxen 250mg", desc: "Pain and inflammation relief.", price: 9.45, img: "https://cdn-icons-png.flaticon.com/512/792/792745.png" },
    { id: 17, name: "Loratadine 10mg", desc: "24-hour allergy relief.", price: 7.10, img: "https://cdn-icons-png.flaticon.com/512/2820/2820516.png" },
    { id: 18, name: "Saline Nasal Spray", desc: "Moisturizes and clears nasal passages.", price: 6.15, img: "https://cdn-icons-png.flaticon.com/512/2934/2934114.png" },
    { id: 19, name: "Zinc Lozenges", desc: "Cold symptom relief and immune support.", price: 8.20, img: "https://cdn-icons-png.flaticon.com/512/3071/3071648.png" },
    { id: 20, name: "Probiotic Capsules", desc: "Digestive balance and gut health.", price: 16.75, img: "https://cdn-icons-png.flaticon.com/512/2764/2764705.png" },
    { id: 21, name: "Omega-3 Fish Oil", desc: "Heart and brain nutritional support.", price: 19.90, img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
    { id: 22, name: "Multivitamin Tablets", desc: "Complete daily nutrient support.", price: 17.50, img: "https://cdn-icons-png.flaticon.com/512/3164/3164283.png" },
    { id: 23, name: "Calcium + Vitamin D", desc: "Bone strength and immunity care.", price: 12.80, img: "https://cdn-icons-png.flaticon.com/512/898/898177.png" },
    { id: 24, name: "Magnesium Supplements", desc: "Muscle relaxation and energy support.", price: 11.40, img: "https://cdn-icons-png.flaticon.com/512/3128/3128820.png" },
    { id: 25, name: "B-Complex Vitamins", desc: "Stress and energy metabolism support.", price: 14.60, img: "https://cdn-icons-png.flaticon.com/512/3119/3119804.png" },
    { id: 26, name: "Hydrocortisone Cream", desc: "Itch and rash relief.", price: 5.99, img: "https://cdn-icons-png.flaticon.com/512/900/900741.png" },
    { id: 27, name: "Antacid Tablets", desc: "Fast heartburn relief.", price: 7.75, img: "https://cdn-icons-png.flaticon.com/512/2046/2046523.png" },
    { id: 28, name: "Eye Drops", desc: "Soothes dry, irritated eyes.", price: 8.30, img: "https://cdn-icons-png.flaticon.com/512/3813/3813564.png" },
    { id: 29, name: "Hand Sanitizer", desc: "Antibacterial hand cleansing gel.", price: 4.50, img: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png" },
    { id: 30, name: "Bandage Pack", desc: "Multi-size wound dressing bandages.", price: 5.20, img: "https://cdn-icons-png.flaticon.com/512/3068/3068343.png" },
    { id: 31, name: "Thermometer", desc: "Digital body temperature monitor.", price: 13.99, img: "https://cdn-icons-png.flaticon.com/512/1045/1045200.png" },
    { id: 32, name: "Ear Drops", desc: "Relief for ear discomfort.", price: 9.10, img: "https://cdn-icons-png.flaticon.com/512/3135/3135710.png" },
    { id: 33, name: "Daytime Allergy Relief", desc: "Non-drowsy antihistamine tablets.", price: 10.25, img: "https://cdn-icons-png.flaticon.com/512/4021/4021207.png" },
    { id: 34, name: "Nighttime Cough Syrup", desc: "Soothing cough relief for sleep.", price: 10.75, img: "https://cdn-icons-png.flaticon.com/512/884/884878.png" },
    { id: 35, name: "Acetaminophen 325mg", desc: "Pain and fever reducer.", price: 5.55, img: "https://cdn-icons-png.flaticon.com/512/2838/2838841.png" },
    { id: 36, name: "Activated Charcoal", desc: "Digestive detox and gas relief.", price: 9.60, img: "https://cdn-icons-png.flaticon.com/512/4500/4500930.png" },
    { id: 37, name: "Chamomile Tea Bags", desc: "Relaxing herbal sleep aid.", price: 6.40, img: "https://cdn-icons-png.flaticon.com/512/2917/2917296.png" },
    { id: 38, name: "Iron Tablets", desc: "Supports healthy red blood cells.", price: 13.75, img: "https://cdn-icons-png.flaticon.com/512/888/888879.png" },
    { id: 39, name: "Cold & Flu Relief", desc: "Multi-symptom relief capsules.", price: 12.95, img: "https://cdn-icons-png.flaticon.com/512/3135/3135685.png" },
    { id: 40, name: "Motion Sickness Bands", desc: "Wrist bands for nausea relief.", price: 7.10, img: "https://cdn-icons-png.flaticon.com/512/3157/3157786.png" },
    { id: 41, name: "Antifungal Cream", desc: "Treats athlete's foot and ringworm.", price: 8.80, img: "https://cdn-icons-png.flaticon.com/512/285/285754.png" },
    { id: 42, name: "Hydration Tablets", desc: "Effervescent electrolyte replenishers.", price: 8.99, img: "https://cdn-icons-png.flaticon.com/512/2983/2983965.png" },
    { id: 43, name: "Vitamin D3 2000IU", desc: "Bone and immunity support.", price: 10.20, img: "https://cdn-icons-png.flaticon.com/512/3386/3386903.png" },
    { id: 44, name: "Fiber Supplement", desc: "Daily digestive wellness support.", price: 11.35, img: "https://cdn-icons-png.flaticon.com/512/3219/3219676.png" }
];

let cart = [];

// DOM Elements
const productGrid = document.getElementById('productGrid');
const cartBadge = document.getElementById('cartBadge');
const cartModal = document.getElementById('cartModal');
const paymentModal = document.getElementById('paymentModal');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const paymentTotalElement = document.getElementById('paymentTotal');
const searchInput = document.getElementById('searchInput');

// Initialize Store
function renderProducts(productList) {
    productGrid.innerHTML = '';
    productList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="product-img">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-desc">${product.desc}</p>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(card);
    });
}

// Search Functionality
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    renderProducts(filtered);
});

// Cart Functions
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.innerText = totalItems;

    cartItemsContainer.innerHTML = '';
    let totalAmount = 0;

    cart.forEach(item => {
        totalAmount += item.price * item.quantity;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash"></i></button>
        `;
        cartItemsContainer.appendChild(div);
    });

    cartTotalElement.innerText = totalAmount.toFixed(2);
    paymentTotalElement.innerText = totalAmount.toFixed(2);
}

// Modal Management
document.getElementById('cartBtn').addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

document.getElementById('closeCart').addEventListener('click', () => {
    cartModal.style.display = 'none';
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    cartModal.style.display = 'none';
    paymentModal.style.display = 'flex';
});

document.getElementById('closePayment').addEventListener('click', () => {
    paymentModal.style.display = 'none';
});

document.getElementById('paymentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Payment Successful! Your premium care package is on the way.');
    cart = [];
    updateCartUI();
    paymentModal.style.display = 'none';
});

window.onclick = function(event) {
    if (event.target === cartModal) cartModal.style.display = 'none';
    if (event.target === paymentModal) paymentModal.style.display = 'none';
}

// Initial Render
renderProducts(products);
