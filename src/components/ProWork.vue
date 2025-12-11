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
    <!-- vertical line -->
    <div class="ver-line">
      <!-- <div class="frame">
        <div class="liner">
          <div class="contain-1"> <i class="fa-solid fa-arrow-down"></i></div>
        </div>
        <div class="line"></div>
      </div> -->
      <div class="frame">
        <div class="line"></div>
        <div class="liner">
          <div class="contain-1">01</div>
        </div>
        <div class="line"></div>
      </div>
      <div class="frame">
        <div class="line"></div>
        <div class="liner">
          <div class="contain-1">02</div>
        </div>
        <div class="line"></div>
      </div>
      <div class="frame">
        <div class="line"></div>
        <div class="liner">
          <div class="contain-1">03</div>
        </div>
        <div class="line"></div>
      </div>
      <div class="frame">
        <div class="line"></div>
        <div class="liner">
          <div class="contain-1">04</div>
        </div>
        <div class="line"></div>
      </div>
      <div class="frame">
        <div class="line"></div>
        <div class="liner">
          <div class="contain-1">05</div>
        </div>
        <!-- <div class="line"></div> -->
      </div>
    </div>

    <!-- card -->
    <div class="card right" data-aos="fade-right">
      <div class="content">
        <span class="time-label">2 HOURS</span>
        <h4>DO WE MATCH?</h4>
        <h2>DISCOVERY CALL</h2>
        <p>
          Before we start, we determine if and how I can help you. What are your
          requirements for your new website? Why do you need a new website? What
          goals do you have, and what problems can we solve with a new website?
        </p>
        <ul>
          <li>We get to know each other better</li>
          <li>Determine how I can best assist you</li>
          <li>Understand the goals you have for your website</li>
        </ul>
      </div>
    </div>
    <!-- second card -->
    <div class="card left" data-aos="fade-left">
      <div class="content">
        <span class="time-label">2 WEEKS</span>
        <h4>WE NEED A PLAN</h4>
        <h2>CONCEPT & STRATEGY</h2>
        <p>
          Together, we develop a strategy that successfully combines your goals
          with the needs of your target audience. Based on this concept, I
          create the first wireframes and an interactive prototype. This
          provides us with a very good impression of the website and the user
          interface.
        </p>
        <ul>
          <li>UX Design</li>
          <li>Wireframes</li>
          <li>Interactive Prototype</li>
        </ul>
      </div>
    </div>
    <!-- third card -->
    <div class="card right" data-aos="fade-right" data-aos-delay="200">
      <div class="content">
        <span class="time-label">2 WEEKS</span>
        <h4>SOME MAGIC</h4>
        <h2>WEB DESIGN</h2>
        <p>
          Together, we develop a strategy that successfully combines your goals
          with the needs of your target audience. Based on this concept, I
          create the first wireframes and an interactive prototype. This
          provides us with a very good impression of the website and the user
          interface.
        </p>
        <ul>
          <li>High-end web design tailored to your brand</li>
          <li>Interactive prototype of the design</li>
        </ul>
      </div>
    </div>
    <!-- forth card -->
    <div class="card left" data-aos="fade-left" data-aos-delay="200">
      <div class="content">
        <span class="time-label">2 WEEKS</span>
        <h4>MORE MAGIC</h4>
        <h2>DEVELOPMENT</h2>
        <P
          >In this step, we breathe life into your new high-end design. You will
          receive a custom-built website using a modular web design system and
          CMS integration. Animations will add the necessary flair to your site
          and set you apart from the boring competition.
        </P>
        <ul>
          <li>Custom framer website</li>
          <li>Modular web design systems</li>
          <li>CMS integration</li>
        </ul>
      </div>
    </div>
    <!-- fifth card -->
    <div class="card right">
      <div class="content">
        <span class="time-label">2 HOURS</span>
        <h4>READY TO GO</h4>
        <h2>WEBSITE ONBOARDING</h2>
        <P>
          In a personal Framer workshop, I will show you how to make changes to
          your new website quickly and easily. Additionally, you will receive
          personalized Framer video tutorials that you can access at any time.
          Edit your Framer website without a complicated backend or the need for
          an additional programmer. It's as simple as that.
        </P>
        <ul class="ull">
          <li>Personal workshop</li>
          <li>Personalized video tutorials</li>
          <li>Edit text and images directly on your website</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProWork",
  data() {},
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
  /* gap: 30px; */
  height: min-content;
  overflow: visible;
  position: relative;
  width: 100%;
  border: solid 1px #343230;
  background-color: #dac5a70d;
  /* margin-bottom: 40px; */
}

.content {
  padding: 48px;
  gap: 32px;
}

.content h4 {
  font-size: 13px;
  color: rgb(218 197 167 / 51%);
  padding-bottom: 6px;
}

.content h2 {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 130%;
  padding-bottom: 16px;
}

.content p {
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  padding-bottom: 32px;
  font-family: "Chillax Light, Chillax Light Placeholder", sans-serif;
}

.content ul li {
  padding-bottom: 16px;
}

.time-label {
  display: inline-block;
  border-radius: 2px;
  padding: 8px;
  background-color: rgb(218 197 167 / 5%);
  border: solid 1px rgb(218 197 167 / 15%);
  backdrop-filter: blur(15px);
  opacity: 1;
  margin-left: 75%;
}

.timeline {
  margin-top: 50px;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 10px;
}

/* positioning 0f the card */
.card.right {
  margin-left: 60%;
}

.card.left {
  margin-left: -60%;
}

.ver-line {
  position: absolute;
  left: 48%;
  top: 0;
  width: 1px;
  height: 100%;
  padding: 0;
  transform: translate(-50%);
}

.frame {
  align-content: center;
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 16px;
  height: auto;
  justify-content: flex-start;
  overflow: visible;
  padding: 0;
  position: relative;
  left: 0px;
  width: min-content;
  flex: 1 0 0px;
}

.line {
  top: 0;
  height: 180px;
  width: 1px;
  position: relative;
  background-color: rgb(218 197 167 / 15%);
}

.contain-1 {
  border: #343230 solid 1px;
  backdrop-filter: blur(15px);
  background-color: var(
    --token-81ab93ff-d515-4aca-b63b-24f83b57a3ab,
    rgba(218, 197, 167, 0.05)
  );
  border-radius: 50%;
  height: 100%;
  width: 100%;
  padding: 12px;
  opacity: 1;
  align-items: center;
  align-content: center;
}

.fa-solid {
  font-size: 20px;
}

/* Responsive Design */
@media (max-width: 809px) {
  .process h1 {
    font-size: 45px;
  }

  .timeline {
    /* gap: 16px; */
    padding: 0px 10px;
    /* margin-left: 10 auto;
    margin-right: 10 auto; */
  }

  .line {
    height: 210px;
  }

  .ver-line {
    display: none;
    left: -8%;
  }

  .card {
    width: 100%;
    margin-bottom: 30px;
  }

  .card.right {
    margin-left: 0;
  }

  .card.left {
    margin-left: 0;
  }

  .time-label {
    margin-left: 60%;
  }
}

@media (min-width: 810px) and (max-width: 991px) {
  .timeline {
    padding: 0px 2px;
    margin-left: 10 auto;
    margin-right: 10 auto;
  }

  .ver-line {
    left: -60px;
  }

  .card {
    width: 100%;
    margin-bottom: 40px;
  }

  .card.right {
    margin-left: 0;
  }

  .card.left {
    margin-left: 0;
  }
}
</style>
