document.getElementById("applyForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const phone = document.getElementById("phone").value.trim();
  const phoneError = document.getElementById("phoneError");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^010-\d{4}-\d{4}$/;

  if (!emailPattern.test(email)) {
    emailError.textContent = "올바른 이메일 형식이 아닙니다.";
    return;
  } else {
    emailError.textContent = "";
  }

  if (!phonePattern.test(phone)) {
    phoneError.textContent = "형식: 010-1234-5678";
    return;
  } else {
    phoneError.textContent = "";
  }

  alert("신청이 완료되었습니다!");
  this.reset();
});
