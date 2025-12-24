
const API_URL = "http://localhost:5000/api";

// 1. LOAD PACKAGES ON START
document.addEventListener("DOMContentLoaded", () => {
    fetch(`${API_URL}/packages`)
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('pkg-container');
        container.innerHTML = data.map(pkg => `
            <div class="card">
                <h3>${pkg.name}</h3>
                <div class="price">${pkg.price}</div>
                <p style="color:#ddd; margin-bottom: 20px;">${pkg.features}</p>
                <button class="btn-3d" onclick="selectPackage('${pkg.name}')">Select Plan</button>
            </div>
        `).join('');
    })
    .catch(err => console.error("API Error", err));
});

// 2. PACKAGE SELECTION LOGIC
function selectPackage(pkgName) {
    document.getElementById('package').value = pkgName;
    document.getElementById('contact').scrollIntoView();
}

// 3. BOOKING & OTP LOGIC
function showOtp() {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const date = document.getElementById('event_date').value;
    
    if(name && mobile && date) {
        document.getElementById('otpModal').style.display = 'flex';
    } else {
        alert("Please fill Name, Mobile and Date!");
    }
}

function closeModal() {
    document.getElementById('otpModal').style.display = 'none';
}

function verifyOtp() {
    const otp = document.getElementById('otpInput').value;
    if(otp === "0773") {
        submitBooking();
    } else {
        document.getElementById('error').style.display = 'block';
    }
}

function submitBooking() {
    const data = {
        name: document.getElementById('name').value,
        mobile: document.getElementById('mobile').value,
        event_date: document.getElementById('event_date').value,
        event_type: document.getElementById('event_type').value,
        package: document.getElementById('package').value || "Custom/Not Selected"
    };

    fetch(`${API_URL}/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        alert("✅ Booking Confirmed Successfully!");
        closeModal();
        document.getElementById('bookingForm').reset();
        window.scrollTo(0, 0); // Go to top
    })
    .catch(err => alert("Error booking. Is Backend running?"));
}
