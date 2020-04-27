<template>
    <div>
        <object-header>
            {{$t('pages.queue.title')}}
        </object-header>

        <section class="object-content">
            <header class="content-header">
                <h3 class="content-title">
                    {{$t('pages.queue.title')}}
                </h3>
            </header>
        </section>
    </div>
</template>

<script>
import objectHeader from '../object-utils/the-object-header.vue';

export default {
    name: 'the-queues',
    components: {
        objectHeader,
    },
};
</script>

<style scoped>

</style>
