<template>
  <div class="lets-talk-page" data-aos="fade-up">
    <h1>Let's Talk</h1>
    <div class="contact-content" data-aos="fade-up" data-aos-delay="200">
      <div class="contact-info" data-aos="fade-right">
        <h2>Get in Touch</h2>
        <p>
          Feel free to reach out to me for any inquiries or collaboration
          opportunities.
        </p>

        <div class="contact-methods" data-aos="fade-up" data-aos-delay="400">
          <div class="contact-method" data-aos="fade-up" data-aos-delay="500">
            <h3>Email</h3>
            <p>your.email@example.com</p>
          </div>
          <div class="contact-method">
            <h3>Location</h3>
            <p>Your City, Country</p>
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
      </div>

      <div class="contact-form">
        <form
          @submit.prevent="handleSubmit"
          action="https://ayodelealatishe@gmail.com"
          method="POST"
        >
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" v-model="form.subject" required />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>

          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleSubmit = () => {
  // Handle form submission logic here
  console.log("Form submitted:", form.value);
  // Reset form
  form.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
};
</script>

<style scoped>
.lets-talk-page {
  padding: 100px 20px;
  min-height: 100vh;
  background-color: #0e0e0e;
  color: #edd6b6;
}

.contact-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
}

.contact-info h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.contact-methods {
  margin: 2rem 0;
}

.contact-method {
  margin-bottom: 1.5rem;
}

.contact-method h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.contact-form {
  background: rgba(14, 14, 14, 0.5);
  border: 1px solid rgba(225, 225, 225, 0.18);
  padding: 2rem;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem;
  background: rgba(14, 14, 14, 0.8);
  border: 1px solid rgba(225, 225, 225, 0.18);
  border-radius: 4px;
  color: #edd6b6;
}

textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-btn {
  background: transparent;
  color: #edd6b6;
  border: 1px solid #edd6b6;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.submit-btn:hover {
  background-color: #edd6b6;
  color: #0e0e0e;
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

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
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
</style>
