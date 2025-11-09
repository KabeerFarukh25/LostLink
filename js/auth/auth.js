// Tabs
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const backToLogin = document.getElementById('backToLogin');

function showLogin() {
  loginForm.classList.remove('hidden');
  signupForm.classList.add('hidden');
  loginTab.classList.add('bg-lostlinkBlue', 'text-white');
  signupTab.classList.remove('bg-lostlinkBlue', 'text-white');
  signupTab.classList.add('text-gray-700');
  loginTab.setAttribute('aria-selected', 'true');
  signupTab.setAttribute('aria-selected', 'false');
}

function showSignup() {
  signupForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
  signupTab.classList.add('bg-lostlinkBlue', 'text-white');
  loginTab.classList.remove('bg-lostlinkBlue', 'text-white');
  loginTab.classList.add('text-gray-700');
  signupTab.setAttribute('aria-selected', 'true');
  loginTab.setAttribute('aria-selected', 'false');
}

loginTab.onclick = showLogin;
signupTab.onclick = showSignup;
backToLogin.onclick = (e) => { e.preventDefault(); showLogin(); };

showLogin(); // Default state

// Local "mock" authentication logic (to replace later with backend)
loginForm.onsubmit = (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const users = JSON.parse(localStorage.getItem('lostlinkUsers')) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    alert(`✅ Welcome back, ${user.name || 'User'}!`);
    window.location.href = 'index.html';
  } else {
    alert('❌ Invalid email or password. Please try again.');
  }
};

signupForm.onsubmit = (e) => {
  e.preventDefault();
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  const users = JSON.parse(localStorage.getItem('lostlinkUsers')) || [];
  if (users.some(u => u.email === email)) {
    alert('⚠️ Email already registered. Please log in.');
    showLogin();
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem('lostlinkUsers', JSON.stringify(users));
  alert('✅ Account created successfully! Please log in.');
  showLogin();
};