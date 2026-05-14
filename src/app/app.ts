import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <!-- 🏛️ EDITORIAL GLASS NAVBAR -->
    <nav class="navbar fixed-top py-4 px-lg-5" style="backdrop-filter: blur(15px); background: rgba(249, 247, 242, 0.85); z-index: 1000; border-bottom: 1px solid rgba(0,0,0,0.05);">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <a class="navbar-brand fw-bold fs-2" href="#" style="letter-spacing: 2px; font-family: 'Playfair Display', serif;">
          I <span style="color: #C5A059;">CABONI</span>
        </a>
        <div class="d-flex align-items-center gap-4">
          <!-- 🛍️ THE ADDICTIVE HANDBAG -->
          <div class="position-relative" style="cursor: pointer;">
            <i class="bi bi-bag-heart-fill fs-2" style="color: #C5A059;"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark" style="font-size: 0.65rem; padding: 0.5em 0.7em;">0</span>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <!-- 🎬 SECTION 1: THE JAW-DROP REVEAL -->
      <section class="vh-100 d-flex align-items-center justify-content-center text-center px-4" style="background: #F9F7F2;">
        <div>
          <h6 class="text-uppercase mb-4 fw-light" style="letter-spacing: 8px; opacity: 0.7; font-family: 'Inter', sans-serif;">Frequency & Form</h6>
          <h1 class="display-1 fw-bold mb-5" style="line-height: 0.9; font-size: clamp(3.5rem, 12vw, 8.5rem); font-family: 'Playfair Display', serif;">
            The Art of <br>
            <span class="fst-italic" style="color: #C5A059;">Vibration</span>
          </h1>
          <button class="btn btn-dark rounded-0 px-5 py-3 text-uppercase fw-bold" style="letter-spacing: 3px; font-size: 0.8rem; font-family: 'Inter', sans-serif;">
            Enter the Experience ⟶
          </button>
        </div>
      </section>
    </main>
  `
})
export class App {}

