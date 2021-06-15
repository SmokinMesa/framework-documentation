<template>
    <main>
        <component :is="currentComponent" />



        <vue-simple-markdown source="/node_modules/frontend-framework/components/saas/blog/bloglatest-image-1-1/README.md" />


        <section class="doc-window">
            <div class="sw">
                <h1>Components: Blog</h1>

                <p>Currently viewing: {{ currentComponent }}</p>
            </div>
        </section>


    </main>
</template>



<script>
    import bloglatest_image_1_1 from "~/node_modules/frontend-framework/components/saas/blog/bloglatest-image-1-1/bloglatest-image-1-1";
    import bloglatest_image_1_2 from "~/node_modules/frontend-framework/components/saas/blog/bloglatest-image-1-2/bloglatest-image-1-2";
    import bloglatest_image_2_1 from "~/node_modules/frontend-framework/components/saas/blog/bloglatest-image-2-1/bloglatest-image-2-1";
    import bloglatest_image_2_2 from "~/node_modules/frontend-framework/components/saas/blog/bloglatest-image-2-2/bloglatest-image-2-2";
    import bloglatest_slider_1 from "~/node_modules/frontend-framework/components/saas/blog/bloglatest-slider-1/bloglatest-slider-1";
    import bloglatest_slider_2 from "~/node_modules/frontend-framework/components/saas/blog/bloglatest-slider-2/bloglatest-slider-2";
    import bloglatest_text_1_1 from "~/node_modules/frontend-framework/components/saas/blog/bloglatest-text-1-1/bloglatest-text-1-1";
    import bloglatest_text_1_2 from "~/node_modules/frontend-framework/components/saas/blog/bloglatest-text-1-1/bloglatest-text-1-1";
    import bloglatest_text_2_1 from "~/node_modules/frontend-framework/components/saas/blog/bloglatest-text-2-1/bloglatest-text-2-1";
    import bloglatest_text_2_2 from "~/node_modules/frontend-framework/components/saas/blog/bloglatest-text-2-2/bloglatest-text-2-2";


    // import mdFile from '~/node_modules/frontend-framework/components/saas/blog/bloglatest-image-1-1//README.md';

    export default {
        name: 'pageComponentsBlog',
        components: {
            "bloglatest-image-1-1": bloglatest_image_1_1,
            "bloglatest-image-1-2": bloglatest_image_1_2,
            "bloglatest-image-2-1": bloglatest_image_2_1,
            "bloglatest-image-2-2": bloglatest_image_2_2,
            "bloglatest-slider-1": bloglatest_slider_1,
            "bloglatest-slider-2": bloglatest_slider_2,
            "bloglatest-text-1-1": bloglatest_text_1_1,
            "bloglatest-text-1-2": bloglatest_text_1_2,
            "bloglatest-text-2-1": bloglatest_text_2_1,
            "bloglatest-text-2-2": bloglatest_text_2_2,
        },
        data() {
            return {
                currentComponent: '',
            }
        },
        mounted() {
            this.currentComponent = this.$route.params.id;

        }
    }
</script>