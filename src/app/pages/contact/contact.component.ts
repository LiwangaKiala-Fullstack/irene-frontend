import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AtelierEvent {
  title: string;
  date: string;
  time: string;
  locationName: string;
  mapsUrl: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- 🎨 SECTION 1: THE ATELIER INTRO HERO -->
    <section class="container-fluid p-0 position-relative border-bottom" style="height: 50vh; padding-top: 100px !important; background: #FAF9F6;">
      <div class="w-100 h-100 position-relative overflow-hidden bg-secondary">
        <div class="w-100 h-100 d-flex align-items-center justify-content-center text-center px-4" 
             style="background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('image/Irene-1.jpg'); background-size: cover; background-position: center center;">
          <div class="text-white">
            <span class="text-uppercase font-monospace small ls-5 d-block mb-2 text-white-50" style="font-size: 0.75rem;">Step Inside the Creative Space</span>
            <h1 class="serif display-3 fw-light m-0 text-white">Join the Carshalton Atelier</h1>
          </div>
        </div>
      </div>
    </section>

    <!-- 🗺️ SECTION 2: DYNAMIC CHRONO-ROUTING LIVE RADAR MAP PANEL -->
    <section class="container-fluid py-5 px-lg-5" style="background: #FFFFFF;">
      <div class="row align-items-center py-4">
        <div class="col-12 col-lg-5 pe-lg-5 mb-5 mb-lg-0">
          <span class="badge rounded-0 text-uppercase tracking-wider px-2 py-1 bg-dark text-white mb-3" style="font-size: 0.55rem; letter-spacing: 1px;">Live Studio Map Routing</span>
          <h3 class="serif h2 fw-light text-dark mb-3">{{ activeEvent.title }}</h3>
          <p class="text-secondary small mb-4" style="line-height: 1.8;">
            Irene's next scheduled live session is active. Click the animated architectural blueprint on the right to load your step-by-step radar navigation route map inside Google Maps instantly.
          </p>
          <div class="border-top pt-3 d-flex justify-content-between font-monospace small text-muted">
            <span><i class="bi bi-calendar-event me-2 text-dark"></i>{{ activeEvent.date }}</span>
            <span><i class="bi bi-clock me-2 text-dark"></i>{{ activeEvent.time }}</span>
          </div>
        </div>

        <div class="col-12 col-lg-7">
          <div class="radar-map-canvas position-relative overflow-hidden shadow w-100 p-4 d-flex align-items-center justify-content-center" 
               (click)="launchMapNavigation()" style="height: 42vh; cursor: pointer;">
            <div class="map-grid-mesh"></div>
            <div class="map-coordinates-box p-3 bg-white border font-monospace text-center position-relative shadow-sm" style="z-index: 10;">
              <div class="radar-pulse-ring"></div>
              <i class="bi bi-geo-alt-fill text-danger fs-3 mb-1 d-block anim-bounce"></i>
              <span class="small font-monospace text-dark fw-bold text-uppercase d-block" style="font-size: 0.65rem; letter-spacing: 1px;">{{ activeEvent.locationName }}</span>
              <span class="text-muted d-block mt-1" style="font-size: 0.55rem; letter-spacing: 0.5px;">Click to Initialize Navigation Stream</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ✉️ SECTION 3: THE HIGH-VISIBILITY EXPANDED CANVAS MESSAGE ENGINE -->
    <section class="container-fluid py-5 px-lg-5 artist-scratch-bg" style="position: relative; z-index: 10;">
      <div class="row justify-content-center py-5">
        <div class="col-12 col-xl-10">
          
          <div class="bg-white p-4 p-md-5 shadow-lg border border-dark border-opacity-10 rounded-0 text-center position-relative">
            <h3 class="serif display-5 fw-light text-dark mb-5 text-capitalize" style="letter-spacing: 1px;">Contact Irene</h3>
            
            <div *ngIf="formSubmitted" class="p-5 border font-monospace small bg-light text-dark text-center shadow-sm">
              ✨ Thank you. Your message has been transmitted successfully. Irene will reply within 48 hours.
            </div>

            <form *ngIf="!formSubmitted" (ngSubmit)="handleFormSubmit()" class="d-flex flex-column gap-5 text-start font-monospace small mt-2">
              <div class="row g-4">
                <div class="col-12 col-md-6 position-relative">
                  <input type="text" required class="premium-underline-input w-100 py-2 bg-transparent border-0 font-monospace small" placeholder="FIRST NAME *">
                </div>
                <div class="col-12 col-md-6 position-relative">
                  <input type="text" required class="premium-underline-input w-100 py-2 bg-transparent border-0 font-monospace small" placeholder="SURNAME *">
                </div>
              </div>

              <div class="row g-4">
                <div class="col-12 col-md-6 position-relative">
                  <input type="tel" required class="premium-underline-input w-100 py-2 bg-transparent border-0 font-monospace small" placeholder="MOBILE NUMBER *">
                </div>
                <div class="col-12 col-md-6 position-relative">
                  <input type="email" required class="premium-underline-input w-100 py-2 bg-transparent border-0 font-monospace small" placeholder="EMAIL ADDRESS *">
                </div>
              </div>

              <div class="position-relative">
                <select required class="premium-underline-input w-100 py-2 bg-transparent border-0 font-monospace small text-muted" style="cursor: pointer; outline: none; border-radius: 0;">
                  <option value="" disabled selected>SELECT INQUIRY TYPE *</option>
                  <option value="mural">Custom Wall Mural Commission</option>
                  <option value="original">Original Painting Acquisition</option>
                  <option value="viewing">Private Studio Viewing Request</option>
                </select>
              </div>

              <div class="position-relative">
                <textarea required rows="4" class="premium-underline-input w-100 py-2 bg-transparent border-0 font-monospace small" placeholder="WRITE YOUR MESSAGE HERE... *"></textarea>
              </div>

              <div class="text-center pt-3 border-bottom pb-5 mb-4">
                <button type="submit" class="btn kinetic-send-btn px-5 py-3 text-uppercase font-monospace tracking-wider text-white position-relative overflow-hidden" style="font-size: 0.75rem; letter-spacing: 4px; min-width: 240px; border-radius: 0;">
                  <span class="btn-label-text">Send</span>
                  <div class="kinetic-wave-overlay"></div>
                </button>
              </div>
            </form>

            <!-- 🏛️ METADATA FOOTER CONTAINER -->
            <div class="row g-4 pt-2 text-start font-monospace text-secondary align-items-center" style="font-size: 0.75rem;">
              <div class="col-12 col-md-4">
                <div class="d-flex align-items-center gap-3">
                  <i class="bi bi-phone text-dark fs-4"></i>
                  <div>
                    <span class="text-uppercase text-muted d-block font-monospace" style="font-size: 0.55rem; letter-spacing: 1px;">Mobile</span>
                    <span class="text-dark fw-bold">07411735267</span>
                  </div>
                </div>
              </div>
              
              <div class="col-12 col-md-4">
                <div class="d-flex align-items-center gap-3">
                  <i class="bi bi-geo-alt text-dark fs-4"></i>
                  <div>
                    <span class="text-uppercase text-muted d-block font-monospace" style="font-size: 0.55rem; letter-spacing: 1px;">Location</span>
                    <span class="text-dark">Carshalton, London, UK</span>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4 text-md-end">
                <span class="text-uppercase text-muted d-block font-monospace mb-2 text-md-end text-start" style="font-size: 0.55rem; letter-spacing: 1px;">Studio Socials</span>
                <div class="d-flex gap-3 justify-content-md-end justify-content-start fs-5 text-dark">
                  <a href="https://instagram.com" target="_blank" class="text-dark"><i class="bi bi-instagram cursor-pointer portfolio-social-icon"></i></a>
                  <a href="https://pinterest.com" target="_blank" class="text-dark"><i class="bi bi-pinterest cursor-pointer portfolio-social-icon"></i></a>
                  <a href="https://facebook.com" target="_blank" class="text-dark"><i class="bi bi-facebook cursor-pointer portfolio-social-icon"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  formSubmitted = false;

  activeEvent: AtelierEvent = {
    title: 'Summer Botanical Masterclass Pop-up',
    date: '30 MAY 2026',
    time: '2:00 PM BST',
    locationName: 'Oaks Park Conservatory, Carshalton',
    mapsUrl: 'https://google.com'
  };

  handleFormSubmit() {
    this.formSubmitted = true;
  }

  launchMapNavigation() {
    window.open(this.activeEvent.mapsUrl, '_blank');
  }
}

