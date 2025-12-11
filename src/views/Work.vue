<template>
  <div class="work-page" data-aos="fade-up">
    <h1>My Work</h1>
    <p>
      My latest web design projects and see how we can help bring your ideas to
      life.
    </p>
  </div>

  <div class="selec" data-aos="fade-up">
    <div
      class="select-work"
      v-for="(work, index) in works"
      :key="work.title"
      data-aos="zoom-in"
      :data-aos-delay="`${index * 100}`"
    >
      <div class="image-container">
        <img :src="work.image" :alt="work.title" />
        <div class="select-1">
          <div class="select-content">
            <h2>{{ work.title }}</h2>
            <p>{{ work.part }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic here
import { ref, onMounted } from "vue";

// Use ES modules to import images
import img1 from "../assets/workPic-1.jpg";
import img2 from "../assets/workPic-2.jpg";
import img3 from "../assets/workPic-3.jpg";
import img4 from "../assets/workPic-4.jpg";

const works = ref([
  {
    image: img1,
    title: "Space",
    part: "WEB DESIGN",
  },
  {
    image: img2,
    title: "Nova",
    part: "WEB DESIGN",
  },
  {
    image: img3,
    title: "Sonic",
    part: "WEB DESIGN",
  },
  {
    image: img4,
    title: "Solar",
    part: "WEB DESIGN",
  },
]);

const fadeInDirective = {
  mounted(el) {
    el.classList.add("fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            observer.unobserve(el); // Only animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  },
};

defineExpose({ fadeInDirective });
</script>

<style scoped>
.work-page {
  margin-top: 8rem;
  /* padding: 30px 20px; */
  /* min-height: 100vh; */
  background-color: #0e0e0e;
  color: #edd6b6;
  text-align: center;
  align-items: center;
}

.work-page h1 {
  font-size: 96px;
  line-height: 110%;
  /* font-family: "Satoshi Light", "Satoshi Light Placeholder", sans-serif; */
  margin-bottom: 1rem;
  text-align: center;
  color: rgb(218 197 167);
  font-weight: 400;
}

.work-page p {
  font-size: 20px;
  line-height: 160%;
  text-align: center;
  width: 100%;
  max-width: 500px;
  opacity: 0.7;
  font-weight: 400;
  padding-bottom: 18px;
  /* font-family: "Chillax Light", "Chillax Light Placeholder", sans-serif; */
  margin: 0 auto;
}

.selec {
  display: grid;
  gap: 32px;
  grid-auto-rows: minmax(0, 1fr);
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  height: min-content;
  justify-content: center;
  padding: 30px 40px;
  margin-bottom: 4rem;
  flex: 0 0 auto;
}

/* Image Container */
.image-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
}

.select-work {
  width: 100%;
  max-width: 600px;
  text-align: center;
}

.select-work img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.select-1 {
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 24px;
  height: min-content;
}

/* Content Overlay */
.select-content {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(30px);
  z-index: 1;
  border: solid 1px #aca29633;
  background: #2a2723;
  padding: 12px 16px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.9s ease-out, transform 0.9s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .selec {
    padding: 10px;
    gap: 10px;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    /* gap: 16px; */
  }

  .select-1 {
    padding: 16px;
  }

  .select-content {
    padding: 10px;
  }
}
</style>
