<template>
  <div>
    <van-popup v-model="myShow" :overlay="false">
      <div class="popupEject">
        <img :src="require('../../common/images/index/success.png')" alt srcset>
        <div class="text">{{msg}}</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
    data() {
        return {
            myShow: this.isShow
    }   ;
    },
    props: {
        isShow: {
            default: false
        },
        msg: {
            default: ""
        }
    },
  watch: {
    isShow(newValue, oldValue) {
      this.myShow = newValue;
    }
  }
};
</script>

<style lang="scss" >
.popupEject {
  width: 9.406rem;
  height: 6.25rem;
  border-radius: 0.313rem;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 2.906rem;
    height: 2.906rem;
  }
  .text {
    font-family: SimHei;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 1.2rem;
    letter-spacing: 0rem;
    color: #ffffff;
    padding-top: 0.68rem;
  }
}
</style>