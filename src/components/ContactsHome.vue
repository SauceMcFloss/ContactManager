<template>
    <div style="background-color:#231F20; min-height:100vh;">
        <b-navbar style="color:#231F20; background-color:#B79A62; border-color:#231F20;">
            <b-navbar-brand><b><font face = "Verdana" size ="5">Yeet Another Contact Manager</font></b></b-navbar-brand>
            <b-navbar-nav class="ml-auto"></b-navbar-nav>
			<b-button style="color:#B79A62; background-color:#231F20; border-color:#B79A62;" type="reset" variant="danger" @click="routeLogin()"><b>Logout</b></b-button>
        </b-navbar>
		<br></br>
        <b-container>
            <b-row>
                <b-col>
                    <b-card style="background-color:#231F20; color:#F2C413; border-color:#B79A62;">
                    <b-form v-show="true" @submit="onSubmit">
                        <b-form-group id="firstnameGroup" label="First Name:" label-for="firstname">
                            <b-form-input id="firstname" type="text" v-model="form.firstname" required placeholder="First Name">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="lastnameGroup" label="Last Name:" label-for="lastname">
                            <b-form-input id="lastname" type="text" v-model="form.lastname" required placeholder="Last Name">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="phonenumberGroup" label="Phone Number:" label-for="phonenumber">
                            <b-form-input id="phonenumber" type="number" v-model="form.phonenumber" required placeholder="Phone Number">
                            </b-form-input>
                        </b-form-group>
                        <b-button style="color:#231F20; background-color:#B79A62; border-color:#231F20;" type="submit" variant="primary"><b>Add Contact</b></b-button>
                    </b-form>
                </b-card> 
                </b-col>
                <b-col> 
                    <b-card-group>
                        <b-card style="background-color:#231F20; color:#F2C413; border-color:#B79A62;" header="<b>Contacts</b>">
                            <b-list-group>
                                <b-list-group-item v-for="(contact, index) in contacts" :key="contact.id">
                                    Name: {{contact.firstname}} {{contact.lastname}} 
                                    Phone: {{contact.phonenumber}} 
                                    <b-button class="btn btn-danger btn-sm" style="float:right" v-on:click="deleteContact(index)"><b>Delete</b></b-button>
                                </b-list-group-item>
                            </b-list-group>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import router from '../router'
import axios from 'axios';
import {EventBus} from '../event-bus.js'

export default {  

    data() {

        return {
            
            // Form data for adding contacts
            form: {
                firstname:'',
                lastname:'',
                phonenumber:''
            },

            // Array of contacts 
            contacts: [],
            
        }
    },

    // Lifecycle hook: Will fire when component is mounted. Here we have our event listener
    mounted() {
        this.getAllContacts();
    },

    methods: {

        getAllContacts()
        {
            // Holds the user ID needed for Axios call later
            var currentUserId = { userId : localStorage.getItem('userId')};
            
            // API call to get all contacts
            let uri = 'http://157.230.2.57:3000/contacts/getAllContacts';
            axios.post(uri, currentUserId).then(function(response) {

                console.log(response.data);

                // Push contacts here
            });
        },

        // Add contact onto the arraylist
        onSubmit(evt)
        {
            // alert(JSON.stringify(this.form));

            var addContactForm = {
                firstName: this.form.firstname,
                lastName: this.form.lastname,
                phoneNumber: this.form.phonenumber
            }

            // // This will push the contact from the add contact form onto the contacts list 
            // let uri = 'http://localhost:3000/contacts/addContact'
            // axios.post(uri, addContactForm).then(function(response){
            //     console.log(response.data.message);
            //     this.contactId
            // })

                  
        },

        // Delete the contact from the contacts array above
        deleteContact: function(index) {
            this.contacts.splice(index, 1);
            console.log("Deleted!");

        },
		routeLogin() {
		  router.push('/login');
		  alert("You have been logged out");
		}
    }  
}
</script>

<style>
</style>
