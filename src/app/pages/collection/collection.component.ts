import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProductItem {
  id: string;
  title: string;
  price: number;
  stockNote: string;
  isLimited: boolean;
  description: string;
  src: string;
  badge: string;
}

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="container-fluid py-5 px-lg-5" style="background: #FCFAF7; min-height: 100vh; padding-top: 150px !important;">
      
      <!-- 🏛️ COLUMNS SHOP EDITORIAL HEADING -->
      <div class="row mb-5">
        <div class="col-12 text-center">
          <span class="text-uppercase small willow ls-5 d-block mb-2 font-monospace" style="font-size: 0.65rem; letter-spacing: 4px;">Online Atelier Shop</span>
          <h2 class="serif display-3 fw-light text-dark">The Artisan Collection</h2>
          <div class="mx-auto border-bottom border-dark border-opacity-10" style="width: 50px; height: 1px; margin-top: 15px;"></div>
        </div>
      </div>
      
      <!-- 🪐 HIGH-MAGNIFICATION DUAL BOUTIQUE PRODUCTS MATRIX GRID -->
      <div class="row g-5 justify-content-center pb-5 px-xl-5">
        <div *ngFor="let item of catalog" class="col-12 col-md-6 d-flex flex-column justify-content-between shop-card-entry" style="max-width: 550px;">
          <div class="shop-card bg-white p-4 border shadow-sm h-100 d-flex flex-column justify-content-between transition-card">
            
            <!-- Interactive Amazon-Style Magnification Glass Lens Frame Box -->
            <div class="shop-img-wrapper overflow-hidden bg-light d-flex align-items-center justify-content-center position-relative amazon-lens-container" 
                 (mousemove)="onZoomMove($event)" (mouseleave)="onZoomLeave($event)" style="height: 45vh; background-color: #FAF9F6 !important; cursor: zoom-in;">
              <img [src]="item.src" class="w-100 h-100 object-fit-contain amazon-zoom-image" style="transition: transform 0.1s ease; transform-origin: center center;" [alt]="item.title">
              <span class="position-absolute top-3 start-3 badge bg-dark rounded-0 text-uppercase small font-monospace" style="font-size: 0.55rem; letter-spacing: 1px; padding: 0.5em 0.8em;">
                {{ item.badge }}
              </span>
            </div>
            
            <!-- Product Textual Analytics -->
            <div class="mt-4 px-1 flex-grow-1 d-flex flex-column justify-content-between">
              <div>
                <div class="d-flex justify-content-between align-items-baseline mb-2">
                  <h3 class="serif h4 mb-0 text-dark fw-light" style="font-size: 1.3rem; min-height: 4vh;">{{ item.title }}</h3>
                  <span class="serif text-dark fw-bold fs-4 ps-2">£{{ item.price }}</span>
                </div>
                
                <div class="d-flex align-items-center gap-2 my-2 font-monospace" style="font-size: 0.65rem;">
                  <i class="bi bi-circle-fill text-danger" style="font-size: 0.45rem;"></i>
                  <span class="text-uppercase tracking-wider fw-bold text-danger">{{ item.stockNote }}</span>
                </div>

                <p class="text-secondary small mb-4 mt-2" style="font-size: 0.85rem; line-height: 1.6; font-family: sans-serif; text-align: justify;">
                  {{ item.description }}
                </p>
              </div>

              <!-- Cart Link Action Counter Trigger -->
              <button (click)="triggerBagAddition()" class="btn btn-dark w-100 rounded-0 py-3 text-uppercase font-monospace tracking-wider text-white shop-acquire-btn" style="font-size: 0.72rem; letter-spacing: 2px;">
                Acquire Work
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  `
})
export class CollectionComponent {
  // 🌟 Cleaned, non-repeating catalog data mapping exclusively containing earrings and print assets
  catalog: ProductItem[] = [
    {
      id: 'earrings-botanical',
      title: 'Artisan Botanical Clay Earrings',
      price: 45,
      stockNote: 'Only 3 Pairs Left',
      isLimited: true,
      badge: 'Handcrafted Craft',
      description: 'Individually sculpted botanical-themed leaf style accessory earrings, shaped meticulously by hand from raw premium clays inside her local workspace.',
      src: 'image/Irene-5.jpg'
    },
    {
      id: 'print-reflections',
      title: 'Reflections of Nature Landscape',
      price: 180,
      stockNote: 'Signed Limited Edition',
      isLimited: true,
      badge: 'Fine Art Print',
      description: 'Certified premium high-definition print run, custom mounted and beautifully enclosed within organic sustainable light oak solid wood frames.',
      src: 'image/Irene-6.jpg'
    }
  ];

  triggerBagAddition() {
    window.document.querySelectorAll('.magnetic-bag').forEach((el) => {
      el.dispatchEvent(new Event('click'));
    });
  }

  onZoomMove(event: MouseEvent) {
    const container = event.currentTarget as HTMLElement;
    const img = container.querySelector('.amazon-zoom-image') as HTMLImageElement;
    if (!img) return;
    const rect = container.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = 'scale(1.85)';
  }

  onZoomLeave(event: MouseEvent) {
    const container = event.currentTarget as HTMLElement;
    const img = container.querySelector('.amazon-zoom-image') as HTMLImageElement;
    if (!img) return;
    img.style.transform = 'scale(1)';
    img.style.transformOrigin = 'center center';
  }
}
