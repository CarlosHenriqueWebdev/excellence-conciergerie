<template>
    <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-forest-night">
        <div class="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
            <div class="flex justify-between items-center border-b pb-3">
                <h2 class="text-[20px] uppercase font-bold">Atribuições</h2>
                <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="mt-4">
                <ul>
                    <li v-for="(item, index) in attributions" :key="index" class="mb-2 flex justify-start gap-[4px]">
                        <a :href="item.link" target="_blank" :title="item.title" class="font-bold text-ocean-blue hover:underline">{{ item.text }}</a>
                    </li>
                </ul>
            </div>
            <div class="mt-6 flex justify-start">
                <button @click="closeModal" class="btn">Fechar</button>
            </div>
        </div>
    </div>
</template>
<script>
import content from 'src/content.json';

export default {
    props: {
        isVisible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            attributions: content.attributions
        };
    },
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
};
</script>

<style scoped>
.btn {
 font-size: 14px;
 font-weight: bold;
 padding: 8px 24px;
 background: #57B957;
 color: white;
 text-transform: uppercase;
 border-radius: 4px;
 cursor: pointer;
}

.btn:hover {
 background: linear-gradient(90deg, #57B957 0%, #64bf64 100%);
}

.btn:active {
 transform: translate(0em, 0.2em);
}
</style>
