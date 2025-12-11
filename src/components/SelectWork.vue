<template>
  <div>
    <div class="work" data-aos="fade-up">
      <h2>Selected Work</h2>
      <a href="#" class="hef">
        <div class="di-arr">
          <i class="fa-solid fa-arrow-down arrow"></i>
        </div>
        <h6>SEE ALL</h6>
      </a>
    </div>

    <br /><br />

    <div class="selec" data-aos="fade-up">
      <div
        class="select-work"
        data-aos="zoom-in"
        :data-aos-delay="`${works.indexOf(work) * 100}`"
        v-for="work in works"
        :key="work.title"
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
  </div>
</template>

<script setup>
import { ref } from "vue";

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
</script>

<style scoped>
/* General Layout */
.work {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5vw;
  flex-wrap: wrap;
}

.work h2 {
  font-size: 3vw;
  font-weight: 100;
  text-align: center;
}

.work h6 {
  font-size: 1.2rem;
  font-weight: 100;
}

.hef {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 10px;
}

.hef:hover .arrow {
  transform: rotate(270deg);
  cursor: pointer;
  background-color: #23211e;
}

/* Arrow Icon */
.di-arr {
  border: solid #aca29633 1px;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.di-arr:hover {
  background-color: #23211e;
}

.arrow {
  transform: rotate(222deg);
  font-size: 18px;
  transition: 0.5s ease-in-out;
}

/* Work Grid */
.selec {
  display: grid;
  gap: 32px;
  grid-auto-rows: minmax(0, 1fr);
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  height: min-content;
  justify-content: center;
  padding: 0px 40px;
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

/* Responsive Design */
@media (max-width: 768px) {
  .work {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }

  .work h2 {
    font-size: 5vw;
  }

  .selec {
    padding: 20px;
    gap: 10px;
  }

  .select-work {
    width: 90%;
  }

  .select-content {
    padding: 10px;
  }
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

@media (max-width: 480px) {
  .work h2 {
    font-size: 6vw;
  }

  .select-work {
    width: 100%;
  }

  .select-content {
    align-items: center;
    text-align: center;
    padding: 8px;
  }
}
</style>

<!-- <template>
  <div>
    <div class="work">
      <h2>Selected Work</h2>
      <a href="#" class="hef" >
        <div class="di-arr"><i class="fa-solid fa-arrow-down arrow"></i></div>
        <h6>SEE ALL</h6>
      </a>
    </div>

    <br />
    <br />

    <div class="selec">
      <div class="select-work  animate__animated  animate__fadeInDown" v-for="work in works" :key="work.title">
        <div class="image-container">
          <img :src="work.image" alt="" />
          <div style="padding: 0px">
            <div class="select-content">
              <h2>{{ work.title }}</h2>
              <p>{{ work.part }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
export default {
  name: "SelectWork",
  data() {
    return {
      works: [
        {
          image: require("../assets/workPic-1.jpg"),
          title: "Space",
          part: "WEB DESIGN",
        },
        {
          image: require("../assets/workPic-2.jpg"),
          title: "Nova",
          part: "WEB DESIGN",
        },
        {
          image: require("../assets/workPic-3.jpg"),
          title: "Sonic",
          part: "WEB DESIGN",
        },
        {
          image: require("../assets/workPic-4.jpg"),
          title: "Solar",
          part: "WEB DESIGN",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* General Layout */
.work {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5vw;
  flex-wrap: wrap;
}

.work h2 {
  font-size: 3vw;
  font-weight: 100;
  text-align: center;
}

.work h6 {
  font-size: 1.2rem;
  font-weight: 100;
}

.hef {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 10px;
}

.hef:hover .arrow{
  transform: rotate(270deg);
  cursor: pointer;
  background-color: #23211E;
}

/* Arrow Icon */
.di-arr {
  border: solid #aca29633 1px;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.di-arr:hover {
  background-color: #23211E;
}

.arrow {
  transform: rotate(222deg);
  font-size: 18px;
  transition: 0.5s ease-in-out;
}


/* Work Grid */
.selec {
  display: grid;
  flex: none;
  gap: 32px;
  grid-auto-rows: minmax(0, 1fr);
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  height: min-content;
  justify-content: center;
  padding: 0px 40px;
}

/* Image Container (for Absolute Positioning) */
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
  /* padding: 20px; */
  height: auto;
  object-fit: cover;
}

/* Select Content (Positioned on Image) */
.select-content {
  position: absolute;
  /* top: -10px; */
  bottom: 30px;
  left: 0;
  width: 100%;
  backdrop-filter: blur (30px);
  z-index: 1;
  border: 1px solid;
  background: #2a2723;
  padding: 20px 16px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  border: solid 1px #aca29633;
  border-radius: 2px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .work {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }

  .work h2 {
    font-size: 5vw;
  }

  .selec {
    padding: 20px;
    gap: 10px;
  }

  .select-work {
    width: 90%;
  }

  .select-content {
    padding: 10px;
  }
}

@media (max-width: 809px) {
  .selec {
    /* align-content: flex-start; */
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 16px;
    /* justify-content: flex-start; */
  }
}

@media (max-width: 480px) {
  .work h2 {
    font-size: 6vw;
  }

  .select-work {
    width: 100%;
  }

  .select-content {
    /* flex-direction: column; */
    align-items: center;
    text-align: center;
    padding: 8px;
  }
}
</style> -->
