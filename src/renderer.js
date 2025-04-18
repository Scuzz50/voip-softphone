function login() {
  const domain = document.getElementById("domain").value;
  const extension = document.getElementById("extension").value;
  const password = document.getElementById("password").value;

  alert("This would start SIP registration with: " + extension + "@" + domain);
  // Here you would initialize SIP.js with credentials
}