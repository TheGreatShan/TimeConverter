<script lang="ts">
import { CalculateDecimal } from '../lib/CalculateDecimal';
import MurasHeader from "./Header.vue"

export default {
    data() {
        return {
            hours: "",
            decimal: 0,
        }
    },
    methods: {
        decimalHours(event: any): void {
            this.decimal = CalculateDecimal(event.target.value)
        }
    }
}
</script>

<template>
    <div>
        <MurasHeader title="Calculate to decimal hours" />
        <div class="flex items-center justify-center">
            <div>
                <input v-model="hours" v-on:input="decimalHours" type="text" placeholder="hh:mm"
                    class="input w-[50rem] dark:bg-white dark:text-black" />
                <h1 class="font-bold text-xl">Your worked hours: {{ decimal }}</h1>
            </div>
        </div>
    </div>
</template>

