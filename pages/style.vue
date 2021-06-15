<template>
    <div class="sw">
        <section style="padding-top: 100px">
            <h1 class="h0">Heading Hero/Special (h0)</h1>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div class="list-content">
                <ul>
                    <li>Unordered list item</li>
                    <li>Unordered list item</li>
                    <li>Unordered list item</li>
                </ul>
            </div>

            <p><strong>Strong text</strong></p>
            <p><small>Samll text</small></p>
        </section>


        <section style="padding-bottom: 100px">
            <h1>Standard Buttons</h1>

            <button>Plain Button</button>
            <button class="primary">Primary Button</button>
            <button class="secondary">Secondary Button</button>
            <button class="">Other Button</button>
            <button disabled>Disabled Button</button>

            <h1>Outline Buttons</h1>

            <button class="outline">Outline Button</button>
            <button class="primary outline">Outline Primary Button</button>
            <button class="secondary outline">Outline Button</button>
            <button class="misc outline">Outline Other Button</button>
            <button
                class="outline"
                disabled
            >
                Disabled Outline Button
            </button>

            <h1>Small Buttons</h1>

            <button class="small">Small Button</button>
            <button class="primary small">Small Primary Button</button>
            <button class="secondary small">Small Secondary Button</button>
            <button class="misc small">Small Other Button</button>
            <button
                class="small"
                disabled
            >
                Disabled Small Button
            </button>
        </section>


        <section style="padding-bottom: 100px">
            <h1>Form styles</h1>

            <form class="np-form">
                <div class="container">
                    <label for="test">
                        Label
                        <sup>*</sup>
                        <span class="required">Required field</span>
                    </label>

                    <input
                        id="test"
                        type="text"
                        placeholder="Text input"
                    >
                </div>





                <div
                    v-for="(test, index) in 4"
                    class="col-12"
                >
                    <input
                        :id="'input-test-' + index"
                        :class="{ 'move' : dummy_form_data[index].length }"
                        type="text"
                        v-model="dummy_form_data[index]"
                    >
                    <label :for="'input-test-' + index">Label text example</label>
                </div>

                <br>
                <br>

                <div
                    v-for="(test, index) in 4"
                    class="col-12"
                >
                    <select
                        :id="'select-test-' + index"
                        :class="{ 'move' : dummy_form_data[index].length }"
                        v-model="dummy_form_data[index]"
                    >
                        <option v-for="option in 10">Test option</option>
                    </select>
                    <label :for="'select-test-' + index">Label select example</label>
                    <icon-arrow-down />
                </div>

            </form>
        </section>
    </div>
</template>




<script>
    export default {
        name: 'preview',
        layout: 'no-valuation-banner',
        props: {
        },
        data() {
            return {
                dummy_form_data: [
                    '',
                    '',
                    '',
                    '',
                    ''

                ],
            }
        },
        methods: {
        }
    }
</script>