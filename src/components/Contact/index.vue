<template>
  <ul class="contact-list">
    <li class="contact-item">
      <a href="" class="contact-url">
        <div class="icon-wrap end">
          <vue-svg name="github"></vue-svg>
        </div>
        <div class="desc">XiaHongFeng</div>
      </a>
    </li>
    <li class="contact-item">
      <a href="" class="contact-url">
        <div class="icon-wrap">
          <vue-svg name="email"></vue-svg>
        </div>
        <div class="desc">2722659051@qq.com</div>   
      </a>
    </li>
    <li class="contact-item">
      <a href="" class="contact-url">
        <div class="icon-wrap">
          <vue-svg name="qq"></vue-svg>
        </div>
        <div class="desc">2722659051</div>
      </a>
    </li>
    <li class="contact-item">
      <a href="" class="contact-url">
        <div class="icon-wrap">
          <vue-svg name="wechat"></vue-svg>
        </div>
        <div class="desc">k6766896</div>
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.contact {
  &-list {
    padding: 0;
    margin: 0;
    // background-color: #000;
    // padding: 20px;
  }
  &-item {
    margin: 10px 0;
  }
  &-url {
    display: flex;
    color: #888;
  }
}

.icon-wrap {
  width: 30px;
  height: 30px;
  // background-color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  .svg-icon {
    font-size: 26px;
  }
  .icon{
    &-email{    
        font-size: 23px;
    }
  }
}

.desc {
  margin-left: 10px;
  display: flex;
  align-items: center;
}
</style>
