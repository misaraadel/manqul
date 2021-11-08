<template>
    <nav class="w-full bg-white py-6">
        <div class="container">
            <div class="content w-full flex justify-between items-center content-center">
                <img src="/img/logo.svg" class="w-logo h-logo object-contain" alt="" />
                <call-to-action contactBk="bg-primary" contactColor="text-dark"  whatsBk="bg-secodary" whatsColor="text-white"  bgOPacity="bg-opacity-10" />               
            </div>
        </div>
    </nav>
</template>
<style lang="scss">
    @media (max-width: 500px) {
        nav{
            .content{
                justify-content: center;
                .call-to-action {
                    display: none;
                }
            }
        }
    }
</style>