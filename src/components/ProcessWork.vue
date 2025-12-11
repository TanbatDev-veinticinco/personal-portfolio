<template>
  <div class="process" data-aos="fade-up">
    <h5>THE PROCESS</h5>
    <h1>
      Your Website <br />
      in 5 steps
    </h1>
    <p>
      Our process ensures that we create a website tailored to your business
      needs.
    </p>
  </div>

  <div class="timeline" data-aos="fade-up">
    <div class="ver-line">
      <div class="number" v-for="(card, index) in cards" :key="index">
        <span>{{ index + 1 < 6 ? "0" + (index + 1) : index + 1 }}</span>
      </div>
    </div>

    <div
      class="card"
      :class="[index % 2 === 0 ? 'right' : 'left']"
      v-for="(card, index) in cards"
      :key="index"
      :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
      :data-aos-delay="`${index * 100}`"
    >
      <div class="content">
        <span class="time-label">{{ card.duration }}</span>
        <h4>{{ card.tip }}</h4>
        <h2>{{ card.title }}</h2>
        <p>{{ card.description }}</p>
        <ul>
          <li v-if="card.list1">{{ card.list1 }}</li>
          <li v-if="card.list2">{{ card.list2 }}</li>
          <li v-if="card.list3">{{ card.list3 }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProWorkVue",
  data() {
    return {
      cards: [
        {
          duration: "2 HOURS",
          tip: "DO WE MATCH?",
          title: "DISCOVERY CALL",
          description:
            "Before we start, we determine if and how I can help you. What are your requirements for your new website?",
          list1: "We get to know each other better",
          list2: "Determine how I can best assist you",
          list3: "Understand the goals you have for your website",
        },
        {
          duration: "2 WEEKS",
          tip: "WE NEED A PLAN",
          title: "CONCEPT & STRATEGY",
          description:
            "Together, we develop a strategy that successfully combines your goals with the needs of your target audience.",
          list1: "UX Design",
          list2: "Wireframes",
          list3: "Interactive Prototype",
        },
        {
          duration: "2 WEEKS",
          tip: "SOME MAGIC",
          title: "WEB DESIGN",
          description:
            "Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand.",
          list1: "High-end web design",
          list2: "Interactive prototype",
        },
        {
          duration: "2 WEEKS",
          tip: "MORE MAGIC",
          title: "DEVELOPMENT",
          description:
            "You will receive a custom-built website using a modular design system and CMS integration.",
          list1: "Custom framer website",
          list2: "CMS integration",
        },
        {
          duration: "2 HOURS",
          tip: "READY TO GO",
          title: "WEBSITE ONBOARDING",
          description:
            "In a personal workshop, I show you how to update your website. You also get personalized Framer video tutorials.",
          list1: "Personal workshop",
          list2: "Video tutorials",
          list3: "Edit directly on your website",
        },
      ],
    };
  },
};
</script>

<style scoped>
.process {
  text-align: center;
  padding: 40px 20px;
}
.process h5 {
  font-weight: 400;
  color: rgb(218, 197, 167);
  font-size: 13px;
  letter-spacing: 1.5px;
}
.process h1 {
  font-size: 64px;
  font-weight: 100;
  font-style: normal;
  font-family: "Gambetta Light Italic", sans-serif;
  margin: 20px 0;
}
.process p {
  font-size: 18px;
  color: rgb(218, 197, 167);
}

/* Timeline Styles */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: auto;
  padding: 40px 0;
}

.ver-line {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background-color: rgba(218, 197, 167, 0.19);
  z-index: 0;
  /* display: flex; */
  /* flex-direction: column; */
}

.ver-line .number {
  position: relative;
  text-align: center;
  color: #dac5a7;
  font-size: 16px;
  font-weight: bold;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  width: 45%;
  padding: 32px;
  background-color: #dac5a70d;
  border: 1px solid #343230;
  border-radius: 4px;
  position: relative;
  /* margin-bottom: 100px; */
  z-index: 1;
}

.card.left {
  float: left;
  clear: both;
  margin-left: 0;
}

.card.right {
  float: right;
  clear: both;
  margin-right: 0;
}

.content h4 {
  color: #dac5a7;
}
.content h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
.content p {
  color: #ccc;
}
.content ul {
  margin-top: 10px;
}
.time-label {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 4px;
  background: rgba(218, 197, 167, 0.05);
  border: 1px solid rgba(218, 197, 167, 0.15);
  margin-bottom: 16px;
  color: #dac5a7;
  font-size: 13px;
}

