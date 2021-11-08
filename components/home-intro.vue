<template>
   <header class="w-full py-32 bg-white bg-cover bg-no-repeat" style="background-image:url('/img/header.png')">
        <div class="container">
            <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:gap-72 md:gap-12 sm:gap-12 gap-12 ">
                <div class="content w-full h-full flex flex-col justify-center">
                    <h4 class="text-heading text-dark font-bold leading-copyrights">
                        {{ heading }}
                    </h4>
                    <p class="mt-8 mb-10 text-dark font-normal text-paragraph leading-head">
                        {{ desc }}
                    </p>
                    <call-to-action contactBk="bg-primary" contactColor="text-dark"  whatsBk="bg-secodary" whatsColor="text-white"  bgOPacity="bg-opacity-10" />  
                </div>
                <div class="image-content">
                    <img src="/img/header.svg" class="w-header h-header object-contain" :alt="`${heading}`" />
                </div>
            </div>
        </div>
   </header>
</template>
<style lang="scss">
    @media (max-width: 500px) {
        header{
            padding: 40px 0px !important;
        }
    }
</style>
<script setup>
    const heading = ' شركة منقول لنقل وتخزين الأثاث'
    const desc = 'شركة نقل العفش بالرياض مع فك وتركيب شركة منقول نسعد بخدمة عملائنا  في خدمة نقل الاثاث بأفضل الأدوات والامكانيات وسيارات مجهزة بأسعار منافسة'
</script>