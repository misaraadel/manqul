<template>
    <h4 class="heading text-dark text-center font-bold text-heading leading-generalHead">
        {{ heading }}
    </h4>
</template>
<style lang="scss">
    .heading{
        margin-bottom: 75px;
    }
</style>
<script>
export default {
    props:{
        heading: String
    }
}
</script>