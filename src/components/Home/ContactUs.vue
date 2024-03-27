<template>
    <section class="flex flex-wrap justify-center gap-20 pt-12">
        <article class="flex flex-col items-center justify-end">
            <h2 class="text-4xl text-ibc_blue-500 font-bold">¡Te contactaremos!</h2>
            <img class="h-80" src="/images/contactus.png" alt="">
        </article>
        <article class="flex flex-col justify-start items-center shadow-ibc p-4 mb-6 rounded-xl">
            <form @submit.prevent="onSubmit" class="flex flex-col justify-start">
                <div class="border border-ibc_kobalt-300 rounded-xl p-2 my-1">
                    <label class="block text-sm text-ibc_kobalt-500 font-bold" for="name">Nombre Completo</label>
                    <input id="name" type="text" placeholder="David Reyes" v-model="name"
                        class="placeholder:text-md placeholder:text-ibc_blue-500 border-none p-0">
                </div>
                <div class="border border-ibc_kobalt-300 rounded-xl p-2 my-1">
                    <label class="block text-sm text-ibc_kobalt-500 font-bold" for="email">Email</label>
                    <input id="email" type="email" placeholder="davidr@ibc.org" v-model="email"
                        class="placeholder:text-md placeholder:text-ibc_blue-500 border-none p-0">
                </div>
                <div class="border border-ibc_kobalt-300 rounded-xl p-2 my-1">
                    <label class="block text-sm text-ibc_kobalt-500 font-bold" for="cellphone">Celular</label>
                    <input id="cellphone" type="number" placeholder="000 0000 0000" v-model="cellphone"
                        class="placeholder:text-md placeholder:text-ibc_blue-500 border-none p-0">
                </div>
                <div class="border border-ibc_kobalt-300 rounded-xl p-2 my-1 w-full">
                    <label class="block text-sm text-ibc_kobalt-500 font-bold" for="email">¿Necesitas
                        consejería?</label>
                    <select id="consejo" class="text-md text-ibc_blue-500 border-none w-full p-0">
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div class="flex gap-1 my-1">
                    <input type="checkbox" class="rounded-md" @click="stop" :disabled="!TermReaded" v-model="accepted">
                    <label class="block text-sm text-ibc_gray-500 font-bold text-wrap">Leer y Aceptar <span
                            class="text-ibc_kobalt-500" @click="TermOpen = true">Política de privacidad</span></label>
                </div>
                <button type="submit" :class="{ '!bg-ibc_gray-500': !accepted || isLoading }"
                    class="bg-ibc_red-500 rounded-full text-white text-sm h-12 w-48 my-3 active:bg-ibc_red-300 disabled:bg-ibc_gray-300 flex items-center justify-center gap-2">
                    <loading v-show="isLoading" />
                    <span v-if="!isLoading">Enviar</span>
                </button>

            </form>
        </article>
    </section>
    <Modal :isOpen="TermOpen" @close_modal="TermOpen = false">
        <div class="max-h-[90vh]">
            <div class="max-h-[80vh] overflow-y-scroll" ref="modalBody" @scroll="checkScrollPosition">
                <DataPolicies></DataPolicies>
            </div>
            <div class="flex justify-center gap-2">
                <button @click="acceptTerms" :class="{ '!bg-ibc_gray-500': !TermReaded }"
                    class="bg-ibc_red-500 rounded-full text-white text-sm h-12 w-48 my-3 active:bg-ibc_red-300 disabled:bg-ibc_gray-300">Aceptar</button>
                <button @click="accepted = false, TermOpen = false"
                    class="bg-ibc_gray-300 rounded-full text-white text-sm h-12 w-48 my-3 active:bg-ibc_gray-100">Cancelar</button>
            </div>
        </div>
    </Modal>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import api from '@/helpers/api'
import alert from '@/helpers/MyAlert.js'
import Modal from '@/components/Modal.vue';
import loading from '@/components/loading.vue';
import DataPolicies from '@/components/DataPolicies.vue';
const name = ref('');
const email = ref('');
const cellphone = ref('');
const accepted = ref(false);
const TermReaded = ref(false)
const TermOpen = ref(false)
const modalBody = ref(null);
const isLoading = ref(false);
const acceptTerms = () => {
    if (!TermReaded.value) return
    accepted.value = true
    TermOpen.value = false

}
const onSubmit = async () => {
    if (loading.value) return
    if (!accepted.value) return alert.show('Debes Leer y aceptar la política de privacidad', {
        okCallback: () => {
            console.log('Abrir politicas')
            TermOpen.value = true
        }
    })
    isLoading.value = true
    try {
        const response = await api.post('/contact_requests', {
            name: name.value,
            email: email.value,
            cellphone: cellphone.value,
        });
    } catch (error) {
        alert.show(error.message)
    } finally {
        isLoading.value = false
    }
}
const checkScrollPosition = () => {
    if (modalBody.value.scrollTop + modalBody.value.clientHeight >= modalBody.value.scrollHeight) {
        TermReaded.value = true
    }
};
</script>
<style>
input:focus,
select:focus {
    box-shadow: none !important;
    outline: none;
}
</style>
