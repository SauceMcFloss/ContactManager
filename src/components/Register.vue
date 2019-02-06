<template>
<div style="background-color:#231F20; min-height:100vh;">
	<b-navbar style="color:#231F20; background-color:#B79A62; border-color:#231F20;">
		<b-navbar-brand><b><font face = "Verdana" size ="5">Yeet Another Contact Manager</font></b></b-navbar-brand>
		<b-navbar-nav class="ml-auto"></b-navbar-nav>
	</b-navbar>
	<br></br>
    <b-container>
        <b-card style="background-color:#231F20; border-color:#B79A62;">
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
				
				<b-form-group style="color:#F2C413;" id="confirm" label="Confirm Password:" label-for="confirm">
                    <b-form-input id="confirm" type="password" v-model="form.confirm" required placeholder="Re-enter password">

                    </b-form-input>
                </b-form-group>
				
                <b-button style="color:#231F20; background-color:#B79A62; border-color:#231F20;" type="submit" variant="primary"><b>Register</b></b-button>
                <b-button style="color:#231F20; background-color:#B79A62; border-color:#231F20;" type="reset" variant="danger"><b>Reset</b></b-button>
				<b-button style="color:#231F20; background-color:#B79A62; border-color:#231F20;" type="reset" variant="danger" @click="routeLogin()"><b>Already have an account?</b></b-button>
			</b-form>
        </b-card>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router.js';
import {EventBus} from '../event-bus.js';

export default {
data () {
    return {
      form: {
        // emailaddress:'',
        username: '',
        password: '',
		confirm: '',
      },
      show: true
    }
  },

  methods: {

    // Function registers user and redirects to login
    onSubmit (evt) {

      // Prevent submission without completion
      evt.preventDefault();

	  if(this.form.password != this.form.confirm){
		  alert("Passwords don't match! Registration unsuccessful.");
	  }
	  else{
	  	// JSON payload format
		  var formPayload = {
			username: this.form.username,
			password: this.form.password,
		  }

		  // Set the uri that axios needs
		  var uri = 'http://157.230.2.57:3000/user/register';
		  
		  // Axios post request to the address above
		  axios.post(uri, formPayload).then(function(response){
		  
			  // Set to localstorage 
			  localStorage.setItem('userId', response.data._id);
		  
			  // Push to login page so user can now login again
			  router.push('/login');
		  })
		  
		  // Post message to user on success
		  alert("Registration successful!");
	  }

    },

    // Function to reset the form
    onReset (evt) {
      evt.preventDefault();
      this.form.username='',
      this.form.password='',
	  this.form.confirm=''
    },
	routeLogin() {
      router.push('/login');
    }
  }
}
</script>

<style>

</style>