/* Responsive */
@media (max-width: 768px) {
  .process h1 {
    font-size: 36px;
  }

  .timeline {
    padding: 0 20px;
  }

  .ver-line {
    left: 20px;
    transform: none;
  }

  .ver-line .number {
    justify-content: flex-start;
    padding-left: 0;
    margin-left: -10px;
    font-size: 14px;
  }

  .card {
    width: 100%;
    margin: 40px 0;
    padding-left: 60px;
  }

  .card.left,
  .card.right {
    float: none;
    margin-left: 0;
    margin-right: 0;
  }

  .time-label {
    margin-left: 0;
  }
}
</style>

<!-- <template>
  <div>
    <div class="process">
      <h5>THE PROCESS</h5>
      <h1>
        Your Website <br />
        in 5 steps
      </h1>
      <p>
        Our process ensures that we create a website 
        tailored to your business needs.
      </p>
    </div>

    <div class="cards">
      <div class="card" v-for="card in cards" :key="card.title">
        <div class="card-duration">
          <p>{{ card.duration }}</p>
        </div>
        <h4>{{ card.tip }}</h4>
        <h1>{{ card.title }}</h1>
        <p>{{ card.description }}</p>
        <ul>
          <li>{{ card.list1 }}</li>
          <li>{{ card.list2 }}</li>
          <li>{{ card.list3 }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProcessWorkVue",
  data() {
    return {
      cards: [
        {
          duration: "2 HOURS",
          tip: "DO WE MATCH?",
          title: "DISCOVERY CALL",
          description:
            "Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?",
          list1: "We get to know each other better ",
          list2: "Determine how I can best assist you",
          list3: "Understand the goals you have for your website",
        },
        {
          duration: "2 WEEKS",
          tip: "WE NEED A PLAN",
          title: "CONCEPT & STRATEGY",
          description:
            "Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.",
          list1: "UX Design",
          list2: "Wireframes",
          list3: "Interactive Prototype",
        },
        {
          duration: "2 WEEKS",
          tip: "SOME MAGIC",
          title: "WEB DESIGN",
          description:
            "Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.",
          list1: "High-end web design tailored to your brand",
          list2: "Interactive prototype of the design",
        },
        {
          duration: "2 WEEKS",
          tip: "MORE MAGIC",
          title: "DEVELOPMENT",
          description:
            "In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.",
          list1: "Custom framer website",
          list2: "Modular web design systems",
          list3: "CMS integration",
        },
        {
          duration: "2 HOURS",
          tip: "READY TO GO",
          title: "WEBSITE ONBOARDING",
          description:
            "In a personal Framer workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized Framer video tutorials that you can access at any time. Edit your Framer website without a complicated backend or the need for an additional programmer. It's as simple as that.",
          list1: "Personal workshop",
          list2: "Personalized video tutorials",
          list3: "Edit text and images directly on your website",
        },
      ],
    };
  },
};
</script>

<style scoped>
.process {
  align-content: center;
  align-items: center;
  justify-self: center;
  text-align: center;
  gap: 16px;
}

.process h5 {
  font-weight: 400;
  color: rgb(218 197 167);
  line-height: 120%;
  font-size: 13px;
  letter-spacing: 1.5px;
  font-family: "Satoshi Regular", "Satoshi Regular Placeholder", sans-serif;
  opacity: 1;
}

.process h1 {
  font-family: "Gambetta Light Italic", "Gambetta Light Italic Placeholder",
    sans-serif;
  font-size: 96px;
  font-weight: 100;
  line-height: 110%;
  font-style: normal;
  padding: 20px;
}

.process p {
  font-family: "Chillax Light", "Chillax Light Placeholder", sans-serif;
  font-size: 20px;
  line-height: 160%;
  font-weight: 400;
  color: rgb(218 197 167);
}

.card {
  align-items: flex-start;
  background-color: #dac5a70d;
  border-radius: 2px;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 32px;
  height: min-content;
  justify-content: flex-start;
  overflow: visible;
  padding: 48px;
  position: relative;
  width: 100%;
  border: solid 1px #343230;
  background-color: #dac5a70d;
  margin-bottom: 30px;
  /* padding: 25px;
  height: min-content;
  gap: 32px;
  display: grid;
  align-items: flex-start;
  min-width: 45%;
  flex: none; */
}

.card-duration {
  display: inline-block;
  /* float: right 0; */
  border: #343230 solid 1px;
  padding: 8px;
  border-radius: 2px;
  /* text-align: center; */
  align-items: center;
  /* width: min-content; */
}

.cards {
  padding: 20px 20px;
  /* gap: 20px; */
}

/* Responsive Design */
@media (max-width: 768px) {
  .process h1{
    font-size: 45px;
  }
}
</style> -->
