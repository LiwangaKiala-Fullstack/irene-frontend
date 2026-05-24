import { Component, HostListener, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <!-- 🏛️ MASTER NAVBAR MENU (Persistent on all pages) -->
    <nav class="navbar fixed-top py-4 px-lg-5" style="backdrop-filter: blur(15px); background: rgba(255, 255, 255, 0.85); z-index: 1000; border-bottom: 1px solid rgba(0,0,0,0.03);">
      <div class="container-fluid d-flex align-items-center position-relative">
        
        <!-- Left Column: Logo Stacked -->
        <div class="brand-container d-flex flex-column align-items-start m-0 p-0">
          <a class="navbar-brand fw-bold fs-3 serif mb-0 p-0 text-dark text-decoration-none" routerLink="/">
            Irene Caboni
          </a>
          <span class="willow font-monospace m-0 text-uppercase text-nowrap ps-4" style="font-size: 0.6rem; letter-spacing: 1.5px; margin-top: 6px !important; display: block;">
            Fine Art & Illustration
          </span>
        </div>
        
        <!-- Center Column: Multi-Page Links (No more # hashtags!) -->
        <div class="mx-auto d-none d-lg-flex align-items-center gap-5">
          <a routerLink="/" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Home</a>
          <a routerLink="/bio" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Bio</a>
          <a routerLink="/gallery" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Gallery</a>
          <a routerLink="/workshops" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Workshops</a>
          <a routerLink="/collection" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Collection</a>
          <a routerLink="/contact" class="nav-editorial-link small text-uppercase fw-bold text-decoration-none text-dark">Contact</a>
        </div>
        
        <!-- Right Column: Art Bag -->
        <div class="d-flex align-items-center ms-auto">
          <div class="position-relative magnetic-bag" style="cursor: pointer;" (click)="addToBag()">
            <i class="bi bi-bag fs-2 text-dark"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark" style="font-size: 0.65rem; padding: 0.5em 0.7em;">
              {{ cartCount }}
            </span>
          </div>
        </div>

      </div>
    </nav>

    <!-- 🪐 THE DYNAMIC ROUTER WINDOW -->
    <!-- This tag injects ONLY the current page component, keeping them completely separate! -->
    <main style="padding-top: 0;">
      <router-outlet></router-outlet>
      
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
          <button (click)="toggleAiPanel()" class="btn-close shadow-none" style="font-size: 0.8rem; cursor: pointer;"></button>
        </div>
        <div class="flex-grow-1 p-4 overflow-y-auto font-monospace" style="font-size: 0.8rem; background: #FAF9F6;">
          <div class="ai-msg bg-white p-3 shadow-sm border mb-3">
            Welcome back to Irene Caboni Arts. Ask me anything about her upcoming watercolour workshops or fine art prints!
          </div>
        </div>
        <div class="p-3 border-top bg-white d-flex gap-2">
          <input type="text" placeholder="Ask a question..." class="form-control rounded-0 border font-monospace small" style="font-size: 0.75rem; outline: none;">
          <button class="btn btn-dark rounded-0 px-3 py-2"><i class="bi bi-send-fill"></i></button>
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
      next: (data) => { this.backendProducts = data; },
      error: (err) => { console.log('Standby configuration active.'); }
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
