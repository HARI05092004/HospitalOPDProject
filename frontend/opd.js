

document.getElementById("opdForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    email:document.getElementById("EmailId").value,
    patientName: document.getElementById("patientName").value,
    department: document.getElementById("department").value,
    doctor: document.getElementById("doctor").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    problem: document.getElementById("problem").value
  };

  try {
    const res = await fetch("http://localhost:5000/api/appointments/opd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (res.ok) {
      alert("✅ Appointment booked successfully!");
      
      // 🔁 Redirect to dashboard after OK click
      window.location.href = "dashboard.html";
    } else {
      alert(result.msg || "❌ Booking failed");
    }
  } catch (error) {
    alert("❌ Server not reachable");
    console.error(error);
  }
});
