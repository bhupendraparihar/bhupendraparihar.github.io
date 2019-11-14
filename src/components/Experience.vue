<template>
    <section class="experience-wrapper">
        <h1>Experience</h1>
        <section class="organization" id="experience" v-for="item in experience" :key="item.id">
            <ul data-content="experience">
                <li>
                    <section>
                        <ul>
                            <li>
                                <div class="label">Company:</div>
                                <div class="content">{{item.company}}</div>
                            </li>
                            <li>
                                <div class="label">Title:</div>
                                <div class="content">{{item.title}}</div>
                            </li>
                            <li>
                                <div class="label">Tenure:</div>
                                <div class="content">{{item.startDate}} - {{item.endDate}}</div>
                            </li>
                            <li>
                                <div class="label">Responsibilities:</div>
                                <div class="content">{{item.responsibilities}}</div>
                            </li>
                            <li ng-if="item.achievements">
                                <div class="label">Achievements:</div>
                                <div class="content">{{item.achievements}}</div>
                            </li>
                        </ul>
                    </section>
                </li>
            </ul>
        </section>
        </section>
    </section>
</template>

<script>
export default {
    title: 'Experience',
    props: {
        title: String,
        experience: [],
    }
}
</script>

<style scoped>
li {
    display: flex;
}

.content {
    margin-left: 5px;
}
</style>