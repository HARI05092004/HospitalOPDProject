document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (!res.ok) {
    alert(data.msg);
    return;
  }

  // ✅ STORE USER INFO PROPERLY
  localStorage.setItem("userEmail", data.user.email);
  localStorage.setItem("userId", data.user._id);
  localStorage.setItem("user", JSON.stringify(data.user));
  localStorage.setItem("email", data.user.email);

  alert("Login Successful");

  // ✅ Redirect to dashboard
  window.location.href = "dashboard.html";
});
