<template>
    <b-container>
        <b-row>
            <b-col>
                <b-card>
                    <b-form @submit="onAdd" @reset="onClear" v-if="show">
                        <b-form-group id="firstName" label="First Name:" label-for="lastname">
                            <b-form-input id="firstName" type="text" v-model="form.firstName" required placeholder="First Name">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="lastname" label="Last Name:" label-for="lastname">
                            <b-form-input id="lastname" type="text" v-model="form.lastname" required placeholder="Last Name">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="phonenumber" label="Phone Number" label-for="phonenumber">
                            <b-form-input id="phonenumber" type="text" v-model="form.phonenumber" required placeholder="Phone Number">
                            </b-form-input>
                        </b-form-group>
                        <b-button type="submit" variant="primary">Add Contact</b-button>
                        <b-button type="reset" variant="danger">Clear</b-button>
                    </b-form>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data () {
        return {
            form: {
                firstname:'',
                lastname:'',
                phonenumber:''
            },
            show: true
        }
    },

    methods: {
        onSubmit(evt) 
        {
            evt.preventDefault();
            alert(JSON.stringify(this.form));
        },

        onReset(evt)
        {
            evt.preventDefault();
            this.form.firstname='',
            this.form.lastname='',
            this.form.phonenumber=''
        }
    }
}
</script>

<style>
</style>
