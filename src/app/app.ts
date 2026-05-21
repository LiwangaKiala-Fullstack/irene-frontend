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
      <!-- 🎬 SECTION 1: HERO PARALLAX CONTAINER -->
      <section id="home" class="vh-100 d-flex align-items-end justify-content-center text-center px-4 parallax-hero" 
               style="background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('image/a passion for creativity.jpg'); padding-bottom: 12vh;">
        <div>
          <h1 class="serif mb-4" style="font-size: clamp(2.2rem, 6vw, 4.2rem); font-weight: 400; line-height: 1.2; color: #2B2B2B; text-shadow: 0 2px 15px rgba(255,255,255,0.9);">
            A Passion for <br>
            <span class="fst-italic willow">Creativity</span>
          </h1>
          <div class="d-flex justify-content-center mt-3">
            <a href="#classes" class="btn-circle-cta shadow-sm text-uppercase text-decoration-none d-flex flex-column align-items-center justify-content-center">
              <span class="btn-text-main font-monospace">Book</span>
              <span class="btn-text-sub font-monospace">Class</span>
              <i class="bi bi-arrow-down mt-1 fs-6"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- 🖼️ SECTION 2: Interactive Virtual Gallery Studio -->
      <section id="gallery" class="container-fluid py-5 px-lg-5" style="background: #FFFFFF; scroll-margin-top: 100px; position: relative; z-index: 10;">
        <div class="row mb-4 pt-5">
          <div class="col-12 text-center">
            <span class="text-uppercase small willow ls-5 d-block mb-2">Virtual Exhibition</span>
            <h2 class="serif display-5 fw-light mb-3">Original Paintings & Illustrations</h2>
          </div>
        </div>

        <!-- 🎨 INTERACTIVE FRAME COLOR PICKER -->
        <div class="row mb-5 justify-content-center">
          <div class="col-auto bg-light p-3 border shadow-sm rounded-0 d-flex align-items-center gap-4">
            <span class="small font-monospace text-uppercase willow mb-0">Select Gallery Frame Color:</span>
            <div class="d-flex gap-3">
              <button (click)="changeFrame('#D9C3A5', 'Natural Oak')" class="swatch-btn" style="background-color: #D9C3A5;" title="Natural Oak"></button>
              <button (click)="changeFrame('#5C4033', 'Elegant Walnut')" class="swatch-btn" style="background-color: #5C4033;" title="Elegant Walnut"></button>
              <button (click)="changeFrame('#1C1C1C', 'Minimalist Charcoal')" class="swatch-btn" style="background-color: #1C1C1C;" title="Minimalist Charcoal"></button>
              <button (click)="changeFrame('#EAEAEA', 'Gallery White')" class="swatch-btn" style="background-color: #EAEAEA;" title="Gallery White"></button>
            </div>
            <span class="small font-monospace text-dark fw-bold mb-0 text-uppercase ls-2">Style: {{ currentFrameName }}</span>
          </div>
        </div>

        <div class="row g-5 align-items-start justify-content-center">
          <!-- Artwork Card 1: Woman with the mask (Scaled up to 80vh height with zero gap boundaries) -->
          <div class="col-12 col-lg-7">
            <div class="gallery-card bg-white p-0">
              <div class="museum-frame p-0 shadow overflow-hidden w-100 d-flex align-items-center justify-content-center" 
                   [style.border-color]="currentFrameColor" 
                   style="height: 80vh; border-style: solid; background-color: #FFFFFF;">
                <div class="img-wrapper overflow-hidden w-100 h-100 p-0 m-0">
                  <img src="image/Irene-3.jpg" class="w-100 h-100 object-fit-cover" alt="Woman with the mask painting">
                </div>
              </div>
              <div class="mt-3 px-2 text-start">
                <h3 class="serif h4 mb-1 text-dark tracking-wide">Woman with the mask</h3>
                <span class="willow small font-monospace text-uppercase tracking-wider">Carshalton Collection — Original Watercolour</span>
              </div>
            </div>
          </div>

          <!-- Artwork Card 2: The forest (Perfect height pairing with zero inner gaps) -->
          <div class="col-12 col-lg-5">
            <div class="gallery-card bg-white p-0">
              <div class="museum-frame p-0 shadow overflow-hidden w-100 d-flex align-items-center justify-content-center" 
                   [style.border-color]="currentFrameColor" 
                   style="height: 80vh; border-style: solid; background-color: #FFFFFF;">
                <div class="img-wrapper overflow-hidden w-100 h-100 p-0 m-0">
                  <img src="image/Irene-4.jpg" class="w-100 h-100 object-fit-cover" alt="The forest landscape painting">
                </div>
              </div>
              <div class="mt-3 px-2 text-start">
                <h3 class="serif h4 mb-1 text-dark tracking-wide">The forest</h3>
                <span class="willow small font-monospace text-uppercase tracking-wider">Fine Art Print — Surrey Series</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 🏛️ SECTION 3: REFINED WORKSHOPS ENGINE (Uniform Height & Fashion Price Layouts) -->
      <section id="classes" class="container-fluid py-5 px-lg-5" style="background: var(--soft-wash-bg); scroll-margin-top: 100px; position: relative; z-index: 10;">
        <div class="row mb-5 pt-5">
          <div class="col-12 text-center">
            <span class="text-uppercase small willow ls-5 d-block mb-2">Art Instruction</span>
            <h2 class="serif display-5 fw-light">Creative Classes & Workshops</h2>
          </div>
        </div>
        <div class="row g-4 justify-content-center">
          <!-- Workshop Card 1 -->
          <div class="col-12 col-md-6 col-xl-4">
            <div class="booking-card bg-white shadow-sm border-0 d-flex flex-column justify-content-between overflow-hidden" style="height: 60vh;">
              <div class="position-relative overflow-hidden w-100" style="height: 28vh; background-color: #FAF9F6 !important;">
                <img src="image/Irene-1.jpg" class="w-100 h-100 object-fit-cover" alt="Painting class party session">
              </div>
              <div class="p-4 flex-grow-1 d-flex flex-column justify-content-between">
                <div>
                  <div class="d-flex justify-content-between align-items-baseline mb-2">
                    <h3 class="serif h4 fw-light mb-0">Watercolour Painting Parties</h3>
                    <!-- Premium Editorial Fashion Pricing presentation -->
                    <span class="font-monospace text-dark fw-bold fs-5 tracking-widest border-bottom border-dark pb-1">£45.00</span>
                  </div>
                  <span class="badge rounded-0 text-uppercase tracking-wider px-2 py-1 bg-secondary text-white mb-3" style="font-size: 0.55rem; letter-spacing: 1px;">Group Event</span>
                  <p class="text-secondary small mb-0">Discover soft washes and color blending options in a social, welcoming community workspace.</p>
                </div>
                <div class="border-top pt-3 mt-3 d-flex justify-content-between align-items-center">
                  <span class="small text-muted"><i class="bi bi-geo-alt me-2"></i>Carshalton Studio</span>
                  <button (click)="addToBag()" class="btn btn-outline-dark rounded-0 btn-sm text-uppercase tracking-wider px-3 py-2 dynamic-btn">Book Slot</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Workshop Card 2 -->
          <div class="col-12 col-md-6 col-xl-4">
            <div class="booking-card bg-white shadow-sm border-0 d-flex flex-column justify-content-between overflow-hidden" style="height: 60vh;">
              <div class="position-relative overflow-hidden w-100" style="height: 28vh; background-color: #FAF9F6 !important;">
                <img src="image/Irene-2.jpg" class="w-100 h-100 object-fit-cover" alt="Ink & illustration class setting">
              </div>
              <div class="p-4 flex-grow-1 d-flex flex-column justify-content-between">
                <div>
                  <div class="d-flex justify-content-between align-items-baseline mb-2">
                    <h3 class="serif h4 fw-light mb-0">Ink & Illustration Classes</h3>
                    <span class="font-monospace text-dark fw-bold fs-5 tracking-widest border-bottom border-dark pb-1">£35.00</span>
                  </div>
                  <span class="badge rounded-0 text-uppercase tracking-wider px-2 py-1 bg-secondary text-white mb-3" style="font-size: 0.55rem; letter-spacing: 1px;">All Levels</span>
                  <p class="text-secondary small mb-0">Focusing on capturing delicate line-work textures, character concepts, and narrative techniques.</p>
                </div>
                <div class="border-top pt-3 mt-3 d-flex justify-content-between align-items-center">
                  <span class="small text-muted"><i class="bi bi-clock me-2"></i>Weekly Blocks</span>
                  <button (click)="addToBag()" class="btn btn-outline-dark rounded-0 btn-sm text-uppercase tracking-wider px-3 py-2 dynamic-btn">Book Slot</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Workshop Card 3 -->
          <div class="col-12 col-md-6 col-xl-4">
            <div class="booking-card bg-white shadow-sm border-0 d-flex flex-column justify-content-between overflow-hidden" style="height: 60vh;">
              <div class="position-relative overflow-hidden w-100" style="height: 28vh; background-color: #FAF9F6 !important;">
                <img src="image/Irene-9.jpg" class="w-100 h-100 object-fit-cover" alt="Private studio mentoring session">
              </div>
              <div class="p-4 flex-grow-1 d-flex flex-column justify-content-between">
                <div>
                  <div class="d-flex justify-content-between align-items-baseline mb-2">
                    <h3 class="serif h4 fw-light mb-0">Private Studio Mentoring</h3>
                    <span class="font-monospace text-dark fw-bold fs-5 tracking-widest border-bottom border-dark pb-1">£120.00</span>
                  </div>
                  <span class="badge rounded-0 text-uppercase tracking-wider px-2 py-1 bg-dark text-white mb-3" style="font-size: 0.55rem; letter-spacing: 1px;">Intensive</span>
                  <p class="text-secondary small mb-0">One-on-one tailored private tutorial blocks designed explicitly around personalized portfolio development plans.</p>
                </div>
                <div class="border-top pt-3 mt-3 d-flex justify-content-between align-items-center">
                  <span class="small text-muted"><i class="bi bi-person-fill me-2"></i>1-on-1 Mentorship</span>
                  <button (click)="addToBag()" class="btn btn-outline-dark rounded-0 btn-sm text-uppercase tracking-wider px-3 py-2 dynamic-btn">Book Slot</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 🛍️ SECTION 4: THE ART SHOP ORIGINAL SELECTIONS -->
      <section id="shop" class="container-fluid py-5 px-lg-5" style="background: #FFFFFF; scroll-margin-top: 100px;">
        <div class="row mb-5 pt-5">
          <div class="col-12 text-center">
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

      <!-- 📖 SECTION 5: THE BIOGRAPHY STATEMENT -->
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

      <!-- 📸 SECTION 7: THE INSTAGRAM LIVE MEDIA MATRICES -->
      <section id="social-feed" class="container-fluid py-5 px-lg-5" style="background: #FFFFFF;">
        <div class="row mb-5 pt-4">
          <div class="col-12 text-center">
            <span class="text-uppercase small willow ls-5 d-block mb-2">Studio Diary</span>
            <h2 class="serif display-5 fw-light">Latest Illustrations & Updates</h2>
          </div>
        </div>
        <div class="row g-4">
          @for (item of [1, 2, 3, 4]; track item) {
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

      <!-- ✉️ SECTION 8: REFINED CONTACT ATELIER -->
      <section id="contact" class="container-fluid py-5 px-lg-5" style="background: var(--charcoal-ink); color: var(--gallery-white); scroll-margin-top: 100px;">
        <div class="row py-5 align-items-center">
          <div class="col-12 col-lg-6 mb-5 mb-lg-0 pe-lg-5">
            <span class="text-uppercase small ls-5 d-block mb-3" style="color: #C5A059;">Newsletter</span>
            <h2 class="serif display-4 fw-light mb-4">Stay in Touch</h2>
            <p class="small text-muted mb-4" style="max-width: 450px;">Subscribe to receive updates on upcoming workshop schedules, community art drops, and new exhibition viewings.</p>
            
            @if (showSuccessFeedback) {
              <div class="p-3 mb-4 text-center border font-monospace small" style="background: var(--soft-wash-bg); color: var(--willow-slate);">
                ✨ THANK YOU. YOU HAVE JOINED THE ATELIER LEDGER.
              </div>
            } @else {
              <div class="d-flex border-bottom border-secondary border-opacity-50 pb-2 mt-4" style="max-width: 500px;">
                <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS" class="bg-transparent border-0 text-white w-100 px-2 font-monospace small" style="outline: none; letter-spacing: 1px;">
                <button (click)="submitContact()" class="btn p-0 border-0 text-uppercase fw-bold small tracking-wider text-white" style="font-size: 0.75rem;">Join ⟶</button>
              </div>
            }
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
  showSuccessFeedback = false;
  cartCount = 0;
  backendProducts: any[] = [];
  
  // Dynamic default state hooks for your customized virtual frames setup
  currentFrameColor = '#D9C3A5';
  currentFrameName = 'Natural Oak';

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

  changeFrame(color: string, name: string) {
    this.currentFrameColor = color;
    this.currentFrameName = name;
  }

  addToBag() {
    this.cartCount++;
  }

  submitContact() {
    this.showSuccessFeedback = true;
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
