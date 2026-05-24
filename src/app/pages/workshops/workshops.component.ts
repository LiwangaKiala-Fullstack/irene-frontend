import { Component } from '@angular/core';

@Component({
  selector: 'app-workshops',
  standalone: true,
  template: `
    <section class="container-fluid py-5 px-lg-5" style="background: var(--soft-wash-bg); min-height: 100vh; padding-top: 140px !important;">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <span class="text-uppercase small willow ls-5 d-block mb-2">Art Instruction</span>
          <h2 class="serif display-5 fw-light">Creative Classes & Workshops</h2>
          <div class="mx-auto border-bottom border-dark border-opacity-10" style="width: 60px; height: 1px; margin-top: 15px;"></div>
        </div>
      </div>
      
      <div class="row g-4 justify-content-center pb-5">
        <!-- Column 1: Watercolour Parties -->
        <div class="col-12 col-md-4">
          <div class="booking-card bg-white shadow-sm border-0 d-flex flex-column justify-content-between overflow-hidden" style="height: 72vh;">
            <div class="position-relative overflow-hidden w-100" style="height: 38vh;">
              <img src="image/Irene-1.jpg" class="w-100 h-100 object-fit-cover" alt="Painting parties">
            </div>
            <div class="p-4 flex-grow-1 d-flex flex-column justify-content-between">
              <div>
                <div class="d-flex justify-content-between align-items-baseline mb-2">
                  <h3 class="serif h4 fw-light mb-0">Watercolour Parties</h3>
                  <span class="font-monospace text-dark fw-bold fs-5 tracking-widest border-bottom border-dark pb-1">£45.00</span>
                </div>
                <span class="badge rounded-0 text-uppercase tracking-wider px-2 py-1 bg-secondary text-white mb-3" style="font-size: 0.55rem;">Group Event</span>
                <p class="text-secondary small mb-0">Discover soft washes and color blending options in a social community workspace.</p>
              </div>
              <div class="border-top pt-3 mt-3 d-flex justify-content-between align-items-center">
                <span class="small text-muted"><i class="bi bi-geo-alt me-2"></i>Carshalton Studio</span>
                <button class="btn btn-outline-dark rounded-0 btn-sm text-uppercase tracking-wider px-3 py-2 dynamic-btn">Book Slot</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Column 2: Ink & Illustration -->
        <div class="col-12 col-md-4">
          <div class="booking-card bg-white shadow-sm border-0 d-flex flex-column justify-content-between overflow-hidden" style="height: 72vh;">
            <div class="position-relative overflow-hidden w-100" style="height: 38vh;">
              <img src="image/Irene-2.jpg" class="w-100 h-100 object-fit-cover" alt="Ink classes">
            </div>
            <div class="p-4 flex-grow-1 d-flex flex-column justify-content-between">
              <div>
                <div class="d-flex justify-content-between align-items-baseline mb-2">
                  <h3 class="serif h4 fw-light mb-0">Ink & Illustration</h3>
                  <span class="font-monospace text-dark fw-bold fs-5 tracking-widest border-bottom border-dark pb-1">£35.00</span>
                </div>
                <span class="badge rounded-0 text-uppercase tracking-wider px-2 py-1 bg-secondary text-white mb-3" style="font-size: 0.55rem;">All Levels</span>
                <p class="text-secondary small mb-0">Focusing on capturing delicate line-work textures and character concepts.</p>
              </div>
              <div class="border-top pt-3 mt-3 d-flex justify-content-between align-items-center">
                <span class="small text-muted"><i class="bi bi-clock me-2"></i>Weekly Blocks</span>
                <button class="btn btn-outline-dark rounded-0 btn-sm text-uppercase tracking-wider px-3 py-2 dynamic-btn">Book Slot</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Column 3: Private Studio Mentoring -->
        <div class="col-12 col-md-4">
          <div class="booking-card bg-white shadow-sm border-0 d-flex flex-column justify-content-between overflow-hidden" style="height: 72vh;">
            <div class="position-relative overflow-hidden w-100" style="height: 38vh;">
              <img src="image/Irene-9.jpg" class="w-100 h-100 object-fit-cover" alt="Mentoring">
            </div>
            <div class="p-4 flex-grow-1 d-flex flex-column justify-content-between">
              <div>
                <div class="d-flex justify-content-between align-items-baseline mb-2">
                  <h3 class="serif h4 fw-light mb-0">Studio Mentoring</h3>
                  <span class="font-monospace text-dark fw-bold fs-5 tracking-widest border-bottom border-dark pb-1">£120.00</span>
                </div>
                <span class="badge rounded-0 text-uppercase tracking-wider px-2 py-1 bg-dark text-white mb-3" style="font-size: 0.55rem;">Intensive</span>
                <p class="text-secondary small mb-0">One-on-one tailored private tutorial blocks designed around portfolio development plans.</p>
              </div>
              <div class="border-top pt-3 mt-3 d-flex justify-content-between align-items-center">
                <span class="small text-muted"><i class="bi bi-person-fill me-2"></i>1-on-1 Mentorship</span>
                <button class="btn btn-outline-dark rounded-0 btn-sm text-uppercase tracking-wider px-3 py-2 dynamic-btn">Book Slot</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class WorkshopsComponent {}
