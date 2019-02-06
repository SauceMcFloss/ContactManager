<template>
    <b-container>
        <b-card-group>
            <b-card header="<b>Contacts</b>">
            <b-list-group>
                <b-list-group-item v-for="(contact, index) in contacts" :key="contact.id">
                    Name: {{contact.firstname}} {{contact.lastname}} 
                    Phone: {{contact.phonenumber}} 
                    <b-button class="btn btn-danger btn-sm" style="float:right" v-on:click="deleteContact(index)">Delete</b-button>
                </b-list-group-item>
            </b-list-group>
            </b-card>
        </b-card-group>
    </b-container>
</template>

<script>
export default {

    data() {
        return {

            // Array of contacts 
            contacts: [
                {
                    unique_key: 1,
                    firstname: 'big',
                    lastname: 'chungus',
                    phonenumber: '911'
                },
                {
                    unique_key: 3,
                    firstname: 'john',
                    lastname: 'smith',
                    phonenumber: '(561)-483-1883' 
                }    
            ] 
        }
    },

    methods: {

        deleteContact: function(index) {
            this.contacts.splice(index, 1)
            console.log("Deleted!")

        }
    }    
}
</script>

<style>
</style>
