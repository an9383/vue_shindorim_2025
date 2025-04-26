<template>
<div id="wrap">
    <h1>랩터컴포넌트</h1>
    <header-component />
    <main-component />
    <footer-component />
    <modal-component />
</div>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue';
import MainComponent from './MainComponent.vue';
import FooterComponent from './FooterComponent.vue';
import ModalComponent from './ModalComponent.vue';

export default {
    name: "WrapComponent",
    components: {
        'header-component': HeaderComponent,
        'main-component': MainComponent,
        'footer-component': FooterComponent,
        'modal-component': ModalComponent,
    }
}
</script>

<style scoped>
#wrap {
    width: 1200px;
    margin: 0 auto;
}
</style>