<template>
    <div>
      <b-form-file
        id="excel_data"
        v-model="excel_attachment"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        v-on:change="onFileChange"
      ></b-form-file>
    <div class="container">
        <b-button @click="registration" class="btn btn-sm mr-1" variant="primary">submit</b-button>
    </div>
    </div>
  </template>

  <script>
  import axios from 'axios'

    export default {
      data() {
        return {
          excel_data: null,
          attachment: '',
          excel_attachment: []
        }
      },
      methods : {
        onFileChange (e) {
          this.attachment = e.target.files[0]
        },
        async registration () {

          const config = {
            headers: { 'content-type': 'multipart/form-data' }
          }

          var formData = new FormData()
          formData.append('excel_file', this.attachment)

          await axios.post('http://127.0.0.1:8001/excel-importer', formData, config)
                .then(function (response) {
                // console.log(response);
                })
                .catch(function (error) {
                // console.log(error);
                });
        }
      }
    }
  </script>