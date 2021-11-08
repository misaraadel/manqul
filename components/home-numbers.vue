<template>
    <section class="number py-20">
        <div class="container py-3">
            <general-head  :heading="`${title}`" />
            <div class="content w-full px-24">
                <div class="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:gap-28 md:gap-10 sm:gap-8 gap-8">
                    <template v-for="num in numbers" :key="num.code">
                        <div class="box relative z-max">
                            <img :src="`/img/${num.img}.svg`" :alt="`${num.title}`" class="w-num h-num object-contain"/>
                            <h4 class="text-dark text-featureHead font-bold leading-featureLead mb-5">
                                {{ num.title }}
                            </h4>
                            <p class="text-dark font-normal leading-head text-paragraph">
                                {{ num.desc }}
                            </p>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
    .number{
        .box{
            &::After{
                content: '';
                position: absolute;
                width: 1px;
                height: 100px;
                background-color: #E8E8E8;
                left: -40px;
                top: calc(50% - 50px);
            }
            &:last-child{
                &::after{
                    display: none;
                }
            }
        }
    }
    @media (max-width: 900px) {
        .number{
            .content{
                padding: 0px 20px !important;
            }
            .box{
                &::After{
                    width: 100px;
                    height: 1px;
                    left: calc(50% - 50px);
                    bottom: -15px;
                    top: unset !important;
                }
            }
        }
    }
</style>
<script setup>
    const title = 'أرقامنا تتحدث عنا'
    const numbers = [
        {
            code: '1',
            img: 'num_1',
            title: 'سيارة نقل',
            desc: 'أكثر من 20 سيارة للنقل في مدينة الرياض فقط'
        },
        {
            code: '2',
            img: 'num_2',
            title: 'مستودع',
            desc: 'عشرات المستودعات المجهزة والمهيئة للتخزين الأمن'
        },
        {
            code: '3',
            img: 'num_3',
            title: 'عميل لدينا',
            desc: 'أكثر من 20 ألف عميل سعداء بخدمات منقول'
        }
    ]
</script>