// Typing Effect
const typingText = document.getElementById('typing');
const words = ["Mahasiswa Teknik Informatika", "Full-Stack Developer", "UI/UX Designer"];
let wordIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  typingText.textContent = currentWord.substring(0, charIndex);

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 80);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 1200);
  }
}
typeEffect();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Project Modal
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3').textContent;
    const modal = document.getElementById('project-modal');
    modal.innerHTML = `
      <div class="bg-zinc-900 max-w-2xl mx-4 rounded-3xl p-10 relative">
        <button onclick="this.parentElement.parentElement.classList.add('hidden')" class="absolute top-6 right-6 text-3xl">×</button>
        <h3 class="text-4xl font-bold mb-4">${title}</h3>
        <p class="text-zinc-400">Detail lengkap project ini bisa kamu lihat di GitHub atau langsung coba live demo.</p>
        <div class="mt-10 flex gap-4 justify-center">
          <a href="#" class="px-8 py-3 bg-emerald-500 rounded-full">Lihat Live</a>
          <a href="#" class="px-8 py-3 border border-white rounded-full">GitHub</a>
        </div>
      </div>
    `;
    modal.classList.remove('hidden');
  });
});

// Filter Projects
function filterProjects(cat) {
  document.querySelectorAll('.project-card').forEach(card => {
    if (cat === 'all' || card.dataset.category === cat) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Contact Form
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  const res = await fetch('/send-message', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(formData)
  });
  const data = await res.json();
  alert(data.message);
  e.target.reset();
});

// Mobile Menu (simple toggle)
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  alert
});

// Download CV (fake)
function downloadCV() {
  alert;
}