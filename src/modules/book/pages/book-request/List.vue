<template>
  <div class="card">
    <div class="card-body">
      <div class="row titleClass">
        <div class="col-md-10">
          <h5 class="card-title">Book Request</h5>
        </div>
        <div class="col-md-2">
          <b-button v-b-modal.modal-prevent-closing style="background-color: rgb(198, 241, 200);color:black">Form</b-button>
        </div>
      </div>
      <div class="hello">
        <b-table striped hover :items="items"></b-table>
      </div>
    </div>
    
    <b-modal id="modal-prevent-closing" ref="modal" size="lg" title="Book Request" ok-only ok-variant="danger"  :header-bg-variant="headerBgVariant" :header-text-variant="headerTextVariant">
      <Form />
    </b-modal>
    
  </div>
</template>

<script>

  import Form from './Form'
  import { mapGetters } from 'vuex'

  export default {
    name: 'HelloWorld',
    components: {
      Form
    },
    computed: mapGetters(['allTodos']),
    data() {
        return {
          items: [
            { age: 1, first_name: 'Dickerson', last_name: 'Macdonald' },
            { age: 2, first_name: 'Larsen', last_name: 'Shaw' },
            { age: 3, first_name: 'Geneva', last_name: 'Wilson' },
            { age: 4, first_name: 'Jami', last_name: 'Carney' },
            { age: 5, first_name: 'Dickerson', last_name: 'Macdonald' },
            { age: 6, first_name: 'Larsen', last_name: 'Shaw' },
            { age: 7, first_name: 'Geneva', last_name: 'Wilson' }
          ],
          headerBgVariant: 'dark',
          headerTextVariant: 'light'
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
  .titleClass {
    text-align: center;
    font-weight: bold;
    background-color: rgb(198, 241, 200);
  }
</style>
