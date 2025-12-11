<template>
  <footer class="footer" data-aos="fade-up">
    <div class="footer-content">
      <!-- Navigation and Contact Info -->
      <div class="footer-top" data-aos="fade-up" data-aos-delay="100">
        <div class="footer-nav">
          <ul class="nav-menu">
            <li class="nav-item">
              <router-link to="/" class="nav-li">arik.</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/services" class="nav-link" @click="closeMenu"
                >SERVICES</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/work" class="nav-link" @click="closeMenu"
                >WORK</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" @click="closeMenu"
                >ABOUT</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/blog" class="nav-link" @click="closeMenu"
                >BLOG</router-link
              >
            </li>
          </ul>
          <a href="#" class="menu-btn">LET'S TALK</a>
        </div>
        <div class="footer-contact">
          <div>
            <p>Phone:</p>
            <p>+234 8065253227</p>
          </div>
          <div>
            <p>Mail:</p>
            <p>omolayoalatishe@gmail.com</p>
          </div>
        </div>
      </div>

      <hr />

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p>© 2025 Alatishe. All rights reserved.</p>
        <div class="footer-socials">
          <a href="#"
            ><i class="fa-brands fa-instagram"></i><span>INSTAGRAM</span></a
          >
          <a href="#"
            ><i class="fa-brands fa-x-twitter"></i><span>TWITTER</span></a
          >
          <a href="#"
            ><i class="fa-brands fa-linkedin"></i><span>LINKEDIN</span></a
          >
          <a href="#"><i class="fa-brands fa-github"></i><span>GITHUB</span></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooTer",
};
</script>

<style scoped>
.footer {
  padding: 40px 20px;
  background-color: #22201f;
  color: #edd6b6;
  font-size: 14px;
}

.footer-content {
  max-width: 1200px;
  margin: auto;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  padding-bottom: 30px;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.nav-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  padding: 0;
  margin: 0;
}

.nav-item {
  list-style: none;
}

.nav-link {
  color: #edd6b6;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 1px;
}

.nav-li {
  text-decoration: none;
  font-size: 35px;
}

.menu-btn {
  display: inline-block;
  padding: 8px 16px;
  background-color: #edd6b6;
  color: #22201f;
  font-weight: bold;
  border-radius: 6px;
  text-decoration: none;
  margin-top: 10px;
  width: fit-content;
}

.footer-contact {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.footer-contact p:first-child {
  font-weight: bold;
  margin-bottom: 4px;
}

hr {
  border-color: rgba(255, 255, 255, 0.1);
  margin: 30px 0;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-socials {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.footer-socials a {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #edd6b6;
  text-decoration: none;
  font-size: 13px;
}

.footer-socials i {
  border: 1px solid #edd6b6;
  padding: 8px;
  border-radius: 50%;
}

/* Responsive Design */
@media (max-width: 809px) {
  .footer-top {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-nav {
    width: 100%;
    align-items: flex-start;
  }

  .nav-menu {
    flex-direction: column;
  }

  .footer-contact {
    flex-direction: column;
    gap: 10px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .footer-socials {
    justify-content: center;
  }
}
</style>
