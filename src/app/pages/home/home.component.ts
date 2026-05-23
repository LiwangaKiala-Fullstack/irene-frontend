import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- 🎬 EDGE-TO-EDGE INTRODUCTORY HERO ACCENT -->
    <section class="vh-100 d-flex align-items-end justify-content-center text-center px-4 parallax-hero" 
             style="background-image: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url('/image/a passion for creativity.jpg'); padding-bottom: 12vh; background-size: cover !important; background-position: center center !important;">
      <div>
        <h1 class="serif mb-4" style="font-size: clamp(2.2rem, 6vw, 4.2rem); font-weight: 400; line-height: 1.2; color: #2B2B2B; text-shadow: 0 2px 15px rgba(255,255,255,0.9);">
          A Passion for <br>
          <span class="fst-italic willow">Creativity</span>
        </h1>
        <div class="d-flex justify-content-center mt-3">
          <!-- Premium RouterLink redirecting seamlessly to her Virtual Gallery route -->
          <a routerLink="/gallery" class="btn-circle-cta shadow-sm text-uppercase text-decoration-none d-flex flex-column align-items-center justify-content-center">
            <span class="btn-text-main font-monospace">Explore</span>
            <span class="btn-text-sub font-monospace">Atelier</span>
            <i class="bi bi-arrow-right mt-1 fs-6"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- 🎬 CINEMATIC CORE TRANSIT ATELIER VIDEO STREAMER -->
    <section class="container-fluid py-5 px-lg-5" style="background: #FFFFFF;">
      <div class="row mb-5 pt-4">
        <div class="col-12 text-center">
          <span class="text-uppercase small willow ls-5 d-block mb-2">Cinematic Feed</span>
          <h2 class="serif h3 fw-light text-muted">Inside the Carshalton Atelier</h2>
        </div>
      </div>
      <div class="row justify-content-center pb-5">
        <div class="col-12 col-xl-10">
          <div class="video-container bg-white p-3 shadow-sm border">
            <div class="w-100 d-flex flex-column align-items-center justify-content-center" style="height: 52vh; background-color: #FAF9F6 !important; cursor: pointer;">
              <i class="bi bi-play-circle text-dark display-3 opacity-75"></i>
              <span class="d-block text-dark small tracking-wider mt-3 text-uppercase font-monospace" style="font-size: 0.7rem; opacity: 0.6;">Stream Process Documentary (04:12)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {}
