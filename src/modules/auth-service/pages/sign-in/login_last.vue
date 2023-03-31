<template>
  <div class="login_wrapper" style="background-image: url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg'); height: 100vh">
    <div>
      <div class="card login-form">
        <div class="card-body">
          <div class="login-form-area">
            <div class="card-title text-center" style="margin-bottom: 20px">
              <img class="img-fluid" width="75" src="@/assets/images/login/new.jpg" alt="">
            </div>
            <div class="card-text">
              <ValidationObserver ref="form" v-slot="{ handleSubmit, reset }">
                <b-form @submit.prevent="handleSubmit(mutation)" @reset.prevent="reset" autocomplete="off">
                  <ValidationProvider name="Username/Email/Mobile" vid="email">
                    <b-input-group label-for="email" style="display: block;height: 60px;">
                      <b-form-input style="display: inline-block;width: 85%;height: 34px;" id="email" v-model="form.email"
                        placeholder="email">
                      </b-form-input>
                    </b-input-group>
                  </ValidationProvider>
                  <ValidationProvider name="password">
                    <b-input-group label-for="password" style="display: block;height: 60px;"
                      class="">
                      <b-form-input style="display: inline-block;width: 85%;height: 34px;" id="password" type="password"
                        v-model="form.password" placeholder="password" autocomplete="off"></b-form-input>
                    </b-input-group>
                  </ValidationProvider>
                  <div class="mt-3">
                    <b-row>
                      <b-col sm="12" md="12" style="text-align: center">
                        <button class="btn btn-success btn-block login-btn" type="submit">{{ 'login' }}</button>
                      </b-col>
                    </b-row>
                  </div>
                  <div class="sign-up mt-2">
                    <span class="float-left">
                      {{ ("Don't have an account?") }}
                    </span>
                    <span style="float: right">
                      <router-link :to="{ name: 'sign_up' }">
                        {{ ('Sign Up') }}
                      </router-link>
                    </span>
                  </div>
                </b-form>
              </ValidationObserver>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { extend } from 'vee-validate';
import axios from 'axios'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { authServiceBaseUrl } from '@/config/api_config'
import { loginApiUrl } from '../../api/index'

export default {
  components: { ValidationObserver, ValidationProvider },
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
        show: true
      }
    },
  methods : {
    async logIn () {
      axios.post('http://127.0.0.1:8000/api/auth/login', this.form)
        .then(function (response) {
          if(response.data.success) {
           this.$router.push('/book/book-request')
          }
        })
        .catch(function (error) {
          console.log('failed to login')
          console.log(error);
        });
    }
  }
</script>


<style scoped>
  .login_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 0 2rem; */
  }
  .login_wrapper .company-logo {
    margin-top: 50px;
    padding: 2px 15px;
    color: #fff;
    background: rgb(29 76 29 / 70%) !important;
    text-align: right;
    border-radius: 4px;
    box-shadow: 0px 1px 6px 1px rgb(24 51 21);
  }
  .login_wrapper .company-logo a:hover {
    text-decoration: none !important;
  }
  .card {
    background: rgb(29 76 29 / 34%) !important;
    /* border: none !important; */
    color: #fff !important;
    min-width: 22em !important;
    border: 1px solid rgb(0, 255, 255);
    z-index: 999999;
    box-shadow: 0px 1px 6px 1px rgb(24 51 21);
  }
  .card-body {
    padding: 20px;
  }
  .login_wrapper .company-logo {
    margin-top: 50px;
    padding: 2px 15px;
    color: #fff;
    background: rgb(29 76 29 / 70%) !important;
    text-align: right;
    border-radius: 4px;
    box-shadow: 0px 1px 6px 1px rgb(24 51 21);
  }
  .login_wrapper .company-logo a:hover {
    text-decoration: none !important;
  }
  .login-form {
    border: 1px #FFF !important;
  }
  .login-form-area {
    position: relative !important;
  }
  .login-form-area .login-btn {
    font-size: 0.96rem;
  }
  .login-form-area .login-btn:hover {
    text-decoration: none !important;
  }
  .font-bn .login-form-area .login-btn {
    font-size: 1.1rem;
  }
  .loader {
    background: rgb(29 80 26 / 90%);
    left: -20px !important;
    top: 32px !important;
    width: 114% !important;
    height: 119% !important;
    z-index: 100;
  }
  .loader img {
    position: absolute !important;
    top: 50%;
    left: 50%;
    width: 85px;
    transform: translate(-50%, -50%);
    z-index: 9;
  }
  input#email[data-v-3f9ae065], input#password[data-v-3f9ae065] {
      height: 32px;
      background: #ffffffc2 !important;
      border: none;
      border-radius: 0px 50px 50px 0px;
  }
  a {
    color: #ffffff !important;
  }
  a:hover {
      color: #eee !important;
      text-decoration: underline !important;
  }
  .card-header{
    background-color: #c7cef8 !important; border-bottom: 0px!important;
  }
  .btn-custom{
    background-color: #596DE1;
    color: #fff;
  }
  input#email, input#password{
    border: 1px solid #c1c1c1;
  }
  .invalid-feedback{
    margin-left: 43px;
  }
  .form-control {
    background: #FFF !important;
    color: #000 !important;
  }
  label {
    color: #ffffff;
  }
  [dir=ltr][mode=light] .is-invalid ~ .invalid-feedback, [dir=ltr][mode=light] .is-invalid ~ .invalid-tooltip, [dir=ltr][mode=light] .was-validated :invalid ~ .invalid-feedback, [dir=ltr][mode=light] .was-validated :invalid ~ .invalid-tooltip {
    font-weight: 500;
    font-size: 14px;
    color: #fb6363;
  }

  .alert .iq-alert-text {
    width: 95%;
    font-size: 13px;
    display: inline-block;
  }
</style>
