<template>
    <div class="the-supervisor-workspace">
        <app-nav @re-renderNav="updateNav" :key="reloadNavKey"></app-nav>
        <main class="object">
            <call-window></call-window>
            <call-window-eavesdrop></call-window-eavesdrop>
            <wt-notifications-bar/>
            <app-header/>
            <div class="object-content-wrap">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>

<script>
import AppHeader from '../app-header/app-header.vue';
import theNavbar from '../the-navbar/the-navbar.vue';
import callWindow from '../call-window/call-window.vue';
import callWindowEavesdrop from '../call-window/call-window-eavesdrop.vue';

export default {
    name: 'module-wrap',
    components: {
        AppHeader,
        'app-nav': theNavbar,
        callWindow,
        callWindowEavesdrop,
    },
    data() {
        return {
            reloadNavKey: 0,
        };
    },
    methods: {
        updateNav() {
            this.reloadNavKey++;
        },
    },
};
</script>

<style lang="scss" scoped>
.the-supervisor-workspace {
    display: flex;
    width: 100%;
    //overflow-x: hidden;
}

// main content itself, without nav but with main header
.object {
    flex: 1 0 auto;
    width: 1px;
    //padding: 40px;
    //width: calc(100vw - 272px);
    //overflow: auto;
}

.the-nav__wrap {
    flex: 0 0 272px;
    //min-width: 272px;
    //width: 272px;
}

.object-content-wrap {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
}

// inner content section
.object-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 65vh;
    padding: 15px 30px;
    background: #fff;
    border-radius: $border-radius;

    .pagination {
        padding-top: 28px;
        margin: auto 0 0 auto;
    }
}

.btn-controls {
    .btn {
        margin-left: 28px;
    }
}

// SECTION HEADING
.content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    margin-bottom: 25px;

    .content-title {
        @extend .typo-heading-md;
        margin: 0;

        + .hint {
            top: -2px;
        }
    }

    // WRAP FOR SEARCH INPUT
    .content-header__actions-wrap {
        display: flex;
        align-items: center;

        // ACTIONS
        .icon-action {
            margin-left: 30px;
        }

        //.table-action__actions {
        //  display: flex;
        //  align-items: center;

        .active {
            color: #000;
        }

        .upload-csv {
            position: relative;
            height: 24px;
            margin-left: 30px;

            .icon-icon_upload {
                margin-left: 0;
                opacity: 1;
                pointer-events: none;
            }

            &:hover .icon-icon_upload {
                color: #000;
            }

            .upload-csv__input {
                position: absolute;
                top: -2px;
                left: 0;
                width: 24px;
                height: 24px;
                font-size: 0;
                cursor: pointer;
                opacity: 0;
            }
        }

        i:not(.icon-icon_search) {
            @extend .icon-action;
            margin-left: 30px;
        }

        //}
    }
}

// GRID TEMPLATE FOR MODULE INPUTS
.object-input-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 28px;
    grid-row-gap: 8px;
}
</style>
