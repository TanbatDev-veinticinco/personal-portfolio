<template>
  <div class="hero-page">
    <div class="hero-img">
      <img src="../assets/erika.png" alt="" />
    </div>
    <div class="hero-text">
      <h1>
        Web Designer <br />
        & Developer
      </h1>
      <h4>
        Premium Web Design, Development, and SEO <br />
        services to help your business stand out.
      </h4>
      <div class="serv">
        <a href="#" class="di-aro"> <i class="fa-solid fa-arrow-down"></i></a>
        <h5>MY SERVICES</h5>
      </div>
    </div>
  </div>

  <div class="my-services">
    <div class="serv-col  animate__animated  animate__fadeInLeft" >
      <p style="opacity: 0.5">01</p>
      <h2>WEB DESIGN</h2>
      <h5>
        Visually stunning web designs that captivate your audience by blending
        your brand voice and customer needs.
      </h5>
      <a
        href="#"
        style="
          display: flex;
          gap: 0px 20px;
          text-decoration: none;
          align-items: center;
        "
        class="hover-link"
      >
        <div class="di-arr"><i class="fa-solid fa-arrow-down arrow"></i></div>
        <h6>ABOUT WEB DESIGN</h6>
      </a>
      <!-- <a href="#" class="serv-arr">
        <i class="fa-solid fa-arrow-down arrow"></i>
        <span class="material-symbols-outlined arrow"> arrow_upward </span>
        <h6>ABOUT WEB DESIGN</h6>
      </a> -->
    </div>
    <div class="serv-col animate__animated animate__fadeInDown" data-aos="fade-right" >
      <p style="opacity: 0.5">02</p>
      <h2>DEVELOPMENT</h2>
      <h5>
        Get custom web development solutions that are tailored to your
        specifications, designed to deliver a flawless user experience.
      </h5>
      <a
        href="#"
        style="
          display: flex;
          gap: 0px 20px;
          text-decoration: none;
          align-items: center;
        "
        class="hover-link"
      >
        <div class="di-arr"><i class="fa-solid fa-arrow-down arrow"></i></div>
        <h6>ABOUT DEVELOPMENT</h6>
      </a>
      <!-- <a href="#" class="serv-arr">
        <i class="fa-solid fa-arrow-down arrow"></i>
        <span class="material-symbols-outlined arrow"> arrow_upward </span>
        <h6>ABOUT DEVELOPMENT</h6>
      </a> -->
    </div>
    <div class="serv-col animate__animated animate__fadeInRight"  >
      <p style="opacity: 0.5">03</p>
      <h2>CONTENT & SEO</h2>
      <h5>
        Proven SEO strategies that enhance your online performance, bringing you
        to the forefront of organic search results.
      </h5>
      <a
        href="#"
        style="
          display: flex;
          gap: 0px 20px;
          text-decoration: none;
          align-items: center;
        "
        class="hover-link"
      >
        <div class="di-arr"><i class="fa-solid fa-arrow-down arrow"></i></div>
        <h6>ABOUT CONTENT & SEO</h6>
      </a>
      <!-- <a href="#" class="serv-arr">
        <i class="fa-solid fa-arrow-down arrow"></i>
        <span class="material-symbols-outlined arrow"> arrow_upward </span>
        <h6>ABOUT SEO</h6>
      </a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroPage",
  components: {},
};
</script>

<style scoped>
.hero-page {
  justify-self: center;
}

.hero-img img {
  width: 500px;
  display: block;
  margin: 0 auto;
  /* max-width: 100%; */
  /* min-width: 500px; */
  justify-content: center;
  padding-top: 50px;
  align-items: center;
  align-content: center;
  justify-self: center;
}

.hero-text {
  text-align: center;
}

.hero-text h1 {
  font-size: 120px;
  font-family: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI",
    "Roboto, Oxygen, Ubuntu, Cantarell, " Open Sans ", Helvetica Neue",
    sans-serif;
  font-weight: 100;
}

.hero-text h4 {
  font-size: 25px;
  font-weight: 100;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 10px 0px;
}

.di-aro {
  border: solid #aca29633 1px;
  border-radius: 50%;
  /* padding: 10px; */
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.di-aro:hover {
  background-color: #23211e;
}

.fa-solid,
.fas {
  font-weight: 600;
  font-size: 18px;
}
.serv {
  display: flex;
  justify-content: center;
  gap: 0 30px;
  align-items: center;
  padding: 10px 0;
}

.serv h5 {
  letter-spacing: 1px;
  font-size: 15px;
  font-weight: 100;
}

.my-services {
  align-items: flex-start;
  display: flex;
  flex: none;
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  /* grid-template-columns: 1fr 1fr 1fr; */
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  gap: 32px;
  height: min-content;
  justify-self: flex-start;
  padding: 40px 40px;
  align-items: center;
  align-content: center;
}

.serv-col {
  border: solid  #343230 1px;
  border-radius: 3px;
  display: flex;
  flex: 1 0 0px;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  gap: 5px;
  height: min-content;
  padding: 48px;
  background: #181716;
}

.serv-col h2 {
  font-weight: 100;
  font-size: 30px;
  padding: 15px 0px;
}

.serv-col h5 {
  font-size: 16px;
  font-weight: 100;
  padding-bottom: 15px;
}

.arrow {
  transform: rotate(222deg);
  font-size: 18px;
  padding: 5px;
  transition: 0.5s ease-in-out;
}

.hover-link:hover .arrow {
    transform: rotate(270deg);
}

.di-arr {
  border: solid #aca29633 1px;
  border-radius: 50%;
  padding: 8px 12px;
  height: 40px;
  width: 40px;
  gap: 32px;
  display: flex;
  overflow: visible;
  position: relative;
  justify-content: center;
  align-items: center;
}


.serv-arr {
  display: flex;
  align-items: center;
  gap: 0px 20px;
  text-decoration: none;
  padding: 10px 0px;
}

.serv-arr h6 {
  font-size: 15px;
}

@media (max-width: 768px) {
  .hero-text h4 {
    font-size: 15px;
  }

  .hero-img img {
    width: 250px;
    margin: auto 0;
  }

  .hero-text h1 {
    font-size: 50px;
  }

  .my-services {
    flex-direction: column;
    padding: 40px 16px;
  }

  .serv {
    gap: 0px 10px;
  }
}

@media  (max-width: 991px) {
  .serv-col {
    flex: none;
    padding: 40px;
    width: 100%;
  }

  .my-services {
    flex-wrap: nowrap;
    flex-direction: column;
  }
}

</style>
