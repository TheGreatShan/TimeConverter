import { CalculateDecimal } from '../lib/CalculateDecimal';
<template>
    <div>
        <label>InOut hours</label>
        <input v-model="hours" v-on:input="decimalHours" type="text" placeholder="Type hours"
            className="input w-full max-w-xs dark:bg-white dark:text-black" />

        <h1>{{ decimal }}</h1>
    </div>
</template>


<script lang="ts">
import { CalculateDecimal } from '../lib/CalculateDecimal';
export default {
    data() {
        return {
            hours: "",
            decimal: 0
        }
    },
    methods: {
        decimalHours(event: any): void {
            this.decimal = CalculateDecimal(event.target.value)
        }
    }
}
</script>