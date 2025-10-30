const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwV_2L5nEDzJ2egFB82LLSMhRhYqA8DtGakwiu_V-A16NtSwxD9fl3w8-rtVzK-1t0s0w/exec";

const form = document.getElementById('applicationForm');
const submitBtn = document.getElementById('submitBtn');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', async function (e) {
  e.preventDefault(); // 새로고침 방지

  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const phone = document.getElementById("phone").value.trim();
  const phoneError = document.getElementById("phoneError");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^010-\d{4}-\d{4}$/;

  // 유효성 검사
  let valid = true;

  if (!emailPattern.test(email)) {
    emailError.textContent = "올바른 이메일 형식이 아닙니다.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  if (!phonePattern.test(phone)) {
    phoneError.textContent = "형식: 010-1234-5678";
    valid = false;
  } else {
    phoneError.textContent = "";
  }

  if (!valid) return; // 유효성 실패 시 중단

  // 버튼 상태 변경
  submitBtn.disabled = true;
  submitBtn.textContent = "제출중...";

  // 폼 데이터 생성
  const formData = {
    applicant: document.getElementById('name').value,
    team: document.getElementById('team_form').value,
    role: document.getElementById('field').value,
    email: email,
    phoneNumber: phone,
    reason: document.getElementById('reason').value
  };

  try {
    // 원본 코드와 동일한 형식 (JSON + no-cors)
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    alert("신청이 완료되었습니다!");
    form.reset();

  } catch (error) {
    console.error("전송 오류:", error);
    alert("전송 중 오류가 발생했습니다. 다시 시도해주세요.");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "제출";
  }
});

// 스무스 스크롤 (원본 유지)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      const navCollapse = document.getElementById('navMain');
      if (navCollapse.classList.contains('show')) {
        bootstrap.Collapse.getInstance(navCollapse)?.hide();
      }
    }
  });
});