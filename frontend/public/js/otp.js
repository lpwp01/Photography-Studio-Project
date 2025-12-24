
function showOtp() {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    if(name && mobile) {
        document.getElementById('otpModal').style.display = 'flex';
    } else {
        alert("Please fill Name and Mobile");
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
