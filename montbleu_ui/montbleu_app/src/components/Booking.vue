<template>
  <div>
    <section class="booking">
      <div class="document">
        <ul class="reds">
          <li class="socials">
            <a href="" class="link_reds">Gmail</a
            ><i class="fa fa-at gmail icon"></i>
          </li>
          <li class="socials">
            <a href="" class="link_reds">Twitter</a
            ><i class="fa fa-twitter twitter icon"></i>
          </li>
          <li class="socials">
            <a href="" class="link_reds">Facebook</a
            ><i class="fa fa-facebook facebook icon"></i>
          </li>
        </ul>
      </div>
      <div class="formvalid">
        <form>
          <label for="codereser"><h3>Reservation code</h3></label>
          <input
            class="inputcol"
            type="text"
            id="codereser"
            name="codereser"
          /><br /><br />
          <input class="btnpin" type="submit" value="Continue" />
        </form>
      </div>
      <div class="covid">
        <h3>
          <center>COVID-19 updates</center>
        </h3>
        <h4>CANCELLATION POLICY</h4>
        <p>
          At Mont Bleu Hotel, we are committed to supporting you. To deliver on
          our promise of upholding your travel plans during this global crisis,
          we have updated our cancellation policy as below:
          <br /><br />
          For all existing bookings made before July 10th 2020, including those
          on non-refundable or deposit-guarantee rates: <br />
          1. You can postpone your stay for up to 12 months without incurring
          any penalty or change fee, provided the change is made prior to July
          31st 2020. <br />
          2. If you have paid a deposit or made a payment to one of our hotels
          or resorts, we can transfer it to any MontBleu property in our
          portfolio free of charge, prior to July 31st 2020. <br /><br />
          Please note:
          Changes to reservations will be subject to availability and rate
          differentiations.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Booking",
};
</script>

<style>
.booking {
  display: grid;
  grid-template-columns: 1fr 2fr 4fr;
  justify-items: flex-start;
  padding-top: 60px;
}

.btnpin,
.inputcol {
  background: rgba(118, 164, 175, 0.459);
  padding: 6px;
  border-radius: 3px;
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-size: 25px;
  color: #fff;
}

.principal {
  display: none;
}

.document {
  height: 300px;
  width: 300px;
  margin: 120px 0;
}

.reds {
  margin-left: -3.2%;
  width: 70%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
}

.socials {
  position: relative;
  transform: translateX(-90px);
  background: rgba(50, 50, 85, 0.418);
  list-style: none;
  padding: 10px 0;
  transition: 0.5s;
  width: 150px;
  border-radius: 0 200px 200px 0;
  cursor: pointer;
}

.socials:hover:nth-child(1) {
  background: #42858a;
}
.socials:hover:nth-child(2) {
  background: #42858a;
}
.socials:hover:nth-child(3) {
  background: #42858a;
}
.socials:hover {
  transform: translateX(0);
}
.link_reds {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  padding-left: 10px;
}

.covid {
  width: 82%;
  font-size: 23px;
  background: rgba(118, 164, 175, 0.459);
  padding: 0 20px;
  height: 80%;
}

/* .formvalid{
    margin-top: 100px;
} */
</style>