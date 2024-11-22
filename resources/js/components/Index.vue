<template>
    <div>
        <router-link :to="{name: 'get.index'}" class="btn btn-outline-success"> Get </router-link>
<!--        <router-link v-if="accessToken" :to="{name: 'user.personal'}" class="btn btn-outline-secondary ms-3"> Personal </router-link>-->
        <router-link :to="{name: 'user.login'}" class="btn btn-outline-primary ms-3"> Login </router-link>
        <router-link :to="{name: 'user.register'}" class="btn btn-outline-primary ms-3"> Register </router-link>
<!--        <a v-if="accessToken" @click.prevent="logout" href="#" class="btn btn-outline-primary ms-3">Logout</a>-->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index",

}
</script>

<style scoped>

</style>
