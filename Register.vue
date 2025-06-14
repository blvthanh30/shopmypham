<template>
  <DefaultLayout>
    <div class="register-page-container">
      <div class="register-box">
        <h2>Đăng ký</h2>

        <!-- ✅ Hiển thị khi đã đăng nhập -->
        <div v-if="authStore.currentUser" class="alert alert-success">
          🎉 Đã đăng nhập với: {{ authStore.currentUser.email }}
        </div>

        <form @submit.prevent="handleRegister">
          <div class="mb-3">
            <label class="form-label">Họ và tên</label>
            <input v-model="form.name" type="text" class="form-control" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Email</label>
            <input v-model="form.email" type="email" class="form-control" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Số điện thoại</label>
            <input v-model="form.phone" type="tel" class="form-control" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Địa chỉ</label>
            <input v-model="form.address" type="text" class="form-control" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Mật khẩu</label>
            <input v-model="form.password" type="password" class="form-control" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Xác nhận mật khẩu</label>
            <input v-model="form.confirmPassword" type="password" class="form-control" required />
          </div>

          <div v-if="registerError" class="alert alert-danger">
            {{ registerError }}
          </div>
          <div v-if="registerSuccess" class="alert alert-success">
            {{ registerSuccess }}
          </div> 

          <button type="submit" class="btn btn-primary w-100" :disabled="authStore.loading">
            <span v-if="authStore.loading" class="spinner-border spinner-border-sm"></span>
            <span v-else>Đăng ký</span>
          </button>
        </form>

        <div class="mt-3 text-center">
          <p>
            Đã có tài khoản?
            <router-link to="/login">Đăng nhập ngay</router-link>
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
import { auth, db } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const authStore = useAuthStore();
const router = useRouter();

const form = ref({
  name: "",
  email: "",
  phone: "",
  address: "",
  password: "",
  confirmPassword: "",
});

const registerError = ref("");
const registerSuccess = ref("");

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone) => /^[0-9]{10,11}$/.test(phone);

const handleRegister = async () => {
  registerError.value = "";
  registerSuccess.value = "";

  const { name, email, phone, address, password, confirmPassword } = form.value;

  if (!name || !email || !phone || !address || !password || !confirmPassword) {
    registerError.value = "❌ Vui lòng điền đầy đủ thông tin.";
    return;
  }

  if (!isValidEmail(email)) {
    registerError.value = "❌ Email không hợp lệ.";
    return;
  }

  if (!isValidPhone(phone)) {
    registerError.value = "❌ Số điện thoại không hợp lệ.";
    return;
  }

  if (password.length < 6) {
    registerError.value = "❌ Mật khẩu phải từ 6 ký tự trở lên.";
    return;
  }

  if (password !== confirmPassword) {
    registerError.value = "❌ Mật khẩu xác nhận không khớp.";
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      address: address.trim(),
      createdAt: serverTimestamp(),
      
    });
  

    registerSuccess.value = "✅ Đăng ký thành công! Chuyển đến trang đăng nhập...";
    form.value = {
      name: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      confirmPassword: "",
    };

    setTimeout(() => {
      router.push("/login");
    }, 2000);
  } catch (error) {
    console.error("Register Error:", error);
    if (error.code === "auth/email-already-in-use") {
      registerError.value = "❌ Email đã được sử dụng.";
    } else {
      registerError.value = `❌ Lỗi: ${error.message}`;
    }
  }
};
</script>

<style scoped>
.register-page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  background-color: #f0f2f5;
}
.register-box {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 420px;
  text-align: center;
}
h2 {
  margin-bottom: 30px;
  color: #333;
  font-size: 1.8rem;
}
.mb-3 {
  margin-bottom: 1.5rem !important;
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
.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
  outline: none;
}
.btn-primary {
  padding: 12px;
  font-size: 1.1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
}
.btn-primary:hover {
  background-color: #0056b3;
}
.alert-danger, .alert-success {
  margin-top: 15px;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  border-radius: 6px;
  text-align: left;
}
.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
}
.alert-success {
  color: #155724;
  background-color: #d4edda;
}
</style>
