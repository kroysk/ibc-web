<template>
    <Teleport to="body">
        <TransitionRoot appear :show="visible" as="template">
            <Dialog as="div" @close="cancel" class="relative z-10">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                    enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black/25" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100" leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                            <DialogPanel
                                class="w-full max-w-md transform rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                                <!-- <DialogTitle
                                    as="h3"
                                    class="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Payment successful
                                </DialogTitle> -->
                                <div class="mt-2">
                                    <p class="text-xl text-ibc_kobalt-500">
                                        {{ message }}
                                    </p>
                                </div>
                                <div>

                                </div>
                                <div class="mt-4 flex flex-wrap gap-2 item-center justify-center">
                                    <button type="button"
                                        class="inline-flex min-w-40 justify-center rounded-full border border-transparent bg-ibc_red-400 px-4 py-2 text-sm font-medium text-white hover:bg-ibc_red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-ibc_red-500 focus-visible:ring-offset-2"
                                        @click="ok">
                                        {{ okButtonText }}
                                    </button>
                                    <button type="button"
                                        v-show="type==='confirm'"
                                        class="inline-flex min-w-40 justify-center rounded-full border border-transparent bg-ibc_gray-400 px-4 py-2 text-sm font-medium text-white hover:bg-ibc_gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-ibc_gray-500 focus-visible:ring-offset-2"
                                        @click="cancel">
                                        {{ cancelButtonText }}
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </Teleport>
</template>

<script setup>
import {
    onMounted,
    toRef
} from 'vue';
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

onMounted(() => {
    visible.value = true;
});

const props = defineProps({
    message: {
        type: String,
        required: true,
    },
    ok: {
        type: Function,
        required: true,
    },
    cancel: {
        type: Function,
        required: true,
    },
    visible: {

    },
    okButtonText: {
        type: String,
        default: 'continuar'
    },
    cancelButtonText: {
        type: String,
        default: 'cancelar'
    },
    type: {
        type: String
    }
});
const visible = toRef(props.visible)
</script>