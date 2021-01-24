<template>
  <div class="performance">
    <a-card>
      <div class="card-item">
        <img src="../../assets/images/cat.jpg" alt="" class="full-width full-height">
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'performance',
  mounted () {
    let card = document.querySelector('.card-item')
    // 修改卡片的宽度
    const update = (timestamp) => {
      card.style.width = ((Math.sin(card.offsetTop + timestamp / 1000) + 1) * 500) + 'px'
      console.log(card)
      // window.requestAnimationFrame(update)
      // card.style.width = '800px'
    }
    
    window.addEventListener('load', update)
  }
}
</script>

<style lang="scss">
.performance {
  .card-item {
    width: 300px;
    height: 200px;
    border: 1px solid #dfdfdf;
  }
}
</style>
