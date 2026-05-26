import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface CourseBlock {
  id: string;
  title: string;
  price: string;
  duration: string;
  capacityText: string;
  seatsLeft: number;
  levelBadge: string;
  description: string;
  imageSrc: string;
  location: string;
  syllabus: string[];
}

@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="container-fluid py-5 px-lg-5" style="background: var(--soft-wash-bg); min-height: 100vh; padding-top: 150px !important;">
      
      <!-- 🏛️ LIVE COHORT SYSTEM BROADCAST COUNTER -->
      <div class="row justify-content-center mb-5">
        <div class="col-12 col-xl-11">
          <div class="bg-dark p-4 text-white shadow-lg d-flex align-items-center justify-content-between gap-4 flex-wrap border-start border-warning border-4" style="background-color: #1C1C1C !important;">
            <div class="d-flex align-items-center gap-3 flex-wrap">
              <span class="badge bg-warning text-dark font-monospace rounded-0 px-2 py-1 small fw-bold" style="font-size: 0.65rem; letter-spacing: 1px;">STUDIO SYSTEM FEED</span>
              <span class="font-monospace small m-0 text-white-50" style="font-size: 0.82rem; letter-spacing: 0.5px;">
                Registration tracking active for summer term pipelines. Select a masterclass course card below to inspect interactive syllabus blueprints.
              </span>
            </div>
            <div class="font-monospace small text-warning fw-bold text-nowrap" style="font-size: 0.75rem; letter-spacing: 1px;">
              <i class="bi bi-circle-fill me-2 anim-pulse text-danger"></i>COHORT ENROLLMENT LIVE
            </div>
          </div>
        </div>
      </div>

      <!-- 🏛️ EDITORIAL TITLE -->
      <div class="row mb-5">
        <div class="col-12 text-center">
          <span class="text-uppercase small willow ls-5 d-block mb-2 font-monospace" style="font-size: 0.65rem; letter-spacing: 4px;">Fine Art Instruction</span>
          <h2 class="serif display-4 fw-light text-dark mb-3">The Creative Atelier Tracks</h2>
          <div class="mx-auto border-bottom border-dark border-opacity-10" style="width: 50px; height: 1px;"></div>
        </div>
      </div>
      
      <!-- 🪐 HIGH-END INTERACTIVE SYLLABUS INSPECTION GRID MATRIX -->
      <div class="row g-5 justify-content-center px-xl-5 pb-5">
        <div *ngFor="let course of classes" class="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-between premium-course-entry">
          <div class="booking-card bg-white shadow border p-3 d-flex flex-column justify-content-between overflow-hidden position-relative" 
               [class.selected-academy-card]="selectedTrackId === course.id"
               style="height: 82vh; transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);">
            
            <!-- Presentation Frame Image Header with Level Badge -->
            <div class="position-relative overflow-hidden w-100" style="height: 32vh; background-color: #FAF9F6;">
              <img [src]="course.imageSrc" class="w-100 h-100 object-fit-cover academy-img-hover" [alt]="course.title">
              <span class="position-absolute top-3 start-3 badge bg-dark rounded-0 text-uppercase tracking-wider font-monospace" style="font-size: 0.55rem; letter-spacing: 1px; padding: 0.5em 0.8em;">
                {{ course.levelBadge }}
              </span>
            </div>

            <!-- Main Course Information Blueprint Base -->
            <div class="p-3 flex-grow-1 d-flex flex-column justify-content-between mt-2">
              <div>
                <div class="d-flex justify-content-between align-items-baseline mb-2">
                  <h3 class="serif h4 fw-light mb-0 text-dark" style="font-size: 1.3rem;">{{ course.title }}</h3>
                  <span class="serif text-dark fw-bold tracking-wider border-bottom border-dark pb-1" style="font-size: 1.35rem !important;">{{ course.price }}</span>
                </div>
                
                <!-- Linear Dynamic Capacity Progress Track -->
                <div class="my-3 font-monospace" style="font-size: 0.65rem; letter-spacing: 0.2px;">
                  <div class="d-flex justify-content-between text-muted mb-1">
                    <span>{{ course.capacityText }}</span>
                    <span [class.text-danger]="course.seatsLeft <= 2" class="fw-bold">{{ course.seatsLeft }} Seats Available</span>
                  </div>
                  <div class="progress rounded-0" style="height: 3px; background: rgba(0,0,0,0.06);">
                    <div class="progress-bar bg-dark rounded-0" role="progressbar" [style.width.%]="(10 - course.seatsLeft) * 10"></div>
                  </div>
                </div>

                <!-- Toggle Panel Trigger: Switch between descriptions and curriculum plans dynamically -->
                <p *ngIf="selectedTrackId !== course.id" class="text-secondary small mb-3" style="font-size: 0.85rem; line-height: 1.6; font-family: sans-serif; text-align: justify; height: 12vh; overflow: hidden;">
                  {{ course.description }}
                </p>

                <!-- Live Dynamic Course Syllabus Map Rendered instantly on single clicks -->
                <div *ngIf="selectedTrackId === course.id" class="bg-light p-3 border mb-3 animation-fade-grid-entry font-monospace" style="height: 12vh; overflow-y: auto;">
                  <span class="text-uppercase text-muted d-block mb-2 fw-bold" style="font-size: 0.58rem; letter-spacing: 1px;">Syllabus Blueprints:</span>
                  <ul class="list-unstyled m-0 p-0 d-flex flex-column gap-1" style="font-size: 0.68rem; line-height: 1.4;">
                    <li *ngFor="let step of course.syllabus" class="text-dark"><i class="bi bi-chevron-right me-1 text-secondary"></i>{{ step }}</li>
                  </ul>
                </div>

                <div class="text-start mb-2">
                  <button (click)="toggleSyllabus(course.id)" class="btn btn-link p-0 text-dark font-monospace text-uppercase small fw-bold tracking-wider text-decoration-underline shadow-none" style="font-size: 0.62rem;">
                    {{ selectedTrackId === course.id ? 'Hide Syllabus View ↩' : 'Inspect Syllabus Track ⟶' }}
                  </button>
                </div>
              </div>
              
              <!-- 🌟 Core CTA Layout Block Wrapper containing high contrast circle wheels -->
              <div class="border-top pt-3 mt-2 d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column text-muted font-monospace" style="font-size: 0.65rem; line-height: 1.5;">
                  <span><i class="bi bi-geo-alt-fill me-1 text-danger"></i>{{ course.location }}</span>
                  <span class="mt-1"><i class="bi bi-clock-fill me-1"></i>{{ course.duration }}</span>
                </div>
                
                <a routerLink="/contact" class="btn-circle-cta text-uppercase text-decoration-none d-flex flex-column align-items-center justify-content-center text-center shadow">
                  <span class="font-monospace fw-bold" style="font-size: 0.55rem; letter-spacing: 0.5px;">Book</span>
                  <i class="bi bi-calendar-check fs-6 mt-1"></i>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class WorkshopsComponent {
  selectedTrackId: string | null = null;

  // 🌟 Premium 3-Track Masterclass Educational Data with Integrated Multi-Week Curriculums
  classes: CourseBlock[] = [
    {
      id: 'watercolour-party',
      title: 'Watercolour Parties',
      price: '£45',
      duration: '3 Hour Session',
      capacityText: 'Studio Masterclass Block',
      seatsLeft: 3,
      levelBadge: 'Social / Beginners',
      description: 'Discover the organic beauty of fluid pigment washes, canvas texture wetting rules, and botanical blending shapes in a social, conversational studio workspace with premium linen cardstock provisions included.',
      imageSrc: 'image/Irene-1.jpg',
      location: 'Carshalton Studio',
      syllabus: ['Wetting & stretched linen prep', 'Fluid pigment bleed mechanics', 'Botanical floral composition profiles']
    },
    {
      id: 'ink-illustration',
      title: 'Ink & Illustration',
      price: '£35',
      duration: '4-Week Course Track',
      capacityText: 'Weekly Evening Cohorts',
      seatsLeft: 2,
      levelBadge: 'Intermediate Study',
      description: 'Focus exclusively on capturing fine architectural ink lines, detailed cross-hatching gradient shadows, structural botanical blueprint rules, and elegant fantasy illustration layout co-ordinates.',
      imageSrc: 'image/Irene-2.jpg',
      location: 'London Guild Workspace',
      syllabus: ['Week 1: Fine mapping technical pen calibration', 'Week 2: Cross-hatching depth gradients', 'Week 3: Composition silhouettes & borders', 'Week 4: Final narrative presentation design']
    },
    {
      id: 'studio-mentoring',
      title: 'Studio Mentoring',
      price: '£120',
      duration: 'Custom Schedule',
      capacityText: '1-on-1 Intensive Track',
      seatsLeft: 1,
      levelBadge: 'Elite Portfolio Block',
      description: 'A completely tailored private instructional masterclass module built explicitly around your portfolio strategy goals, canvas preparation methods, large scale mural planning, and creative art wellbeing.',
      imageSrc: 'image/Irene-9.jpg',
      location: 'Private Studio Space',
      syllabus: ['Custom canvas tailoring & sizing setup', 'Strategic large-scale mural geometric mapping', 'Wellbeing facilitation & creative block cures']
    }
  ];

  toggleSyllabus(id: string) {
    this.selectedTrackId = this.selectedTrackId === id ? null : id;
  }
}
