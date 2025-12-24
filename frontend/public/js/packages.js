
const API_URL = "http://localhost:5000/api";

fetch(`${API_URL}/packages`)
.then(res => res.json())
.then(data => {
    const container = document.getElementById('pkg-container');
    container.innerHTML = data.map(pkg => `
        <div class="card">
            <h3>${pkg.name}</h3>
            <div class="price">${pkg.price}</div>
            <p>${pkg.features}</p>
            <a href="booking.html?package=${encodeURIComponent(pkg.name)}" class="btn-3d" style="margin-top:20px;">Select Plan</a>
        </div>
    `).join('');
})
.catch(err => console.error(err));
