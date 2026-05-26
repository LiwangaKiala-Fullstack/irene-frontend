import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Artwork {
  title: string; medium: string; dimensions: string;
  category: 'watercolour' | 'print' | 'mural'; src: string; availability: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="container-fluid py-5 px-lg-5" style="background: #FFFFFF; min-height: 100vh; padding-top: 150px !important;">
      
      <!-- 🏛️ HEADING -->
      <div class="row mb-5"><div class="col-12 text-center">
        <span class="text-uppercase small willow ls-5 d-block mb-2 font-monospace" style="font-size: 0.65rem; letter-spacing: 4px;">Virtual Showroom</span>
        <h2 class="serif display-3 fw-light mb-3 text-dark">Exhibition Portfolio</h2>
        <div class="mx-auto border-bottom border-dark border-opacity-10" style="width: 50px; height: 1px;"></div>
      </div></div>

      <!-- 🪐 FRAME CONTROLS & CHANNELS -->
      <div class="row g-4 justify-content-center align-items-center mb-5 pb-3 px-xl-5">
        <div class="col-12 col-xl-6 text-center text-xl-start">
          <div class="d-inline-flex flex-wrap gap-2 justify-content-center p-1 bg-light rounded-0 border">
            <button (click)="setFilter('all')" [class.active-tab]="activeFilter === 'all'" class="filter-link">All Works</button>
            <button (click)="setFilter('watercolour')" [class.active-tab]="activeFilter === 'watercolour'" class="filter-link">Original Watercolours</button>
            <button (click)="setFilter('print')" [class.active-tab]="activeFilter === 'print'" class="filter-link">Fine Art Prints</button>
            <button (click)="setFilter('mural')" [class.active-tab]="activeFilter === 'mural'" class="filter-link">Wall Murals</button>
          </div>
        </div>
        <div class="col-12 col-xl-6 d-flex justify-content-center justify-content-xl-end">
          <div class="bg-white p-3 border shadow-sm rounded-0 d-flex align-items-center gap-4 border-start border-3 border-dark">
            <span class="small font-monospace text-uppercase willow mb-0" style="font-size: 0.62rem; letter-spacing: 1px;">Moulding Depth:</span>
            <div class="d-flex gap-2">
              <button (click)="changeFrame('#D9C3A5', 'Natural Italian Oak')" class="swatch-circle" style="background-color: #D9C3A5;" [class.selected]="currentFrameColor === '#D9C3A5'"></button>
              <button (click)="changeFrame('#5C4033', 'Elegant Walnut Grain')" class="swatch-circle" style="background-color: #5C4033;" [class.selected]="currentFrameColor === '#5C4033'"></button>
              <button (click)="changeFrame('#1C1C1C', 'Minimalist Charcoal Ink')" class="swatch-circle" style="background-color: #1C1C1C;" [class.selected]="currentFrameColor === '#1C1C1C'"></button>
              <button (click)="changeFrame('#EAEAEA', 'Gallery Studio White')" class="swatch-circle" style="background-color: #EAEAEA;" [class.selected]="currentFrameColor === '#EAEAEA'"></button>
            </div>
            <span class="small font-monospace text-dark fw-bold mb-0 text-uppercase tracking-wider text-nowrap" style="font-size: 0.65rem; width: 140px;">{{ currentFrameName }}</span>
          </div>
        </div>
      </div>

      <!-- 🖼️ SHOWROOM IMAGE GRID MATRIX -->
      <div class="row g-5 justify-content-center px-xl-5 pb-5">
        <ng-container *ngFor="let item of artworks">
          <div *ngIf="activeFilter === 'all' || item.category === activeFilter" class="col-12 col-sm-6 col-md-4 d-flex flex-column justify-content-between animation-fade-grid-entry">
            <div class="gallery-card bg-white p-0 mx-auto w-100 position-relative">
              <div class="shadow-sm overflow-hidden w-100 d-flex align-items-center justify-content-center master-museum-frame" [style.border-color]="currentFrameColor">
                <div class="w-100 h-100 overflow-hidden bg-white p-2">
                  <img [src]="item.src" class="w-100 h-100 object-fit-contain img-fluid fine-art-zoom" [alt]="item.title">
                </div>
              </div>
              <div class="mt-4 px-1 py-1 text-start">
                <div class="d-flex justify-content-between align-items-baseline mb-1">
                  <h3 class="serif h5 mb-0 text-dark tracking-wide fw-light fs-5">{{ item.title }}</h3>
                  <span class="badge rounded-0 font-monospace text-uppercase" [class.bg-dark]="item.availability === 'Available'" [class.bg-secondary]="item.availability !== 'Available'" style="font-size: 0.55rem; letter-spacing: 0.5px; padding: 0.4em 0.6em;">{{ item.availability }}</span>
                </div>
                <div class="d-flex justify-content-between align-items-center font-monospace text-muted mt-2 pt-2 border-top border-black border-opacity-5" style="font-size: 0.68rem; letter-spacing: 0.2px;">
                  <span>{{ item.medium }}</span><span class="fst-italic">{{ item.dimensions }}</span>
                </div>
              </div>
            </div>
          </div>
        </ng-container>
      </div>
    </section>
  `
})
export class GalleryComponent {
  activeFilter: string = 'all';
  currentFrameColor: string = '#D9C3A5';
  currentFrameName: string = 'Natural Italian Oak';

  artworks: Artwork[] = [
    { title: 'Mediterranean Solitude', medium: 'Original Watercolour', dimensions: '40 x 50 cm', category: 'watercolour', src: 'image/gallery-1.jpg', availability: 'Available' },
    { title: 'Tuscan Summer Shadows', medium: 'Fine Art Print', dimensions: '30 x 42 cm', category: 'print', src: 'image/gallery-2.jpg', availability: 'Prints Only' },
    { title: 'Amalfi Coastal Study', medium: 'Original Watercolour', dimensions: '50 x 70 cm', category: 'watercolour', src: 'image/gallery-3.jpg', availability: 'Available' },
    { title: 'Woman with the mask', medium: 'Original Watercolour', dimensions: '40 x 50 cm', category: 'watercolour', src: 'image/Irene-3.jpg', availability: 'Acquired' },
    { title: 'The Forest Study', medium: 'Fine Art Print', dimensions: '30 x 42 cm', category: 'print', src: 'image/Irene-4.jpg', availability: 'Prints Only' },
    { title: 'Mural Blueprint Notes', medium: 'Architectural Ink', dimensions: '60 x 80 cm', category: 'mural', src: 'image/Irene-7.jpg', availability: 'Commissioned' }
  ];

  setFilter(category: string) { this.activeFilter = category; }
  changeFrame(color: string, name: string) { this.currentFrameColor = color; this.currentFrameName = name; }
}
