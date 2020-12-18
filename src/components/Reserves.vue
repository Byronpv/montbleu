<template>
  <div>
    <div class="check-in">
      <label for="datepicker-1">Check-in date</label>
      <b-form-datepicker id="datepicker-1" v-model="checkin" class="mb-2">
      </b-form-datepicker>
      <p>Value: '{{ checkin }}'</p>
    </div>

    <div class="check-out">
      <label for="datepicker-2">Check-out date</label>
      <b-form-datepicker id="datepicker-2" v-model="checkout" class="mb-2">
      </b-form-datepicker>
      <p>Value: '{{ checkout }}'</p>
    </div>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-4"
        label-cols-sm="5"
        content-cols-sm="2"
        label="Room:"
        label-for="input-4"
        label-align-sm="right"
      >
        <b-form-select
          id="input-4"
          v-model="form.room"
          :options="rooms"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label-cols-sm="5"
        content-cols-sm="2"
        label="Name:"
        label-for="input-1"
        label-align-sm="right"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label-cols-sm="5"
        content-cols-sm="2"
        label="Last Name:"
        label-for="input-2"
        label-align-sm="right"
      >
        <b-form-input
          id="input-2"
          v-model="form.lastname"
          placeholder="Enter last name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label-cols-sm="5"
        content-cols-sm="2"
        label="Email address:"
        label-for="input-3"
        label-align-sm="right"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label-cols-sm="5"
        content-cols-sm="2"
        label="Cellphone:"
        label-for="input-5"
        label-align-sm="right"
      >
        <b-form-input
          id="input-5"
          v-model="form.cellphone"
          type="cellphone"
          placeholder="Enter cellphone"
          required
        ></b-form-input>
      </b-form-group>

      <div class="buttons text-center">
        <b-button type="submit" variant="outline-info">Continue</b-button>
        <b-button type="reset" variant="outline-danger">Reset</b-button>
      </div>
    </b-form>
    <!---<b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkin: "",
      checkout: "",
      form: {
        room: null,
        name: "",
        lastname: "",
        email: "",
        cellphone: "",
      },
      rooms: [
        { text: "Select One", value: null },
        "Single Room",
        "Twin Room",
        "Deluxe Queen Room",
        "Triple Room",
        "Quadruple Room",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      
      this.form.room = null;
      this.form.name = "";
      this.form.lastname = "";
      this.form.email = "";
      this.form.cellphone = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
.principal {
  display: none;
}

.check-in {
  margin-left: 42%;
  width: 230px;
}
.check-out {
  margin-left: 42%;
  width: 230px;
}
</style>