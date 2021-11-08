<template>
    <footer class="w-full py-16 bg-cover bg-no-repeat" style="background-image: url('/img/footer.png');">
        <div class="container py-4">
            <div class="flex justify-center flex-col items-center content-center text-center">
                <img src="/img/logo_icon.svg" class="w-footer h-footer object-contain" :alt="`${title}`" />
                <p class="text-footer text-white font-bold leading-footer mt-8 mb-10">
                    {{ title }}
                    <span class="font-bold leading-footer text-footer text-yellow">
                        {{ subtitle }}
                    </span>
                </p>
                <call-to-action contactBk="bg-yellow" contactColor="text-dark" whatsColor="text-white" border="border border-solid border-white" />
            </div>
        </div>
    </footer>
</template>
<script setup>
    const title = 'أطلب خدماتك الان من منقول وبخطوات بسيطة جدا.... '
    const subtitle = 'إبدأ الأن'
</script>