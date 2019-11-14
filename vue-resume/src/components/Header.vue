<template>
    <div class="header">
        <div class="name">{{ name }}</div>
        <div class="title">{{ title }} </div>
        <section id="contact">
            <div class="social"><i class="fa fa-phone fa-fw" aria-hidden="true"></i>&nbsp;<a :href="`tel:${phoneNumber}`">{{phoneNumber}}</a></div>
            <div class="social">
                <i class="fa fa-envelope fa-fw" aria-hidden="true"></i>&nbsp;<a :href="`mailto:${email}`">{{email}}</a></div>
            <div class="social">
                <i class="fa fa-link fa-fw" aria-hidden="true"></i>&nbsp;<a :href="website">{{website}}</a>
            </div>
            <div class="social">
                <i class="fa fa-github fa-fw" aria-hidden="true"></i>&nbsp;<a :href="github">{{github}}</a>
            </div>
            <div class="social">
                <i class="fa fa-linkedin fa-fw" aria-hidden="true"></i>&nbsp;<a :href="linkedin">{{linkedin}}</a>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        name: String,
        title: String,
        phoneNumber: String,
        email: String,
        website: String,
        github: String,
        linkedin: String
    }
}
</script>

<style scoped>
    .name, .title {
        font-family: 'Barlow', sans-serif;
    }
    .name {
        font-size: 40px;
    }
    .title{
        font-size: 30px;
    }

</style>

