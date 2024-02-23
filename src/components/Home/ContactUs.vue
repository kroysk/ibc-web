<template>
    <section class="flex flex-wrap justify-center gap-20 pt-12">
        <article class="flex flex-col items-center justify-end">
            <h2 class="text-4xl text-ibc_blue-500 font-bold">¡Te contactaremos!</h2>
            <img class="h-80" src="/images/contactus.png" alt="">
        </article>
        <article class="flex flex-col justify-start items-center shadow-ibc p-4 mb-6 rounded-xl">
            <form action="" class="flex flex-col justify-start">
                <div class="border border-ibc_kobalt-300 rounded-xl p-2 my-1">
                     <label class="block text-sm text-ibc_kobalt-500 font-bold" for="name">Nombre Completo</label>
                     <input id="name" type="text" placeholder="David Reyes"
                        class="placeholder:text-md placeholder:text-ibc_blue-500 border-none p-0">
                  </div>
                  <div class="border border-ibc_kobalt-300 rounded-xl p-2 my-1">
                     <label class="block text-sm text-ibc_kobalt-500 font-bold" for="email">Email</label>
                     <input id="email" type="email" placeholder="davidr@ibc.org"
                        class="placeholder:text-md placeholder:text-ibc_blue-500 border-none p-0">
                  </div>
                  <div class="border border-ibc_kobalt-300 rounded-xl p-2 my-1">
                     <label class="block text-sm text-ibc_kobalt-500 font-bold" for="email">Celular</label>
                     <input id="email" type="number" placeholder="000 0000 0000"
                        class="placeholder:text-md placeholder:text-ibc_blue-500 border-none p-0">
                  </div>
                  <div class="border border-ibc_kobalt-300 rounded-xl p-2 my-1 w-full">
                     <label class="block text-sm text-ibc_kobalt-500 font-bold" for="email">¿Necesitas consejería?</label>
                     <select id="consejo" class="text-md text-ibc_blue-500 border-none w-full p-0">
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                     </select>
                  </div>
            </form>
            <button class="bg-ibc_red-500 rounded-full text-white text-sm h-12 w-48 my-3">Enviar</button>
        </article>
    </section>
</template>
<style>
input:focus, select:focus {
    box-shadow: none !important;
    outline: none;
}
</style>