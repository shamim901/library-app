<template>
  <div class="bg-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg'); height: 100vh">

  <div class="container" style="padding-top:100px;padding-left:300px;">
    <b-form @submit="saveData" v-if="show">
      <div class="row">
        <div class="col-4">
          <b-form-group
            id="input-group-1"
            label="First Name:"
            label-for="input-1"
          >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-4">
          <b-form-group id="input-group-2" label="Last Name :" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
            </b-form-group>
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
          >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-4">
          <b-form-group id="input-group-2" label="Mobile No:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
            </b-form-group>
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <b-form-group
            id="input-group-1"
            label="Password:"
            label-for="input-1"
          >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-4">
          <b-form-group id="input-group-2" label="Confirm Password:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
            </b-form-group>
        </div>
      </div>

      <div class="row">
        <div class="col-8 text-center" style="margin:15px;">
          <b-button @click="saveData" class="btn btn-sm mr-1" variant="primary">Submit</b-button>
        </div>
      </div>

    </b-form>
  </div>

  </div>
</template>

<script>
import { extend } from 'vee-validate';
import axios from 'axios'

extend('even', value => {
  return value % 2 === 0;
});

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
      return {
        homeUrl: '/book/book-request',
        form: {
          name: 'Shamim Reza',
          email: 'opt.shamim@gmail.com',
          password: '123456',
          password_confirmation: '123456'
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
  methods : {  
    async saveData () {

    axios.post('http://127.0.0.1:8000/api/auth/register', this.form)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
        }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
