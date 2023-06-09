<template>
  <ul class="contact-list">
    <li class="contact-item">
      <a href="https://github.com/brijojo/mich-blog" target="_blank" class="contact-url">
        <div class="icon-wrap end">
          <vue-svg name="github"></vue-svg>
        </div>
        <div class="desc">brijojo</div>
      </a>
      <div class="pop">
        <img src="@/images/wechat-car.png" alt="" />
      </div>
    </li>
    <li class="contact-item">
      <a href="" class="contact-url">
        <div class="icon-wrap">
          <vue-svg name="email"></vue-svg>
        </div>
        <div class="desc">2722659051@qq.com</div>
      </a>
      <!-- <div class="pop">
        <img src="@/images/wechat-car.png" alt="" />
      </div> -->
    </li>
    <li class="contact-item">
      <a
        href="tencent://message/?uid=2722659051&site=qq&menu=yes"
        class="contact-url"
      >
        <div class="icon-wrap">
          <vue-svg name="qq"></vue-svg>
        </div>
        <div class="desc">2722659051</div>
      </a>
      <!-- <div class="pop">
        <img src="@/images/wechat-car.png" alt="" />
      </div> -->
    </li>
    <li class="contact-item">
      <a href="" class="contact-url">
        <div class="icon-wrap">
          <vue-svg name="wechat"></vue-svg>
        </div>
        <div class="desc">k6766896</div>
      </a>
      <div class="pop">
        <img src="@/images/wechat-car.png" alt="" />
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.contact {
  $itemheight: 30px;
  &-list {
    padding: 0;
    margin: 0;
  }
  &-item {
    padding: 10px 0;
    height: $itemheight;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(
          1.01
        ); // scaleY(1)时矩阵变换后保持的时候会与保留像素位冲突 导致元素位置变化（抖动）
        opacity: 1;
      }
    }
    a {
      height: 100%;
    }
    .pop {
      position: absolute;
      left: 0;
      bottom: $itemheight + 10px;
      border-radius: 5px;
      background-color: #fff;
      padding: 10px 15px;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s;
      opacity: 0;
      &::after {
        content: "";
        width: 8px;
        height: 8px;
        background-color: #fff;
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        bottom: -4px;
      }
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
  &-url {
    display: flex;
    color: #888;
  }
}

.icon-wrap {
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  .svg-icon {
    font-size: 26px;
  }
  .icon {
    &-email {
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
