<template>
  <div class="middle">
    <section class="main__product-images">
      <div class="main__product-images_div">
        <div class="thumb">
          <img
            :src="`http://localhost:3333/${product.images.big[selectedImage]}`"
            alt=""
          />
        </div>

        <div class="carousel">
          <ul v-for="(_, index) in product.images.thumbnails" :key="index">
            <li>
              <button v-on:click="() => selectImage(index)">
                <img
                  :class="[
                    'carousel__item',
                    { first: index === selectedImage },
                  ]"
                  :src="`http://localhost:3333/${product.images.thumbnails[index]}`"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="details">
      <h2 class="fTitle">Sneaker Company</h2>
      <h2 class="sTitle">Fall Limited Edition Sneakers</h2>
      <p class="product_detais">
        Fall Limited Edition Sneakers These low-profile sneakers are your
        perfect casual wear companion. Featuring a durable rubber outer sole,
        they’ll withstand everything the weather can offer.
      </p>
      <div class="price">$125.00 <span class="discount">50%</span></div>
      <div class="old_price">$250.00</div>

      <div class="controls">
        <div class="quantity_controls">
          <button v-on:click="quantity > 1 ? quantity-- : quantity">
            <img src="../assets/images/icon-minus.svg" alt="" />
          </button>
          <span>{{ quantity }}</span>
          <button v-on:click="quantity++">
            <img src="../assets/images/icon-plus.svg" alt="" />
          </button>
        </div>

        <div class="add_to_cart">
          <button v-on:click="addToCart">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#FFFFFF"
                fill-rule="nonzero"
              />
            </svg>

            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProductComponent",
  data() {
    return {
      selectedImage: 0,
      quantity: 1,
    };
  },
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    selectImage(index) {
      this.selectedImage = index;
    },

    addToCart() {
      this.$store.commit("ADD_TO_CART", {
        ...JSON.parse(JSON.stringify(this.product)),
        quantity: this.quantity,
      });
      this.quantity = 1;
      this.$store.commit("SET_CART_QUANTITY");
    },
  },
  created() {
    console.log(this.product);
  },
};
</script>

<style scoped lang="scss">
.middle {
  display: flex;
  gap: 5rem;

  @media (max-width: 1250px) {
    gap: 0rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }

  .main__product-images {
    height: 100%;

    @media (max-width: 1150px) {
      .thumb > img {
        width: 30rem;
        border-radius: 20px;
        height: 500px !important;
      }

      .carousel__item {
        width: 7rem;
      }
    }

    .thumb {
      display: flex;
      justify-content: center;

      & img {
        height: 600px;
        max-width: 39rem;
        border-radius: 5%;
      }
    }

    .carousel {
      display: flex;
      justify-content: center;
      margin-top: 30px;

      & ul {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 10px;

        .first {
          background: white;
          opacity: 0.5;
          border-radius: 6%;
          border: solid 3.5px hsl(26, 97%, 45%);
        }

        .carousel__item {
          border-radius: 5%;
          max-width: 8rem;
          margin: 0 auto;
        }
      }
    }
  }

  .details {
    height: 100%;
    padding: 2rem;

    @media (max-width: 1130px) {
      .controls {
        display: flex;
        flex-direction: column;

        .add_to_cart {
          height: 60px;
          width: 100% !important;

          & button {
            width: 100%;
          }
        }
      }
    }
    .fTitle {
      color: hsl(26, 100%, 55%);
      margin-bottom: 1.5rem;
    }

    .sTitle {
      font-size: 50px;
      line-height: 2.75rem;
      margin-bottom: 3rem;
    }

    .product_detais {
      line-height: 1.7rem;
      color: hsl(219, 9%, 45%);
      margin-bottom: 3rem;
    }

    .price {
      font-size: 50px;
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      .discount {
        font-size: 1rem;
        font-weight: 700;
        color: hsl(26, 100%, 55%);
        border-radius: 30%;
        margin-left: 1rem;
        -webkit-box-shadow: 1px 0px 13px -1px hsla(26, 98%, 62%, 0.743);
        box-shadow: 1px 0px 13px -1px hsla(26, 98%, 62%, 0.743);
        background-color: hsla(26, 98%, 62%, 0.308);
        padding: 0.5rem;
      }
    }

    .old_price {
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: hsla(217, 9%, 45%, 0.519);
    }

    .controls {
      display: flex;
      margin-top: 4rem;
      justify-content: space-between;

      .quantity_controls {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(104, 112, 125, 0.073);
        border-radius: 10%;
        -webkit-box-shadow: 1px 0px 13px -1px hsla(26, 98%, 62%, 0.623);
        box-shadow: 1px 0px 13px -1px hsla(26, 98%, 62%, 0.361);

        & span {
          font-weight: 700;
          padding: 0.5rem;
        }

        & img {
          padding: 1.5rem;
        }
      }

      .add_to_cart {
        width: 20rem;

        & button {
          width: 100%;
          height: 100%;
          border: none;
          background-color: hsl(26, 100%, 55%);
          box-shadow: 1px 0px 13px -1px hsla(26, 98%, 62%, 0.93);
          color: white;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        & button svg {
          opacity: 0.7;
        }

        & button span {
          margin-left: 1rem;
        }
      }
    }
  }
}
</style>
