import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- 🎨 SECTION 1: STRONG FEATURED ARTWORK HERO WITH POETIC INSCRIPTION -->
    <section class="vh-100 d-flex align-items-end justify-content-center text-center px-4 parallax-hero" 
             style="background-image: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.35)), url('/image/a passion for creativity.jpg'); padding-bottom: 14vh;">
      <div>
        <!-- 🌟 Poetic Transformation: William Blake's famous verses to evoke instant creative focus -->
        <span class="serif text-white small d-block mb-3 fst-italic text-capitalize ls-1 fs-5 fw-light" style="opacity: 0.95; text-shadow: 0 2px 10px rgba(0,0,0,0.5); letter-spacing: 0.5px;">
          "To see a World in a Grain of Sand, And a Heaven in a Wild Flower..."
        </span>
        <h1 class="serif mb-4 text-white animate-fade-in" style="font-size: clamp(2.4rem, 6.5vw, 4.5rem); font-weight: 400; line-height: 1.15; text-shadow: 0 2px 20px rgba(0,0,0,0.6);">
          A Passion for <br><span class="fst-italic" style="color: #E2C293 !important;">Creativity</span>
        </h1>
        <div class="d-flex justify-content-center mt-4">
          <a routerLink="/contact" class="btn-circle-cta text-uppercase text-decoration-none d-flex flex-column align-items-center justify-content-center text-center shadow-lg">
            <span class="btn-text-main font-monospace fw-bold">Book</span>
            <span class="btn-text-sub font-monospace fw-bold">Class</span>
            <i class="bi bi-calendar-check mt-1 fs-5"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- 📖 SECTION 2: IDENTITY INTRO & CONTEMPORARY SHORT PHILOSOPHY -->
    <section class="container-fluid py-5 px-lg-5" style="background: var(--soft-wash-bg);">
      <div class="row justify-content-center text-center py-5">
        <div class="col-12 col-lg-8 px-4">
          <span class="text-uppercase small willow ls-5 d-block mb-3 fw-bold font-monospace" style="font-size: 0.65rem; letter-spacing: 3px;">Creative Vision</span>
          <h2 class="serif display-4 fw-light text-dark mb-4" style="line-height: 1.25;">Irene Caboni</h2>
          <p class="lead text-dark font-monospace mb-4 fst-italic text-secondary" style="font-size: 1.1rem;">
            Contemporary painter exploring memory, nature compositions, and human identity.
          </p>
          <div class="mx-auto border-bottom border-dark border-opacity-20 my-4" style="width: 50px; height: 1px;"></div>
          <p class="text-secondary small mx-auto mb-0" style="max-width: 580px; line-height: 1.8; font-size: 0.85rem;">
            Based in Greater London, Irene's studio method blends fine fluid watercolour washes with intricate line inks. Her art maps fragile human feelings and deep botanical architectures beautifully onto textured linen paper.
          </p>
        </div>
      </div>
    </section>

    <!-- 🖼️ SECTION 3: FEATURED GALLERY WORKS MATRIX GRID -->
    <section class="container-fluid py-5 px-lg-5 bg-white border-top border-bottom">
      <div class="row pt-4 mb-5 text-center">
        <div class="col-12">
          <span class="text-uppercase small willow ls-5 d-block mb-2 font-monospace" style="font-size: 0.65rem;">Exhibition Snapshot</span>
          <h2 class="serif display-6 fw-light text-dark">Featured Masterpieces</h2>
        </div>
      </div>
      <div class="row g-4 justify-content-center px-xl-5 pb-4">
        <div class="col-12 col-sm-6 col-md-4">
          <div class="p-2 border bg-light text-center shadow-sm position-relative overflow-hidden home-artwork-card" style="cursor: pointer;" routerLink="/gallery">
            <div style="height: 38vh; background: #FFFFFF;" class="overflow-hidden">
              <img src="image/Irene-3.jpg" class="w-100 h-100 object-fit-contain img-zoom-effect" alt="Woman with the mask print">
            </div>
            <div class="mt-2 text-start px-1 py-1">
              <span class="serif small d-block text-dark mb-0 fw-bold">Woman with the mask</span>
              <span class="font-monospace text-muted" style="font-size: 0.6rem; letter-spacing: 0.5px;">Watercolour Canvas</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="p-2 border bg-light text-center shadow-sm position-relative overflow-hidden home-artwork-card" style="cursor: pointer;" routerLink="/gallery">
            <div style="height: 38vh; background: #FFFFFF;" class="overflow-hidden">
              <img src="image/Irene-4.jpg" class="w-100 h-100 object-fit-cover img-zoom-effect" alt="The forest painting">
            </div>
            <div class="mt-2 text-start px-1 py-1">
              <span class="serif small d-block text-dark mb-0 fw-bold">The forest</span>
              <span class="font-monospace text-muted" style="font-size: 0.6rem; letter-spacing: 0.5px;">Landscape Study</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="p-2 border bg-light text-center shadow-sm position-relative overflow-hidden home-artwork-card" style="cursor: pointer;" routerLink="/gallery">
            <div style="height: 38vh; background: #FFFFFF;" class="overflow-hidden">
              <img src="image/Irene-7.jpg" class="w-100 h-100 object-fit-contain img-zoom-effect" alt="Atelier mural drawing">
            </div>
            <div class="mt-2 text-start px-1 py-1">
              <span class="serif small d-block text-dark mb-0 fw-bold">Mural Blueprint Notes</span>
              <span class="font-monospace text-muted" style="font-size: 0.6rem; letter-spacing: 0.5px;">Architectural Ink</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center pt-2 pb-4">
        <a routerLink="/gallery" class="font-monospace text-uppercase small text-dark tracking-wider fw-bold text-decoration-underline" style="font-size: 0.7rem;">View Complete Showroom ⟶</a>
      </div>
    </section>

    <!-- 🏛️ SECTION 4: THE ULTIMATE ATELIER RESERVATION FOOTER ENCLOSURE -->
    <section class="container-fluid py-5 px-lg-5" style="background: var(--soft-wash-bg);">
      
      <!-- Announcement Banner -->
      <div class="row justify-content-center mb-5 mt-2">
        <div class="col-12 col-xl-10">
          <div class="bg-dark p-3 text-white text-center shadow-sm rounded-0 d-flex align-items-center justify-content-center gap-3 flex-wrap border-start border-warning border-4" style="background-color: #1C1C1C !important;">
            <span class="badge bg-warning text-dark font-monospace rounded-0 px-2 py-1 small fw-bold" style="font-size: 0.6rem; letter-spacing: 1px;">OPEN STUDIO NOTE</span>
            <span class="font-monospace small m-0" style="font-size: 0.72rem; letter-spacing: 0.5px; opacity: 0.95;">Summer Botanical Masterclass active on location at Oaks Park Conservatory this weekend!</span>
            <a routerLink="/contact" class="text-warning font-monospace text-uppercase small tracking-wider fw-bold ms-md-2" style="font-size: 0.65rem; color: #E2C293 !important;">Secure Pass ⟶</a>
          </div>
        </div>
      </div>

      <div class="row mb-4 text-center">
        <div class="col-12">
          <span class="text-uppercase small willow ls-5 d-block mb-2 font-monospace" style="font-size: 0.65rem;">Studio Portals</span>
          <h2 class="serif display-6 fw-light text-dark">Step Into the Atelier Loop</h2>
        </div>
      </div>

      <!-- High-End Luxury Invitation Dual Matrix Row -->
      <div class="row g-4 justify-content-center pb-5 px-xl-5">
        <div class="col-12 col-md-6">
          <div class="p-4 p-md-5 text-white shadow d-flex flex-column justify-content-between border-top border-warning border-3" style="height: 32vh; background-color: #1C1C1C !important;">
            <div>
              <span class="font-monospace small d-block mb-2" style="font-size: 0.55rem; color: #E2C293; letter-spacing: 2px;">ACADEMY RESERVATIONS</span>
              <h4 class="serif h3 fw-light mb-3">Book an Instructional Slot</h4>
              <p class="small m-0 text-white-50" style="font-size: 0.8rem; line-height: 1.6;">Secure your pass for our upcoming watercolour fluid blending masterclasses or detailed technical line ink blocks. Tailored carefully for all experience ranges and age demographics.</p>
            </div>
            <a routerLink="/workshops" class="font-monospace text-uppercase small tracking-wider fw-bold mt-3 text-decoration-none link-gold-hover" style="font-size: 0.7rem; color: #E2C293;">Browse Slates ⟶</a>
          </div>
        </div>
        
        <div class="col-12 col-md-6">
          <div class="p-4 p-md-5 bg-white border border-dark border-opacity-10 shadow-sm text-start d-flex flex-column justify-content-between" style="height: 32vh;">
            <div>
              <span class="font-monospace text-muted small d-block mb-2" style="font-size: 0.55rem; letter-spacing: 2px;">ONLINE SHOP ENTRY</span>
              <h4 class="serif h3 fw-light text-dark mb-3">Explore the Full Collection</h4>
              <p class="text-secondary small m-0" style="font-size: 0.8rem; line-height: 1.6;">Acquire certified signed limited fine art prints, large-scale original wall mural project blueprints, and custom botanical clay earrings hand-sculpted in our London workspace.</p>
            </div>
            <a routerLink="/collection" class="text-dark font-monospace text-uppercase small tracking-wider fw-bold mt-3 text-decoration-none" style="font-size: 0.7rem;">Browse Showroom ⟶</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {}
