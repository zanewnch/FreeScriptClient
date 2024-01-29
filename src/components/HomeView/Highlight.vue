<script setup lang='ts'>
const data: {
    name: string;
    articleTitle: string;
}[] = [
        { name: 'Emily Johnson', articleTitle: 'Exploring the Ethical Implications of AI in Healthcare' },
        { name: 'Benjamin Smith', articleTitle: 'The Future of AI: Transforming Industries and Beyond' },
        { name: 'Olivia Davis', articleTitle: 'Machine Learning Demystified: A Beginners Guide to AI Technologies' }
    ];



</script>
<template>
    <section class='section md:w-full md:h-full  md:flex md:flex-col md:justify-start items-center'>
        <div class='highlight-top md:w-full md:h-8 md:flex md:justify-center'>
            <p class='highlight-top-content md:text-start md:text-lg md:text-wrap md:text-black md:text md:font-bold'>Staff
                Picks</p>
        </div>
        <div
            v-for='(item, index) in data'
            :key='index'
            class='card-container'
        >

            <div class='md:flex md:justify-start md:items-center'>
                <el-icon class='icon'>
                    <User />
                </el-icon>
                <p class='cart-title md:text-start'>{{ item['name'] }}</p>
            </div>
            <p class='card-content md:text-start'>{{ item['articleTitle'] }}</p>
        </div>
        <div class='md:w-full md:flex md:justify-center md:items-center'>
            <a
                href="/data"
                class='full-content'
            >See the full list</a>
        </div>
    </section>
    
</template>
<style lang='scss' scoped>
@media(min-width: 768px) {

    

    .section{
        margin-top: 50px;
    }

    .highlight-top {
        margin-top: 10px;

        .highlight-top-content {
            width: 80%;
        }
    }

    .card-container {
        margin-top: 10px;
        width: 80%;
    }

    .card-content {
        margin-top: 5px;
    }

    .full-content {
        width: 80%;
        margin-top: 10px;
    }

    .icon {
        margin-right: 5px;
    }

    p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}
</style>