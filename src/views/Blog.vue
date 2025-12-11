<template>
  <div class="blog-page" data-aos="fade-up">
    <h1>Blog</h1>
    <div class="blog-content" data-aos="fade-up">
      <div class="blog-grid">
        <div
          class="blog-card"
          v-for="(post, index) in blogPosts"
          :key="post.id"
          data-aos="zoom-in"
          :data-aos-delay="`${index * 100}`"
        >
          <div class="blog-image">
            <img :src="post.image" :alt="post.title" />
          </div>
          <div class="blog-info">
            <span class="blog-date">{{ post.date }}</span>
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
            <router-link :to="'/blog/' + post.id" class="read-more"
              >Read More</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Vue 3",
    date: "March 15, 2024",
    excerpt:
      "Learn the basics of Vue 3 and how to build your first application with the Composition API.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 2,
    title: "Modern Web Development Trends",
    date: "March 10, 2024",
    excerpt:
      "Exploring the latest trends and technologies shaping the future of web development.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 3,
    title: "Building Responsive Layouts",
    date: "March 5, 2024",
    excerpt:
      "A comprehensive guide to creating responsive designs that work across all devices.",
    image: "https://via.placeholder.com/400x250",
  },
];
</script>

<style scoped>
.blog-page {
  padding: 100px 20px;
  min-height: 100vh;
  background-color: #0e0e0e;
  color: #edd6b6;
}

.blog-content {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.blog-card {
  background: rgba(14, 14, 14, 0.5);
  border: 1px solid rgba(225, 225, 225, 0.18);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
}

.blog-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-info {
  padding: 1.5rem;
}

.blog-date {
  color: #aca296;
  font-size: 0.9rem;
}

.blog-info h3 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

.blog-info p {
  margin: 1rem 0;
  color: #aca296;
}

.read-more {
  display: inline-block;
  color: #edd6b6;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #edd6b6;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.read-more:hover {
  background-color: #edd6b6;
  color: #0e0e0e;
}
</style>
