<template>
<div style="background-color:#231F20; min-height:100vh;">
	<b-navbar style="color:#231F20; background-color:#B79A62; border-color:#231F20;">
		<b-navbar-brand>Yeet Another Contact Manager</b-navbar-brand>
		<b-navbar-nav class="ml-auto"></b-navbar-nav>
	</b-navbar>
	<br></br>
    <b-container>
        <b-card style="background-color:#231F20; border-color:#B79A62;">
            <h2 style="color:#F2C413;">Login</h2>
            <b-form @submit="onSubmit" v-if="show">
            <b-form-group style="color:#F2C413;" id="username" label="Username:" label-for="username">
                <b-form-input id="username" type="text" v-model="form.username" required placeholder="Enter username">
                </b-form-input>
            </b-form-group>
            <b-form-group style="color:#F2C413;" id="password" label="Password:" label-for="password">
                <b-form-input id="password" type="password" v-model="form.password" required placeholder="Enter password">
                </b-form-input>
            </b-form-group>
            <b-button style="color:#231F20; background-color:#B79A62; border-color:#231F20;" type="submit" variant="primary">Login</b-button>
            <b-button style="color:#231F20; background-color:#B79A62; border-color:#231F20;" type="reset" variant="danger" @click="routeRegister()">Register</b-button>
            </b-form>
        </b-card>
    </b-container>
  </div>
</template>

<script>
import router from '../router'
import axios from 'axios'
import EventBus from '../event-bus.js'

export default {
data () {
    return {
      form: {
        username: '',
        password: '',
      },
      show: true
    }
  },

  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));

      // Store the username and password in 2 variables
      var formPayload = {
        username: this.form.username,
        password: this.form.password,
      }

      let uri = 'http://157.230.2.57:3000/user/login';
      var userId;
      axios.post(uri, formPayload).then(function(response) {
        var userId = response.data.userId;
        EventBus.$emit('userRegistration', userId);
        console.log('UserId Returned is: ' + userId);
      })

      // After login submission we we want to redirect the page to the contacts home page
      router.push('/contactshome');
    },

    routeRegister() {
      router.push('/register');
    }
  }
}
</script>

<style>

</style>
