<template>
  <div class="container px-4 py-5">
      <h2 class="pb-2 border-bottom skill-header">
          <div>Let me be your&nbsp;</div>
          <skill-carousel />
          <div>&nbsp;nerd.</div>
      </h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
              <h2>Design</h2>
              <p>Whether architecting new applications or improving upon what you already have, I am here to help to design a stable, maintainable system for years to come.</p>
          </div>
          <div class="feature col">
              <h2>Develop</h2>
              <p>I practice clean code.</p>
          </div>
          <div class="feature col">
              <h2>Maintain</h2>
              <p>Even computers need a little oil.</p>
          </div>

      </div>
      <div class="row row-cols-1 row-cols-lg-3">
          <div class="feature col">
              <h2>CI/CD</h2>
              <p>You need help integrating your applications into your Software Development Lifecycle (SDLC)?</p>
          </div>
          <div class="feature col">
              <h2>Data</h2>
              <p>Even computers need a little oil.</p>
          </div>
          <div class="feature col">
              <h2>Training</h2>
              <p>Can teach how to IT.</p>
          </div>
      </div>
  </div>

</template>

<script>
import SkillCarousel from "./SkillCarousel";

export default {
    name: 'Skills.vue',
    components: {
        SkillCarousel
    }
};
</script>

<style>
.skill-header {
    display: flex;
    justify-content: center;
    transition: all 3s ease-out;
}
</style>
