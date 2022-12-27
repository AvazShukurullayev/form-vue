<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-4 offset-4 shadow my-5 p-3 rounded">
          <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
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
                type="password"
                v-model="form.password"
                id="password"
                placeholder="*******"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              class="my-2"
              label="Enter your confirm password"
              label-for="confirm-password"
            >
              <b-form-input
                type="password"
                id="confirm-password"
                v-model="form.confirmPassword"
                placeholder="*******"
                required
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" class="my-2" variant="primary"
              >Submit</b-button
            >
            <b-button type="reset" class="my-2" variant="danger"
              >Reset</b-button
            >
          </b-form>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <b-table striped hover bordered :items="array"></b-table>
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
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      array: [],
    };
  },
  computed: {
    // ...mapGetters(["getForm"]),
  },
  methods: {
    // ...mapActions(["actionForm"]),
    onSubmit() {
      // this.actionForm(this.form);
      // console.log("onSubmit => ", this.form);
      // console.log("onSubmit lifecycle => ", this.getForm);
      this.array.push(this.form);
      console.log("this array => ", this.array);
  /*     this.form.firstName = "";
      this.form.lastName = "";
      this.form.email = "";
      this.form.password = "";
      this.form.confirmPassword = ""; */
    },
    onReset() {
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.email = "";
      this.form.password = "";
      this.form.confirmPassword = "";
    },
  },
};
</script>

<!-- <script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
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
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
 -->
<style></style>
