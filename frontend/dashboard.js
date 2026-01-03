window.onload = () => {
  const email = localStorage.getItem("userEmail");

  if (!email) {
    window.location.href = "login.html";
    return;
  }

  // Extract name from email
  const userName = email.split("@")[0];//these is used to split the name and gmail ex;hari@gamil.com convert to hari

  document.getElementById("username").innerText = userName;
};




// Navigation functions
function bookAppointment() {
  window.location.href = "opd.html";
}

function viewAppointments() {
  window.location.href = "viewappointment.html";
}

function viewReports() {
  alert("Reports feature coming soon");
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
