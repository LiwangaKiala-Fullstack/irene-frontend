import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- 🏛️ NEW ASYMMETRICAL SOLID TEXT HEADING (100% IMAGE-FREE CONTRAST TO HERO) -->
    <section class="container-fluid p-0 position-relative border-bottom" style="height: 35vh; padding-top: 100px !important; background: #1C1C1C !important;">
      <div class="w-100 h-100 d-flex align-items-center justify-content-center text-center px-4">
        <div class="animate-room-fade">
          <span class="text-uppercase font-monospace small ls-5 d-block mb-2" style="font-size: 0.65rem; letter-spacing: 4px; color: #E2C293 !important;">Atelier Booking Desk</span>
          <h1 class="serif display-4 fw-light m-0 text-white" style="letter-spacing: 2px;">Connect With The Studio</h1>
          <div class="mx-auto border-bottom border-warning border-opacity-20 my-3" style="width: 40px; height: 1px;"></div>
        </div>
      </div>
    </section>

    <!-- 🪐 EXCLUSIVE ASYMMETRICAL CONTENT FLOOR -->
    <section class="container-fluid p-0 d-flex flex-wrap text-dark position-relative" style="min-height: 65vh; background: #FCFAF7;">
      
      <!-- LEFT DESK LAYER: Dark Desk Booking Matrix -->
      <div class="col-12 col-lg-6 p-4 p-md-5 text-white d-flex flex-column justify-content-between position-relative overflow-hidden" 
           style="background-color: #242424 !important; min-height: 65vh; border-right: 1px solid rgba(255,255,255,0.05);">
        
        <div class="pt-2">
          <h2 class="serif display-6 fw-light mb-4 text-white text-capitalize">Commission a Masterpiece</h2>
          
          <div *ngIf="formSubmitted" class="p-4 border border-warning font-monospace small text-center mt-4 bg-dark text-warning" style="border-style: dashed !important;">
            ✨ PROPOSAL TRANSMITTED. IRENE WILL REPLY WITHIN 48 HOURS.
          </div>

          <form *ngIf="!formSubmitted" (ngSubmit)="handleFormSubmit()" class="d-flex flex-column gap-4 font-monospace mt-3">
            <div class="row g-3">
              <div class="col-12 col-sm-6"><input type="text" required class="contact-underline-input w-100 py-2 text-white" placeholder="FIRST NAME *"></div>
              <div class="col-12 col-sm-6"><input type="text" required class="contact-underline-input w-100 py-2 text-white" placeholder="SURNAME *"></div>
            </div>
            <div class="row g-3">
              <div class="col-12 col-sm-6"><input type="tel" required class="contact-underline-input w-100 py-2 text-white" placeholder="MOBILE NUMBER *"></div>
              <div class="col-12 col-sm-6"><input type="email" required class="contact-underline-input w-100 py-2 text-white" placeholder="EMAIL ADDRESS *"></div>
            </div>
            <div class="position-relative">
              <select required class="contact-underline-input w-100 py-2 text-white-50" style="cursor: pointer; background-color: #242424 !important; outline: none; border-radius: 0;">
                <option value="" disabled selected>SELECT INQUIRY PROGRAM TYPE *</option>
                <option value="chessington">La Dolce Vita Painting Party (02 June — Chessington)</option>
                <option value="carshalton">Summer Botanical Masterclass (30 May — Carshalton)</option>
                <option value="mural">Custom Interior/Exterior Wall Mural Commission</option>
                <option value="original">Original Fine Art Canvas Acquisition</option>
              </select>
            </div>
            <div class="position-relative"><textarea required rows="2" class="contact-underline-input w-100 py-2 text-white" placeholder="DESCRIBE YOUR CREATIVE VISION *"></textarea></div>
            <div class="pt-2">
              <button type="submit" class="btn btn-outline-light rounded-0 px-4 py-2.5 text-uppercase font-monospace tracking-wider text-white contact-submit-trigger" style="font-size: 0.72rem; letter-spacing: 3px; background: transparent; transition: all 0.4s ease;">Submit Proposal</button>
            </div>
          </form>
        </div>

        <div class="row g-3 pt-4 mt-4 border-top border-secondary border-opacity-30 font-monospace small align-items-center" style="font-size: 0.7rem; color: rgba(255,255,255,0.55);">
          <div class="col-12 col-sm-6">
            <span class="d-block text-white fw-bold text-nowrap"><i class="bi bi-phone me-2 text-warning"></i>07411735267</span>
            <span class="d-block mt-1"><i class="bi bi-geo-alt me-2"></i>Greater London / Surrey, UK</span>
          </div>
          <div class="col-12 col-sm-6 d-flex gap-4 fs-4 justify-content-sm-end justify-content-start">
            <a href="https://instagram.com" target="_blank" class="text-white-50 hover-gold-accent"><i class="bi bi-instagram"></i></a>
            <a href="https://facebook.com" target="_blank" class="text-white-50 hover-gold-accent"><i class="bi bi-facebook"></i></a>
          </div>
        </div>
      </div>

      <!-- RIGHT MAP LAYER: Minimalist Live Compass Radar Routing Screen -->
      <div class="col-12 col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-between" style="background: #FFFFFF; min-height: 65vh;">
        <div class="pt-2 w-100">
          <span class="text-uppercase small font-monospace willow d-block mb-2" style="letter-spacing: 3px; font-size: 0.65rem;">Atelier Tracking Grid</span>
          <h3 class="serif h2 fw-light text-dark mb-2" style="letter-spacing: 0.5px;">Oaks Park Conservatory</h3>
          <p class="text-secondary small mb-4" style="line-height: 1.7; font-size: 0.85rem; font-family: sans-serif; text-align: justify;">Her permanent fine arts workspace and summer glasshouse masterclass series are nested live on location in Carshalton. Click the interactive architectural mapping canvas window below to launch precise target satellite radar parameters from your coordinate route instantly.</p>

          <!-- Interactive Geometric Radar Map Trigger Card -->
          <div class="radar-map-canvas position-relative overflow-hidden shadow-sm border w-100 p-4 d-flex align-items-center justify-content-center navigation-radar-shield" 
               (click)="launchGoogleMapsNavigation()" style="height: 36vh; cursor: pointer; background-color: #FCFAF7;">
            <div class="map-grid-mesh"></div>
            <div class="map-coordinates-box p-3 bg-white border font-monospace text-center position-relative shadow-sm" style="z-index: 10; min-width: 240px;">
              <div class="radar-pulse-ring"></div>
              <i class="bi bi-geo-alt-fill text-danger fs-3 mb-1 d-block anim-bounce"></i>
              <span class="small font-monospace text-dark fw-bold text-uppercase d-block" style="font-size: 0.65rem; letter-spacing: 1px;">Carshalton, SM7 3BA</span>
              <span class="text-muted d-block mt-1" style="font-size: 0.52rem; letter-spacing: 0.5px;">Click to Initialize Route Radar</span>
            </div>
          </div>
        </div>

        <div class="pt-3 border-top font-monospace small text-muted d-flex justify-content-between align-items-center w-100 mt-3" style="font-size: 0.68rem;">
          <span><i class="bi bi-clock-fill me-2"></i>Attendance By Appointment Only</span>
          <span class="text-dark fw-bold text-decoration-underline" (click)="launchGoogleMapsNavigation()" style="cursor: pointer; letter-spacing: 0.5px;">Calculate Route Map ⟶</span>
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
