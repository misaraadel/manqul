<template>
    <section class="w-full features bg-white pt-20">
        <div class="container pt-3">
            <general-head :heading="`${title}`" />
            <div class="w-full relative overflow-hidden grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                <template v-for="(list) in featureList" :key="list.code">
                    <div :class="`${list.shape} box flex bg-cover bg-no-repeat px-12 py-12 flex-col justify-center content-center text-center items-center`">
                        <img :src="`/img/${list.img}.svg`" class="w-feature h-feature object-contain" :alt="`${list.title}`" />
                        <h4 class="text-featureHead font-bold text-dark leading-featureLead mt-7 mb-5">
                            {{ list.title }}
                        </h4>
                        <p class="text-paragraph font-medium leading-head">
                            {{ list.desc }}
                        </p>
                    </div>
                </template>
                <img src="/img/feature_icon.svg" class="feature-icon w-features h-features object-contain absolute z-max" :alt="`${title}`" />
            </div>
        </div>
    </section>
</template>
<style lang="scss">
    .features{
        .box{
            &.grdient{
                background-image: url('/img/feature.png');
            }
            &.reversShape{
                background-image: url('/img/feature_reverse.png');
            }
            &:hover{
                img{
                    animation: bounce-in-fwd 2s linear 1;
                }
            }
        }
        .feature-icon{
            top: 50%;
            left: 50%;
            transform: translate(-50% , -50%);
        }
    }
    @media (max-width: 900px) {
        .features{
            .feature-icon{
                display: none;
            }
        }
    }
</style>
<script setup>
    const title = 'لماذا تختار منقول ؟'
    const featureList = [
        {
            code: '1',
            img: 'featue_1',
            title: 'تخزين أمن',
            shape: 'grdient',
            desc: 'تعتمد مستودعاتنا حيث مستودع تخزين الاثاث او تخزين عفش على التاكد من الامن اثناء تخزين العفش والتاكد من سلامته الاثاث'
        },
        {
            code: '2',
            img: 'featue_2',
            title: 'نقل سريع',
            desc: 'نقل اثاث بسيارات نقل اثاث متخصصة في اسرع وقت وعلى الموعد وتتميز في ذلك عن غيرها من شركات نقل العفش'
        },
        {
            code: '3',
            img: 'featue_3',
            title: 'عمالة إحترافية ومدربة',
            desc: 'لدينا عمالة احترافية لنقل العفش وتخزين العفش بدقة ومهارة حيث يتم نقل عفش ونقل اثاث بالرياض'
        },
        {
            code: '4',
            img: 'featue_4',
            shape: 'reversShape',
            title: 'الحرص والدقة',
            desc: 'من اهم متطلبات افضل شركة نقل اثاث او شركة تخزين اثاث هو الحرص على ما يتم نقله مع شركة عفش لنقل الاثاث وتخزين الاثاث'
        }
    ]
</script>