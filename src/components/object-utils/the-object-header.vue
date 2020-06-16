<template>
    <header class="object-header">
        <div class="object-header__title-wrap">
            <h2 class="object-title">
                <slot name="title"></slot>
            </h2>
        </div>
        <div class="object-header__actions-wrap">
            <slot name="actions"></slot>
        </div>
    </header>
</template>

<script>
    // import btn from '../utils/btn.vue';

    export default {
        name: 'page-header',
        components: {
          // btn,
        },
        props: {
            primaryText: {
                type: String,
            },
            primaryAction: {
                type: Function,
            },
            primaryDisabled: {
                type: Boolean,
                default: false,
            },
            secondaryText: {
                type: String,
            },
            close: {
                type: Boolean,
                default: false,
            },
            hidePrimaryAction: {
                type: Boolean,
                default: false,
            },
        },

        methods: {
            back() {
                this.$router.go(-1);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .object-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 63px;
        padding: 12px 30px;
        margin-bottom: 20px;

        background: #fff;
        border-radius: $border-radius;
    }

    .object-header__title-wrap {
        display: flex;
    }

    .object-title {
        @extend .typo-heading-lg;

        margin: 0;
        letter-spacing: 0.15px;

        span {
            @extend .typo-body-md;
        }
    }

    .object-header__actions-wrap {
        display: flex;
        align-items: center;
        position: relative;

        .cc-btn {
        margin-left: (20px);
        }
    }
</style>
