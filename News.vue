<template>
  <DefaultLayout>
    <div class="news-container">
      <h1>News</h1>
      <div class="news-content">
        <div v-for="article in newsArticles" :key="article.id" class="news-article">
          <h2>{{ article.title }}</h2>
          <div v-html="article.content"></div> 
          </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { ref } from "vue";

// Dữ liệu cho các bài viết tin tức
const newsArticles = ref([
  {
    id: 1,
    title: "Xu Hướng Mỹ Phẩm \"Xanh\" và Bền Vững Đang Lên Ngôi",
    content: `
      <p>Ngày càng nhiều người tiêu dùng quan tâm đến nguồn gốc và tác động của sản phẩm họ sử dụng. Mỹ phẩm "xanh" và bền vững không chỉ là một xu hướng mà còn là một phong cách sống. Các sản phẩm này thường sử dụng nguyên liệu tự nhiên, hữu cơ, không thử nghiệm trên động vật và có bao bì thân thiện với môi trường.</p>
      <p>Bạn có biết:</p>
      <ul>
        <li><b>Thành phần tự nhiên:</b> Chiết xuất từ thực vật, khoáng chất, vitamin.</li>
        <li><b>Bao bì tái chế:</b> Sử dụng vật liệu có thể tái chế hoặc phân hủy sinh học.</li>
        <li><b>Đạo đức sản xuất:</b> Đảm bảo điều kiện làm việc công bằng và không gây hại đến môi trường.</li>
      </ul>
      <p>Hãy cùng tìm hiểu về những thương hiệu tiên phong và cách bạn có thể bắt đầu hành trình làm đẹp "xanh" của mình!</p>
    `,
  },
  {
    id: 2,
    title: "Bí Quyết Chăm Sóc Da Chuẩn Hàn: Làn Da Mịn Màng Như Gương",
    content: `
      <p>Làn da căng bóng, mịn màng không tì vết luôn là niềm mơ ước của nhiều chị em phụ nữ. Bí quyết nằm ở quy trình chăm sóc da chuẩn Hàn Quốc với nhiều bước tỉ mỉ nhưng lại mang lại hiệu quả vượt trội.</p>
      <p>Các bước cơ bản bao gồm:</p>
      <ol>
        <li><b>Tẩy trang kép:</b> Loại bỏ hoàn toàn bụi bẩn và lớp trang điểm.</li>
        <li><b>Sữa rửa mặt:</b> Làm sạch sâu mà không gây khô da.</li>
        <li><b>Toner:</b> Cân bằng độ pH và chuẩn bị da cho các bước tiếp theo.</li>
        <li><b>Essence/Serum:</b> Cung cấp dưỡng chất đặc trị cho từng vấn đề về da.</li>
        <li><b>Mặt nạ:</b> Cấp ẩm và dưỡng chất chuyên sâu.</li>
        <li><b>Kem dưỡng ẩm:</b> Khóa ẩm và bảo vệ da.</li>
        <li><b>Kem chống nắng:</b> Bước không thể thiếu để bảo vệ da khỏi tác hại của tia UV.</li>
      </ol>
      <p>Hãy cùng khám phá chi tiết từng bước và lựa chọn sản phẩm phù hợp với làn da của bạn để sở hữu làn da trong mơ!</p>
    `,
  },
  {
    id: 3,
    title: "Top 5 Thành Phần \"Vàng\" Trong Mỹ Phẩm Bạn Nên Biết",
    content: `
      <p>Thị trường mỹ phẩm ngày càng đa dạng với vô vàn sản phẩm và thành phần khác nhau. Để lựa chọn được sản phẩm phù hợp và hiệu quả, bạn cần nắm rõ những thành phần "vàng" có tác dụng tích cực đối với làn da.</p>
      <p>Dưới đây là 5 thành phần được các chuyên gia da liễu khuyên dùng:</p>
      <ul>
        <li><b>Hyaluronic Acid (HA):</b> Cấp ẩm sâu, giúp da căng mọng.</li>
        <li><b>Retinol:</b> Chống lão hóa, giảm nếp nhăn và cải thiện độ đàn hồi của da.</li>
        <li><b>Vitamin C:</b> Chống oxy hóa, làm sáng da và đều màu da.</li>
        <li><b>Niacinamide (Vitamin B3):</b> Thu nhỏ lỗ chân lông, kiểm soát dầu và làm dịu da.</li>
        <li><b>Ceramides:</b> Phục hồi hàng rào bảo vệ da, ngăn ngừa mất nước.</li>
      </ul>
      <p>Đọc bài viết này để hiểu rõ hơn về công dụng của từng thành phần và cách kết hợp chúng trong chu trình chăm sóc da của bạn nhé!</p>
    `,
  },
]);
</script>

<style scoped>
/* Một số CSS cơ bản để các bài viết trông đẹp hơn */
.news-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2.5em;
}

.news-content {
  display: flex;
  flex-direction: column;
  gap: 30px; /* Khoảng cách giữa các bài viết */
}

.news-article {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.news-article h2 {
  color: #0056b3;
  margin-bottom: 15px;
  font-size: 1.8em;
}

.news-article p {
  line-height: 1.6;
  margin-bottom: 10px;
  color: #555;
}

.news-article ul,
.news-article ol {
  margin-left: 20px;
  margin-bottom: 10px;
  color: #555;
}

.news-article ul li,
.news-article ol li {
  margin-bottom: 5px;
}

/* Tùy chỉnh thêm cho các thẻ HTML bên trong nội dung nếu cần */
.news-article p b,
.news-article ul b,
.news-article ol b {
    color: #333;
}
</style>