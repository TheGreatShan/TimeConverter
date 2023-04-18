<template>
    <div>
        <h1>Hello</h1>
        <label>InOut hours</label>
        <input type="number" v-on:change="decimalHours(event)=" placeholder="Type hours" className="input w-full max-w-xs dark:bg-white dark:text-black" />

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
                this.hours = event.target.value;
            }
        }
    }
</script>