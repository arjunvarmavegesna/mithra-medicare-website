/* =============================================
   MITHRA MEDICARE HOSPITAL — main.js
   ============================================= */

// =============================================
// DOCTORS DATA (extracted from Excel file)
// =============================================
const DOCTORS = [
  {
    no: 1,
    name: "Dr. Chunduri Sai Babu",
    designation: "General Surgeon",
    qualification: "MS, SFAIS",
    emoji: "🧑‍⚕️",
    category: "surgery",
    desc: "Experienced general surgeon specializing in laparoscopic and open surgical procedures."
  },
  {
    no: 2,
    name: "Dr. A.S.N. Malleswaramma",
    designation: "Gynaecologist",
    qualification: "MBBS, M.D., D.G.O",
    emoji: "👩‍⚕️",
    category: "women",
    desc: "Specialist in obstetrics and gynaecology with extensive experience in women's health care."
  },
  {
    no: 3,
    name: "Dr. Nekkanti Sai Sindhu",
    designation: "Gynaecologist",
    qualification: "M.S. (Obst. & Gynae.)",
    emoji: "👩‍⚕️",
    category: "women",
    desc: "Expert in obstetrics and gynaecological surgeries, dedicated to comprehensive women's care."
  },
  {
    no: 4,
    name: "Dr. Ch. V.V. Vikranth",
    designation: "Gastroenterologist",
    qualification: "MBBS, M.D., D.M. Gastroenterology",
    emoji: "🧑‍⚕️",
    category: "medicine",
    desc: "DM-qualified gastroenterologist with expertise in digestive disorders, endoscopy, and liver diseases."
  },
  {
    no: 5,
    name: "Dr. Mutyala Priyanka",
    designation: "Dermatologist",
    qualification: "M.D. Dermatology, Venerology",
    emoji: "👩‍⚕️",
    category: "others",
    desc: "Specialist in skin diseases, cosmetic dermatology, and venereological conditions."
  },
  {
    no: 6,
    name: "Dr. Naga Vijayendra Vaishnavi Vaddi",
    designation: "Anaesthesiologist",
    qualification: "M.D. Anaesthesiology",
    emoji: "👩‍⚕️",
    category: "others",
    desc: "Expert anaesthesiologist ensuring safe and effective anaesthesia care for all surgical procedures."
  },
  {
    no: 7,
    name: "Dr. Pavan Pradeep Yandapalli",
    designation: "Orthopaedic Surgeon",
    qualification: "MS Orthopaedics",
    emoji: "🧑‍⚕️",
    category: "surgery",
    desc: "MS-qualified orthopaedic surgeon specializing in fractures, joint care, and sports injuries."
  },
  {
    no: 8,
    name: "Dr. K.G.V. Prasanth",
    designation: "General Physician",
    qualification: "MBBS, MD, CPCDM",
    emoji: "🧑‍⚕️",
    category: "medicine",
    desc: "Internal medicine specialist with CPCDM certification for advanced diabetes and chronic disease management."
  },
  {
    no: 9,
    name: "Dr. Murali Areti",
    designation: "Paediatrician",
    qualification: "MD – Paediatrics",
    emoji: "🧑‍⚕️",
    category: "medicine",
    desc: "Dedicated paediatrician providing comprehensive healthcare for children from birth through adolescence."
  },
  {
    no: 10,
    name: "Dr. K. Valli Manasa",
    designation: "Radiologist",
    qualification: "MD – Radiology",
    emoji: "👩‍⚕️",
    category: "others",
    desc: "MD-qualified radiologist providing expert diagnostic imaging interpretation for accurate medical diagnosis."
  },
  {
    no: 11,
    name: "Dr. A.S.V. Suma Devi",
    designation: "ENT Specialist",
    qualification: "MS OTO Rhino Laryngology",
    emoji: "👩‍⚕️",
    category: "others",
    desc: "Specialist in ear, nose and throat conditions including otolaryngology and rhinological procedures."
  },
  {
    no: 12,
    name: "Dr. Satish Babu Medidi",
    designation: "Pulmonologist",
    qualification: "MBBS, MD (Respiratory Medicine)",
    emoji: "🧑‍⚕️",
    category: "medicine",
    desc: "Respiratory medicine specialist managing asthma, COPD, lung infections, and comprehensive pulmonary care."
  },
  {
    no: 13,
    name: "Dr. Oleti Ravi Teja",
    designation: "Gastro Surgeon",
    qualification: "MS / M.Ch",
    emoji: "🧑‍⚕️",
    category: "surgery",
    desc: "Advanced gastrointestinal and laparoscopic surgeon with M.Ch qualification for complex GI surgical procedures."
  }
];

// =============================================
// RENDER DOCTORS
// =============================================
function renderDoctors(filter = 'all') {
  const grid = document.getElementById('doctorsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = filter === 'all' ? DOCTORS : DOCTORS.filter(d => d.category === filter);

  filtered.forEach((doc, i) => {
    const waMsg = encodeURIComponent(`Hello, I would like to book an appointment with ${doc.name} (${doc.designation}) at Mithra Medicare Hospital.`);
    const card = document.createElement('div');
    card.className = 'doctor-card reveal';
    card.style.animationDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <div class="doctor-avatar">${doc.emoji}</div>
      <div class="doc-body">
        <div class="doc-num">Doctor #${String(doc.no).padStart(2,'0')}</div>
        <div class="doc-name">${doc.name}</div>
        <div class="doc-spec">${doc.designation}</div>
        <div class="doc-qual">${doc.qualification}</div>
      </div>
      <a href="https://wa.me/919876543210?text=${waMsg}"
         class="doc-wa" target="_blank" rel="noopener">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Book Appointment
      </a>
    `;
    grid.appendChild(card);
  });

  // Re-observe newly created cards
  observeReveal();
}

// =============================================
// FILTER TABS
// =============================================
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderDoctors(tab.dataset.filter);
    });
  });
}

// =============================================
// SCROLL REVEAL
// =============================================
let revealObserver;

function observeReveal() {
  const elements = document.querySelectorAll('.reveal:not(.visible)');

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger delay based on sibling position
          const siblings = entry.target.parentElement
            ? Array.from(entry.target.parentElement.querySelectorAll('.reveal'))
            : [];
          const idx = siblings.indexOf(entry.target);
          const delay = Math.min(idx * 80, 400);
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  }

  elements.forEach(el => revealObserver.observe(el));
}

// =============================================
// NAVBAR — scroll state & active link
// =============================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const links  = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });
}

// =============================================
// HAMBURGER MENU
// =============================================
function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const menu  = document.getElementById('navLinks');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    // Animate spans
    const spans = btn.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });

  // Close on nav link click
  menu.querySelectorAll('.nav-link, .btn-whatsapp-sm').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      btn.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}

// =============================================
// SMOOTH SCROLL (fallback for old browsers)
// =============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  renderDoctors('all');
  initFilterTabs();
  initNavbar();
  initHamburger();
  initSmoothScroll();
  observeReveal();
});
