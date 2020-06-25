<template>
    <div class="content-wrap">
        <object-header hide-primary-action>
             <template v-slot:title>
                {{$t('settings.settings')}}
            </template>
        </object-header>

        <section class="object-content">
            <section class="settings-section">
                <header class="content-header">
                    <h3 class="content-title">{{$t('settings.changePassword')}}</h3>
                </header>
                <form class="object-input-grid grid-w50">
                    <div>
                        <form-input
                                v-model="password"
                                :v="$v.password"
                                :label="$t('auth.password')"
                                required
                        ></form-input>
                        <form-input
                                v-model="confirmPassword"
                                :v="$v.confirmPassword"
                                :label="$t('auth.confirmPassword')"
                                required
                        ></form-input>
                        <btn
                                :disabled="computeDisabled"
                            @click="changePassword"
                        >{{$t('defaults.save')}}</btn>
                    </div>
                </form>
            </section>

            <section class="settings-section">
                <header class="content-header">
                    <h3 class="content-title">{{$t('settings.language')}}</h3>
                </header>
                <form class="object-input-grid grid-w50">
                    <multiselect-row
                        v-model="language"
                        :options="languageOptions"
                        :api-mode="false"
                        :track-by="'id'"
                        :multiple="false"
                        :closeOnSelect="true"
                        @input="changeLanguage"
                    ></multiselect-row>
                </form>
            </section>

            <section class="settings-section">
                <header class="content-header">
                    <h3 class="content-title">{{$t('settings.autoRefresh')}}</h3>
                </header>
                <form class="object-input-grid grid-w50">
                    <multiselect-row
                        v-model="autorefresh"
                        :options="autorefreshOptions"
                        :api-mode="false"
                        :track-by="'value'"
                        :multiple="false"
                        :closeOnSelect="true"
                        @input="changeRefresh"
                    ></multiselect-row>
                </form>
            </section>
        </section>
    </div>
</template>

<script>
    import { sameAs, required } from 'vuelidate/lib/validators';
    import objectHeader from './object-utils/the-object-header.vue';
    import multiselectRow from './utils/multiselect-row.vue';
    import btn from './utils/btn.vue';
    import formInput from './utils/form-input.vue';

    export default {
        name: 'the-settings',
        components: {
            objectHeader,
            btn,
            formInput,
            multiselectRow,
        },
        data: () => ({
            password: '',
            confirmPassword: '',
            language: { name: 'English', id: 'en' },
            languageOptions: [
                { name: 'English', id: 'en' },
                { name: 'Русский', id: 'ru' },
            ],
            autorefresh: { name: '10s', value: 10000 },
            autorefreshOptions: [
                { name: 'Off', value: 0 },
                { name: '5s', value: 5000 },
                { name: '10s', value: 10000 },
                { name: '30s', value: 30000 },
                { name: '1m', value: 60000 },
                { name: '5m', value: 300000 },
                { name: '15m', value: 900000 },
                { name: '30m', value: 1800000 },
                { name: '1h', value: 3600000 },
                { name: '2h', value: 7200000 },
                { name: '1d', value: 86400000 },
            ],
        }),

        validations: {
            password: {
                required,
            },
            confirmPassword: {
                sameAs: sameAs('password'),
            },
        },

        mounted() {
            const lang = localStorage.getItem('lang'); // get default lang
            // if there's a previously set lang, set it
            if (lang) this.language = this.languageOptions.find((item) => item.id === lang);

            const ar = localStorage.getItem('autorefresh');
            if (lang) this.autorefresh = this.autorefreshOptions.find((item) => item.value === +ar);
        },

        computed: {
            computeDisabled() {
                this.$v.$touch();
                return this.$v.$pending || this.$v.$error;
            },
        },

        methods: {
            changePassword() {},

            changeLanguage(value) {
                localStorage.setItem('lang', value.id);
                this.language = value;
                this.$i18n.locale = value.id;
            },

            changeRefresh(item) {
                localStorage.setItem('autorefresh', item.value);
                this.autorefresh = item;
            },
        },
    };
</script>

<style lang="scss" scoped>
    .settings-section {
        margin-bottom: 28px;

        .btn {
            display: block;
            margin: 3px 0 0 auto;
        }
    }
</style>
