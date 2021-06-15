<template>
    <nav
        :class="[
            componentName,
            { 'active' : isMainActive }
        ]"
    >
        <button
            :class="{ 'active' : isMainActive }"
            class="no-style nav-trigger"
            aria-label="button to toggle nav"
            @click="toggleSiteNav()"
        >
            Frontend Framework Docs
            <icon-chevron-right />
        </button>

        <div class="for-scroll">
            <ul v-if="activeNav === 'initial'">
                <li
                    v-for="parent in navInitial"
                    :key="parent.name"
                    @click="toShow(parent)"
                >
                    {{ parent.name }}
                </li>
            </ul>


            <ul v-if="activeNav === 'uikit-parents'">
                <li @click="toShow('initial')">< Back</li>
                <li
                    v-for="parent in navUikit"
                    :key="parent.name"
                    @click="toShow(parent)"
                >
                    {{ parent.name }}
                </li>
            </ul>

            <ul v-if="activeNav === 'component-parents'">
                <li @click="toShow('initial')">< Back</li>
                <li
                    v-for="(parent, index) in navComponents"
                    :key="parent.name"
                    @click="showChild(index)"
                >
                    {{ parent.name }}
      <!--               <ul
                        v-for="child in navComponents[index].children"
                        class="children"
                    >
                        <li>
                            {{ child.name }}
                        </li>
                    </ul> -->
                </li>
            </ul>

            <div v-if="childIndex >= 0">
                <li @click="toShow('initial')">< Back</li>
                <ul
                    v-for="child in navComponents[childIndex].children"
                    :key="child.name"
                >
                    <nuxt-link
                        tag="li"
                        :to="child.url"
                        alt="View this component"
                    >
                        {{ child.name }}
                    </nuxt-link>
                </ul>
            </div>


        </div>
    </nav>
</template>




<script>
    export default {
        name: "siteNav",
        props: {
            componentName: {
                default: "site-nav",
                type: String
            },
        },
        data() {
            return {
                isMainActive: true,
                activeNav: 'initial',
                childIndex: -1,
                navInitial: [
                    {
                        "name": "Overview",
                        "url": "/overview",
                        "show": ''
                    },
                    {
                        "name": "Style Guide",
                        "url": "/style-guide",
                        "show": ''
                    },
                    {
                        "name": "UI Kit",
                        "show": "uikit-parents",
                    },
                    {
                        "name": "Components",
                        "show": "component-parents",
                    },
                ],
                navUikit: [
                    {
                        "name": "Layout",
                        "url": "/uikit/layout",
                    },
                    {
                        "name": "Typography",
                        "url": "/uikit/typography",
                    },
                ],
                navComponents: [
                    {
                        "name": "Site Footers",
                        "url": "/components/site-footers",
                        "children": [
                            {
                                "name": "footer-3col-menu",
                                "url": "/components/site-footers/footer-3col-menu",
                            },
                        ]
                    },
                    {
                        "name": "Filters",
                        "url": "/components/filters",
                        "children": [
                            {
                                "name": "filter-mini-1",
                                "url": "/components/filters/filter-mini-1",
                            },
                        ]
                    },
                    {
                        "name": "Blog",
                        "url": "/components/blog",
                        "children": [
                            {
                                "name": "bloglatest-image-1-1",
                                "url": "/components/blog/bloglatest-image-1-1",
                            },
                            {
                                "name": "bloglatest-image-1-2",
                                "url": "/components/blog/bloglatest-image-1-2",
                            },
                            {
                                "name": "bloglatest-image-2-1",
                                "url": "/components/blog/bloglatest-image-2-1",
                            },
                            {
                                "name": "bloglatest-image-2-2",
                                "url": "/components/blog/bloglatest-image-2-2",
                            },
                            {
                                "name": "bloglatest-slider-1",
                                "url": "/components/blog/bloglatest-slider-1",
                            },
                            {
                                "name": "bloglatest-slider-2",
                                "url": "/components/blog/bloglatest-slider-2",
                            },
                            {
                                "name": "bloglatest-text-1-1",
                                "url": "/components/blog/bloglatest-text-1-1",
                            },
                            {
                                "name": "bloglatest-text-2-1",
                                "url": "/components/blog/bloglatest-text-2-1",
                            },
                            {
                                "name": "bloglatest-text-2-2",
                                "url": "/components/blog/bloglatest-text-2-2",
                            }
                        ]
                    },
                ]
            }
        },
        methods: {
            toggleSiteNav() {
                this.isMainActive = !this.isMainActive;
            },
            toShow(clicked) {
                //  checlk if a child or a direct link
                if (clicked.url) {
                    this.$router.push(clicked.url);
                } else if (clicked.show) {
                    this.activeNav = clicked.show;
                } else {
                    this.activeNav = clicked;
                }

                this.childIndex = -1;
            },
            showChild(toShow) {
                this.childIndex = toShow;

                this.activeNav = '';
            }
        }
    }
</script>




<style lang="scss">
    @use "./site-nav.scss"; // this just links to the style file
</style>
