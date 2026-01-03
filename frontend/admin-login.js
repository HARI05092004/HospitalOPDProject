document.getElementById("adminLoginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    console.log(data);

    if (!res.ok) {
      alert(data.msg);
      return;
    }

    alert("Admin Login Success");
    window.location.href = "admin-dashboard.html";

  } catch (err) {
    console.error(err);
    alert("Server not reachable");
  }
});
