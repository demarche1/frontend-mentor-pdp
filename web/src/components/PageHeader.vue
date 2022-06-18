<template>
  <section>
    <header>
      <nav>
        <div class="header__logo">
          <img src="../assets/images/logo.svg" alt="" />
        </div>

        <ul class="header__menu">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div class="header__left-menu">
        <div class="header__left-cart-icon">
          <button v-on:click="onCartModalClick">
            <span class="basket-quantity">{{ quantity }}</span>
            <img src="../assets/images/icon-cart.svg" />
          </button>
        </div>

        <div class="header__left-avatar">
          <img src="../assets/images/image-avatar.png" />
        </div>
      </div>
    </header>
    <div class="header__line"></div>

    <div v-if="isModalClick" class="header__cart-modal">
      <h2>Cart</h2>

      <div v-for="(item, index) in product" :key="index">
        <div class="header__cart-modal__product">
          <img
            class="header__cart-modal__product-image"
            :src="`http://localhost:3333/${item.images.thumbnails[index]}`"
            alt=""
          />
          <div class="header__cart-modal__spans">
            <span class="header__cart-modal__title">{{ item.name }}</span>
            <span class="header__cart-modal__price"
              >${{ item.price }} x {{ item.quantity
              }}<span class="header__cart-modal__old-price"
                >${{ formatPrice(item.price, item.quantity) }}</span
              ></span
            >
          </div>
          <button v-on:click="() => removeItem(item)">
            <img src="../assets/images/icon-delete.svg" alt="" />
          </button>
        </div>
      </div>

      <button>Checkout</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      productQuantityOnBasket: 0,
      isModalClick: false,
    };
  },
  computed: {
    quantity() {
      return this.$store.getters.getQuantity;
    },
    product() {
      return this.$store.getters.getProducts;
    },
  },
  methods: {
    onCartModalClick() {
      this.isModalClick = !this.isModalClick;
    },
    formatPrice(price, quantity) {
      return price * quantity;
    },
    removeItem(product) {
      this.$store.commit("REMOVE_FROM_CART", product);
      this.$store.commit("SET_CART_QUANTITY");
    },
  },
};
</script>

<style scoped lang="scss">
.header__cart-modal {
  position: absolute;
  top: 8rem;
  right: 3rem;
  min-width: 350px;
  min-height: 220px;
  box-shadow: 0px 0px 10px 2px rgba(142, 140, 140, 0.378);
  background-color: #fff;
  z-index: 100;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;

  & > button {
    width: calc(100% - 1rem);
    min-height: 3rem;
    border: none;
    background-color: hsl(26, 100%, 55%);
    box-shadow: 1px 0px 13px -1px hsla(26, 98%, 62%, 0.93);
    color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 1rem;
  }

  & h2 {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 1.1rem;
  }

  .header__cart-modal__product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    width: 100%;

    .header__cart-modal__spans {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-right: 20px;

      .header__cart-modal__title {
        color: hsl(219, 9%, 45%);
      }

      .header__cart-modal__price {
        color: hsl(219, 9%, 45%);
      }

      .header__cart-modal__old-price {
        color: #000;
        font-weight: 700;
        margin-left: 0.5rem;
      }
    }

    .header__cart-modal__product-image {
      width: 4rem;
      height: 4rem;
      margin-right: 1rem;
      border-radius: 5px;
    }
  }
}
.header__left-cart-icon {
  position: relative;
}
.basket-quantity {
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 14px;
  font-weight: 700;
  color: hsl(26, 100%, 55%);
}

.container {
  max-width: 1440px;
  padding: 0rem 1.5rem;
  margin: 0 auto;
}
section {
  height: 120px;

  .header__line {
    margin: 0px;
    height: 8px;
    background-color: rgba(142, 140, 140, 0.1);
    -webkit-box-shadow: 0px 0px 16px 5px rgba(142, 140, 140, 0.1);
    box-shadow: 0px 0px 16px 5px rgba(142, 140, 140, 0.1);
  }
}

header {
  display: flex;
  justify-content: space-between;
  height: 100%;

  nav {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 3rem;

    .header__menu {
      display: flex;
      align-items: center;
      gap: 10px;
      height: 100%;
      position: relative;

      li {
        display: flex;
        align-items: center;
        cursor: pointer;
        height: 100%;

        &:hover {
          border-bottom: 4px solid hsl(26, 100%, 55%);
        }
      }
    }
  }

  .header__left-menu {
    display: flex;
    align-items: center;
    gap: 3rem;
    color: hsl(220, 13%, 13%);

    .header__left-avatar img {
      max-width: 60px;
      max-height: 60px;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        border: 2px solid hsl(26, 100%, 55%);
      }
    }
  }
}
</style>
