<template>
  <div id="app" :class="{'with-bg': $searching || $contacts.length > 0}">
    <div id="backdrop"></div>
    <div id="main">
      <site-header/>
      <!-- <router-view/> -->
      <HomeScreen v-if="$contacts.length === 0 && !$searching" />
      <SearchScreen v-else />
      <site-footer/>

      <div id="modal-backdrop" v-if="$selectedContact !== null"></div>
      <Modal v-if="$selectedContact !== null" />
    </div>
  </div>
</template>

<script src="./app.js"></script>
<style lang="scss">
@import "../../assets/scss/base.scss";
@import "./app.scss";
</style>
