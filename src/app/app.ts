import { Component, HostListener, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <!-- 🏛️ 2026 EDITORIAL NAVBAR MENU -->
    <nav class="navbar fixed-top py-4 px-lg-5" style="backdrop-filter: blur(15px); background: rgba(255, 255, 255, 0.85); z-index: 1000; border-bottom: 1px solid rgba(0,0,0,0.03);">
      <div class="container-fluid d-flex align-items-center position-relative">
        
        <!-- Left Column: Logo & Tagline Stacked -->
        <div class="brand-container d-flex flex-column align-items-start m-0 p-0">
          <a class="navbar-brand fw-bold fs-3 serif mb-0 p-0 text-dark text-decoration-none" href="#" style="letter-spacing: 1px; line-height: 1.0;">
            Irene Caboni
          </a>
          <span class="willow font-monospace m-0 text-uppercase text-nowrap ps-4" style="font-size: 0.6rem; letter-spacing: 1.5px; margin-top: 6px !important; display: block;">
            Fine Art & Illustration
          </span>
        </div>
        
        <!-- Center Column: Menu Links -->
        <div class="mx-auto d-none d-lg-flex align-items-center gap-5">
          <a href="#" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Home</a>
          <a href="#gallery" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Gallery</a>
          <a href="#classes" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Workshops</a>
          <a href="#shop" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Collection</a>
          <a href="#about" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Biography</a>
          <a href="#contact" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Atelier</a>
        </div>
        
        <!-- Right Column: Boutique Handbag Basket Target -->
        <div class="d-flex align-items-center ms-auto">
          <div class="position-relative magnetic-bag" style="cursor: pointer;">
            <i class="bi bi-bag fs-2 text-dark"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark" style="font-size: 0.65rem; padding: 0.5em 0.7em;">
              {{ cartCount }}
            </span>
          </div>
        </div>

      </div>
    </nav>

    <main style="padding-top: 0;">
      <!-- 🎬 SECTION 1: HERO PARALLAX REVEAL CONTAINER -->
      <section id="home" class="vh-100 d-flex align-items-center justify-content-center text-center px-4 parallax-hero" 
               style="background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('image/a passion for creativity.jpg');">
        <div>
          <!-- Scaled down the title style parameters gracefully to avoid overwhelming text sizes -->
          <h1 class="serif mb-5" style="font-size: clamp(2.2rem, 6vw, 4.2rem); font-weight: 400; line-height: 1.2; color: #2B2B2B; text-shadow: 0 2px 15px rgba(255,255,255,0.9);">
            A Passion for <br>
            <span class="fst-italic willow">Creativity</span>
          </h1>
          <a href="#classes" class="btn btn-dark rounded-0 px-5 py-3 text-uppercase fw-bold shadow-sm" style="letter-spacing: 2px; font-size: 0.8rem; text-decoration: none;">
            Book Class ⟶
          </a>
        </div>
      </section>

      <!-- 🖼️ SECTION 2: THE FINE ART GALLERY GRID (Framed Paintings - Full Display) -->
      <section id="gallery" class="container-fluid py-5 px-lg-5" style="background: #FFFFFF; scroll-margin-top: 100px; position: relative; z-index: 10;">
        <div class="row mb-5 pt-5">
          <div class="col-12 text-start">
            <span class="text-uppercase small willow ls-5 d-block mb-2">Selected Portfolios</span>
            <h2 class="serif display-5 fw-light">Original Paintings & Illustrations</h2>
          </div>
        </div>
        <div class="row g-5 align-items-center">
          <div class="col-12 col-lg-7">
            <div class="gallery-card overflow-hidden bg-white p-3 shadow-sm">
              <!-- Changed to object-fit-contain to fully display the entire uncropped image structure -->
              <div class="img-wrapper overflow-hidden bg-light d-flex align-items-center justify-content-center" style="height: 55vh; background-color: #FAF9F6 !important;">
                <img src="image/Irene-3.jpg" class="w-100 h-100 object-fit-contain" alt="Framed original artwork">
              </div>
              <div class="d-flex justify-content-between mt-3 px-2">
                <span class="serif fw-normal text-uppercase tracking-wider">Watercolour & Ink Studies</span>
                <span class="text-muted small">Carshalton Collection</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-5">
            <div class="gallery-card overflow-hidden bg-white p-3 shadow-sm">
              <div class="img-wrapper overflow-hidden bg-light d-flex align-items-center justify-content-center" style="height: 70vh; background-color: #FAF9F6 !important;">
                <img src="image/Irene-4.jpg" class="w-100 h-100 object-fit-contain" alt="Nature inspired painting series">
              </div>
              <div class="d-flex justify-content-between mt-3 px-2">
                <span class="serif fw-normal text-uppercase tracking-wider">Nature Inspired Series</span>
                <span class="text-muted small">Fine Art Print</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 🏛️ SECTION 3: REFINED WORKSHOPS ENGINE (Painting Parties - Full Display) -->
      <section id="classes" class="container-fluid py-5 px-lg-5" style="background: var(--soft-wash-bg); scroll-margin-top: 100px; position: relative; z-index: 10;">
        <div class="row mb-5 pt-5">
          <div class="col-12 text-start">
            <span class="text-uppercase small willow ls-5 d-block mb-2">Art Instruction</span>
            <h2 class="serif display-5 fw-light">Creative Classes & Workshops</h2>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-12 col-md-6 col-xl-4">
            <div class="booking-card bg-white shadow-sm border-0 d-flex flex-column justify-content-between overflow-hidden" style="height: 52vh;">
              <!-- Switched step container to display full width/height profiles uncropped -->
              <div class="position-relative d-flex align-items-center justify-content-center bg-light" style="height: 22vh; background-color: #FAF9F6 !important;">
                <img src="image/Irene-1.jpg" class="w-100 h-100 object-fit-contain" alt="Painting class party session">
              </div>
              <div class="p-4 flex-grow-1 d-flex flex-column justify-content-between">
                <div>
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="badge rounded-0 text-uppercase tracking-wider px-3 py-1 bg-dark text-white style-badge">Group Event</span>
                    <span class="serif text-dark fw-normal fs-5">£45</span>
                  </div>
                  <h3 class="serif h4 fw-light mb-2">Watercolour Painting Parties</h3>
                  <p class="text-secondary small mb-0">Discover soft washes and color blending options in a social, welcoming community workspace.</p>
                </div>
                <div class="border-top pt-3 mt-2 d-flex justify-content-between align-items-center">
                  <span class="small text-muted"><i class="bi bi-geo-alt me-2"></i>Carshalton Studio</span>
                  <button class="btn btn-outline-dark rounded-0 btn-sm text-uppercase tracking-wider px-3 py-1">Book Slot</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-xl-4">
            <div class="booking-card bg-white shadow-sm border-0 d-flex flex-column justify-content-between overflow-hidden" style="height: 52vh;">
              <div class="position-relative d-flex align-items-center justify-content-center bg-light" style="height: 22vh; background-color: #FAF9F6 !important;">
                <img src="image/Irene-2.jpg" class="w-100 h-100 object-fit-contain" alt="Ink & illustration class setting">
              </div>
              <div class="p-4 flex-grow-1 d-flex flex-column justify-content-between">
                <div>
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="badge rounded-0 text-uppercase tracking-wider px-3 py-1 bg-dark text-white style-badge">All Levels</span>
                    <span class="serif text-dark fw-normal fs-5">£35</span>
                  </div>
                  <h3 class="serif h4 fw-light mb-2">Ink & Illustration Classes</h3>
                  <p class="text-secondary small mb-0">Focusing on capturing delicate line-work textures, character concepts, and narrative techniques.</p>
                </div>
                <div class="border-top pt-3 mt-2 d-flex justify-content-between align-items-center">
                  <span class="small text-muted"><i class="bi bi-clock me-2"></i>Weekly Blocks</span>
                  <button class="btn btn-outline-dark rounded-0 btn-sm text-uppercase tracking-wider px-3 py-1">Book Slot</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-xl-4">
            <div class="booking-card bg-white shadow-sm border-0 d-flex flex-column justify-content-between overflow-hidden" style="height: 52vh;">
              <div class="position-relative d-flex align-items-center justify-content-center bg-light" style="height: 22vh;">
                <i class="bi bi-bookmark-heart text-muted display-4 opacity-25"></i>
              </div>
              <div class="p-4 flex-grow-1 d-flex flex-column justify-content-between">
                <div>
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="badge rounded-0 text-uppercase tracking-wider px-3 py-1 bg-dark text-white style-badge">Intensive</span>
                    <span class="serif text-dark fw-normal fs-5">£120</span>
                  </div>
                  <h3 class="serif h4 fw-light mb-2">Private Studio Mentoring</h3>
                  <p class="text-secondary small">One-on-one tailored private tutorial blocks designed explicitly around personalized portfolio development plans.</p>
                </div>
                <div class="border-top pt-3 mt-2 d-flex justify-content-between align-items-center">
                  <span class="small text-muted"><i class="bi bi-person-fill me-2"></i>1-on-1 Mentorship</span>
                  <button class="btn btn-outline-dark rounded-0 btn-sm text-uppercase tracking-wider px-3 py-1">Book Slot</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 🛍️ SECTION 4: THE ART SHOP ORIGINAL SELECTIONS (Handmade Earrings - Full Display) -->
      <section id="shop" class="container-fluid py-5 px-lg-5" style="background: #FFFFFF; scroll-margin-top: 100px;">
        <div class="row mb-5 pt-5">
          <div class="col-12 text-start">
            <span class="text-uppercase small willow ls-5 d-block mb-2">Online Shop</span>
            <h2 class="serif display-5 fw-light">Acquire Original Artworks & Crafts</h2>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-12 col-md-6">
            <div class="shop-card bg-white p-3 shadow-sm border-0">
              <div class="shop-img-wrapper overflow-hidden bg-light d-flex align-items-center justify-content-center position-relative" style="height: 45vh; background-color: #FAF9F6 !important;">
                <img src="image/Irene-5.jpg" class="w-100 h-100 object-fit-contain" alt="Handcrafted artisan earrings">
                <span class="position-absolute top-3 start-3 badge bg-dark rounded-0 text-uppercase small ls-2" style="font-size: 0.6rem; letter-spacing: 1px;">Handmade</span>
              </div>
              <div class="mt-4 px-2">
                <div class="d-flex justify-content-between align-items-baseline">
                  <h3 class="serif h4 fw-normal mb-1">Artisan Handcrafted Earrings</h3>
                  <span class="serif text-dark fw-bold fs-5">£45</span>
                </div>
                <p class="text-muted small mb-3">Individually sculpted botanical-themed earrings crafted manually from specialized premium clays.</p>
                <button (click)="addToBag()" class="btn btn-dark w-100 rounded-0 py-2 text-uppercase small fw-bold tracking-wider fs-7" style="font-size: 0.75rem; letter-spacing: 2px;">
                  Add to Art Bag
                </button>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="shop-card bg-white p-3 shadow-sm border-0">
              <div class="shop-img-wrapper overflow-hidden bg-light d-flex align-items-center justify-content-center position-relative" style="height: 45vh; background-color: #FAF9F6 !important;">
                <img src="image/Irene-6.jpg" class="w-100 h-100 object-fit-contain" alt="Boutique art print item">
                <span class="position-absolute top-3 start-3 badge bg-dark rounded-0 text-uppercase small ls-2" style="font-size: 0.6rem; letter-spacing: 1px;">Limited Edition</span>
              </div>
              <div class="mt-4 px-2">
                <div class="d-flex justify-content-between align-items-baseline">
                  <h3 class="serif h4 fw-normal mb-1">Reflections of Nature Landscape</h3>
                  <span class="serif text-dark fw-bold fs-5">£180</span>
                </div>
                <p class="text-muted small mb-3">Signed limited edition print mounted and framed beautifully inside organic light oak frames.</p>
                <button (click)="addToBag()" class="btn btn-dark w-100 rounded-0 py-2 text-uppercase small fw-bold tracking-wider fs-7" style="font-size: 0.75rem; letter-spacing: 2px;">
                  Add to Art Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 📖 SECTION 5: THE BIOGRAPHY STATEMENT (Mural Project - Full Display) -->
      <section id="about" class="container-fluid py-5 px-lg-5" style="background: var(--soft-wash-bg); scroll-margin-top: 100px;">
        <div class="row align-items-center py-5">
          <div class="col-12 col-lg-6 pe-lg-5 mb-5 mb-lg-0">
            <span class="text-uppercase small willow ls-5 d-block mb-3">About the Artist</span>
            <h2 class="serif display-3 fw-light mb-4">Irene Caboni</h2>
            <p class="lead text-dark serif fst-italic mb-4" style="line-height: 1.6; opacity: 0.85;">
              "Art is a vehicle for meaningful connection—a way to map human feelings, stories, and the beauty of nature onto paper."
            </p>
            <p class="text-secondary small mb-4" style="line-height: 1.8;">
              Based in London, Irene is a fine artist, illustrator, and passionate art instructor. Specializing in watercolors and detailed line inks, her work focuses on delicate compositions that express profound emotion, nature landscapes, architectural mural design, and narrative illustration layouts.
            </p>
            <div class="border-start border-secondary border-2 ps-3 mt-4">
              <span class="small fw-bold text-uppercase d-block tracking-wider">Public & Private Murals</span>
              <span class="small text-muted">Executing large-scale spatial installations designed to transform community spaces.</span>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="manifesto-frame bg-white p-4 shadow-sm text-center position-relative">
              <div class="bg-light d-flex align-items-center justify-content-center text-dark" style="height: 60vh; background-color: #FAF9F6 !important;">
                <img src="image/Irene-7.jpg" class="w-100 h-100 object-fit-contain" alt="Mural project in progress">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 📸 SECTION 7: THE INSTAGRAM LIVE MEDIA MATRICES (Diary Stream - Full Display) -->
      <section id="social-feed" class="container-fluid py-5 px-lg-5" style="background: #FFFFFF;">
        <div class="row mb-5 pt-4">
          <div class="col-12 text-start">
            <span class="text-uppercase small willow ls-5 d-block mb-2">Studio Diary</span>
            <h2 class="serif display-5 fw-light">Latest Illustrations & Updates</h2>
          </div>
        </div>
        <div class="row g-4">
          @for (item of [1,2,3,4]; track item) {
            <div class="col-6 col-lg-3">
              <div class="instagram-card bg-white p-2 shadow-sm border-0 position-relative overflow-hidden">
                <div class="bg-light d-flex align-items-center justify-content-center position-relative wrapper-box" style="height: 30vh; background-color: #FAF9F6 !important;">
                  <img src="image/Irene-8.jpg" class="w-100 h-100 object-fit-contain" alt="Studio diary stream update">
                  <div class="insta-hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75 opacity-0 transition-all">
                    <span class="text-white small tracking-widest text-uppercase fw-bold" style="font-size: 0.7rem;"><i class="bi bi-heart-fill me-2"></i> View Post</span>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- ✉️ SECTION 8: EDITORIAL CONTACT & MATTING FOOTER -->
      <section id="contact" class="container-fluid py-5 px-lg-5" style="background: var(--charcoal-ink); color: var(--gallery-white); scroll-margin-top: 100px;">
        <div class="row py-5 align-items-center">
          <div class="col-12 col-lg-6 mb-5 mb-lg-0 pe-lg-5">
            <span class="text-uppercase small ls-5 d-block mb-3" style="color: #C5A059;">Newsletter</span>
            <h2 class="serif display-4 fw-light mb-4">Stay in Touch</h2>
            <p class="small text-muted mb-4" style="max-width: 450px;">Subscribe to receive updates on upcoming workshop schedules, community art drops, and new exhibition viewings.</p>
            <div class="d-flex border-bottom border-secondary border-opacity-50 pb-2 mt-4" style="max-width: 500px;">
              <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS" class="bg-transparent border-0 text-white w-100 px-2 font-monospace small" style="outline: none; letter-spacing: 1px;">
              <button class="btn p-0 border-0 text-uppercase fw-bold small tracking-wider text-white" style="font-size: 0.75rem;">Join ⟶</button>
            </div>
          </div>
          <div class="col-12 col-lg-6 ps-lg-5 border-start border-secondary border-opacity-25">
            <div class="row g-4">
              <div class="col-6">
                <span class="text-uppercase font-monospace text-muted d-block mb-2" style="font-size: 0.65rem; letter-spacing: 2px;">Studio Base</span>
                <p class="small serif mb-0 text-white-50">Carshalton, Greater London<br>United Kingdom</p>
              </div>
              <div class="col-6">
                <span class="text-uppercase font-monospace text-muted d-block mb-2" style="font-size: 0.65rem; letter-spacing: 2px;">Inquiries</span>
                <p class="small font-monospace mb-0 text-white-50">info&#64;irenecaboniarts.co.uk</p>
              </div>
            </div>
            <div class="row mt-5 pt-4 border-top border-secondary border-opacity-10 text-muted">
              <div class="col-12 d-flex justify-content-between align-items-center small">
                <span>&copy; 2026 IRENE CABONI ARTS. ALL RIGHTS RESERVED.</span>
                <div class="d-flex gap-3 fs-5">
                  <i class="bi bi-instagram cursor-pointer text-white-50"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ✨ FLOATING UTILITY CONTROLS -->
      <div class="floating-controls d-flex flex-column gap-3 position-fixed bottom-4 end-4" style="z-index: 9999;">
        <button (click)="scrollToTop()" [class.visible]="showScrollArrow" class="btn-scroll-top d-flex align-items-center justify-content-center shadow-sm">
          <i class="bi bi-arrow-up"></i>
        </button>
        <button (click)="toggleAiPanel()" class="btn-ai-assistant d-flex align-items-center justify-content-center shadow">
          <i class="bi bi-chat-left-dots-fill text-white"></i>
        </button>
      </div>

      <!-- 🔮 SLIDE-OUT AI DRAWER PANEL -->
      <div [class.open]="isAiPanelOpen" class="ai-drawer-panel position-fixed top-0 end-0 h-100 bg-white shadow-lg d-flex flex-column" style="z-index: 10000; width: 380px;">
        <div class="p-4 border-bottom d-flex justify-content-between align-items-center bg-light">
          <div>
            <h4 class="serif h5 mb-1 fw-bold">Atelier AI Concierge</h4>
            <span class="text-success small font-monospace" style="font-size: 0.65rem;"><i class="bi bi-circle-fill me-1 small"></i> ART ADVISOR</span>
          </div>
          <button (click)="toggleAiPanel()" class="btn-close shadow-none" style="font-size: 0.8rem;"></button>
        </div>
        <div class="flex-grow-1 p-4 overflow-y-auto font-monospace" style="font-size: 0.8rem; background: #FAF9F6;">
          <div class="ai-msg bg-white p-3 shadow-sm border mb-3">
            Welcome to Irene Caboni Arts. I am your personal Art Advisor assistant. Feel free to ask about upcoming watercolour workshop dates, fine art prints, or custom commission timelines!
          </div>
        </div>
        <div class="p-3 border-top bg-white d-flex gap-2">
          <input type="text" placeholder="Ask a question..." class="form-control rounded-0 border font-monospace small" style="font-size: 0.75rem; outline: none;">
          <button class="btn btn-dark rounded-0 px-3 py-2"><i class="bi bi-send-fill" style="font-size: 0.8rem;"></i></button>
        </div>
      </div>
    </main>
  `
})
export class App implements OnInit {
  private http = inject(HttpClient);

  showScrollArrow = false;
  isAiPanelOpen = false;
  cartCount = 0;
  backendProducts: any[] = [];

  ngOnInit() {
    this.fetchBackendProducts();
  }

  fetchBackendProducts() {
    this.http.get<any[]>('http://localhost:8080/api/products').subscribe({
      next: (data) => {
        this.backendProducts = data;
      },
      error: (err) => {
        console.log('Standby configuration active.');
      }
    });
  }

  addToBag() {
    this.cartCount++;
  }

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
