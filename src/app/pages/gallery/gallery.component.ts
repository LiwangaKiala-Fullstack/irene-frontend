import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="container-fluid py-5 px-lg-5 immersive-gallery-root" style="background: #FFFFFF; min-height: 100vh; padding-top: 140px !important;">
      
      <div class="row mb-4">
        <div class="col-12 text-center">
          <span class="text-uppercase small willow ls-5 d-block mb-2">Virtual Exhibition Space</span>
          <h2 class="serif display-4 fw-light mb-3 text-dark">Original Paintings & Fine Art Prints</h2>
          <div class="mx-auto border-bottom border-dark border-opacity-10" style="width: 60px; height: 1px;"></div>
        </div>
      </div>

      <!-- 🎨 LIVE INTERACTIVE FRAME MOULDING SWATCH SELECTOR -->
      <div class="row mb-5 justify-content-center">
        <div class="col-auto bg-white p-3 border shadow-sm rounded-0 d-flex align-items-center gap-4 architectural-control">
          <span class="small font-monospace text-uppercase willow mb-0" style="font-size: 0.65rem; letter-spacing: 1px;">Select Gallery Frame Depth:</span>
          <div class="d-flex gap-3">
            <button (click)="changeFrame('#D9C3A5', 'Natural Italian Oak')" class="swatch-btn dynamic-swatch" style="background-color: #D9C3A5;" title="Natural Oak"></button>
            <button (click)="changeFrame('#5C4033', 'Elegant Walnut Grain')" class="swatch-btn" style="background-color: #5C4033;" title="Elegant Walnut"></button>
            <button (click)="changeFrame('#1C1C1C', 'Minimalist Charcoal Ink')" class="swatch-btn" style="background-color: #1C1C1C;" title="Minimalist Charcoal"></button>
            <button (click)="changeFrame('#EAEAEA', 'Gallery Studio White')" class="swatch-btn" style="background-color: #EAEAEA;" title="Gallery White"></button>
          </div>
          <span class="small font-monospace text-dark fw-bold mb-0 text-uppercase tracking-wider" style="font-size: 0.7rem;">Moulding: {{ currentFrameName }}</span>
        </div>
      </div>

      <!-- 🏛️ LEVEL SYMMETRICAL MUSEUM FRAMING MATS -->
      <div class="row g-5 align-items-end justify-content-center pb-5">
        <!-- Card 1: Woman with the mask -->
        <div class="col-12 col-md-6 col-lg-5">
          <div class="gallery-card bg-white p-0 mx-auto position-relative" style="max-width: 450px;">
            <div class="museum-frame p-0 shadow overflow-hidden w-100 d-flex align-items-center justify-content-center architectural-frame" 
                 [style.border-color]="currentFrameColor" 
                 style="height: 65vh; border-style: solid; background-color: #FFFFFF;">
              <div class="img-wrapper overflow-hidden w-100 h-100 p-0 m-0">
                <img src="image/Irene-3.jpg" class="w-100 h-100 object-fit-contain fine-art-canvas" alt="Woman with the mask painting">
              </div>
            </div>
            <div class="mt-4 px-2 text-start">
              <div class="d-flex justify-content-between align-items-baseline">
                <h3 class="serif h4 mb-1 text-dark tracking-wide fw-light">Woman with the mask</h3>
                <span class="font-monospace text-muted small" style="font-size: 0.65rem;">ORIGINAL AVAILABLE</span>
              </div>
              <span class="willow small font-monospace text-uppercase tracking-wider" style="font-size: 0.65rem;">Carshalton Collection — Original Watercolour</span>
            </div>
          </div>
        </div>

        <!-- Card 2: The forest -->
        <div class="col-12 col-md-6 col-lg-7">
          <div class="gallery-card bg-white p-0 position-relative">
            <div class="museum-frame p-0 shadow overflow-hidden w-100 d-flex align-items-center justify-content-center architectural-frame" 
                 [style.border-color]="currentFrameColor" 
                 style="height: 65vh; border-style: solid; background-color: #FFFFFF;">
              <div class="img-wrapper overflow-hidden w-100 h-100 p-0 m-0">
                <img src="image/Irene-4.jpg" class="w-100 h-100 object-fit-cover fine-art-canvas" alt="The forest landscape painting">
              </div>
            </div>
            <div class="mt-4 px-2 text-start">
              <div class="d-flex justify-content-between align-items-baseline">
                <h3 class="serif h4 mb-1 text-dark tracking-wide fw-light">The forest</h3>
                <span class="font-monospace text-muted small" style="font-size: 0.65rem;">LIMITED EDITION PRINT</span>
              </div>
              <span class="willow small font-monospace text-uppercase tracking-wider" style="font-size: 0.65rem;">Fine Art Print — Surrey Woods Series</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class GalleryComponent {
  currentFrameColor = '#D9C3A5';
  currentFrameName = 'Natural Italian Oak';

  changeFrame(color: string, name: string) {
    this.currentFrameColor = color;
    this.currentFrameName = name;
  }
}
