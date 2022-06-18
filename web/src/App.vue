<template>
  <div id="app">
    <div class="container">
      <page-header />
      <main>
        <div v-if="!product">Loading...</div>
        <product-component v-if="product" :product="product" />
      </main>
      <page-footer />
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import ProductComponent from "@/components/ProductComponent.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "App",
  components: {
    PageHeader,
    ProductComponent,
    PageFooter,
  },
  data() {
    return {
      product: null,
    };
  },
  created() {
    fetch("http://localhost:3333/api/product/1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.product = data;
      });
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1440px;
  padding: 2rem;
  margin: 0 auto;

  & main {
    margin-top: 10%;
    display: flex;
  }
}
</style>
