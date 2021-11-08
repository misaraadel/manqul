<template>
    <ul class="flex call-to-action items-center content-center">
        <li class="ml-3">
            <a @click="callus()" :class="`${contactBk} ${bgOPacity} cursor-pointer custom-btn overflow-hidden rounded-btn relative w-fit-content flex justify-center items-center content-center`">
                <img src="/img/mobile.svg" class="w-icon small-icon h-icon object-contain" alt="">
                <span :class="`${contactColor} text-paragraph font-medium leading-head mr-2`">
                    تواصل معنا
                </span>
                <img src="/img/mobile.svg" class="w-icon absolute icon h-icon object-contain" alt="">
            </a>
        </li>
        <li>
            <a @click="whatsapp()" :class="`${whatsBk} ${border} custom-btn cursor-pointer overflow-hidden rounded-btn relative w-fit-content flex justify-center items-center content-center`">
                <img src="/img/whats.svg" class="w-icon small-icon h-icon object-contain" alt="">
                <span :class="`${whatsColor} text-paragraph font-medium leading-head mr-2`">
                    تواصل معنا
                </span>
                <img src="/img/whats.svg" class="w-icon absolute icon h-icon object-contain" alt="">
            </a>
        </li>
    </ul>
</template>
<style lang="scss">
    .custom-btn{
        min-width: 147px;
        min-height: 50px;
        .small-icon , span{
            transition: all .1s linear;
        }
        .icon{
            left: calc(50% - 12px);
            top: -100%;
            transition: all .3s linear;
        }
        &:hover{
            .small-icon , span{
                opacity: 0;
            }
            .icon{
                top: calc(50% - 12px) ;
                animation: rotation 1s linear infinite;
            }
        }
    }
   
</style>
<script>
import { ref } from 'vue' 
export default {
    props: {
        contactBk: String,
        contactColor: String,
        bgOPacity: String,
        whatsBk: String,
        whatsColor: String,
        border: String,
    },
    setup(){
        const number = ref(+966532554372)
        const callus = () => {
            const call = new CustomEvent('event:call')
            document.dispatchEvent(call)

            window.open(`tel:${number.value}`)
        }
        const whatsapp = () => {
            const whatsapp = new CustomEvent('event:whatsapp')
            document.dispatchEvent(whatsapp)

            window.open(`https://wa.me/${number.value}`)
        }
        return {
            number,
            callus,
            whatsapp,
        }
    }
    

  
}
</script>