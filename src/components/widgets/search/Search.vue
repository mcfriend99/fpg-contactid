<template>
    <div id="search-box">
        <input type="text" v-model="$searchText" name="search" class="" placeholder="Enter a name and hit enter to search, e.g. Joseph" @keydown.enter="search" />
        <span class="search-icon" v-if="$searchingText !== ''"><img src="../../../assets/images/search.svg" /></span> <!-- Search icon -->
        <span class="search-icon" @click="$searchText = ''" v-else><img src="../../../assets/images/close.svg" /></span> <!-- Cancel icon -->
    </div>
</template>

<script src="./search.js"></script>
<style lang="scss" scoped>
@import "./search.scss";
</style>
