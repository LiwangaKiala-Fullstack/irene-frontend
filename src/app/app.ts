import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <!-- 🏛️ 2026 EDITORIAL GLASS NAVBAR MENU -->
    <nav class="navbar fixed-top py-4 px-lg-5" style="backdrop-filter: blur(15px); background: rgba(249, 247, 242, 0.85); z-index: 1000; border-bottom: 1px solid rgba(0,0,0,0.05);">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <a class="navbar-brand fw-bold fs-2 serif" href="#" style="letter-spacing: 2px;">
          I <span class="gold">CABONI</span>
        </a>
        <div class="d-none d-lg-flex align-items-center gap-5">
          <a href="#" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Home</a>
          <a href="#gallery" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">The Gallery</a>
          <a href="#classes" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Masterclasses</a>
          <a href="#shop" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Collection</a>
          <a href="#about" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Manifesto</a>
          <a href="#contact" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Atelier</a>
        </div>
        <div class="d-flex align-items-center gap-4">
          <div class="position-relative magnetic-bag" style="cursor: pointer;">
            <i class="bi bi-bag-heart-fill fs-2 gold"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark" style="font-size: 0.65rem; padding: 0.5em 0.7em;">0</span>
          </div>
        </div>
      </div>
    </nav>

    <main style="padding-top: 0;">
      <!-- 🎬 SECTION 1: HERO REVEAL -->
      <section id="home" class="vh-100 d-flex align-items-center justify-content-center text-center px-4" style="background: #F9F7F2;">
        <div>
          <h6 class="text-uppercase mb-4 fw-light ls-5" style="opacity: 0.7;">Frequency & Form</h6>
          <h1 class="hero-title serif mb-5">
            The Art of <br>
            <span class="fst-italic gold">Vibration</span>
          </h1>
          <a href="#gallery" class="btn btn-dark rounded-0 px-5 py-3 text-uppercase fw-bold" style="letter-spacing: 3px; font-size: 0.8rem; text-decoration: none;">
            Enter the Experience ⟶
          </a>
        </div>
      </section>

      <!-- 🖼️ SECTION 2: THE ART PORTFOLIO GALLERY -->
      <section id="gallery" class="container-fluid py-5 px-lg-5" style="background: #F9F7F2; scroll-margin-top: 100px;">
        <div class="row mb-5 pt-5">
          <div class="col-12 text-start">
            <span class="text-uppercase small gold ls-5 d-block mb-2">Selected Works</span>
            <h2 class="serif display-4 fw-light">The Physical Manifestation of Sound</h2>
          </div>
        </div>
        <div class="row g-5 align-items-center">
          <div class="col-12 col-lg-7">
            <div class="gallery-card overflow-hidden bg-white p-3 shadow-sm">
              <div class="img-wrapper overflow-hidden bg-dark d-flex align-items-center justify-content-center" style="height: 55vh; --bs-bg-opacity: 0.05;">
                <i class="bi bi-image fs-1 text-secondary opacity-25"></i>
              </div>
              <div class="d-flex justify-content-between mt-3 px-2">
                <span class="fw-bold small text-uppercase tracking-wider">Vibration of Gold</span>
                <span class="text-muted small">2026 — Mixed Media</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-5">
            <div class="gallery-card overflow-hidden bg-white p-3 shadow-sm">
              <div class="img-wrapper overflow-hidden bg-dark d-flex align-items-center justify-content-center" style="height: 70vh; --bs-bg-opacity: 0.05;">
                <i class="bi bi-image fs-1 text-secondary opacity-25"></i>
              </div>
              <div class="d-flex justify-content-between mt-3 px-2">
                <span class="fw-bold small text-uppercase tracking-wider">Silent Resonance</span>
                <span class="text-muted small">2026 — Raw Pigment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 🏛️ SECTION 3: THE LUXURY MASTERCLASS BOOKING GRID -->
      <section id="classes" class="container-fluid py-5 px-lg-5" style="background: #F9F7F2; scroll-margin-top: 100px;">
        <div class="row mb-5 pt-5">
          <div class="col-12 text-start">
            <span class="text-uppercase small gold ls-5 d-block mb-2">Educational Atelier</span>
            <h2 class="serif display-4 fw-light">Masterclasses & Intimate Immersions</h2>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-12 col-md-6 col-xl-4">
            <div class="booking-card bg-white p-4 shadow-sm border-0 d-flex flex-column justify-content-between" style="height: 50vh;">
              <div>
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <span class="badge rounded-0 text-uppercase tracking-wider px-3 py-2 bg-dark text-white style-badge">Private</span>
                  <span class="serif gold fw-bold fs-4">£240</span>
                </div>
                <h3 class="serif h2 fw-light mb-3">Raw Pigment Chemistry</h3>
                <p class="text-secondary small">Learn the ancient alchemical traditions of grinding minerals into volatile premium paint medium.</p>
              </div>
              <div class="border-top pt-3 d-flex justify-content-between align-items-center">
                <span class="small text-muted"><i class="bi bi-clock me-2"></i>3 Hours</span>
                <button class="btn btn-outline-dark rounded-0 btn-sm text-uppercase tracking-wider px-3 py-2">Reserve Slot</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-4">
            <div class="booking-card bg-white p-4 shadow-sm border-0 d-flex flex-column justify-content-between" style="height: 50vh;">
              <div>
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <span class="badge rounded-0 text-uppercase tracking-wider px-3 py-2 bg-secondary text-white style-badge">Group Session</span>
                  <span class="serif gold fw-bold fs-4">£110</span>
                </div>
                <h3 class="serif h2 fw-light mb-3">The Sound Frequency Canvas</h3>
                <p class="text-secondary small">Translate acoustic bass tones and resonant room frequencies onto large-scale architectural linen fabrics.</p>
              </div>
              <div class="border-top pt-3 d-flex justify-content-between align-items-center">
                <span class="small text-muted"><i class="bi bi-clock me-2"></i>4 Hours</span>
                <button class="btn btn-outline-dark rounded-0 btn-sm text-uppercase tracking-wider px-3 py-2">Reserve Slot</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-4">
            <div class="booking-card bg-white p-4 shadow-sm border-0 d-flex flex-column justify-content-between" style="height: 50vh;">
              <div>
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <span class="badge rounded-0 text-uppercase tracking-wider px-3 py-2 bg-dark text-white style-badge">Intensive</span>
                  <span class="serif gold fw-bold fs-4">£450</span>
                </div>
                <h3 class="serif h2 fw-light mb-3">Vibrational Mastery Weekend</h3>
                <p class="text-secondary small">A two-day comprehensive physical studio deep dive. Includes professional curated lunch and raw materials kit.</p>
              </div>
              <div class="border-top pt-3 d-flex justify-content-between align-items-center">
                <span class="small text-muted"><i class="bi bi-calendar3 me-2"></i>2 Days</span>
                <button class="btn btn-outline-dark rounded-0 btn-sm text-uppercase tracking-wider px-3 py-2">Reserve Slot</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 🛍️ SECTION 4: THE CURATED E-COMMERCE SHOP -->
      <section id="shop" class="container-fluid py-5 px-lg-5" style="background: #F9F7F2; scroll-margin-top: 100px;">
        <div class="row mb-5 pt-5">
          <div class="col-12 text-start">
            <span class="text-uppercase small gold ls-5 d-block mb-2">The Boutique</span>
            <h2 class="serif display-4 fw-light">Acquire Original Vibrations</h2>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-12 col-md-6">
            <div class="shop-card bg-white p-3 shadow-sm border-0">
              <div class="shop-img-wrapper overflow-hidden bg-dark d-flex align-items-center justify-content-center position-relative" style="height: 45vh; --bs-bg-opacity: 0.03;">
                <i class="bi bi-palette fs-2 text-secondary opacity-25"></i>
                <span class="position-absolute top-3 start-3 badge bg-dark rounded-0 text-uppercase small ls-2" style="font-size: 0.6rem; letter-spacing: 1px;">Original Art</span>
              </div>
              <div class="mt-4 px-2">
                <div class="d-flex justify-content-between align-items-baseline">
                  <h3 class="serif h4 fw-normal mb-1">Resonance Spectrum Alpha</h3>
                  <span class="serif gold fw-bold fs-5">£1,850</span>
                </div>
                <p class="text-muted small mb-3">120cm x 150cm — Raw Ultramarine & Gold Leaf on Belgian Linen</p>
                <button class="btn btn-dark w-100 rounded-0 py-2 text-uppercase small fw-bold tracking-wider fs-7" style="font-size: 0.75rem; letter-spacing: 2px;">
                  Add to Collection Bag
                </button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="shop-card bg-white p-3 shadow-sm border-0">
              <div class="shop-img-wrapper overflow-hidden bg-dark d-flex align-items-center justify-content-center position-relative" style="height: 45vh; --bs-bg-opacity: 0.03;">
                <i class="bi bi-palette fs-2 text-secondary opacity-25"></i>
                <span class="position-absolute top-3 start-3 badge bg-dark rounded-0 text-uppercase small ls-2" style="font-size: 0.6rem; letter-spacing: 1px;">Original Art</span>
              </div>
              <div class="mt-4 px-2">
                <div class="d-flex justify-content-between align-items-baseline">
                  <h3 class="serif h4 fw-normal mb-1">Echoes of Crimson Frequency</h3>
                  <span class="serif gold fw-bold fs-5">£2,100</span>
                </div>
                <p class="text-muted small mb-3">140cm x 140cm — Cinnabar Pigment & Concrete Medium on Canvas</p>
                <button class="btn btn-dark w-100 rounded-0 py-2 text-uppercase small fw-bold tracking-wider fs-7" style="font-size: 0.75rem; letter-spacing: 2px;">
                  Add to Collection Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 📖 SECTION 5: THE ARTIST MANIFESTO (ABOUT) -->
      <section id="about" class="container-fluid py-5 px-lg-5" style="background: #F9F7F2; scroll-margin-top: 100px;">
        <div class="row align-items-center py-5">
          <div class="col-12 col-lg-6 pe-lg-5 mb-5 mb-lg-0">
            <span class="text-uppercase small gold ls-5 d-block mb-3">The Metaphysic</span>
            <h2 class="serif display-3 fw-light mb-4">Irene Caboni</h2>
            <p class="lead text-dark serif fst-italic mb-4" style="line-height: 1.6; opacity: 0.85;">
              "Color is not passive decoration. It is a wave velocity that echoes directly into the biological nervous network."
            </p>
            <p class="text-secondary small mb-4" style="line-height: 1.8;">
              Based within an industrial studio canvas laboratory, Irene constructs large-scale architectural mediums designed to anchor raw energy configurations into physical rooms. Each paint paste is compounded manually from raw crushed stone elements.
            </p>
            <div class="border-start border-dark border-2 ps-3 mt-4">
              <span class="small fw-bold text-uppercase d-block tracking-wider">The Sound Sync Principle</span>
              <span class="small text-muted">All original works are executed inside calibrated acoustic environments.</span>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="manifesto-frame bg-white p-4 shadow-sm text-center position-relative">
              <div class="bg-dark d-flex align-items-center justify-content-center text-white" style="height: 60vh; --bs-bg-opacity: 0.04;">
                <div class="text-center p-4">
                  <i class="bi bi-person-bounding-box fs-1 text-secondary opacity-25 mb-3 d-block"></i>
                  <span class="serif text-muted small fst-italic">[ Shadow & Frequency Profile Study ]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 🎬 SECTION 6: THE IMMERSIVE CINEMATIC VIDEO STUDIO -->
      <section id="studio-video" class="container-fluid py-5 px-lg-5" style="background: #F9F7F2;">
        <div class="row mb-4">
          <div class="col-12 text-center">
            <span class="text-uppercase small gold ls-5 d-block mb-2">Cinematic Feed</span>
            <h2 class="serif h3 fw-light text-muted">Inside the Resonance Chambers</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-xl-10">
            <div class="video-container position-relative bg-white p-3 shadow-sm overflow-hidden">
              <div class="w-100 bg-dark d-flex flex-column align-items-center justify-content-center position-relative" style="height: 50vh;">
                <div class="video-overlay-play text-center cursor-pointer">
                  <i class="bi bi-play-circle-fill text-white display-3 play-btn-glow"></i>
                  <span class="d-block text-white small tracking-wider mt-3 text-uppercase font-monospace" style="font-size: 0.7rem; opacity: 0.8;">Stream Process Documentary (04:12)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 📸 SECTION 7: THE LIVE INSTAGRAM CURATION MATRIX -->
      <section id="social-feed" class="container-fluid py-5 px-lg-5" style="background: #F9F7F2;">
        <div class="row mb-5 pt-4">
          <div class="col-12 text-start">
            <span class="text-uppercase small gold ls-5 d-block mb-2">Digital Diary</span>
            <h2 class="serif display-5 fw-light">Live Studio Stream</h2>
          </div>
        </div>
        <div class="row g-4">
          @for (item of [1,2,3,4]; track item) {
            <div class="col-6 col-lg-3">
              <div class="instagram-card bg-white p-2 shadow-sm border-0 position-relative overflow-hidden">
                <div class="bg-dark d-flex align-items-center justify-content-center position-relative wrapper-box" style="height: 30vh; --bs-bg-opacity: 0.04;">
                  <i class="bi bi-instagram fs-3 text-secondary opacity-25"></i>
                  <div class="insta-hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75 opacity-0 transition-all">
                    <span class="text-white small tracking-widest text-uppercase fw-bold" style="font-size: 0.7rem;"><i class="bi bi-heart-fill me-2"></i> View Post</span>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- ✉️ SECTION 8: MINIMALIST CONTACT ATELIER & EDITORIAL FOOTER -->
      <section id="contact" class="container-fluid py-5 px-lg-5" style="background: #1A1A1A; color: #F9F7F2; scroll-margin-top: 100px;">
        <div class="row py-5 align-items-center">
          <div class="col-12 col-lg-6 mb-5 mb-lg-0 pe-lg-5">
            <span class="text-uppercase small ls-5 d-block mb-3" style="color: #C5A059;">The Ledger</span>
            <h2 class="serif display-4 fw-light mb-4">Subscribe to Private Viewings</h2>
            <p class="small text-muted mb-4" style="max-width: 450px;">Receive early notification regarding canvas drop events, workshop releases, and private studio collection scheduling blocks.</p>
            <div class="d-flex border-bottom border-secondary pb-2 mt-4" style="max-width: 500px;">
              <input type="email" placeholder="ENTER YOUR EMAIL" class="bg-transparent border-0 text-white w-100 px-2 font-monospace small" style="outline: none; letter-spacing: 1px;">
              <button class="btn p-0 border-0 text-uppercase fw-bold small tracking-wider" style="color: #C5A059; font-size: 0.75rem;">Join ⟶</button>
            </div>
          </div>
          <div class="col-12 col-lg-6 ps-lg-5 border-start border-secondary border-opacity-25">
            <div class="row g-4">
              <div class="col-6">
                <span class="text-uppercase font-monospace text-muted d-block mb-2" style="font-size: 0.65rem; letter-spacing: 2px;">The Physical Base</span>
                <p class="small serif mb-0">Atelier Chamber IV<br>Industrial Wharf Estate<br>London, UK</p>
              </div>
              <div class="col-6">
                <span class="text-uppercase font-monospace text-muted d-block mb-2" style="font-size: 0.65rem; letter-spacing: 2px;">Direct Inquiries</span>
                <p class="small font-monospace mb-0">studio&#64;irenecaboni.com<br>+44 20 7946 0192</p>
              </div>
            </div>
            <div class="row mt-5 pt-4 border-top border-secondary border-opacity-10 text-muted">
              <div class="col-12 d-flex justify-content-between align-items-center small">
                <span>&copy; 2026 IRENE CABONI. ALL RIGHTS RESERVED.</span>
                <div class="d-flex gap-3 fs-5">
                  <i class="bi bi-instagram cursor-pointer"></i>
                  <i class="bi bi-vimeo cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ✨ FLOATING UTILITY LAYER: BACK TO TOP ARROW & AI CONCIERGE -->
      <div class="floating-controls d-flex flex-column gap-3 position-fixed bottom-4 end-4" style="z-index: 9999;">
        <!-- 🔼 THE BACK-TO-TOP ESCALATOR -->
        <button (click)="scrollToTop()" [class.visible]="showScrollArrow" class="btn-scroll-top d-flex align-items-center justify-content-center shadow-sm">
          <i class="bi bi-arrow-up"></i>
        </button>

        <!-- 🤖 THE AI ART ASSISTANT TRIGGER -->
        <button (click)="toggleAiPanel()" class="btn-ai-assistant d-flex align-items-center justify-content-center shadow">
          <i class="bi bi-chat-left-dots-fill text-white"></i>
        </button>
      </div>

      <!-- 🔮 SLIDE-OUT AI ASSISTANT DRAWER PANEL -->
      <div [class.open]="isAiPanelOpen" class="ai-drawer-panel position-fixed top-0 end-0 h-100 bg-white shadow-lg d-flex flex-column" style="z-index: 10000; width: 380px;">
        <div class="p-4 border-bottom d-flex justify-content-between align-items-center bg-light">
          <div>
            <h4 class="serif h5 mb-1 fw-bold">Atelier AI Concierge</h4>
            <span class="text-success small font-monospace" style="font-size: 0.65rem;"><i class="bi bi-circle-fill me-1 small"></i> ONLINE ART ADVISOR</span>
          </div>
          <button (click)="toggleAiPanel()" class="btn-close shadow-none" style="font-size: 0.8rem;"></button>
        </div>
        <div class="flex-grow-1 p-4 overflow-y-auto font-monospace" style="font-size: 0.8rem; background: #FAF9F6;">
          <div class="ai-msg bg-white p-3 shadow-sm border mb-3">
            Welcome to the Atelier. I am your specialized AI Art Advisor. Ask me anything about Irene's vibrational frequencies, paint medium compounding, or canvas availabilities.
          </div>
        </div>
        <div class="p-3 border-top bg-white d-flex gap-2">
          <input type="text" placeholder="Ask about canvas mediums..." class="form-control rounded-0 border font-monospace small" style="font-size: 0.75rem; outline: none;">
          <button class="btn btn-dark rounded-0 px-3 py-2"><i class="bi bi-send-fill" style="font-size: 0.8rem;"></i></button>
        </div>
      </div>
    </main>
  `
})
export class App {
  showScrollArrow = false;
  isAiPanelOpen = false;

  // 📐 Track the page scroll vector to display/hide the escalator arrow dynamically
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollArrow = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleAiPanel() {
    this.isAiPanelOpen = !this.isAiPanelOpen;
  }
}
