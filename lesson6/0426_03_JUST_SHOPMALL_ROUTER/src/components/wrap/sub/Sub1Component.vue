<template>
  <main id="sub1">
    <h1>서브1페이지</h1>
  </main>
</template>
<script>
export default {
  name: 'Sub1Component'
}
</script>
<style lang="scss" scoped>
    #sub1{
        width: 100%;
        height: 550px;
        background-color: #09c;
        display: flex;
        h1 {
            font-size: 100px;
            margin: auto;
            color:#fff;
        }
    }
</style>