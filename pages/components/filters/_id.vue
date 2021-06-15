<template>
    <main>
        <component :is="currentComponent" />


        <section class="doc-window">
            <div class="sw">
                <h1>Components: Filters</h1>

                <p>Currently viewing: {{ currentComponent }}</p>
            </div>
        </section>
    </main>
</template>



<script>
    import filter_mini_1 from "~/node_modules/frontend-framework/components/saas/filters/filter-mini-1/filter-mini-1";


    export default {
        name: 'pageComponentsFilters',
        components: {
            "filter-mini-1": filter_mini_1,
        },
        data() {
            return {
                currentComponent: ''
            }
        },
        mounted() {
            this.currentComponent = this.$route.params.id;
        }
    }
</script>