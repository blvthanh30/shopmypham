<template>
  <DefaultLayout>
    <div class="login-page-container">
      <div class="login-box">
        <h2>Đăng nhập</h2>

        <div v-if="authStore.currentUser" class="alert alert-success">
          🎉 Đã đăng nhập với: {{ authStore.currentUser.email }}
        </div>

        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input v-model="form.email" type="email" class="form-control" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Mật khẩu</label>
            <input v-model="form.password" type="password" class="form-control" required />
          </div>

          <div v-if="loginError" class="alert alert-danger">
            {{ loginError }}
          </div>

          <button type="submit" class="btn btn-primary w-100" :disabled="authStore.loading">
            <span v-if="authStore.loading" class="spinner-border spinner-border-sm"></span>
            <span v-else>Đăng nhập</span>
          </button>
        </form>

        <div class="mt-3 text-center">
          <p>
            Chưa có tài khoản?
            <router-link to="/register">Đăng ký ngay</router-link> <br>
            <router-link to="/ForgotPassword">Quên mật khẩu</router-link>
          </p>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const authStore = useAuthStore();
const router = useRouter();

const form = ref({
  email: "",
  password: "",
});

const loginError = ref("");

const handleLogin = async () => {
  loginError.value = "";

  const { email, password } = form.value;

  if (!email || !password) {
    loginError.value = "❌ Vui lòng nhập email và mật khẩu.";
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    loginError.value = "";
    router.push("/"); // Chuyển hướng sau khi đăng nhập thành công
  } catch (error) {
    console.error("Login Error:", error);
    loginError.value = "❌ Email hoặc mật khẩu không đúng.";
  }
};
</script>
<style scoped>
.login-page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  background-color: #f0f2f5;
}
.login-box {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 420px;
  text-align: center;
}
.form-label {
  text-align: left;
  display: block;
  font-weight: 600;
  color: #555;
}
.form-control {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ced4da;
  border-radius: 8px;
}
.btn-primary {
  padding: 12px;
  font-size: 1.1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
}
</style>