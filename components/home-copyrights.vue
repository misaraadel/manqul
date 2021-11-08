<template>
    <section class="copyrights py-1 bg-white">
        <div class="container">
            <div class="flex items-center content-center justify-between">
                <company-copyrights />
                <cayan-copyrights />
            </div>
        </div>
    </section>
</template>
<style lang="scss">
    @media (max-width: 800px) {
        .copyrights{
            div{
                flex-direction: column;
                justify-content: center;
                .copyrights-data {
                    margin-bottom: 15px;
                }
            }
        }
    }
</style>