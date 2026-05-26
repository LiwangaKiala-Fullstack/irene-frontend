import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- 🪐 EXCLUSIVE ASYMMETRICAL SPLIT-CANVAS CONTACT DESK -->
    <section class="container-fluid p-0 d-flex flex-wrap text-dark" style="min-height: 100vh; padding-top: 100px !important; background: #FCFAF7;">
      
      <!-- LEFT DESK LAYER: Charcoal Inquiry Workspace Frame -->
      <div class="col-12 col-lg-6 p-4 p-md-5 text-white d-flex flex-column justify-content-between position-relative overflow-hidden" 
           style="background-color: #1C1C1C !important; min-height: 85vh; border-right: 1px solid rgba(255,255,255,0.05);">
        
        <div class="pt-3">
          <span class="text-uppercase small font-monospace d-block mb-2" style="color: #E2C293; letter-spacing: 3px; font-size: 0.65rem;">Atelier Connections</span>
          <h2 class="serif display-4 fw-light mb-4 text-white text-capitalize">Commission a Work</h2>
          
          <div *ngIf="formSubmitted" class="p-4 border border-secondary font-monospace small text-center mt-4 bg-dark text-warning">
            ✨ Message transmitted. Irene will reply to your proposal within 48 hours.
          </div>

          <!-- Premium Minimalist Underline Input Form Structure -->
          <form *ngIf="!formSubmitted" (ngSubmit)="handleFormSubmit()" class="d-flex flex-column gap-4 font-monospace mt-2">
            <div class="row g-3">
              <div class="col-12 col-sm-6"><input type="text" required class="contact-underline-input w-100 py-2 text-white" placeholder="FIRST NAME *"></div>
              <div class="col-12 col-sm-6"><input type="text" required class="contact-underline-input w-100 py-2 text-white" placeholder="SURNAME *"></div>
            </div>
            <div class="row g-3">
              <div class="col-12 col-sm-6"><input type="tel" required class="contact-underline-input w-100 py-2 text-white" placeholder="MOBILE *"></div>
              <div class="col-12 col-sm-6"><input type="email" required class="contact-underline-input w-100 py-2 text-white" placeholder="EMAIL ADDRESS *"></div>
            </div>
            <div>
              <select required class="contact-underline-input w-100 py-2 text-white-50" style="cursor: pointer; background-color: #1C1C1C !important;">
                <option value="" disabled selected>INQUIRY PROGRAM TYPE *</option>
                <option value="watercolour">Chessington 'La Dolce Vita' Painting Party Booking</option>
                <option value="workshops">Oaks Park Conservatory Masterclass Entry</option>
                <option value="original">Original Painting Acquisition Inquiry</option>
                <option value="mural">Custom Space Wall Mural Commission</option>
              </select>
            </div>
            <div><textarea required rows="3" class="contact-underline-input w-100 py-2 text-white" placeholder="DESCRIBE YOUR CREATIVE PROJECT *"></textarea></div>
            <div class="pt-2">
              <button type="submit" class="btn btn-outline-light rounded-0 px-4 py-2.5 text-uppercase tracking-wider font-monospace fs-7 contact-submit-trigger" style="font-size: 0.72rem; letter-spacing: 2px;">Submit Proposal</button>
            </div>
          </form>
        </div>

        <!-- Verbatim Business Coordinates & Social Channels Block -->
        <div class="row g-3 pt-5 border-top border-secondary border-opacity-30 font-monospace small" style="font-size: 0.7rem; color: rgba(255,255,255,0.6);">
          <div class="col-12 col-sm-6">
            <span class="d-block text-white fw-bold text-nowrap"><i class="bi bi-phone me-2"></i>07411735267</span>
            <span class="d-block mt-1"><i class="bi bi-geo-alt me-2"></i>Greater London, UK</span>
          </div>
          <div class="col-12 col-sm-6 d-flex gap-4 fs-5 justify-content-sm-end justify-content-start">
            <a href="https://instagram.com" target="_blank" class="text-white-50 hover-gold"><i class="bi bi-instagram"></i></a>
            <a href="https://facebook.com" target="_blank" class="text-white-50 hover-gold"><i class="bi bi-facebook"></i></a>
          </div>
        </div>
      </div>

      <!-- RIGHT MAP LAYER: Architectural Radar Map Panel -->
      <div class="col-12 col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-between" style="background: #FFFFFF; min-height: 85vh;">
        <div class="pt-3 w-100">
          <span class="text-uppercase small font-monospace willow d-block mb-2" style="letter-spacing: 3px; font-size: 0.65rem;">Live Location Radar</span>
          <h3 class="serif h2 fw-light text-dark mb-3">Oaks Park Conservatory</h3>
          <p class="text-secondary small mb-4" style="line-height: 1.7; font-size: 0.85rem; font-family: sans-serif;">
            Her main instruction studio is based in Carshalton. Click the interactive architectural mapping canvas below to open live Google Maps radar coordinates and calculate paths from your location instantly [INDEX].
          </p>

          <!-- Interactive Geometric Radar Map Trigger Card -->
          <div class="radar-map-canvas position-relative overflow-hidden shadow-sm border w-100 p-4 d-flex align-items-center justify-content-center" 
               (click)="launchGoogleMapsNavigation()" style="height: 48vh; cursor: pointer; background-color: #FCFAF7;">
            <div class="map-grid-mesh"></div>
            <div class="map-coordinates-box p-3 bg-white border font-monospace text-center position-relative shadow-sm" style="z-index: 10;">
              <div class="radar-pulse-ring"></div>
              <i class="bi bi-geo-alt-fill text-danger fs-3 mb-1 d-block anim-bounce"></i>
              <span class="small font-monospace text-dark fw-bold text-uppercase d-block" style="font-size: 0.65rem; letter-spacing: 1px;">Carshalton, SM7 3BA</span>
              <span class="text-muted d-block mt-1" style="font-size: 0.55rem; letter-spacing: 0.5px;">Click to Synchronize Google Maps Path</span>
            </div>
          </div>
        </div>

        <div class="pt-4 border-top font-monospace small text-muted d-flex justify-content-between align-items-center w-100" style="font-size: 0.68rem;">
          <span><i class="bi bi-clock me-2"></i>By Appointment Only</span>
          <span class="text-dark fw-bold text-decoration-underline" (click)="launchGoogleMapsNavigation()" style="cursor: pointer;">Get Route Map ⟶</span>
        </div>
      </div>

    </section>
  `
})
export class ContactComponent {
  formSubmitted = false;
  handleFormSubmit() { this.formSubmitted = true; }
  launchGoogleMapsNavigation() {
    window.open('https://google.com', '_blank');
  }
}
