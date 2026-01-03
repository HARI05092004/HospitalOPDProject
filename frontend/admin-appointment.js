// Load all appointments when page loads
async function loadAppointments() {
  try {
    const res = await fetch("http://localhost:5000/api/appointments/opd");
    const data = await res.json();

    const table = document.getElementById("appointmentTable");
    table.innerHTML = "";

    if (data.length === 0) {
      table.innerHTML = `
        <tr>
          <td colspan="7" style="text-align:center;">No appointments found</td>
        </tr>
      `;
      return;
    }

    data.forEach(app => {
      table.innerHTML += `
        <tr>
          <td>${app.patientName}</td>
          <td>${app.department}</td>
          <td>${app.doctor}</td>
          <td>${app.date}</td>
          <td>${app.time}</td>
          <td>${app.status}</td>
          <td>
            ${
              app.status === "pending"
                ? `
                  <button onclick="updateStatus('${app._id}', 'accepted')">Accept</button>
                  <button onclick="updateStatus('${app._id}', 'rejected')">Reject</button>
                `
                : `<span>${app.status.toUpperCase()}</span>`
            }
          </td>
        </tr>
      `;
    });

  } catch (error) {
    console.error("Error loading appointments:", error);
    alert("Failed to load appointments");
  }
}

// Update appointment status
async function updateStatus(id, status) {
  try {
    const res = await fetch(
      `http://localhost:5000/api/appointments/opd/status/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status })
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.msg || "Update failed");
    }

    alert(`Appointment ${status.toUpperCase()} successfully ✅`);
    loadAppointments(); // Refresh table

  } catch (error) {
    console.error("Error updating appointment:", error);
    alert("Failed to update appointment");
  }
}

// Initial load
loadAppointments();
