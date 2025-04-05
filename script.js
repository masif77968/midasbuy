// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Live Chat Toggle
const liveChatButton = document.querySelector('.live-chat');
const chatWindow = document.createElement('div');
chatWindow.innerHTML = `
  <div class="chat-box">
    <h3>Live Chat 💬</h3>
    <p>How can we help you today?</p>
    <textarea placeholder="Type your message..."></textarea>
    <button>Send</button>
  </div>
`;
chatWindow.style.display = 'none';
document.body.appendChild(chatWindow);

liveChatButton.addEventListener('click', () => {
  if (chatWindow.style.display === 'none') {
    chatWindow.style.display = 'block';
  } else {
    chatWindow.style.display = 'none';
  }
});

// Dynamic Package Selection
const packageCards = document.querySelectorAll('.package-card');
packageCards.forEach(card => {
  card.addEventListener('click', () => {
    const packageName = card.querySelector('h3').innerText;
    const packagePrice = card.querySelector('p').innerText;
    alert(`You selected: ${packageName} for ${packagePrice}`);
  });
});

// Sticky Navigation Bar
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  if (username === "admin" && password === "password123") {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
});
