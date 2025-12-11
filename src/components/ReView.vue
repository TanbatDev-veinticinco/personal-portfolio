<template>
  <div style="padding: 100px 0px" data-aos="fade-up" >
    <div class="says">
      <p>
        What my <br />
        clients say
      </p>
      <p>
        See what my clients have to say about working with me <br />
        and the results I helped them achieve.
      </p>
    </div>
    <br />
    <br />

    <div class="reviews">
      <div class="review" v-for="review in review" :key="review.title">
        <div>
          <div class="rev">
            <h2>{{ review.head }}</h2>
            <p>{{ review.word }}</p>
          </div>
          <div>
            <img src="" alt="" />
            <div class="rev-1">
              <h3>{{ review.name }}</h3>
              <p>{{ review.company }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReViewVue",
  data() {
    return {
      review: [
        {
          head: "Amazing Results with Arik's Premium Web Design Services.",
          word: "Arik is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services.",
          image: "",
          name: "MATTHEW SMITH",
          company: "Sonic",
        },
        {
          head: "Expert Framer and SEO Services: Excellent Work, Great Results.",
          word: "Working with Arik on my website redesign was a fantastic experience. He was able to take my vision and turn it into a beautiful and functional website. His attention to detail and creative approach is unmatched. I couldn't be happier with the end result.",
          image: "",
          name: "JOSH KIM",
          company: "Solar",
        },
        {
          head: "Professional, Collaborative Web Design Experience with Arik.",
          word: "I had the pleasure of working with Arik on a website development project and was blown away by his expertise and professionalism. He made the process seamless and delivered a website that exceeded our expectations. I highly recommend Arik for all your web development needs.",
          image: "",
          name: "ANDREA LEE",
          company: "Stars",
        },
        {
          head: "Expertise in Web Design: Second to None with Arik.",
          word: "Arik is not only an exceptional web designer, but also a pleasure to work with. He took the time to understand my business and its unique needs, and created a website that perfectly represents my brand. I highly recommend Arik's services to anyone looking for a top-quality web designer.",
          image: "",
          name: "ANDREAS THOMPSON",
          company: "Design Inc.",
        },
        {
          head: "Web Design and Content Solutions: Stand Out from the Crowd.",
          word: "Arik's SEO services have helped my business improve its online presence and increase traffic to our website. He is knowledgeable, professional, and provides excellent results. I highly recommend him for all your SEO needs.",
          image: "",
          name: "CATHARINE DAVIS",
          company: "Supersonic",
        },
        {
          head: "High-Quality Web Design: Exceptional Attention to Detail with Arik.",
          word: "Arik's development services are top-notch. He is able to take complex ideas and turn them into functional, user-friendly websites. His attention to detail and commitment to customer satisfaction are unmatched. I highly recommend Arik for all your web development needs.",
          image: "",
          name: "LIAM CHEN",
          company: "Design Solutions",
        },
      ],
    };
  },
};
</script>

<style scoped>
.says {
  text-align: center;
}

.says :nth-of-type(1) {
  font-size: 80px;
  font-weight: 400;
  font-family: "Satoshi Light", "Satoshi Light Placeholder", sans-serif;
  padding-bottom: 8px;
  font-style: italic;
}

.says :nth-child(2) {
  font-size: 18px;
  font-weight: 400;
  line-height: 160%;
  font-family: "Chillax Light", "Chillax Light Placeholder", sans-serif;
}

.review {
  border: 1px solid rgb(218 197 167 / 12%);
  background-color: #181716;
  padding: 48px;
  border-radius: 2px;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 32px;
  height: min-content;
  justify-content: center;
  overflow: visible;
  position: relative;
  width: 100%;
}

.reviews {
  display: grid;
  padding: 0px 48px;
  grid-auto-rows: minmax(0, 1fr);
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  flex: none;
  gap: 32px;
  max-width: 1500px;
  padding-bottom: 100px;
}

.rev :nth-child(1) {
  font-family: "Satoshi Light", "Satoshi Light Placeholder", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 130%;
  padding-bottom: 12px;
}

.rev :nth-child(2) {
  /* font-family: "Chillax Light", "Chillax Light Placeholder", sans-serif; */
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  color: rgb(218 197 167);
  padding-bottom: 22px;
}

.rev-1 :nth-child(2) {
  font-size: 14px;
  font-weight: 400;
  color: rgb(218 197 167 / 60%);
  line-height: 180%;
}

@media (max-width: 809px) {
  .says :nth-of-type(1) {
    font-size: 40px;
  }

  .says :nth-child(2) {
    font-size: 16px;
    padding: 0 16px;
  }
  .reviews {
    display: flex;
    flex-direction: column;
    padding: 0px 16px                                                                                                                                                                                                                                                                                                                                      ;
  }
}
</style>
