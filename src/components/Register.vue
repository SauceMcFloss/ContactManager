<template>
<div style="background-color:#000000; min-height:100vh;">
    <b-container>
        <h3 style="color:#F2C413;">Team YIKES</h3>
        <b-card style="background-color:#000000;">
            <h2 style="color:#F2C413;">Register</h2>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <!-- <b-form-group id="emailaddress" label="Email Address:" label-for="emailaddress">
                    <b-form-input id="emailaddress" type="email" v-model="form.emailaddress" required placeholder="Enter email address">
                    
                    </b-form-input>
                </b-form-group> -->
                <b-form-group style="color:#F2C413;" id="username" label="Username:" label-for="username">
                    <b-form-input id="username" type="text" v-model="form.username" required placeholder="Enter username">

                    </b-form-input>
                </b-form-group>
                <b-form-group style="color:#F2C413;" id="password" label="Password:" label-for="password">
                    <b-form-input id="password" type="password" v-model="form.password" required placeholder="Enter password">

                    </b-form-input>
                </b-form-group>
                <b-button style="color:#000000; background-color:#B79A62; border-color:#000000;" type="submit" variant="primary">Register</b-button>
                <b-button style="color:#000000; background-color:#B79A62; border-color:#000000;" type="reset" variant="danger">Reset</b-button>
            </b-form>
        </b-card>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
import EventBus from '../event-bus.js'

export default {
data () {
    return {
      form: {
        // emailaddress:'',
        username: '',
        password: '',
      },
      show: true
    }
  },

  methods: {

    // On submit we POST data to the api 
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));

      var formPayload = {
        username: this.form.username,
        password: this.form.password,
      }

      let uri = 'http://157.230.2.57:3000/user/register';
      axios.post(uri, formPayload).then(function(response){
        console.log(response.data);
      })

    },
    onReset (evt) {
      evt.preventDefault();
      this.form.username='',
      this.form.password=''
    }
  }
}
</script>

<style>

</style>
