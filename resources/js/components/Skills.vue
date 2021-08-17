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
              <p>Whether architecting new applications or improving upon what you already have, I am here to help to
                  design a stable, modern, and maintainable system that'll last for years to come.</p>
          </div>
          <div class="feature col">
              <h2>Develop</h2>
              <p>I practice clean code, SOLID, and TDD. You can be assured that all code developed for your application
                  will be robust and secure.</p>
          </div>
          <div class="feature col">
              <h2>Maintain</h2>
              <p>Even computers need a little oil. If you have legacy code but no one understands it, I can help
              make sense of your old software and add those delayed, needed features.</p>
          </div>

      </div>
      <div class="row row-cols-1 row-cols-lg-3">
          <div class="feature col">
              <h2>DevOps</h2>
              <p>DevOps is a concept more than a practice. Every company is different and I can help understand your
              business and develop your next automated SDLC workflow to get your projects back on track.</p>
          </div>
          <div class="feature col">
              <h2>Data</h2>
              <p>You can't have a useful application without a database supporting it. I know many different DB
                  management systems and can use your big data appropriately. Whether integrating a database or building
                  a new one, no database is too difficult.</p>
          </div>
          <div class="feature col">
              <h2>Training</h2>
              <p>IT is hard. Let me help train your staff on a new piece of software, a new process, or Agile
                  development.</p>
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
