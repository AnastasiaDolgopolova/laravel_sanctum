<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Login</div>

                        <div class="card-body">

                            <div class="row mb-3">
                                <label for="email" class="col-md-4 col-form-label text-md-end">Email Address</label>

                                <div class="col-md-6">
                                    <input id="email" v-model="email" type="email" class="form-control" name="email" required autocomplete="email" autofocus>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>

                                <div class="col-md-6">
                                    <input id="password" v-model="password" type="password" class="form-control" name="password" required autocomplete="current-password">
                                </div>
                            </div>

                            <div class="row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button @click.prevent="login" type="submit" class="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </div>

                            <div  class="row mb-0">
                                <div v-if="error" class="text-danger col-md-8 offset-md-4">{{ this.error}}</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "@/api";
import Cookies from 'js-cookie';

export default {
    name: "Login",

    data() {
        return {
            email: null,
            password: null,
            error: null
        }
    },

    methods: {
        login() {
            api.post('/login', {
                email: this.email,
                password: this.password,
            })
                .then(res => {
                    localStorage.setItem('x_xsrf_token', Cookies.get("XSRF-TOKEN"));
                    this.$router.push({name: 'user.personal'});
                })
                .catch(error =>{
                    this.error = error.response.data.message;
                })
        },
    }

}

</script>

<style scoped>

</style>
