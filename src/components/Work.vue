<script setup>
import { ref } from 'vue';
import Card from './Card.vue';

const work = ref([
    {
        company: 'ConfiDens Analytics',
        position: 'Full Stack Developer',
        type: 'Internship',
        date: 'May 2024 - Present', 
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eum illo quos expedita quam magni doloribus
        nulla totam natus? Alias est quibusdam non dolorem voluptas, mollitia obcaecati. Quia animi quaerat eveniet
        quos quae iure repudiandae accusantium facilis temporibus modi distinctio soluta, repellendus, doloremque
        nobis blanditiis perspiciatis in saepe? Id inventore qui labore cum sequi, odit accusantium quidem quo nam,
        nisi fuga minima. Odit atque, quis excepturi sed dicta expedita quidem, beatae eligendi veritatis error unde
        sit necessitatibus minima sequi laudantium. Perspiciatis labore numquam earum, cumque saepe doloribus porro
        possimus quae dolorem quo, eius commodi fugiat exercitationem ea, architecto autem repudiandae.`,
        id: 'confidens',
    },
])

</script>

<template>
    <div id="work-con">
        <div id="spacer">

        </div>
        <template v-for="(position, index) in work">

        </template>
    </div>
</template>

<style scoped>
#work-con {
    /* background: pink; */
    min-height: 230vh;
    max-width: 90%;
}

#work-con #spacer {
    height: 100vh;
}
</style>