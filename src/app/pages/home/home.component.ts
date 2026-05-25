import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface UpcomingEvent {
  title: string;
  date: string;
  locationName: string;
  description: string;
  badgeText: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- 🎨 SECTION 1: STRONG HERO VIEW WITH POETIC INSCRIPTION -->
    <section class="vh-100 d-flex align-items-end justify-content-center text-center px-4 parallax-hero" 
             style="background-image: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.35)), url('/image/a passion for creativity.jpg'); padding-bottom: 14vh;">
      <div>
        <span class="serif text-white small d-block mb-3 fst-italic text-capitalize ls-1 fs-5 fw-light" style="opacity: 0.95; text-shadow: 0 2px 10px rgba(0,0,0,0.5); letter-spacing: 0.5px;">
          "To see a World in a Grain of Sand, And a Heaven in a Wild Flower..."
        </span>
        <h1 class="serif mb-4 text-white" style="font-size: clamp(2.4rem, 6.5vw, 4.5rem); font-weight: 400; line-height: 1.15; text-shadow: 0 2px 20px rgba(0,0,0,0.6);">
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

    <!-- 📖 SECTION 2: IDENTITY INTRO & CREATIVE VISION -->
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

    <!-- 🗓️ SECTION 3: UPCOMING EVENTS CALENDAR BLOCK (Where users see her sessions immediately!) -->
    <section class="container-fluid py-5 px-lg-5 bg-white border-top border-bottom">
      <div class="row pt-4 mb-5 text-center">
        <div class="col-12">
          <span class="text-uppercase small willow ls-5 d-block mb-2 font-monospace" style="font-size: 0.65rem;">Atelier Schedule</span>
          <h2 class="serif display-6 fw-light text-dark">Upcoming Painting Parties & Events</h2>
          <div class="mx-auto border-bottom border-dark border-opacity-10 my-3" style="width: 50px; height: 1px;"></div>
        </div>
      </div>

      <!-- 🌟 Beautiful 2-Column Event Tracking Panels Grid -->
      <div class="row g-4 justify-content-center px-xl-5 pb-5">
        <div *ngFor="let ev of homeEvents" class="col-12 col-md-6">
          <div class="p-4 p-md-5 border shadow-sm d-flex flex-column justify-content-between position-relative event-schedule-card" style="height: 38vh; background-color: #FCFAF7 !important;">
            <div>
              <div class="d-flex justify-content-between align-items-start mb-3">
                <span class="badge rounded-0 text-uppercase tracking-wider px-2 py-1 bg-dark text-white font-monospace" style="font-size: 0.55rem; letter-spacing: 1px;">{{ ev.badgeText }}</span>
                <span class="font-monospace text-muted small fw-bold"><i class="bi bi-calendar3 me-2"></i>{{ ev.date }}</span>
              </div>
              <h4 class="serif h3 fw-light text-dark mb-2">{{ ev.title }}</h4>
              <span class="small font-monospace text-secondary d-block mb-3" style="font-size: 0.72rem;"><i class="bi bi-geo-alt-fill me-1 text-danger"></i>{{ ev.locationName }}</span>
              <p class="text-secondary small m-0" style="line-height: 1.6; font-size: 0.8rem; font-family: sans-serif;">{{ ev.description }}</p>
            </div>
            
            <div class="text-start pt-3 border-top mt-3">
              <a routerLink="/contact" class="font-monospace text-uppercase small text-dark tracking-wider fw-bold text-decoration-underline" style="font-size: 0.65rem;">Secure Class Seat ⟶</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 🏛️ SECTION 4: THE ULTIMATE ATELIER QUICK NAVIGATION PORTALS -->
    <section class="container-fluid py-5 px-lg-5" style="background: var(--soft-wash-bg);">
      <div class="row mb-4 text-center">
        <div class="col-12">
          <span class="text-uppercase small willow ls-5 d-block mb-2 font-monospace" style="font-size: 0.65rem;">Studio Portals</span>
          <h2 class="serif display-6 fw-light text-dark">Step Into the Atelier Loop</h2>
        </div>
      </div>

      <div class="row g-4 justify-content-center pb-5 px-xl-5">
        <div class="col-12 col-md-6">
          <div class="p-4 p-md-5 text-white shadow d-flex flex-column justify-content-between border-top border-warning border-3" style="height: 32vh; background-color: #1C1C1C !important;">
            <div>
              <span class="font-monospace small d-block mb-2" style="font-size: 0.55rem; color: #E2C293; letter-spacing: 2px;">ACADEMY SLATES</span>
              <h4 class="serif h3 fw-light mb-3">Creative Workshops</h4>
              <p class="small m-0 text-white-50" style="font-size: 0.8rem; line-height: 1.6;">Explore structured multi-week masterclasses tailored across watercolours, landscape textures, and cross-hatched architectural line drawing disciplines.</p>
            </div>
            <a routerLink="/workshops" class="font-monospace text-uppercase small tracking-wider fw-bold mt-3 text-decoration-none link-gold-hover" style="font-size: 0.7 0.7rem; color: #E2C293;">Browse Slates ⟶</a>
          </div>
        </div>
        
        <div class="col-12 col-md-6">
          <div class="p-4 p-md-5 bg-white border border-dark border-opacity-10 shadow-sm text-start d-flex flex-column justify-content-between" style="height: 32vh;">
            <div>
              <span class="font-monospace text-muted small d-block mb-2" style="font-size: 0.55rem; letter-spacing: 2px;">ONLINE GALLERY SHOP</span>
              <h4 class="serif h3 fw-light text-dark mb-3">Explore the Full Collection</h4>
              <p class="text-secondary small m-0" style="font-size: 0.8rem; line-height: 1.6;">Acquire certified signed limited fine art prints, large original watercolor canvases, and custom botanical clay earrings handcrafted inside our London space.</p>
            </div>
            <a routerLink="/collection" class="text-dark font-monospace text-uppercase small tracking-wider fw-bold mt-3 text-decoration-none" style="font-size: 0.7 0.7rem;">Browse Showroom ⟶</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  // 🌟 Dynamic Home Schedule Registry: Holds the exact custom event parameters!
  homeEvents: UpcomingEvent[] = [
    {
      title: 'La Dolce Vita Painting Party',
      date: '02 June 2026',
      locationName: 'The William Bourne, Chessington',
      description: 'Step into complete Italian summer vibes! A creative afternoon painting bright Mediterranean coastal aesthetics while exploring soft watercolour blending patterns and refreshing wash layers.',
      badgeText: 'SUMMER PARTY'
    },
    {
      title: 'Summer Botanical Masterclass Pop-up',
      date: '30 May 2026',
      locationName: 'Oaks Park Conservatory, Carshalton',
      description: 'An intimate outdoor landscape drawing block and technical wash workshop session captured live on location inside the historical botanical glasshouses.',
      badgeText: 'OPEN STUDIO'
    }
  ];

  taglines: string[] = ['FINE ART & ILLUSTRATION STUDIO', 'ORIGINAL WATERCOLOUR MASTERPIECES', 'CUSTOM SPATIAL WALL MURALS'];
  currentTaglineIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentTaglineIndex = (this.currentTaglineIndex + 1) % this.taglines.length;
    }, 3500);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
