<template>
    <header>
        <div class="container">
            <div id="menubar">
                <div class="column">
                    <span>
                        <img class="logo" src="../../../assets/images/logo.png" />
                    </span>
                </div>
                <div class="column">
                    <nav class="text-right">
                        <a class="active" href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Pricing</a>
                        <a href="#">Login</a>
                        <a class="btn" href="#">Sign In</a>
                    </nav>
                </div>
            </div>

            <div class="bar-1">
                <h3 class="accent">Get contact information from just a name!</h3>
                <strong>Search up to 500,000 records in seconds</strong>
            </div>

            <Search/>
        </div>
    </header>
</template>

<script src="./header.js"></script>
<style lang="scss" scoped>
@import "./header.scss";
</style>