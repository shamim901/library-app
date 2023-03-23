<template>
  <div class="container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <div class="row">
        <div class="col">
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
        <div class="col">
          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
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
        <div class="col">
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
        <div class="col">
          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
            </b-form-group>
        </div>
      </div>

      <div class="row" style="margin: 15px">
        <div class="col-9">
        </div>
        <div class="col-3">
          <b-button type="submit" class="btn btn-sm" variant="primary">Submit</b-button>

          <b-button type="reset" class="btn btn-sm" variant="danger">Reset</b-button>
        </div>
      </div>

    </b-form>
  </div>
</template>


<script>
export default {
  name: 'HelloVue',
  props: {
    msg: String
  },
  data() {
    return {
      form: {
          email: '',
          name: '',
          food: null,
          checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvent) {
        console.log('sss')
        // Prevent modal from closing
        bvModalEvent.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
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
