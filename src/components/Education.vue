<template>
    <section id="education">
        <h1>{{title}}</h1>
        <ul v-for="item in education" :key="item.id">
            <li>
                <section>
                    <ul>
                        <li>
                            <div class="label">School:</div>
                            <div class="content">{{item.school}}</div>
                        </li>
                        <li>
                            <div class="label">Program:</div>
                            <div class="content">{{item.program}}</div>
                        </li>
                        <li>
                            <div class="label">Dates Attended:</div>
                            <div class="content">{{item.startDate}} - {{item.endDate}}</div>
                        </li>
                        <li>
                            <div class="label">Achievements:</div>
                            <div class="content">{{item.achievements}}</div>
                        </li>
                    </ul>
                </section>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'Education',
    props: {
        title: String,
        education: []
    }
}
</script>