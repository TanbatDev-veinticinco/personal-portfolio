<template>
  <div class="about-page" data-aos="fade-up" >
    <div class="name-container left-name">
      <p>ALATISHE</p>
    </div>
    <div class="image-container">
      <img src="../assets/erika.png" alt="profile" class="profile-image" />
    </div>
    <div class="name-container right-name">
      <p>OMOLAYO</p>
    </div>
  </div>

  <div class="about-1"  data-aos="fade-up" >
    <div class="talks">
      <h2>
        A website that leaves <br />
        a lasting impression!
      </h2>
    </div>
    <div class="talk">
      <p>
        Hi, I'm Alatishe Omolayo - a freelancer specializing in premium web
        design, development, and SEO services. I'm passionate about creating
        unique and effective solutions for my clients, and I bring a personal
        touch to every project. Let's work together to bring your vision to
        life!
      </p>
      <div class="brand">
        <div class="brand-1">
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
        </div>
        <div class="brand-1">
          <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
        </div>
        <div class="brand-1">
          <a href="#"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <div class="brand-1">
          <a href="#"><i class="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      const leftName = document.querySelector(".left-name p");
      const rightName = document.querySelector(".right-name p");

      // const translateAmount = Math.min(scrollY * 0.01, 50);
      // leftName.style.transform = `translateX(-${translateAmount}px)`;
      // rightName.style.transform = `translateX(${translateAmount}px)`;
      leftName.style.transform = `translateX(${scrollY * -0.02}px)`;
      rightName.style.transform = `translateX(${scrollY * 0.02}px)`;
    },
  },
};
</script>

<style scoped>
.about-page {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 100%;
  gap: 20px;
  overflow: hidden;
  background-color: #0d0d0d;
  min-height: 60vh;
  position: relative;
}

.name-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.name-container p {
  color: rgba(218, 197, 167, 0.9);
  font-family: "Gambetta Light Italic", serif;
  font-size: 144px;
  line-height: 1;
  font-weight: 400;
  font-style: oblique;
  opacity: 0.4;
  white-space: nowrap;
  -webkit-transition: all 0.3s ease-out;
  transition: transform 0.2s ease-out;
  text-align: center;
  will-change: transform;
}

.image-container {
  width: 320px;
  max-width: 90vw;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
}

.profile-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.about-page::before,
.about-page::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 1;
  pointer-events: none;
}

.about-page::before {
  left: 1;
  /* background: linear-gradient(to right, #0d0d0d, transparent); */
}

.about-page::after {
  right: 1;
  /* background: linear-gradient(to left, #0d0d0d, transparent); */
}

.about-1 {
  display: flex;
  flex-direction: row;
  gap: 80px;
  padding: 0px 48px;
  max-width: 1200px;
  justify-content: center;
  margin: auto;
  align-items: flex-start;
  padding-bottom: 90px;
}

.brand {
  display: flex;
  gap: 15px 10px;
  padding: 7px 7px;
  flex-wrap: wrap;
  justify-content: center;
}

.brand-1 {
  display: flex;
  justify-content: center;
  gap: 25px 0px;
  border: solid 1px;
  border-radius: 500px;
  padding: 10px;
  background-color: #181716;
}

.brand-1 i {
  font-size: 20px;
}

.talk {
  align-items: flex-start;
  display: flex;
  flex: 1 0 0px;
  flex-direction: column;
  gap: 32px;
  height: min-content;
  justify-content: flex-start;
  padding: 0;
  position: relative;
}

.talk p {
  font-size: 18px;
  font-weight: 400;
  line-height: 160%;
  font-family: "Chillax Light", sans-serif;
  color: rgb(218 197 167);
}

.talks h2 {
  font-size: 40px;
  font-weight: 400;
  line-height: 120%;
  font-family: "Satoshi Light", sans-serif;
}

/* Responsive for small screens */
@media (max-width: 768px) {
  .about-page {
    flex-direction: column;
    padding: 50px 24px;
    /* gap: 16px; */
    text-align: center;
    align-items: center;
  }

  .name-container {
    order: 1;
  }

  .image-container {
    order: 2;
    width: 220px;
  }

  .name-container p {
    font-size: 3rem !important;
    opacity: 0.6;
    transform: none !important;
  }

  .about-1 {
    flex-direction: column;
    padding: 0 24px;
    gap: 40px;
    align-items: center;
    text-align: center;
    margin-bottom: 3rem;
  }

  .talks h2,
  .talk p,
  .brand {
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .talk {
    align-items: center;
  }
}

@media (max-width: 991px) {
  .name-container p{
    font-size: 6.5rem;
  }

}
</style>

<!-- <template>
  <div class="about-page">
    <div class="name-container left-name">
      <p>ALATISHE</p>
    </div>
    <div class="image-container">
      <img src="../assets/erika.png" alt="profile" class="profile-image" />
    </div>
    <div class="name-container right-name">
      <p>OMOLAYO</p>
    </div>
  </div>

  <div class="about-1">
    <div class="talks">
      <h2>
        A website that leaves <br />
        a lasting impression!
      </h2>
    </div>
    <div class="talk">
      <p>
        Hi, I'm Alatishe Omolayo - a freelancer specializing in premium web
        design, development, and SEO services. I'm passionate about creating
        unique and effective solutions for my clients, and I bring a personal
        touch to every project. Let's work together to bring your vision to
        life!
      </p>
      <div class="brand">
        <div class="brand-1">
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
        </div>
        <div class="brand-1">
          <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
        </div>
        <div class="brand-1">
          <a href="#"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <div class="brand-1">
          <a href="#"><i class="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPageVue",
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      const leftName = document.querySelector(".left-name p");
      const rightName = document.querySelector(".right-name p");

      leftName.style.transform = `translateX(${scrollY * -0.02}px)`;
      rightName.style.transform = `translateX(${scrollY * 0.02}px)`;
    },
  },
};
</script>

