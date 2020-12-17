<template>
  <div class="description">
    <div >
      <p class="about">
        ABOUT US <br>
        Mont Bleu Hotel is a leading hospitality company serving as a true host
        and best partner to guests, owners, business partners and talent. Our
        seven unique hotel brands offer award-winning and exceptional hotel
        experiences, originating from our strong Scandinavian heritage of design
        and innovation. Our brands embody our modern vision of hospitality,
        including authentic local tastes, stylish living design, unique
        locations and vibrant social scenes. Mont Bleu Hotel brings a
        refreshed commitment to hospitality leadership to meet the changing
        travel industry and the bespoke needs of our guests. We provide
        exceptional service in all of our hotels across the globe and strive to
        deliver a hospitality experience that is beyond guest expectations.
      </p>

      <img class="imghotel" src="https://tecnohotelnews.com/wp-content/uploads/2019/04/habitacion-gorka-room-mate.jpg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>
<style >
.principal {
  display: none;
}

.description{
background: rgba(118, 164, 175, 0.459);
width: 70%;
text-align: justify;
display: flex;
justify-items: center;
align-items: center;
margin-left: 200px;
margin-top: 50px;
padding: 20px;
}

.imghotel{
    width:43%;
    margin-left: 30%;
}
.about{
    font-size: 25px;
    padding-left: 20px;
    padding-right: 20px;
}

</style>