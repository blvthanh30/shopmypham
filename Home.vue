<template>
  <DefaultLayout>
    <CarouselContainer />
    <div class="gradient-line"></div>
    <h1 class="text-center pt-5">Sản phẩm nổi bật</h1>
    <ProductContainer />
    <section class="py-5 bg-light text-center">
      <h2 class="mb-4">Khách hàng nói gì về chúng tôi</h2>
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-md-6"
            v-for="(testimonial, index) in testimonials"
            :key="index"
          >
            <div class="card p-3 mb-4 shadow-sm">
              <div class="d-flex align-items-center mb-3">
                <img
                  :src="testimonial.avatar"
                  alt="Avatar"
                  class="rounded-circle me-3"
                  width="50"
                  height="50"
                />
                <div class="text-start">
                  <h5 class="mb-0 fw-bold">{{ testimonial.name }}</h5>
                  <small class="text-muted">{{ testimonial.role }}</small>
                </div>
              </div>
              <p class="fst-italic">"{{ testimonial.comment }}"</p>
              <div class="text-warning">
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import ProductContainer from "@/containers/Product/ProductContainer.vue";
import CarouselContainer from "@/containers/Carousel/CarouselContainer.vue";
const testimonials = [
  {
    name: "Nguyễn Văn A",
    role: "Khách hàng",
    comment: "Sản phẩm rất tuyệt vời, tôi sẽ quay lại mua lần nữa!",
    avatar: "https://media.istockphoto.com/id/2192499195/photo/studio-portrait-of-happy-multiracial-mid-adult-man-wearing-brown-shirt-toothy-smile.webp?a=1&b=1&s=612x612&w=0&k=20&c=E9MJHHDAkThe7HgNpNqUtzizYT7iXDI0z_pCNYnPRs4=",
  },
  {
    name: "Trần Thị B",
    role: "Khách hàng thân thiết",
    comment: "Dịch vụ chăm sóc khách hàng rất tốt!",
    avatar: "https://media.istockphoto.com/id/2193991190/photo/smiling-asian-female-entrepreneur-working-on-touchpad-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=lsD2QRQfHehFV0y98Xz1tsDnoFZkkT1h5VzcCV3DgMM=",
  },
];
</script>
<style >
.card {
  border-radius: 16px;
}
</style>
