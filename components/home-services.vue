<template>
    <section class="services pt-20">
        <div class="container pt-3">
            <general-head :heading="`${title}`" />
            <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3">
                <template v-for="service in services" :key="service.code">
                    <div class="box py-24 px-16 relative overflow-hidden flex justify-center content-center items-center z-max">
                        <img :src="`/img/${service.img}.png`" class="w-full h-full object-cover absolute top-0 left-0 z-min" :alt="`${service.title}`" />
                        <div class="content relative z-max text-center">
                            <h4 class="text-featureHead font-bold leading-head mb-5 text-yellow">
                                {{ service.title }}
                            </h4>
                            <p class=" text-paragraph leading-head font-normal text-white ">
                                {{ service.desc }}
                            </p>
                        </div>  
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
    .services{
        .box{
            img{
                transition: all .5s ease-in-out;
            }
           .content{
               &::after , &::before {
                    content: '';
                    position: absolute;
                    width: 105%;
                    height: 46px;
                    border-left: 1px solid rgba($color: #fff, $alpha: .5);
                    border-right: 1px solid rgba($color: #fff, $alpha: .5);
                    z-index: 0;
                    left: -2.5%;
                    transition: all .4s linear;
               }
               &::after{
                   border-top: 1px solid rgba($color: #fff, $alpha: .5);
                   top: -57px;
               }
               &::before {
                   border-bottom: 1px solid rgba($color: #fff, $alpha: .5);
                   bottom: -57px;
               }
           }
           &:hover{
               img{
                   transform: scale(1.2);
               }
               .content {
                   &::after , &::before{
                       height: 91%;
                   }
               }
           }
        }
    }
    @media (max-width: 500px) {
        .services{
            .box{
                padding: 20px 15px;
                .content{
                    &::after{
                        top: -10px;
                    }
                    &::before{
                        bottom: -10px;
                    }
                }
            } 
        }
    }
</style>
<script setup>
    const title = 'خدمات منقول'
    const services = [
        {
            code: '1',
            img: 'service_1',
            title: 'نقل العفش والأثاث',
            desc: 'نقل احترافي لمحتويات المنزل بالكامل، من العفش والأثاث والمقتنيات والمنقولات بالعناية المناسبة والانتباه الكامل للتلفيات والأضرار التي قد يسببها النقل'
        },
        {
            code: '2',
            img: 'service_2',
            title: 'مستودعات تخزين',
            desc: 'مستودعات تخزين لجميع الأغراض، تخزين العفش والأثاث بأرخص الأسعار وأمان تام، فريقنا احترافي يضمن عملية نقل الأثاث بالشكل المناسب واحتياطات التخزين الضرورية'
        }
    ]
</script>