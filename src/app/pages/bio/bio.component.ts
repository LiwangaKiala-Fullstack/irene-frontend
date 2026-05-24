import { Component } from '@angular/core';

@Component({
  selector: 'app-bio',
  standalone: true,
  template: `
    <section class="container-fluid py-5 px-lg-5" style="background: #FCFAF7; min-height: 100vh; padding-top: 140px !important;">
      <div class="row align-items-center py-5">
        
        <!-- Left Column: Biography Narrative Essay -->
        <div class="col-12 col-lg-6 pe-lg-5 mb-5 mb-lg-0">
          <span class="text-uppercase small willow ls-5 d-block mb-3">About the Artist</span>
          <h2 class="serif display-3 fw-light mb-4">Irene Caboni</h2>
          <p class="lead text-dark serif fst-italic mb-4" style="line-height: 1.6; opacity: 0.85;">
            "Art is a vehicle for meaningful connection—a way to map human feelings onto paper."
          </p>
          <p class="text-secondary small mb-4" style="line-height: 1.8;">
            Based in London, Irene is a fine artist, illustrator, and passionate instructor. Specializing in watercolours and detailed line inks, her work focuses on delicate compositions that express profound emotion, nature landscapes, architectural mural design, and narrative illustration layouts.
          </p>
          <div class="border-start border-secondary border-2 ps-3 mt-4">
            <span class="small fw-bold text-uppercase d-block tracking-wider">Public & Private Murals</span>
            <span class="small text-muted">Executing large-scale spatial installations designed to transform community spaces.</span>
          </div>
        </div>
        
        <!-- Right Column: Manifesto Fine Art Canvas Frame -->
        <div class="col-12 col-lg-6">
          <div class="manifesto-frame bg-white p-4 shadow-sm text-center">
            <div class="bg-light d-flex align-items-center justify-content-center text-dark" style="height: 60vh; background-color: #FAF9F6 !important;">
              <img src="image/Irene-7.jpg" class="w-100 h-100 object-fit-contain" alt="Mural project in progress">
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class BioComponent {}
