<template>
    <header>
        <div class="nav">
            <ul>
                <li>Main</li>
                <li>Tresh ({{tresh.length}})</li>
            </ul>
        </div>
        <router-link to="/">
            <h1 class="logo">
                <span class="hred">Hate</span>
                <span class="hpink">OrLove</span>
            </h1>
        </router-link>
        <div class="account">
            <div class="login" v-if="isLoggedIn">{{user.user_name}}</div>
            <div class="info" @click="openWindow" v-else>Войти</div>
        </div>
    </header>
    <ModalWindow v-if="isShowWindow" :title="showLogin ? 'Войти' : 'Зарегистрироваться'" :close="closeWindow">
        <form class="login" v-on:submit.prevent="onSubmit" v-if="showLogin">
            <input type="text" name="login" placeholder="Логин" />
            <input type="password" name="password" placeholder="Пароль" />
            <span class="link" @click="toggleLogin" >Зарегистрироваться</span>
            <input type="submit" class="btn login" value="Войти" />
        </form>
        <form class="registr" v-on:submit.prevent="onSubmit" v-else>
            <input type="text" name="login" placeholder="Логин" />
            <input type="password" name="password" placeholder="Пароль" />
            <input type="password" name="rpassword" placeholder="Повторите пароль" />
            <span class="link" @click="toggleLogin" >Войти</span>
            <input type="submit" class="btn login" value="Войти" />
        </form>
    </ModalWindow>
</template>

<script>
import ModalWindow from './ModalWindow.vue'

export default {
    data() {
        return {
            user: {
                user_id: undefined,
                user_name: undefined
            },
            tresh: [],
            isLoggedIn: false,
            isShowWindow: false,
            showLogin: true
        }
    },
    components: {
        ModalWindow
    },
    created() {
        setTimeout(() => {
            this.user = {
                user_id: 1,
                user_name: "orlov"
            }
            this.isLoggedIn = true
        }, 2000)
        // fetch('http://localhost:3030/auth/me')
        // .then(response => console.log(response))
    },
    beforeMount() {
        this.tresh = this.$store.state.tresh
    },
    methods: {
        toggleLogin() {
            this.showLogin = !this.showLogin
        },
        closeWindow() {
            this.isShowWindow = false
        },
        openWindow() {
            this.isShowWindow = true
        },
        onSubmit(e) {
            console.log(e);
        }
    }
}
</script>

<style>
header {
    width: 100%;
    height: 140px;
    min-height: 58px;
    max-height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 0 10px var(--main-color);
}
.hred {
    color: #FF3333;
    text-shadow: 0 0 4px #FF3333;
    transition: 0.2s;
}
.hpink {
    color: #FF3399;
    text-shadow: 0 0 4px #FF3399;
    transition: 0.2s;
}
.logo:hover .hred {
    text-shadow: 0 0 10px #FF3333;
}
.logo:hover .hpink {
    text-shadow: 0 0 10px #FF3399;
}
.account {
    transition: 0.2s;
}
.account:hover {
    cursor: pointer;
    text-shadow: 0 0 4px #FF3333;
    color: var(--main-color);
}
</style>