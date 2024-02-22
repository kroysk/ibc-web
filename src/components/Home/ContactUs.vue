<template>
    <section class="flex flex-wrap justify-center gap-20 pt-12">
        <article class="flex flex-col items-center">
            <h2 class="text-4xl text-ibc_blue-500 font-bold">¡Te contactaremos!</h2>
            <img src="/images/contactus.png" alt="">
        </article>
        <article class="flex flex-col justify-start items-center">
            <form action="" class="flex flex-col justify-start">
                <label for="name">Nombre Completo</label>
                <input id="name" type="text" placeholder="David Reyes" class="border-none">
                <label for="email">Correo electrónico</label>
                <input id="email" type="email" placeholder="davidrc@ibc.org">
                <label for="cellphone">Celular</label>
                <input id="cellphone" type="numeric" placeholder="000 000 0000">
                <label for="guide">¿Necesitas consejería?</label>
                <select id="guide">
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                </select>
            </form>
        </article>
    </section>
</template>
