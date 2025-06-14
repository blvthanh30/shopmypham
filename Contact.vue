<template>
  <DefaultLayout>
    <div class="contact-page-wrapper">
      <div class="contact-form-container">
        <h2>Bạn có thắc mắc nào không?</h2>
        <h5>Hãy liên hệ với chúng tôi</h5>

        <div class="brand-info">
          <a class="navbar-brand fw-bold text">
            <i class="fas fa-spa me-2 text-pink"></i> Glow UP
          </a>
        </div>

        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label for="fullName">Họ và tên</label>
              <input
                type="text"
                id="fullName"
                v-model="form.fullName"
                required
                placeholder="Ví dụ: Nguyễn Văn A"
              />
            </div>
            <div class="form-group">
              <label for="phone">Số điện thoại</label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                required
                placeholder="Ví dụ: 0912345678"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              required
              placeholder="Ví dụ: email@example.com"
            />
          </div>

          <div class="form-group">
            <label for="message">Tin nhắn</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              placeholder="Nội dung tin nhắn của bạn..."
            ></textarea>
          </div>

          <button type="submit" class="submit-button">Gửi tin nhắn</button>
        </form>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { ref } from "vue";

const form = ref({
  fullName: "",
  phone: "",
  email: "",
  message: "",
});

const handleSubmit = () => {
  // Xử lý gửi form
  console.log("Form submitted:", form.value);

  // Trong một ứng dụng thực tế:
  // - Gọi API để gửi dữ liệu đến backend
  // - Hiển thị thông báo thành công/thất bại cho người dùng
  // - Xóa form sau khi gửi thành công
  alert("Cảm ơn bạn! Thông tin đã được gửi thành công.");
  form.value = {
    fullName: "",
    phone: "",
    email: "",
    message: "",
  };
};
</script>

<style scoped>
/* Wrapper chung cho trang liên hệ */
.contact-page-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--header-height, 80px) - var(--footer-height, 60px)); /* Điều chỉnh theo chiều cao header/footer của bạn */
  background-color: #f8f8f8; /* Nền nhẹ nhàng cho trang */
  padding: 40px 20px;
}

/* Container chính của form */
.contact-form-container {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  max-width: 800px; /* Tăng chiều rộng tối đa */
  width: 100%;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.05); /* Viền mỏng */
}

h2 {
  color: #333;
  font-size: 2.2rem;
  margin-bottom: 10px;
}

h5 {
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 30px;
}

/* Brand info */
.brand-info {
  margin-bottom: 30px;
}

.navbar-brand {
  display: inline-flex;
  align-items: center;
  font-size: 1.8rem;
  color: #3f3e3e;
  text-decoration: none;
}

.navbar-brand .fa-spa {
  font-size: 2rem;
  margin-right: 8px;
  color: #ed45a7; /* Màu hồng cho icon */
}

/* Form layout */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Khoảng cách giữa các nhóm form */
}

.form-row {
  display: flex;
  gap: 20px; /* Khoảng cách giữa Full Name và Phone */
}
.form-row > .form-group {
  flex: 1; /* Chia đều không gian */
}

.form-group {
  text-align: left;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #444;
  font-style: normal; /* Đặt lại font-style nếu bạn không muốn italic */
}

input,
textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px; /* Bo tròn vừa phải */
  font-size: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box; /* Đảm bảo padding không làm tăng chiều rộng */
}

input::placeholder,
textarea::placeholder {
  color: #aaa; /* Màu placeholder mờ hơn */
}

input:focus,
textarea:focus {
  border-color: #ed45a7; /* Màu border khi focus */
  box-shadow: 0 0 0 0.2rem rgba(237, 69, 167, 0.2); /* Hiệu ứng shadow khi focus */
  outline: none;
}

textarea {
  resize: vertical; /* Cho phép người dùng thay đổi chiều cao */
  min-height: 120px;
}

/* Button gửi */
.submit-button {
  background: linear-gradient(
    45deg,
    #ed45a7,
    #ff6b8b
  ); /* Gradient màu hồng */
  color: white;
  border: none;
  border-radius: 25px; /* Bo tròn nhiều hơn */
  padding: 14px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: auto; /* Tự động điều chỉnh chiều rộng theo nội dung */
  align-self: center; /* Căn giữa button trong flex container */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.submit-button:hover {
  transform: translateY(-2px); /* Hiệu ứng nhấc nhẹ lên */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  filter: brightness(1.05); /* Sáng hơn một chút khi hover */
}
</style>