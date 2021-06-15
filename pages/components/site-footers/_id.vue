<template>
    <main>
        <component :is="currentComponent" />


        <section class="doc-window">
            <div class="sw">
                <h1>Components: Site Footers</h1>

                <p>Currently viewing: {{ currentComponent }}</p>
            </div>
        </section>
    </main>
</template>



<script>
    import footer_3col_menu from "~/node_modules/frontend-framework/components/saas/footers/footer-3col-menu/footer-3col-menu";


    export default {
        name: 'pageComponentsBlog',
        components: {
            "footer-3col-menu": footer_3col_menu,
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