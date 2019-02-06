<template>
    <div style="background-color:#000000; min-height:100vh;">
        <b-navbar style="color:#000000; background-color:#B79A62; border-color:#000000;">
            <b-navbar-brand>Yeet Another Contact Manager</b-navbar-brand>
            <b-navbar-nav class="ml-auto"></b-navbar-nav>
        </b-navbar>
        <b-container>
            <b-row>
                <b-col>
                    <b-card style="background-color:#000000; color:#F2C413; border-color:#B79A62;">
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
                        <b-button style="color:#000000; background-color:#B79A62; border-color:#000000;" type="submit" variant="primary">Add Contact</b-button>
                    </b-form>
                </b-card> 
                </b-col>
                <b-col> 
                    <b-card-group>
                        <b-card style="background-color:#000000; color:#F2C413; border-color:#B79A62;" header="<b>Contacts</b>">
                            <b-list-group>
                                <b-list-group-item v-for="(contact, index) in contacts" :key="contact.id">
                                    Name: {{contact.firstname}} {{contact.lastname}} 
                                    Phone: {{contact.phonenumber}} 
                                    <b-button class="btn btn-danger btn-sm" style="float:right" v-on:click="deleteContact(index)">Delete</b-button>
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
import axios from 'axios';
import EventBus from '../event-bus.js'

export default {  

    data() {

        return {
            
            form: {
                firstname:'',
                lastname:'',
                phonenumber:''
            },

            // Array of contacts 
            contacts: [],
            
        }
    },

    created() {
        // Fetches the contacts for that user upon load
        this.fetchContacts();
    },

    methods: {
        
        // Fetch contacts method; called above in created()
        fetchContacts()
        {   
            // Holds the current user's ID
            var currUserId;

            // Event bus catches the user id from postman request so it can be used below to get current contacts in DB
            EventBus.$on('userRegistration', userId => {
                console.log('The user logged in ID is: ' + userId);
                currUserId = { userId };
                console.log("Current user ID is: " + currUserId);
            })

            let uri = 'http://157.230.2.57:3000/contacts/getAllContacts';
            // Get all current contacts in DB for this user
            axios.post(uri, currUserId).then(function(response) {
                console.log(response.data.contacts);
                // this.contacts = this.contacts.concat(response.data.contacts);
            })



        },

        onSubmit(evt)
        {
            alert(JSON.stringify(this.form));
            console.log("Add Contact button fired");

            // This will push the contact from the add contact form onto the contacts list 
            // this.contacts.push({firstname: this.form.firstname, lastname: this.form.lastname, phonenumber: this.form.phonenumber});          

        },  

        // Delete the contact from the contacts array above
        deleteContact: function(index) {
            this.contacts.splice(index, 1);
            console.log("Deleted!");

        }
    }  
}
</script>

<style>
</style>
