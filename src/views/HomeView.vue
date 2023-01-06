<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12 shadow my-5 p-3 rounded">
          <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
            <h2 class="form__title">Registration 😎</h2>
            <b-form-group
              class="my-2"
              label="Enter your firstname"
              label-for="firstName"
            >
              <b-form-input
                v-model="form.firstName"
                placeholder="John"
                id="firstName"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              class="my-2"
              label="Enter your lastname"
              label-for="lastName"
            >
              <b-form-input
                v-model="form.lastName"
                placeholder="Doe"
                id="lastName"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              class="my-2"
              label="Enter your email address"
              label-for="email"
            >
              <b-form-input
                type="email"
                v-model="form.email"
                id="email"
                placeholder="example@gmail.com"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="my-2"
              label="Enter your password"
              label-for="password"
            >
              <b-form-input
                ref="passwordInput"
                @input="onPassword"
                type="password"
                v-model="form.password"
                id="password"
                placeholder="*******"
                required
              ></b-form-input>
              <p class="password__parag least">At least 5 letters</p>
              <!-- <p class="password__parag number">At least one number</p> -->
              <!-- <p class="password__parag word">At least one word </p> -->
            </b-form-group>
            <b-form-group
              class="my-2"
              label="Enter your confirm password"
              label-for="confirm-password"
            >
              <b-form-input
                @input="onConfirmPassword"
                type="password"
                id="confirmPassword"
                v-model="form.confirmPassword"
                placeholder="*******"
                required
              ></b-form-input>
              <p class="password__desc unSame">Not same password 😒</p>
              <p class="password__desc same">Same password, Correct ✅</p>
            </b-form-group>
            <b-button type="submit" class="my-2" variant="primary"
              >Submit</b-button
            >
            <b-button type="reset" class="mx-2" variant="danger"
              >Reset</b-button
            >
            <b-button @click="showPassword" class="showButton" variant="info"
              >Show</b-button
            >
          </b-form>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <b-table
            id="my-table"
            :items="getForm"
            :per-page="perPage"
            :current-page="currentPage"
            stripped
            hover
            bordered
            small
          ></b-table>
          <div class="pagination">
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
            ></b-pagination>
          </div>
          <p class="mt-3">Current Page: {{ currentPage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      form: {},
      check: {
        isSamePasswords: null,
      },
    };
  },
  computed: {
    ...mapGetters(["getForm"]),
  },
  mounted() {
    console.log("Mounted methods => ", this.getForm);
  },
  methods: {
    ...mapActions(["actionForm"]),
    onSubmit() {
      if (this.check.isSamePasswords) {
        this.actionForm(this.form);
        this.form = {};
        const least = document.querySelector(".least");
        least.style.display = "none";
        const same = document.querySelector(".same");
        same.style.display = "none";
      } else {
        alert("onSubmit else statement");
      }
    },
    onReset() {
      this.form = {};
    },
    // RegExp bilan qilish kerak
    onPassword() {
      const passwordLeast = document.querySelector(".least");
      if (this.form.password.length !== 0) {
        passwordLeast.style.display = "block";
        if (this.form.password.length >= 5) {
          passwordLeast.style.color = "lime";
        } else {
          passwordLeast.style.color = "red";
        }
      } else {
        passwordLeast.style.display = "none";
      }
    },
    onConfirmPassword() {
      const unSame = document.querySelector(".unSame");
      const same = document.querySelector(".same");
      if (this.form.password === this.form.confirmPassword) {
        console.log("Successfully passwords");
        unSame.style.display = "none";
        same.style.display = "block";
        same.style.color = "lime";
        this.check.isSamePasswords = true;
      } else {
        console.log("unSame passwords");
        unSame.style.display = "block";
        same.style.display = "none";
        this.check.isSamePasswords = false;
      }
    },
    showPassword() {
      const password = document.querySelector("#password");
      const confirmPassword = document.querySelector("#confirmPassword");
      if (
        password.type == "password" &&
        confirmPassword.type == "password" &&
        (this.form.password !== "" || this.form.confirmPassword !== "")
      ) {
        password.type = "text";
        confirmPassword.type = "text";
      } else {
        password.type = "password";
        confirmPassword.type = "password";
      }
    },
  },
};
</script>

<style lang="scss">
.form__title {
  text-align: center;
  margin: 10px 0;
}
.password__parag,
.password__desc {
  color: red;
  margin: 10px 0;
  display: none;
}
</style>

<!--  
<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
  }
</script>
-->
