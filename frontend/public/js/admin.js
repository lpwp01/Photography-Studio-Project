
fetch("http://localhost:5000/api/admin/bookings")
.then(res => res.json())
.then(data => {
    document.getElementById('adminTable').innerHTML = data.map(b => `
        <tr>
            <td>${b.id}</td>
            <td>${b.name}</td>
            <td>${b.mobile}</td>
            <td>${b.event_type}</td>
            <td>${b.event_date}</td>
            <td>${b.package}</td>
            <td><span style="color:#00ff00">Confirmed</span></td>
        </tr>
    `).join('');
});
