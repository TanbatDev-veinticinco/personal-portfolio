<template>
  <div>
    <div style="background-color: #22201f">
      <div class="line"></div>

      <div class="marquee-container">
        <div class="marquee-content">
          <div class="marquee-item" v-for="n in 40" :key="n">
            <p>LET'S TALK</p>
            <p>+++</p>
          </div>
        </div>
      </div>

      <div class="line"></div>
    </div>

    <div class="project" data-aos="fade-up">
      <div class="project-inner" data-aos="fade-up" data-aos-delay="200">
        <p class="pro">project in mind?</p>
        <p class="big-text">let's make your <br />Website shine</p>
        <p class="desc">
          Premium web design, development, and SEO <br />
          services to help your business stand out.
        </p>
        <a href="#" class="hover">
          <span>GET IN TOUCH</span>
          <i class="fa-solid fa-arrow-down arrow"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LetTalk",
};
</script>

<style scoped>
.line {
  height: 1px;
  width: 100%;
  background-color: rgb(218 197 167 / 14%);
  opacity: 1;
}

/* ✅ Modern infinite marquee styles */
.marquee-container {
  overflow: hidden;
  white-space: nowrap;
  background-color: #22201f;
  padding: 10px 0;
}

.marquee-content {
  display: flex;
  animation: scroll-left 9s linear infinite;
  gap: 50px;
}

.marquee-item {
  display: flex;
  gap: 30px;
  align-items: center;
  white-space: nowrap;
  color: rgb(218 197 167);
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.project {
  background-color: #22201f;
  padding: 90px 0;
  text-align: center;
}

.project-inner {
  padding-bottom: 70px;
}

.pro {
  font-family: "Satoshi Regular", sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1.5px;
  color: rgb(218 197 167 / 96%);
  text-transform: uppercase;
  padding: 20px 0;
  opacity: 0.8;
}

.big-text {
  font-size: 128px;
  font-weight: 100;
  line-height: 110%;
  padding-bottom: 20px;
}

.desc {
  font-size: 20px;
  line-height: 160%;
  color: rgb(218 197 167);
  opacity: 0.9;
  padding-bottom: 45px;
}

/* ✅ Center the text and arrow properly */
.hover {
  text-decoration: none;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid rgb(218 197 167 / 14%);
  background-color: #dac5a7fa;
  border-radius: 2px;
  max-width: fit-content;
  margin: auto;
  transition: all 0.3s ease-in-out;
}

.hover span {
  color: black;
  font-weight: 500;
}

.arrow {
  transform: rotate(222deg);
  font-size: 18px;
  color: black;
  transition: 0.5s ease-in-out;
}

.hover:hover .arrow {
  transform: rotate(270deg);
}

/* ✅ Responsive tweaks */
@media (max-width: 768px) {
  .big-text {
    font-size: 80px;
  }
}
</style>
