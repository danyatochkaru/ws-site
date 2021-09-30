<template>
    <div class="background" @click.self="close">
        <div class="window">
            <div class="header">
                <h3>{{title ?? "Без названия"}}</h3>
                <span :class="'link'" @click="close">Закрыть</span>
            </div>
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        close: Function
    }
}
</script>

<style>
.background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 5;
}
.window {
    width: fit-content;
    min-width: 400px;
    max-width: 80%;
    height: fit-content;
    min-height: 200px;
    max-height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    background-color: var(--second-color);
    border-radius: 10px;
}
.window .header {
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--text-color);
    color: var(--second-color);
    width: 90%;
    min-height: 40px;
    max-height: 20%;
    border-radius: 10px 10px 0 0;
}
.window .content {
    width: 90%;
    padding: 2% 5%;
}
</style>