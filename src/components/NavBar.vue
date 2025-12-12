<template>
  <header>
    <nav>
      <router-link to="/" class="nav-logo">arik.</router-link>
      <ul class="nav-menu" :class="{ active: isMenuOpen }">
        <li class="nav-item">
          <router-link to="/services" class="nav-link" @click="closeMenu">SERVICES</router-link>
        </li>
        <li class="nav-item">
          <!-- <a href="#" class="nav-link">WORK</a> -->
          <router-link to="/work" class="nav-link" @click="closeMenu">WORK</router-link>
        </li>
        <li class="nav-item">
          <!-- <a href="#" class="nav-link">ABOUT</a> -->
          <router-link to="/about" class="nav-link" @click="closeMenu">ABOUT</router-link>
        </li>
        <li class="nav-item">
          <!-- <a href="#" class="nav-link">BLOG</a> -->
          <router-link to="/blog" class="nav-link" @click="closeMenu">BLOG</router-link>
        </li>
      </ul>

      <router-link to="/let-talk" class="nav-btn" @click="closeMenu">LET'S TALK</router-link>

      <!-- <a href="#" class="nav-btn">LET'S TALK</a> -->

      <div class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
    <!-- <router-view /> -->
  </header>
</template>

<!-- <script>
export default {
  name: "NavBar",
};
</script> -->
<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

defineProps(['closeMenu'])

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
li {
  list-style: none;
}

.nav-logo {
  color: #edd6b6;
  text-decoration: none;
}

.nav-item a {
  color: #edd6b6;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 1px;
}

.nav-item::after {
  content: "";
  height: 1px;
  background: #edd6b6;
  display: block;
  margin-right: 0;
  width: 0;
  transition: all 0.5s ease;
}

.nav-item:hover::after {
  width: 100%;
}

.nav-btn {
  background-color: #edd6b6;
  color: black;
  text-decoration: none;
  border: none;
  padding: 8px;
  font-size: 15px;
}


header {
  display: flex;
  justify-content: center;
  /* width: 50%;
  margin: 0 auto;
  border: white; */
}

nav {
  display: flex;
  gap: 0px 30px;
  align-items: center;
  padding: 0px 30px;
  min-height: 60px;
  /* border: #edd6b6 0.1px solid; */
  position: fixed;
  top: 20px;
  backdrop-filter: blur(15px);
  /* box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37); */
  border: 1px solid rgba(225, 225, 225, 0.18);
  opacity: 1;
  overflow: visible;
  z-index: 10;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 10px;
}

.menu-btn {
  display: none;
}

.nav-logo {
  font-size: 25px;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  font-size: 5px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #edd6b6;
}

/* #theme{
  height: 50px;
  width: 50px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--base-variant);
}

#theme :last-child{
  display: none;
}

.darkmode #theme :first-child{
  display: none;
}

.darkmode #theme :last-child{
  display: block;
} */

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .menu-btn {
    display: block;
    background-color: #edd6b6;
    color: black;
    text-decoration: none;
    border: none;
    padding: 8px;
    font-size: 15px;
    width: 100%;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .nav-menu {
    position: fixed;
    right: -250%;
    top: 70px;
    gap: 0;
    flex-direction: column;
    background-color: black;
    padding: 20px 70px;
    width: 100%;
    align-content: center;
    text-align: center;
    transition: 0.3s;
  }

  .nav-item {
    margin: 16px 0;
  }

  .nav-menu.active {
    left: 0;
  }
}

.router-link-active {
  color: #edd6b6;
  text-decoration: none;
}

.router-link-exact-active {
  color: #edd6b6;
  text-decoration: none;
}
</style>

