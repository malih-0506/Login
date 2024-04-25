<template>
    <h1>SignIn to an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="text" placeholder="Password" v-model="password" /></p>
    <P v-if="errMsg">{{ errMsg }}</P>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router' // import router
const email = ref("");
const password = ref("");
const errMsg = ref() //ERROR MESSAGE
const router = useRouter() //get a reference to our vue router 

const register = () => {
    //need .value because ref()
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
        console.log("Successfully signed in!");

        console.log(auth.currentUser)
        
        router.push('/feed') // redirect to the feed
    })
    .catch((error) => {
        console.log(error.code);
        switch (error.code) {
            case "auth/invalid-email":
             errMsg.value = "Invalid email";
             break;
            case "auth/user-not-found":
             errMsg.value = "No account with that email was found";
             break;
            case "auth/wrong-password":
             errMsg.value = "Incorrect password";
             break;
            default:
             errMsg.value = "Email or password was incorrect";
             break;
        }
        alert(error.message);
    });
};

const signInWithGoogle = () => {

}

</script>

