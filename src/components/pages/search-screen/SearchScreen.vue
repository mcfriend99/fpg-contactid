<template>
    <div id="container">
        <strong>Top results for &lsquo;<span>{{ $searchText }}</span>&rsquo;</strong>
        <div class="content" v-if="$contacts.length > 0">
            <ContactCard v-for="contact in $contacts" 
                :key="contact.id.value"
                :name="`${contact.name.first} ${contact.name.last}`"
                :email="contact.email"
                :phone="contact.phone"
                :image="contact.picture.medium"
                :country="contact.nat"
                :contact="contact" />
        </div>
        <div class="content" v-else>
            <ContactCard v-for="i in [1,2,3]" 
                :key="i"
                :name="''"
                :email="''"
                :image="''"
                :phone="''"
                :country="''"
                :contact="{}" />
        </div>
    </div>
</template>

<script src="./search-screen.js"></script>
<style lang="scss" scoped>
@import "./search-screen.scss";
</style>