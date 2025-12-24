
function submitBooking() {
    const data = {
        name: document.getElementById('name').value,
        mobile: document.getElementById('mobile').value,
        event_date: document.getElementById('event_date').value,
        event_type: document.getElementById('event_type').value,
        package: document.getElementById('package').value
    };

    fetch("http://localhost:5000/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        alert("✅ Booking Confirmed!");
        window.location.href = "index.html";
    })
    .catch(err => alert("Error booking"));
}

// Auto fill package from URL
const urlParams = new URLSearchParams(window.location.search);
if(urlParams.get('package')) {
    document.getElementById('package').value = urlParams.get('package');
}
