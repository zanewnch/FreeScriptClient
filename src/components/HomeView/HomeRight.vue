<script setup lang='ts'>

const data: {
    name: string;
    articleTitle: string;
}[] = [
        { name: 'Emily Johnson', articleTitle: 'Exploring the Ethical Implications of AI in Healthcare' },
        { name: 'Benjamin Smith', articleTitle: 'The Future of AI: Transforming Industries and Beyond' },
        { name: 'Olivia Davis', articleTitle: 'Machine Learning Demystified: A Beginners Guide to AI Technologies' }
    ];

const topicList: {
    topic: string;
}[] = [
        { topic: 'Programming' },
        { topic: 'Writing' },
        { topic: 'Cryptocurrency' },
        { topic: 'Artificial Intelligence' },
        { topic: 'Machine Learning' },
        { topic: 'Data Science' }
    ];


const writerList: {
    name: string;
    description: string;
}[] = [
        {
            name: "John Doe",
            description: "Software Developer, JavaScript, React, Vue"
        },
        {
            name: "Jane Smith",
            description: "Data Analyst, Statistics, Data Visualization"
        },
        {
            name: "Bob Johnson",
            description: "Project Manager, Team Coordination, Product Development"
        },
        {
            name: "Alice Williams",
            description: "UX Designer, User Interfaces, User Experience"
        },
        {
            name: "Charlie Brown",
            description: "Digital Marketer, SEO, Content Marketing"
        },
        {
            name: "David Davis",
            description: "Full-Stack Developer, JavaScript, Python"
        },
        {
            name: "Eva Green",
            description: "Product Manager, Software Development"
        },
        {
            name: "Frank Miller",
            description: "Data Scientist, Data Analysis, Large Datasets"
        }
    ];
</script>

<template>
    <section class='section md:w-4/5 md:  md:flex md:flex-col md:justify-center items-center  md:h-80'>
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
                class='full-content  md:text-start md:font-bold hover:md:text-blue-500'
            >See the full list</a>
        </div>
    </section>

    <section class='section md:w-4/5 md:  md:flex md:flex-col md:justify-start items-center '>
        <div class="p-5 flex flex-col space-y-4 md:w-4/5">
            <div class="flex flex-col space-y-2">
                <div>Basic badges</div>
                <div class="flex justify-center space-x-4 space-y-2 flex-wrap ">
                    <div
                        style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-xs px-3 bg-gray-200 text-gray-800 rounded-full 
                        md:text-wrap md:text-center"
                        v-for='(item, index) in topicList'
                        :key='index'
                    >{{ item['topic'] }}</div>
                </div>
            </div>
        </div>
    </section>

    <section class='section md:w-4/5 md:h-auto md:  md:flex md:flex-col md:justify-center items-center '>
        <div class='highlight-top md:w-full md:h-8 md:flex md:justify-center'>
            <p class='highlight-top-content md:text-start md:text-lg md:text-wrap md:text-black md:text md:font-bold'>Who To
                Follow</p>
        </div>
        <div
            v-for='(item, index) in writerList'
            :key='index'
            class='card-container'
        >

            <div class='md:flex md:justify-start md:items-center'>
                <el-icon class='icon'>
                    <User />
                </el-icon>
                <p class='cart-title md:text-start'>{{ item['name'] }}</p>

            </div>
            <p class='cart-title md:text-start'>{{ item['description'] }}</p>

        </div>
        <div class='md:w-full md:flex md:justify-center md:items-center'>
            <a
                href="/data"
                class='full-content  md:text-start md:font-bold hover:md:text-blue-500'
            >See the full list</a>
        </div>
    </section>

    <section class='section md:w-4/5 md:  md:flex md:flex-col md:justify-center items-center  md:h-80'>
        <div class='highlight-top md:w-full md:h-8 md:flex md:justify-center'>
            <p class='highlight-top-content md:text-start md:text-lg md:text-wrap md:text-black md:text md:font-bold'>Recent Save</p>
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
                class='full-content  md:text-start md:font-bold hover:md:text-blue-500'
            >See the full list</a>
        </div>
    </section>
</template>
<style lang='scss' scoped>
@media(min-width: 768px) {



    .section {
        margin-top: 50px;
    }

    .highlight-top {


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