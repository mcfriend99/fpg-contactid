<template>
    <div class="card" :class="{'filled': image !== ''}" @click="showContact">
        <span id="image">
            <img :src="image" class="dp" />
        </span>
        <div id="details">
            <div id="name">
                {{ name }}
            </div>
            <div id="phone">
                <img class="icon" width="16px" src="../../../assets/images/location-icon.svg" v-if="phone !== ''" />
                {{ phone }}
            </div>
            <div id="email" v-if="email !== ''">
                <img class="icon" width="16px" src="../../../assets/images/email-icon.svg" />
                {{ email }}
            </div>
        </div>
        <div id="actions">
            <span id="country">{{ country }}</span>
            <span id="star">
                <img class="icon" width="16px" src="../../../assets/images/star-lite.svg" v-if="phone !== ''" />
            </span>
        </div>
        <div class="keyframe" v-if="name === ''"></div>
    </div>
</template>

<script src="./contact-card.js"></script>
<style lang="scss" scoped>
@import "./contact-card.scss";
</style>