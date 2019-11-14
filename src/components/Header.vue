<template>
    <section class="header">
        <h1 class="name">{{ name }}</h1>
        <h2 class="title">{{ title }} </h2>
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
    </section>
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
    #contact {
        font-size: 13px;
    }

    #contact a {
        text-decoration: none;
    }

</style>

