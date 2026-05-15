import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <!-- 🏛️ 2026 EDITORIAL GLASS NAVBAR MENU -->
    <nav class="navbar fixed-top py-4 px-lg-5" style="backdrop-filter: blur(15px); background: rgba(249, 247, 242, 0.85); z-index: 1000; border-bottom: 1px solid rgba(0,0,0,0.05);">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        
        <!-- Left: Brand Logo Signifier -->
        <a class="navbar-brand fw-bold fs-2 serif" href="#" style="letter-spacing: 2px;">
          I <span class="gold">CABONI</span>
        </a>
        
        <!-- Center: 2026 Minimalist Menu Navigation Links -->
        <div class="d-none d-lg-flex align-items-center gap-5">
          <a href="#" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Home</a>
          <a href="#gallery" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">The Gallery</a>
          <a href="#classes" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Masterclasses</a>
          <a href="#contact" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Atelier</a>
        </div>
        
        <!-- Right: Boutique Handbag Basket Target -->
        <div class="d-flex align-items-center gap-4">
          <div class="position-relative magnetic-bag" style="cursor: pointer;">
            <i class="bi bi-bag-heart-fill fs-2 gold"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark" style="font-size: 0.65rem; padding: 0.5em 0.7em;">0</span>
          </div>
        </div>

      </div>
    </nav>

    <main style="padding-top: 0;">
      <!-- 🎬 SECTION 1: THE JAW-DROP REVEAL HERO -->
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

      <!-- 🖼️ SECTION 2: THE FREQUENCY GRID (ART PORTFOLIO) -->
      <section id="gallery" class="container-fluid py-5 px-lg-5" style="background: #F9F7F2; scroll-margin-top: 100px;">
        <div class="row mb-5 pt-5">
          <div class="col-12 text-start">
            <span class="text-uppercase small gold ls-5 d-block mb-2">Selected Works</span>
            <h2 class="serif display-4 fw-light">The Physical Manifestation of Sound</h2>
          </div>
        </div>

        <!-- Asymmetric Art Structural Layout -->
        <div class="row g-5 align-items-center">
          <!-- Artwork Card 1: Horizontal Landscape Frame -->
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

          <!-- Artwork Card 2: Tall Vertical Portrait Frame -->
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
    </main>
  `
})
export class App {}

