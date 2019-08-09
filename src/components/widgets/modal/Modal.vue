<template>
    <div>
        <div id="box">
            <img :src="$selectedContact.picture.large" id="dp" />
            <div id="content">
                <div id="personal-info">
                    <div id="name">{{ `${$selectedContact.name.first} ${$selectedContact.name.last}`}}</div>
                    <div id="gender-age">{{ `${$selectedContact.gender}, ${$selectedContact.dob.age}` }}</div>
                    <div id="country">{{ $selectedContact.nat }}</div>
                </div>

                <div id="contacts">
                    <div v-if="$selectedContact.phone !== ''">
                        <img class="icon" width="24px" src="../../../assets/images/location-icon.svg" />
                        <span>{{ $selectedContact.phone }}</span>
                    </div>
                    <div v-if="$selectedContact.email !== ''">
                        <img class="icon" width="24px" src="../../../assets/images/email-icon.svg" />
                        <span>{{ $selectedContact.email }}</span>
                    </div>
                    <div v-if="$selectedContact.location !== ''">
                        <img class="icon" width="24px" src="../../../assets/images/address-icon.svg" />
                        <span>{{ $selectedContact.location.street }}</span>
                    </div>
                </div>

                <div id="actions">
                    <div>
                        <a class="pure"><img class="icon" width="18px" src="../../../assets/images/star.svg" /> Add to favorites</a>
                        <a class="btn"><img class="icon" width="14px" src="../../../assets/images/lock.svg" /> Sign In</a>
                        <span>to get more information</span>
                    </div>
                </div>
            </div>
        </div>

        <span id="close" @click="$selectedContact = null">
            <img class="icon" width="14px" src="../../../assets/images/close-white.svg" />
        </span>
    </div>
</template>

<script src="./modal.js"></script>
<style lang="scss" scoped>
@import "./modal.scss";
</style>
