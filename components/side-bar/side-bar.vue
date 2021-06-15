<template>
    <nav :class="componentName">
        <button
            class="no-style nav-trigger"
            aria-label="button to toggle nav"
            @click="toggleSiteNav()"
        >
            <span hidden>Toggle the side navigation</span>

            <icon-menu-close v-if="isMainActive" />
            <icon-menu-dots v-else />
        </button>

        <transition name="site-nav-parent">
            <ul
                v-if="isMainActive"
                class="nav-col"
                role="navigation"
            >
                <li
                    v-for="(parent, index) in nav"
                    class="link-parent"
                >
                    <nuxt-link
                        tag="span"
                        :to="'/' + parent.parent"
                        :event="true ? '' : 'click'"
                    >
                        {{ parent.parent }}
                    </nuxt-link>

                    <div class="grouped-children">
                        <nuxt-link
                            v-for="(child, index) in parent.children"
                            tag="ul"
                            class="nav-child"
                            :class="{ 'expanded' : index == activeGrandChild }"
                            :to="child.url"
                            :event="true ? '' : 'click'"
                            @click.native="toggleGrandChild(child, index)"
                            :key="index + 1"
                        >
                            <li>
                                {{ child.tag }}

                                <icon-chevron-down v-if="child.grandchildren" />
                            </li>

                            <ul
                                v-if="child.grandchildren"
                                class="nav-grandchild"
                            >
                                <nuxt-link
                                    v-for="(grandchild, index) in child.grandchildren"
                                    tag="li"
                                    class="nav-grandchild"
                                    :to="grandchild.url"
                                    :key="index + 1"
                                >
                                    {{ grandchild.tag }}
                                </nuxt-link>
                            </ul>
                        </nuxt-link>
                    </div>
                </li>
            </ul>
        </transition>
    </nav>
</template>




<script>
    export default {
        name: "siteNav",
        props: {
            componentName: {
                default: "side-bar",
                type: String
            },
            // nav: {
            //     type: Array,
            //     default: () => ([])
            // }
        },
        data() {
            return {
                isMainActive: true,
                activeGrandChild: null,
                nav: [
                    {
                        "parent": "Layout",
                        "children": [
                            {
                                "tag": "Overview",
                                "url": "/layout/",
                            },
                        ]
                    },
                    {
                        "parent": "UI Kit",
                        "children": [
                            {
                                "tag": "Overview",
                                "url": "/uikit/",
                            },
                        ]
                    },
                    {
                        "parent": "Components",
                        "children": [
                            {
                                "tag": "Overview",
                                "url": "/components",
                            },
                            {
                                "tag": "Site Headers",
                                "url": "/components",
                                "grandchildren": [
                                    {
                                        "tag": "header-1",
                                        "url": "/cms/content/pages",
                                    },
                                    {
                                        "tag": "header-2",
                                        "url": "/componentspage/add",
                                    }
                                ]
                            },
                            {
                                "tag": "Site Footers",
                                "url": "/components",
                                "grandchildren": [
                                    {
                                        "tag": "footer-1",
                                        "url": "/components",
                                    },
                                    {
                                        "tag": "footer-2",
                                        "url": "/components",
                                    }
                                ]
                            },
                            {
                                "tag": "site navigation",
                                "url": "/components",
                            },
                            {
                                "tag": "Blog",
                                "url": "/components/blog",
                                "grandchildren": [
                                    {
                                        "tag": "bloglatest-image-1-1",
                                        "url": "/components/blog/bloglatest-image-1-1",
                                    },
                                    {
                                        "tag": "bloglatest-image-1-2",
                                        "url": "/components/blog/bloglatest-image-1-2",
                                    },
                                    {
                                        "tag": "bloglatest-image-2-1",
                                        "url": "/components/blog/bloglatest-image-2-1",
                                    },
                                    {
                                        "tag": "bloglatest-image-2-2",
                                        "url": "/components/blog/bloglatest-image-2-2",
                                    },
                                    {
                                        "tag": "bloglatest-slider-1",
                                        "url": "/components/blog/bloglatest-slider-1",
                                    },
                                    {
                                        "tag": "bloglatest-slider-2",
                                        "url": "/components/blog/bloglatest-slider-2",
                                    }
                                ]
                            },
                        ]
                    }
                ],
            }
        },
        methods: {
            toggleSiteNav() {
                // this.$store.commit('toggleSiteNav');
                this.isMainActive = !this.isMainActive;
            },
            toggleGrandChild(checkGrandchild, toToggle) {
                /*
                    default click event prevented on <nuxt-link and instead...
                    - check to see if grandchildren exist
                    - if they do just toggle the active class for the accordion (keeping the click prevented)
                    - else if no grandchildren just push to the URL
                */
                if (checkGrandchild.grandchildren) {
                    if (toToggle === this.activeGrandChild) {
                        this.activeGrandChild = null;
                    } else {
                        this.activeGrandChild = toToggle;
                    }
                } else {
                    this.$router.push(checkGrandchild.url);
                }
            }
        }
    }
</script>




<style lang="scss">
    @use "./side-bar.scss"; // this just links to the style file
</style>
