<template>
    <div class="bg-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg'); height: 100vh">

    <div class="container" style="padding-top:100px;padding-left:300px;" v-if="signIn">
      <b-form @submit="logInData" v-if="show">

        <div class="row">
          <div class="col-4">
            <b-form-group
              id="input-group-1"
              label="Name:"
              label-for="input-1"
            >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
            ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-4">
            <b-form-group id="input-group-2" label="Password:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.password"
                required
              ></b-form-input>
              </b-form-group>
          </div>
        </div>

        <div class="row">
          <div class="col-8 text-center" style="margin:15px;">
            <b-button @click="logInData" class="btn btn-sm mr-1" variant="primary">Login</b-button>
            <b-button @click="SignUpFormShow" class="btn btn-sm mr-1" variant="primary">SignUp</b-button>
          </div>
        </div>

      </b-form>
    </div>

    <div class="container" style="padding-top:100px;padding-left:300px;" v-if="signUp">
     <b-form @submit="registration" v-if="show">
        <div class="row">
          <div class="col-4">
            <b-form-group
              id="input-group-1"
              label="First Name:"
              label-for="input-1"
            >
            <b-form-input
              id="input-1"
              v-model="signUpData.email"
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
                v-model="signUpData.name"
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
              v-model="signUpData.email"
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
                v-model="signUpData.mobile_no"
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
              v-model="signUpData.password"
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
                v-model="signUpData.password_confirmation"
                placeholder="Enter name"
                required
              ></b-form-input>
              </b-form-group>
          </div>
        </div>

        <div class="row">
          <div class="col-8 text-center" style="margin:15px;">
            <b-button @click="registration" class="btn btn-sm mr-1" variant="primary">Register</b-button>
            <b-button @click="SignInFormShow" class="btn btn-sm mr-1" variant="primary">SignIn</b-button>
          </div>
        </div>

      </b-form>
    </div>


    <div class="container" style="padding-top:50px;padding-left:300px;" v-if="signedIn">
      <b-button @click="logOut" class="btn btn-sm mr-1" variant="primary">LogOut</b-button>
    </div>

    <div class="container" style="padding-top:100px;padding-left:300px;" v-if="signedIn">
      <h3> Welcome to Your Dream Library!!! </h3>
    </div>

    </div>
  </template>

  <script>
  // import { extend } from 'vee-validate';
  import axios from 'axios'

  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
        return {
          signIn: true,
          signUp: false,
          signedIn: false,
          homeUrl: '/book/book-request',
          form: {
            email: 'opt.shamim@gmail.com',
            password: '123456',
          },
          signUpData: {
            name: 'Shamim Reza',
            email: 'opt.shamim@gmail.com',
            password: '123456',
            password_confirmation: '123456',
            mobile_no: '01714458644'
          },
          show: true
        }
      },

    computed: {
      products () {
        return this.$store.getters.availlableProducts
      }
    },

    created () {
      console.log('this.$store', this)

      this.$store.dispatch('fetchProducts')


    },


    methods : {
      async logInData () {
        axios.post('http://127.0.0.1:8000/api/auth/login', this.form)
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log('failed to login')
            console.log(error);
          });

              this.signIn = false
            this.signUp = false
            this.signedIn = true
      },

      async registration () {
        axios.post('http://127.0.0.1:8000/api/auth/register', this.signUpData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          this.signedIn = false
          this.signUp = false
          this.signIn = true
      },

      SignUpFormShow () {
          this.signIn = false
          this.signedIn = false
          this.signUp = true
      },

      SignInFormShow () {
          this.signedIn = false
          this.signUp = false
          this.signIn = true
      },

      async logOut () {
        await axios.post('http://127.0.0.1:8000/api/auth/logout', {headers: { 'Authorization' : 'Bearer '+ 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY3MDk4NDQyNiwiZXhwIjoxNjcwOTg4MDI2LCJuYmYiOjE2NzA5ODQ0MjYsImp0aSI6IklHeWJTN0VCMzFRMGVqRTciLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.swTa8SE1o1ahGJOUevC7AY9bNXB5UGaSzfroylu-LnA'
  }})
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log('failed to login')
            console.log(error);
          });

          this.signedIn = false
          this.signUp = false
          this.signIn = true
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
