<template>
    <div>
        <h1>Hello</h1>
        <label>InOut hours</label>
        <input v-model="hours" v-on:input="decimalHours" type="number" placeholder="Type hours" className="input w-full max-w-xs dark:bg-white dark:text-black" />

        <h1>{{hours}}</h1>
    </div>
</template>


<script lang="ts">
    export default {
        data() {
            return {
                hours: 0
            }
        }, 
        methods: {
            decimalHours(event : any): void {                
                console.log(event.target.value);
            }
        }
    }
</script>