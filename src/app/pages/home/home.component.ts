import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- 🎨 SECTION 1: FORCE-FIXED HERO VIEWPORT WITH EMBEDDED POETIC ANIMATIONS -->
    <section class="vh-100 d-flex align-items-center justify-content-center text-center px-4" 
             style="background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.45)), url('/image/a passion for creativity.jpg'); background-attachment: fixed !important; background-size: cover; background-position: center center; background-repeat: no-repeat; position: relative;">
      <div style="padding-top: 35vh !important; z-index: 10;">
        <span class="serif text-white small d-block mb-3 fst-italic text-capitalize fs-4" 
              style="text-shadow: 0 2px 12px rgba(0,0,0,0.6); font-family: 'Cormorant Garamond', serif !important; animation: inlinePoeticFade 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0;">
          "To see a World in a Grain of Sand, And a Heaven in a Wild Flower..."
        </span>
        <h1 class="serif m-0 text-white" 
            style="font-size: clamp(2.4rem, 6.5vw, 4.5rem); font-weight: 400; line-height: 1.15; text-shadow: 0 2px 25px rgba(0,0,0,0.7); animation: inlinePoeticFade 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; animation-delay: 0.4s; opacity: 0;">
          A Passion for <br><span class="fst-italic" style="color: #E2C293 !important;">Creativity</span>
        </h1>
      </div>
      <style>
        @keyframes inlinePoeticFade {
          0% { opacity: 0; transform: translateY(20px); filter: blur(4px); }
          100% { opacity: 0.95; transform: translateY(0); filter: blur(0); }
        }
      </style>
    </section>

    <!-- 📖 SECTION 2: IDENTITY INTRO -->
    <section class="container-fluid py-5 px-lg-5" style="background: var(--soft-wash-bg); position: relative; z-index: 20;">
      <div class="row justify-content-center text-center py-5">
        <div class="col-12 col-lg-8 px-4">
          <span class="text-uppercase small willow ls-5 d-block mb-3 fw-bold font-monospace" style="font-size: 0.65rem; letter-spacing: 3px;">Creative Vision</span>
          <h2 class="serif display-4 fw-light text-dark mb-4" style="line-height: 1.25;">Irene Caboni</h2>
          <p class="lead text-dark mb-4 fst-italic text-secondary" style="font-size: 1.3rem; font-family: 'Cormorant Garamond', serif;">
            Contemporary painter exploring memory, nature compositions, and human identity.
          </p>
          <div class="mx-auto border-bottom border-dark border-opacity-20 my-4" style="width: 50px; height: 1px;"></div>
          <p class="text-secondary mx-auto mb-0" style="max-width: 580px; line-height: 1.8; font-size: 1.1rem;">
            Based in Greater London, Irene's studio method blends fine fluid watercolour washes with intricate line inks. Her art maps fragile human feelings and deep botanical architectures beautifully onto textured linen paper.
          </p>
        </div>
      </div>
    </section>

    <!-- 🖼️ SECTION 3: FEATURED WORKS GRID -->
    <section class="container-fluid py-5 px-lg-5 bg-white border-top border-bottom" style="position: relative; z-index: 20;">
      <div class="row pt-4 mb-5 text-center">
        <div class="col-12">
          <span class="text-uppercase small willow ls-5 d-block mb-2 font-monospace" style="font-size: 0.65rem;">Exhibition Snapshot</span>
          <h2 class="serif display-6 fw-light text-dark">Featured Masterpieces</h2>
        </div>
      </div>
      <div class="row g-4 justify-content-center px-xl-5 pb-4">
        <div class="col-12 col-sm-6 col-md-4">
          <div class="p-2 border bg-light text-center shadow-sm position-relative overflow-hidden home-artwork-card" style="cursor: pointer;" routerLink="/gallery">
            <div style="height: 38vh; background: #FFFFFF;" class="overflow-hidden"><img src="image/Irene-3.jpg" class="w-100 h-100 object-fit-contain img-zoom-effect" alt="Artwork 1"></div>
            <div class="mt-3 text-start px-1 py-1"><span class="serif small d-block text-dark mb-0 fw-bold" style="font-size: 1.05rem;">Woman with the mask</span><span class="font-monospace text-muted" style="font-size: 0.65rem;">Watercolour Canvas</span></div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="p-2 border bg-light text-center shadow-sm position-relative overflow-hidden home-artwork-card" style="cursor: pointer;" routerLink="/gallery">
            <div style="height: 38vh; background: #FFFFFF;" class="overflow-hidden"><img src="image/Irene-4.jpg" class="w-100 h-100 object-fit-cover img-zoom-effect" alt="Artwork 2"></div>
            <div class="mt-3 text-start px-1 py-1"><span class="serif small d-block text-dark mb-0 fw-bold" style="font-size: 1.05rem;">The forest</span><span class="font-monospace text-muted" style="font-size: 0.65rem;">Landscape Study</span></div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="p-2 border bg-light text-center shadow-sm position-relative overflow-hidden home-artwork-card" style="cursor: pointer;" routerLink="/gallery">
            <div style="height: 38vh; background: #FFFFFF;" class="overflow-hidden"><img src="image/Irene-7.jpg" class="w-100 h-100 object-fit-contain img-zoom-effect" alt="Artwork 3"></div>
            <div class="mt-3 text-start px-1 py-1"><span class="serif small d-block text-dark mb-0 fw-bold" style="font-size: 1.05rem;">Mural Blueprint Notes</span><span class="font-monospace text-muted" style="font-size: 0.65rem;">Architectural Ink</span></div>
          </div>
        </div>
      </div>
      <div class="text-center pt-2 pb-4">
        <a routerLink="/gallery" class="font-monospace text-uppercase small text-dark tracking-wider fw-bold text-decoration-underline" style="font-size: 0.7rem;">View Complete Showroom ⟶</a>
      </div>
    </section>

    <!-- 🏛️ SECTION 4: UPCOMING EVENTS & STUDIO PROGRAM PORTALS -->
    <section class="container-fluid py-5 px-lg-5" style="background: var(--soft-wash-bg); position: relative; z-index: 20;">
      <div class="row justify-content-center mb-5 mt-2">
        <div class="col-12 col-xl-10">
          <div class="bg-dark p-3 text-white text-center shadow-sm rounded-0 d-flex align-items-center justify-content-center gap-3 flex-wrap border-start border-warning border-4" style="background-color: #1C1C1C !important;">
            <span class="badge bg-warning text-dark font-monospace rounded-0 px-2 py-1 small fw-bold" style="font-size: 0.6rem;">OPEN STUDIO</span>
            <span class="font-monospace small m-0" style="font-size: 0.8rem;">Summer Botanical Masterclass active at Oaks Park Conservatory this weekend!</span>
            <a routerLink="/contact" class="text-warning font-monospace text-uppercase small tracking-wider fw-bold ms-md-2" style="font-size: 0.65rem; color: #E2C293 !important;">Secure Pass ⟶</a>
          </div>
        </div>
      </div>
      
      <div class="row g-4 justify-content-center px-xl-5 pb-5 mb-4">
        <div class="col-12 col-md-6">
          <div class="p-4 p-md-5 border shadow-sm d-flex flex-column justify-content-between bg-white" style="height: 36vh;">
            <div>
              <div class="d-flex justify-content-between align-items-start mb-2">
                <span class="badge rounded-0 text-uppercase tracking-wider px-2 py-1 bg-dark text-white font-monospace" style="font-size: 0.55rem;">SUMMER PARTY</span>
                <span class="font-monospace text-muted small fw-bold">02 June 2026</span>
              </div>
              <h4 class="serif h4 fw-light text-dark mb-2">La Dolce Vita Painting Party</h4>
              <span class="small font-monospace text-secondary d-block mb-2" style="font-size: 0.72rem;"><i class="bi bi-geo-alt-fill me-1 text-danger"></i>The William Bourne, Chessington</span>
              <p class="text-secondary small m-0" style="line-height: 1.5; font-size: 0.85rem;">Step into complete Italian summer vibes! A creative afternoon painting bright Mediterranean coastal aesthetics while exploring watercolour layers.</p>
            </div>
            <div class="text-start pt-2 border-top mt-2"><a routerLink="/contact" class="font-monospace text-uppercase small text-dark tracking-wider fw-bold text-decoration-underline" style="font-size: 0.65rem;">Secure Seat ⟶</a></div>
          </div>
        </div>
        
        <div class="col-12 col-md-6">
          <div class="p-4 p-md-5 border shadow-sm d-flex flex-column justify-content-between bg-white" style="height: 36vh;">
            <div>
              <div class="d-flex justify-content-between align-items-start mb-2">
                <span class="badge rounded-0 text-uppercase tracking-wider px-2 py-1 bg-dark text-white font-monospace" style="font-size: 0.55rem;">OPEN STUDIO</span>
                <span class="font-monospace text-muted small fw-bold">30 May 2026</span>
              </div>
              <h4 class="serif h4 fw-light text-dark mb-2">Summer Botanical Pop-up</h4>
              <span class="small font-monospace text-secondary d-block mb-2" style="font-size: 0.72rem;"><i class="bi bi-geo-alt-fill me-1 text-danger"></i>Oaks Park Conservatory, Carshalton</span>
              <p class="text-secondary small m-0" style="line-height: 1.5; font-size: 0.85rem;">An intimate outdoor landscape drawing block and technical wash workshop session captured live on location inside the historical botanical glasshouses.</p>
            </div>
            <div class="text-start pt-2 border-top mt-2"><a routerLink="/contact" class="font-monospace text-uppercase small text-dark tracking-wider fw-bold text-decoration-underline" style="font-size: 0.65rem;">Secure Seat ⟶</a></div>
          </div>
        </div>
      </div>

      <div class="row g-4 justify-content-center pb-5 px-xl-5">
        <div class="col-12 col-md-6">
          <div class="p-4 p-md-5 text-white shadow d-flex flex-column justify-content-between border-top border-warning border-3" style="height: 32vh; background-color: #1C1C1C !important;">
            <div>
              <span class="font-monospace small d-block mb-2" style="font-size: 0.55rem; color: #E2C293; letter-spacing: 2px;">ACADEMY SLATES</span>
              <h4 class="serif h3 fw-light mb-3">Creative Workshops</h4>
              <p class="small m-0 text-white-50" style="font-size: 0.9rem; line-height: 1.6;">Explore structured multi-week masterclasses tailored across watercolours, landscape textures, and architectural line drawings.</p>
            </div>
            <a routerLink="/workshops" class="font-monospace text-uppercase small tracking-wider fw-bold mt-3 text-decoration-none link-gold-hover" style="font-size: 0.7rem; color: #E2C293;">Browse Slates ⟶</a>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="p-4 p-md-5 bg-white border border-dark border-opacity-10 shadow-sm text-start d-flex flex-column justify-content-between" style="height: 32vh;">
            <div>
              <span class="font-monospace text-muted small d-block mb-2" style="font-size: 0.55rem; letter-spacing: 2px;">ONLINE SHOP</span>
              <h4 class="serif h3 fw-light text-dark mb-3">Explore the Collection</h4>
              <p class="text-secondary small m-0" style="font-size: 0.9rem; line-height: 1.6;">Acquire certified signed limited fine art prints, original watercolor canvases, and custom botanical clay earrings handcrafted inside our London space.</p>
            </div>
            <a routerLink="/collection" class="text-dark font-monospace text-uppercase small tracking-wider fw-bold mt-3 text-decoration-none" style="font-size: 0.7rem;">Browse Shop ⟶</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {}