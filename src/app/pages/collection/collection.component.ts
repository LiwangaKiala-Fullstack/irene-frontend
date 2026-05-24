import { Component } from '@angular/core';

@Component({
  selector: 'app-collection',
  standalone: true,
  template: `
    <section class="container-fluid py-5 px-lg-5" style="background: #FFFFFF; min-height: 100vh; padding-top: 140px !important;">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <span class="text-uppercase small willow ls-5 d-block mb-2">Online Shop</span>
          <h2 class="serif display-5 fw-light">Acquire Original Artworks & Crafts</h2>
          <div class="mx-auto border-bottom border-dark border-opacity-10" style="width: 60px; height: 1px; margin-top: 15px;"></div>
        </div>
      </div>
      
      <div class="row g-4 justify-content-center pb-5">
        <!-- Product Item 1: Artisan Handcrafted Earrings with Hover Magnifier -->
        <div class="col-12 col-md-6">
          <div class="shop-card bg-white p-3 shadow-sm border-0">
            <div class="shop-img-wrapper overflow-hidden bg-light d-flex align-items-center justify-content-center position-relative amazon-lens-container" 
                 (mousemove)="onZoomMove($event)" (mouseleave)="onZoomLeave()" style="height: 45vh; background-color: #FAF9F6 !important; cursor: zoom-in;">
              <img src="image/Irene-5.jpg" class="w-100 h-100 object-fit-contain amazon-zoom-image" alt="Handcrafted artisan earrings">
              <span class="position-absolute top-3 start-3 badge bg-dark rounded-0 text-uppercase small ls-2" style="font-size: 0.6rem; letter-spacing: 1px;">Handmade</span>
            </div>
            <div class="mt-4 px-2">
              <div class="d-flex justify-content-between align-items-baseline">
                <h3 class="serif h4 mb-1">Artisan Handcrafted Earrings</h3>
                <span class="serif text-dark fw-bold fs-5">£45</span>
              </div>
              <p class="text-muted small mb-3">Individually sculpted botanical-themed earrings crafted manually from specialized premium clays.</p>
              <button class="btn btn-dark w-100 rounded-0 py-2 text-uppercase small fw-bold tracking-wider fs-7" style="font-size: 0.75rem; letter-spacing: 2px;">
                Add to Art Bag
              </button>
            </div>
          </div>
        </div>

        <!-- Product Item 2: Premium Painting Option with Hover Magnifier -->
        <div class="col-12 col-md-6">
          <div class="shop-card bg-white p-3 shadow-sm border-0">
            <div class="shop-img-wrapper overflow-hidden bg-light d-flex align-items-center justify-content-center position-relative amazon-lens-container" 
                 (mousemove)="onZoomMove($event)" (mouseleave)="onZoomLeave()" style="height: 45vh; background-color: #FAF9F6 !important; cursor: zoom-in;">
              <img src="image/Irene-6.jpg" class="w-100 h-100 object-fit-contain amazon-zoom-image" alt="Boutique art print item">
              <span class="position-absolute top-3 start-3 badge bg-dark rounded-0 text-uppercase small ls-2" style="font-size: 0.6rem; letter-spacing: 1px;">Limited Edition</span>
            </div>
            <div class="mt-4 px-2">
              <div class="d-flex justify-content-between align-items-baseline">
                <h3 class="serif h4 mb-1">Reflections of Nature Landscape</h3>
                <span class="serif text-dark fw-bold fs-5">£180</span>
              </div>
              <p class="text-muted small mb-3">Signed limited edition print mounted and framed beautifully inside organic light oak frames.</p>
              <button class="btn btn-dark w-100 rounded-0 py-2 text-uppercase small fw-bold tracking-wider fs-7" style="font-size: 0.75rem; letter-spacing: 2px;">
                Add to Art Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CollectionComponent {
  onZoomMove(event: MouseEvent) {
    const container = event.currentTarget as HTMLElement;
    const img = container.querySelector('.amazon-zoom-image') as HTMLImageElement;
    if (!img) return;
    const rect = container.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = 'scale(1.8)';
  }

  onZoomLeave() {
    window.document.querySelectorAll('.amazon-zoom-image').forEach((el) => {
      (el as HTMLElement).style.transform = 'scale(1)';
      (el as HTMLElement).style.transformOrigin = 'center center';
    });
  }
}
