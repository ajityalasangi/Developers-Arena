// Clinic Website Interactions

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
	navToggle.addEventListener('click', () => {
		navLinks.classList.toggle('open');
		navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
	});
}

// Simple Carousel Implementation
class Carousel {
	constructor(root) {
		this.root = root;
		this.track = root.querySelector('.carousel-track');
		this.slides = Array.from(root.querySelectorAll('.carousel-slide'));
		this.index = 0;
		this.dots = root.querySelector('.dots');
		this.auto = root.dataset.auto === 'true';
		this.interval = parseInt(root.dataset.interval || '6000', 10);
		this.init();
	}
	init() {
		this.createDots();
		this.update();
		const prev = this.root.querySelector('[data-carousel="prev"]');
		const next = this.root.querySelector('[data-carousel="next"]');
		prev && prev.addEventListener('click', () => this.go(this.index - 1));
		next && next.addEventListener('click', () => this.go(this.index + 1));
		if (this.auto) {
			setInterval(() => this.go(this.index + 1), this.interval);
		}
	}
	createDots() {
		if (!this.dots) return;
		this.dots.innerHTML = '';
		this.slides.forEach((_, i) => {
			const d = document.createElement('button');
			d.className = 'dot';
			d.setAttribute('aria-label', 'Go to slide ' + (i + 1));
			d.addEventListener('click', () => this.go(i));
			this.dots.appendChild(d);
		});
	}
	go(i) {
		const total = this.slides.length;
		this.index = (i + total) % total;
		this.update();
	}
	update() {
		if (!this.track) return;
		this.track.style.transform = `translateX(-${this.index * 100}%)`;
		if (this.dots) {
			const buttons = this.dots.querySelectorAll('.dot');
			buttons.forEach((b, i) => b.classList.toggle('active', i === this.index));
		}
	}
}

document.querySelectorAll('.carousel').forEach(c => new Carousel(c));

// Appointment Form Validation
const appointmentForm = document.querySelector('#appointment-form');
if (appointmentForm) {
	appointmentForm.addEventListener('submit', (e) => {
		e.preventDefault();
		let valid = true;
		appointmentForm.querySelectorAll('[data-validate]')
			.forEach(field => {
				const errorEl = field.parentElement.querySelector('.error');
				if (!field.value.trim()) {
					valid = false;
					if (errorEl) errorEl.textContent = 'Required';
				} else {
					if (errorEl) errorEl.textContent = '';
				}
				if (field.name === 'email' && field.value) {
					const ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(field.value);
					if (!ok) {
						valid = false;
						if (errorEl) errorEl.textContent = 'Invalid email';
					}
				}
			});
		if (valid) {
			appointmentForm.querySelector('.form-status').textContent = 'Appointment request sent!';
			appointmentForm.reset();
			setTimeout(() => {
				appointmentForm.querySelector('.form-status').textContent = '';
			}, 4000);
		}
	});
}

// Accordion (FAQ)
document.querySelectorAll('.accordion-header').forEach(header => {
	header.addEventListener('click', () => {
		const item = header.parentElement;
		item.classList.toggle('open');
	});
});

// Utility: highlight current nav link
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
	if (a.getAttribute('href') === current) {
		a.classList.add('active');
	}
});

// Simple category filter (used on Services/Doctors)
document.querySelectorAll('[data-filter-btn]').forEach(btn => {
	btn.addEventListener('click', () => {
		const group = btn.dataset.group || 'category';
		const value = btn.dataset.filterBtn;
		document.querySelectorAll(`[data-filter-btn][data-group="${group}"]`).forEach(b=>b.classList.remove('active'));
		btn.classList.add('active');
		document.querySelectorAll(`[data-filter-target][data-group="${group}"] [data-item]`).forEach(item => {
			const cat = item.dataset.item;
			item.style.display = (value === 'all' || cat === value) ? '' : 'none';
		});
	});
});

// Tabs (used on Departments)
document.querySelectorAll('[data-tab-btn]').forEach(b => {
	b.addEventListener('click', () => {
		const group = b.dataset.group || 'tabs';
		const target = b.dataset.tabBtn;
		document.querySelectorAll(`[data-tab-btn][data-group="${group}"]`).forEach(x=>x.classList.remove('active'));
		b.classList.add('active');
		document.querySelectorAll(`[data-tab-panel][data-group="${group}"]`).forEach(p => p.style.display = (p.dataset.tabPanel === target ? '' : 'none'));
	});
});

