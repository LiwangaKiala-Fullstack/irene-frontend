import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="container-fluid py-5 px-lg-5" style="background: #FCFAF7; padding-top: 140px !important; min-height: 100vh;">
      <div class="row align-items-center py-5 justify-content-center">
        
        <!-- Left Column: Streamlined Premium Artist Statement Text -->
        <div class="col-12 col-lg-6 pe-lg-5 mb-5 mb-lg-0">
          <span class="text-uppercase small willow ls-5 d-block mb-3 fw-bold font-monospace" style="font-size: 0.65rem; letter-spacing: 3px;">Artist Biography</span>
          <h2 class="serif display-3 fw-light mb-4 text-dark">Irene Caboni</h2>
          
          <!-- Verbatim Paragraph Matrix -->
          <div class="artist-essay-container d-flex flex-column gap-3 text-secondary small" style="line-height: 1.8; font-family: sans-serif; font-size: 0.85rem; text-align: justify;">
            <p class="lead serif fst-italic text-dark mb-2" style="line-height: 1.6; opacity: 0.9;">
              Irene Caboni is a visual artist whose practice explores the emotional landscape of human experience through painting, drawing, and interdisciplinary creative work. Her work navigates the intersection between inner worlds and external realities, using colour, gesture, and form as tools to translate sensation into visual language.
            </p>
            <p>
              Working intuitively, Caboni creates pieces that balance fragility and strength, inviting viewers into spaces of reflection, ambiguity, and connection. Her visual vocabulary draws from personal memory, observation, and imagination, often blending figurative suggestion with abstraction to evoke psychological and emotional states.
            </p>
            <p>
              Caboni’s artistic process embraces experimentation and material dialogue. Layers, textures, and mark-making become traces of time and presence, allowing each work to emerge organically rather than following predetermined outcomes. This approach reflects a belief in art as both a process of discovery and a means of communication beyond words.
            </p>
            <p>
              Alongside her studio practice, Caboni is engaged in creative facilitation and community-based artistic work, supporting others in accessing creativity as a form of expression, exploration, and wellbeing.
            </p>
            <p class="fw-bold text-dark font-monospace mt-2" style="font-size: 0.75rem; letter-spacing: 0.5px;">
              Her work reflects an ongoing investigation into identity, transformation, and the quiet narratives that shape our inner and shared worlds.
            </p>
          </div>
        </div>
        
        <!-- Right Column: Premium Profile Canvas Frame Display -->
        <div class="col-12 col-lg-5 mt-2 mt-lg-0">
          <div class="manifesto-frame bg-white p-4 shadow-sm text-center border">
            <!-- 🌟 Visual Asset: Points to her verified file name irene-0 (2).jpg -->
            <div class="bg-light d-flex align-items-center justify-content-center text-dark overflow-hidden" style="height: 65vh; background-color: #FAF9F6 !important;">
              <img src="image/irene-0 (2).jpg" class="w-100 h-100 object-fit-cover" alt="Irene Caboni visual artist profile workspace presentation portrait">
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class BioComponent {}
