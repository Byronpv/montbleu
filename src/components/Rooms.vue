<template>
  	<div id="rooms">
      <div class='carrusel'>
        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="Single Room"
          text="Small and simple room offering everything necessary for a comfortable stay : 1 single bed, free WiFi, non-smoke space, pet friendly, TV, a work desk and a private bathroom with shower."
          img-src="https://images.pexels.com/photos/3659681/pexels-photo-3659681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide 
          caption="Twin Room"
          text="Beautiful and simple room with two double beds that offers everything necessary for a comfortable stay : 2 double bed, free WiFi, non-smoke space, pet friendly, TV, a work desk and a private bathroom with shower."
          img-src="https://images.pexels.com/photos/3688261/pexels-photo-3688261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <h1>HMB</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide
          caption="Deluxe Queen Room"
          text="Luxury room with a Queen bed that offers everything necessary for a comfortable and relaxing stay : 1 queen bed, free WiFi, non-smoke space, pet friendly, TV, a work desk and a private bathroom with shower."
        ><template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide 
          caption="Triple Room"
          text="Beautiful and simple room with three double beds that offers everything necessary for a comfortable stay : 3 double bed, free WiFi, non-smoke space, pet friendly, TV, a work desk and a private bathroom with shower."
          img-src="https://i.pinimg.com/originals/b2/2d/29/b22d293c0a7cb2616da28e8616d03f0e.jpg">
        </b-carousel-slide>

        <b-carousel-slide 
          caption="Quadruple Room"
          text="Beautiful and familiar room with two double beds and two single bed that offers everything necessary for a comfortable stay : 2 double bed, 2 simple bed, free WiFi, non-smoke space, pet friendly, TV, a work desk and a private bathroom with shower."
          img-src="https://www.regalhotel.com/uploads/rrh/accommodations/720x475/FamilyQudruple(QQ)_FINAL_large.jpg">
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->

      </b-carousel>
      </div>

      <div class="btnReservar text-center">
        <br>
        <b-button variant="outline-info" size="lg" ><a href="/client/auth">Reserve</a></b-button>
      </div>
    </div>
</template>

<script>

export default {
    name: 'Rooms',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
 .principal {
  display: none;
}
  .carrusel{
    height: 60%;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

  .btnReservar{
    background: white;
    height: 170px;
    z-index: 1;
    
    

  }

</style>