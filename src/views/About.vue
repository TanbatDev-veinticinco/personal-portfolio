<template>
  <section class="content">
    <div class="about-content" data-aos="fade-up">
      <div class="about-img" data-aos="fade-left">
        <img src="../assets/erika.png" alt="" />
      </div>
      <div class="about-1" data-aos="fade-right">
        <h1>
          ALATISHE <br />
          OMOLAYO
        </h1>
        <h5>
          Delivering Premium Web Design and Development Services to Boost Your
          Online Presence.
        </h5>
        <div class="serv">
          <a href="#" class="di-aro"> <i class="fa-solid fa-arrow-down"></i></a>
          <h5>ABOUT ME</h5>
        </div>
        <div class="about-2">
          <div class="about-3">
            <p>Arik Andersson</p>
            <h2>Your Partner in Bringing Your Web Design Vision to Life</h2>
            <p>
              As a freelance web designer and developer, I bring a unique
              combination of creativity and technical expertise to every
              project. With a keen eye for design and a passion for delivering
              user-friendly web experiences, I work closely with clients to
              understand their needs and bring their vision to life.
            </p>
            <p>
              My approach is rooted in collaboration and communication, and I
              take pride in my ability to explain technical concepts in simple
              terms. Whether I'm developing a new website from scratch or
              optimizing an existing site for search engines, I always strive
              for excellence in both form and function. With a dedication to
              quality and a commitment to staying on top of the latest trends
              and technologies, I am confident in my ability to deliver
              exceptional results that exceed my clients' expectations.
            </p>
            <div>
              <img src="../assets/erikimg.png" alt="" />
            </div>
          </div>
        </div>
        <div class="social-links-grid">
          <a class="social-btn" href="#" target="_blank">
            <i class="fa-brands fa-instagram"></i>
            <span>INSTAGRAM</span>
            <span class="arrow">→</span>
          </a>
          <a class="social-btn" href="#" target="_blank">
            <i class="fa-brands fa-x-twitter"></i>
            <span>TWITTER</span>
            <span class="arrow">→</span>
          </a>
          <a class="social-btn" href="#" target="_blank">
            <i class="fa-brands fa-facebook"></i>
            <span>FACEBOOK</span>
            <span class="arrow">→</span>
          </a>
          <a class="social-btn" href="#" target="_blank">
            <i class="fa-brands fa-behance"></i>
            <span>BEHANCE</span>
            <span class="arrow">→</span>
          </a>
          <a class="social-btn" href="#" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
            <span>LINKEDLN</span>
            <span class="arrow">→</span>
          </a>
          <a class="social-btn" href="#" target="_blank">
            <i class="fa-brands fa-github"></i>
            <span>GITHUB</span>
            <span class="arrow">→</span>
          </a>
        </div>
        <div class="about-section">
          <h2>Experience</h2>
          <div class="experience-timeline">
            <div
              class="timeline-item"
              v-for="exp in experience"
              :key="exp.title"
            >
              <h3>{{ exp.title }}</h3>
              <p class="date">{{ exp.date }}</p>
              <p>{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experience = [
  // {
  //   title: "Senior Web Developer",
  //   date: "2020 - Present",
  //   description:
  //     "Leading development teams and creating innovative web solutions",
  // },
  {
    title: "Web Developer",
    date: "2023 - Present",
    description: "Developing and maintaining client websites and applications",
  },
  {
    title: "National Diploma",
    date: "2022 - 2024",
    description:
      "Earned my National Diploma in Computer Science from AAPOLY (Ijebu-Igbo).",
  },
  {
    title: "Cisco Get Connected Certificate",
    date: "2024",
    description:
      "Earned during my time at AAPOLY. Focused on the basics of digital skills, internet safety, communication, and productivity tools.",
  },
  {
    title: "Cisco ITE Certificate (Information Technology Essentials)",
    date: "2024",
    description:
      "Completed hands-on training in computer hardware, software, networking, and troubleshooting. Provided a strong technical foundation for IT support and system maintenance.",
  },
];
</script>

<style scoped>
.content {
  padding-block: 150px;
}

.about-content {
  display: flex;
  flex-direction: row;
  padding: 0px 48px;
  max-width: 1400px;
  align-items: flex-start;
  width: 100%;
  gap: 48px;
  position: relative;
}

.about-img {
  width: 500px;
  flex-shrink: 0;
  position: sticky;
  top: 48px;
  height: min-content;
  z-index: 1;
}

.about-img img {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin: 0 auto;
  display: block;
  border-radius: 8px;
}

.about-1 h1 {
  font-family: cursive;
  font-size: clamp(48px, 8vw, 128px);
  line-height: 110%;
  letter-spacing: 2px;
  color: rgb(218, 197, 167);
  font-weight: 400;
  text-align: start;
  margin-bottom: 3rem;
}

.about-1 p {
  font-size: clamp(16px, 2vw, 22px);
  line-height: 150%;
  font-weight: 400;
  text-align: start;
  opacity: 0.6;
}

.about-1 h5 {
  font-size: clamp(16px, 2vw, 22px);
  line-height: 150%;
  font-weight: 400;
  text-align: start;
  opacity: 0.6;
}

.serv {
  display: flex;
  gap: 0 30px;
  align-items: center;
  padding: 40px 0;
}

.di-aro {
  border: solid #aca29633 1px;
  border-radius: 50%;
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

.serv h5 {
  line-height: 120%;
  font-size: 13px;
  text-align: left;
  font-family: "Satoshi Regular", "Satoshi Regular Placeholder", sans-serif;
  letter-spacing: 1.5px;
  opacity: 0.8;
}

.about-2 {
  align-items: flex-start;
  display: flex;
  gap: 16px;
  height: min-content;
  padding: 0px;
  position: relative;
  width: 100%;
}

.about-3 {
  background-color: rgba(218, 197, 167, 0.05);
  border: 1px solid rgba(218, 197, 167, 0.15);
  border-radius: 2px;
  display: flex;
  flex-flow: column;
  gap: 32px;
  height: min-content;
  overflow: visible;
  padding: clamp(24px, 4vw, 48px);
  position: relative;
  width: 100%;
}

.about-3 h2 {
  font-size: clamp(24px, 3vw, 32px);
}

.about-3 img {
  display: block;
  width: 100%;
  height: auto;
  margin: 0 auto;
}

.about-section {
  margin-block: 4rem;
}

.about-section h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-card {
  background: rgba(14, 14, 14, 0.5);
  border: 1px solid rgba(225, 225, 225, 0.18);
  padding: 1.5rem;
  border-radius: 5px;
}

.experience-timeline {
  margin-top: 2rem;
}

.timeline-item {
  margin-bottom: 2rem;
  padding-left: 2rem;
  border-left: 2px solid #edd6b6;
}

.timeline-item h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.date {
  color: #aca296;
  margin-bottom: 0.5rem;
}

.social-links-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 3rem 0 2rem 0;
  background: transparent;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  background: #0e0d0c;
  border: 1.5px solid rgba(225, 225, 225, 0.18);
  border-radius: 6px;
  padding: 1.25rem 1.5rem;
  color: #edd6b6;
  font-family: "Satoshi", "Inter", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
}

.social-btn span:not(.arrow) {
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 1px;
}

.social-btn i {
  font-size: 1.4rem;
  color: #edd6b6;
  min-width: 1.4rem;
}

.social-btn .arrow {
  margin-left: auto;
  font-size: 1.3rem;
  color: #edd6b6;
  transition: transform 0.2s;
}

.social-btn:hover,
.social-btn:focus {
  background: #181715;
  border-color: #c2a97b;
  box-shadow: 0 2px 16px 0 rgba(237, 214, 182, 0.08);
}

.social-btn:hover .arrow,
.social-btn:focus .arrow {
  transform: translateX(6px);
}

@media (max-width: 900px) {
  .social-links-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
}
@media (max-width: 600px) {
  .social-links-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    gap: 1rem;
  }
  .social-btn {
    font-size: 1rem;
    padding: 1rem 1.1rem;
  }
}

/* Media Queries */
@media (max-width: 1200px) {
  .about-content {
    padding: 0px 24px;
  }

  .about-img {
    width: 400px;
  }
}

@media (max-width: 991px) {
  .content {
    padding-block: 100px;
  }

  .about-content {
    flex-direction: column;
    padding: 0px 24px;
  }

  .about-img {
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  .about-1 {
    width: 100%;
  }

  .about-1 h1 {
    text-align: center;
  }

  .about-1 h5 {
    text-align: center;
  }

  .serv {
    align-items: center;
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .content {
    padding-block: 80px;
  }

  .about-content {
    padding: 0px 16px;
  }

  .about-3 {
    padding: 24px;
  }

  .serv {
    padding: 24px 0;
  }
}

@media (max-width: 480px) {
  .content {
    padding-block: 60px;
  }

  .about-content {
    padding: 0px 12px;
  }

  .about-3 {
    padding: 16px;
  }

  .serv {
    padding: 16px 0;
  }
}
</style>