<style scoped>
.about-page {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px;
  width: 100%;
  gap: 20px;
  overflow: hidden;
  background-color: #0d0d0d;
  min-height: 60vh;
  position: relative;
}

.name-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.name-container p {
  color: rgba(218, 197, 167, 0.9);
  font-family: "Gambetta Light Italic", serif;
  font-size: 144px;
  line-height: 1;
  font-weight: 400;
  font-style: oblique;
  opacity: 0.4;
  white-space: nowrap;
  transition: transform 0.3s ease-out;
  text-align: center;
}

.image-container {
  width: 320px;
  max-width: 90vw;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
}

.profile-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

/* Optional fade edges */
.about-page::before,
.about-page::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 1;
  pointer-events: none;
}

.about-page::before {
  left: 0;
  background: linear-gradient(to right, #0d0d0d, transparent);
}

.about-page::after {
  right: 0;
  background: linear-gradient(to left, #0d0d0d, transparent);
}

.about-1 {
  display: flex;
  flex-direction: row;
  gap: 80px;
  padding: 0px 48px;
  max-width: 1200px;
  justify-content: center;
  margin: auto;
  align-items: flex-start;
  padding-bottom: 90px;
}

.brand {
  display: flex;
  gap: 15px 10px;
  padding: 7px 7px;
  flex-wrap: wrap;
  justify-content: center;
}

.brand-1 {
  display: flex;
  justify-content: center;
  gap: 25px 0px;
  border: solid 1px;
  border-radius: 500px;
  padding: 10px;
  background-color: #181716;
}

.brand-1 i {
  font-size: 20px;
}

.talk {
  align-items: flex-start;
  display: flex;
  flex: 1 0 0px;
  flex-direction: column;
  gap: 32px;
  height: min-content;
  justify-content: flex-start;
  padding: 0;
  position: relative;
}

.talk p {
  font-size: 18px;
  font-weight: 400;
  line-height: 160%;
  font-family: "Chillax Light", sans-serif;
  color: rgb(218 197 167);
}

.talks h2 {
  font-size: 40px;
  font-weight: 400;
  line-height: 120%;
  font-family: "Satoshi Light", sans-serif;
}

/* Responsive for small screens */
@media (max-width: 809px) {
  .about-page {
    flex-direction: column;
    padding: 40px 24px;
    gap: 30px;
    text-align: center;
  }

  .name-container {
    order: 1;
  }

  .image-container {
    order: 2;
    width: 220px;
  }

  .name-container p {
    font-size: clamp(32px, 10vw, 64px);
  }

  .about-1 {
    flex-direction: column;
    padding: 0 24px;
    gap: 40px;
  }

  .talk,
  .talk h2 {
    text-align: center;
    align-items: center;
  }
}
</style> -->

<!-- <template>
  <div >
    <div class="about" style="padding: 100px 0px;">
      <div class="name">
        <p>ALATISHE</p>
      </div>
      <div class="abtt">
        <img src="../assets/erika.png" alt="" />
      </div>
      <div class="name">
        <p>OMOLAYO</p>
      </div>
    </div>
    <div class="about-1">
      <div>
        <p>
          A website that leaves <br />
          a lasting impression!
        </p>
      </div>
      <div>
        <p>
          Hi, I'm Arik Andersson - a freelancer specializing in premium web
          design, development, and SEO services. I'm passionate about creating
          unique and effective solutions for my clients, and I bring a personal
          touch to every project. Let's work together to bring your vision to
          life!
        </p>
        <div class="brand">
          <div class="brand-1">
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
          </div>
          <div class="brand-1">
            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
          </div>
          <div class="brand-1">
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
          </div>
          <div class="brand-1">
            <a href="#"><i class="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPageVue",
};
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: min-content;
  padding: 0;
  overflow: hidden;
}

.abtt {
  flex: none;
  height: min-content;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  width: 400px;
}

.abtt img {
  display: block;
  width: 100%;
  height: 100%;
  object-position: center center;
  object-fit: cover;
}

.name {
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  will-change: transform;
  opacity: 0.887427;
  transform: perspective(1200px) translateX(-7.88012px);
}

.name p {
  color: rgb(218 197 167 / 98%);
  font-family: "Gambetta Light Italic", "Gambetta Light Italic Placeholder",
    sans-serif;
  font-size: 144px;
  line-height: 95%;
  text-align: center;
  font-weight: 400;
  font-style: oblique;
  opacity: 0.5;
  letter-spacing: -1;
}

.about-1 {
  display: flex;
  flex-direction: row;
  gap: 80px;
  padding: 0px 48px;
}

.brand {
  display: flex;
  gap: 10px;
  padding: 7px 0px;
}

.brand-1 {
  border: solid 1px;
  border-radius: 50%;
  padding: 15px;
  background-color: #181716;
  /* width: 30px;
    height: 30px; */
}

.brand-1 i {
  font-size: 20px;
}
</style> -->
