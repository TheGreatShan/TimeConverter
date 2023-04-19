<script lang="ts">
export default {
    props: {
        title: String
    }
}
</script>


<template>
    <div>
        <header class="shadow bg-base-100">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-center text-3xl font-bold text-slate-100">{{ title }}</h1>
            </div>
        </header>
    </div>
</template>