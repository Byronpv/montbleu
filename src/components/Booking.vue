<template>
  <div>
    <section class="booking">
      <div class="redes_sociales">
        <ul class="reds">
          <li class="socials">
            <a href="" class="link_reds"></a><i class="fa fa-at gmail icon"></i>
          </li>
          <li class="socials">
            <a href="" class="link_reds"></a><i class="fa fa-twitter twitter icon"></i>
          </li>
          <li class="socials">
            <a href="" class="link_reds"></a><i class="fa fa-facebook facebook icon"></i>
          </li>
        </ul>
      </div>
      <div class="formvalid">
        <form v-on:submit.prevent="makeQuery">
          <label class="label"><h3>Reservation code</h3></label>
          <input class="inputcol" type="text" v-model="id_register" />
          <b-button v-on:click="makeQuery" class="btnpin" type="submit" variant="primary"
            >Buscar</b-button
          >
          <br />
          <br />
        </form>
      </div>
    </section>
    <section class="table">
      <div>
        <table>
          <tr>
            <th>Registro</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Ocupación</th>
          </tr>

          <tr>
            <td>{{ registers.num_register }}</td>
            <td>{{ registers.name }}</td>
            <td>{{ registers.last_name }}</td>
            <td>{{ registers.mail }}</td>
            <td>{{ registers.cellphone }}</td>
            <td>{{ registers.check_in }}</td>
            <td>{{ registers.check_out }}</td>
            <td>{{ registers.ocupacion }}</td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Booking",

  data: function () {
    return {
      id_register: "",
      registers: [],
    };
  },
  methods: {
    makeQuery: function () {
      let self = this;
      axios
        .get("https://reservas-hotel-app.herokuapp.com/client/mybooking/" + this.id_register)
        .then((response) => {
          self.registers = response.data;
        })
        .catch((error) => {
          if (error.response.status == "404") alert("ERROR 404: Usuario no encontrado.");

        });
    },
  },
};
</script>

<style>
.booking {
  display: flexbox;
  grid-template-columns: 1fr 2fr 4fr;
  justify-items: flex-start;
  padding-top: 60px;
}

.inputcol {
  background: rgba(118, 164, 175, 0.459);
  padding: 6px;
  border-radius: 3px;
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-size: 25px;
  color: #fff;
}

.btnpin {
  background: rgba(118, 164, 175, 0.459);
  padding: 6px;
  border-radius: 3px;
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-size: 25px;
  color: #fff;
  width: 20%;
}
.principal {
  display: none;
}
.document {
  height: 300px;
  width: 300px;
  margin: 120px 0;
}

.booking form {
  margin-left: 30%;
}
.reds {
  margin-left: 2;
  width: 70%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}
.socials {
  position: relative;
  transform: translateX(-50px);
  background: rgba(50, 50, 85, 0.418);
  list-style: none;
  padding: 10px 0;
  transition: 0.5s;
  width: 100px;
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

.gmail{
  position: relative;
  left: 30px;
}
.twitter{
  position: relative;
  left: 30px;
}
.facebook{
  position: relative;
  left: 30px;
}
.covid {
  width: 82%;
  font-size: 23px;
  background: rgba(118, 164, 175, 0.459);
  padding: 0 20px;
  height: 80%;
}

.table table {
  font-size: 25px;
  color: floralwhite;
  padding: 0 20px;
  height: auto;
  text-align: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>
