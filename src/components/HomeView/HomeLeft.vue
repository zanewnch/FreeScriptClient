<script setup lang='ts'>

import { ref, computed, onMounted, onUnmounted } from 'vue';

// Sample data for articles
const articles: {
    name: string;
    articleTitle: string;
    content: string;
}[] = [
        {
            name: "John Smith",
            articleTitle: "How to Improve Learning Efficiency",
            content: "Learning is an important skill, but sometimes we may feel confused and lose motivation. To improve learning efficiency, we can try using time management techniques, creating study plans, and adopting active learning methods."
        },
        {
            name: "Jane Doe",
            articleTitle: "Developing Healthy Lifestyle Habits",
            content: "Developing healthy lifestyle habits is crucial for overall well-being. We can improve our quality of life by engaging in regular exercise, maintaining a balanced diet, and practicing good sleep habits. Avoiding unhealthy habits such as staying up late and excessive use of electronic devices is also important."
        },
        {
            name: "Bob Johnson",
            articleTitle: "Exploring the Beauty of Nature: The Joys and Benefits of Hiking",
            content: "Hiking is a delightful and beneficial outdoor activity. Through hiking, we can appreciate the beauty of nature, engage in physical exercise, relax our minds, and spend quality time with friends and family."
        }, {
            name: "Alice Williams",
            articleTitle: "The Art of Mindfulness",
            content: "Mindfulness is a powerful tool that can help us enhance our awareness and improve our overall well-being. It involves focusing on the present moment and accepting it without judgment."
        },
        {
            name: "Charlie Brown",
            articleTitle: "The Importance of Financial Planning",
            content: "Financial planning is a crucial aspect of our lives that we should not overlook. It involves managing our income, savings, and expenditures in a way that allows us to achieve our financial goals."
        },
        {
            name: "David Davis",
            articleTitle: "Exploring the World of Digital Art",
            content: "Digital art is a fascinating field that combines creativity with technology. It offers endless possibilities for artists to express themselves in new and innovative ways."
        },
        {
            name: "Eva Green",
            articleTitle: "Understanding the Basics of Machine Learning",
            content: "Machine learning is a branch of artificial intelligence that enables computers to learn from and make decisions based on data. It's a powerful tool that's being used in a wide range of applications."
        },
        {
            name: "Frank Miller",
            articleTitle: "The Role of Nutrition in Health",
            content: "Nutrition plays a key role in our health. It's important to maintain a balanced diet to ensure our bodies get the necessary nutrients to function properly."
        }, {
            name: "Alice Williams",
            articleTitle: "The Art of Mindfulness",
            content: "Mindfulness is a powerful tool that can help us enhance our awareness and improve our overall well-being. It involves focusing on the present moment and accepting it without judgment."
        },
        {
            name: "Charlie Brown",
            articleTitle: "The Importance of Financial Planning",
            content: "Financial planning is a crucial aspect of our lives that we should not overlook. It involves managing our income, savings, and expenditures in a way that allows us to achieve our financial goals."
        },
        {
            name: "David Davis",
            articleTitle: "Exploring the World of Digital Art",
            content: "Digital art is a fascinating field that combines creativity with technology. It offers endless possibilities for artists to express themselves in new and innovative ways."
        },
        {
            name: "Eva Green",
            articleTitle: "Understanding the Basics of Machine Learning",
            content: "Machine learning is a branch of artificial intelligence that enables computers to learn from and make decisions based on data. It's a powerful tool that's being used in a wide range of applications."
        },
        {
            name: "Frank Miller",
            articleTitle: "The Role of Nutrition in Health",
            content: "Nutrition plays a key role in our health. It's important to maintain a balanced diet to ensure our bodies get the necessary nutrients to function properly."
        }, {
            name: "Alice Williams",
            articleTitle: "The Art of Mindfulness",
            content: "Mindfulness is a powerful tool that can help us enhance our awareness and improve our overall well-being. It involves focusing on the present moment and accepting it without judgment."
        },
        {
            name: "Charlie Brown",
            articleTitle: "The Importance of Financial Planning",
            content: "Financial planning is a crucial aspect of our lives that we should not overlook. It involves managing our income, savings, and expenditures in a way that allows us to achieve our financial goals."
        },
        {
            name: "David Davis",
            articleTitle: "Exploring the World of Digital Art",
            content: "Digital art is a fascinating field that combines creativity with technology. It offers endless possibilities for artists to express themselves in new and innovative ways."
        },
        {
            name: "Eva Green",
            articleTitle: "Understanding the Basics of Machine Learning",
            content: "Machine learning is a branch of artificial intelligence that enables computers to learn from and make decisions based on data. It's a powerful tool that's being used in a wide range of applications."
        },
        {
            name: "Frank Miller",
            articleTitle: "The Role of Nutrition in Health",
            content: "Nutrition plays a key role in our health. It's important to maintain a balanced diet to ensure our bodies get the necessary nutrients to function properly."
        }, {
            name: "Alice Williams",
            articleTitle: "The Art of Mindfulness",
            content: "Mindfulness is a powerful tool that can help us enhance our awareness and improve our overall well-being. It involves focusing on the present moment and accepting it without judgment."
        },
        {
            name: "Charlie Brown",
            articleTitle: "The Importance of Financial Planning",
            content: "Financial planning is a crucial aspect of our lives that we should not overlook. It involves managing our income, savings, and expenditures in a way that allows us to achieve our financial goals."
        },
        {
            name: "David Davis",
            articleTitle: "Exploring the World of Digital Art",
            content: "Digital art is a fascinating field that combines creativity with technology. It offers endless possibilities for artists to express themselves in new and innovative ways."
        },
        {
            name: "Eva Green",
            articleTitle: "Understanding the Basics of Machine Learning",
            content: "Machine learning is a branch of artificial intelligence that enables computers to learn from and make decisions based on data. It's a powerful tool that's being used in a wide range of applications."
        },
        {
            name: "Frank Miller",
            articleTitle: "The Role of Nutrition in Health",
            content: "Nutrition plays a key role in our health. It's important to maintain a balanced diet to ensure our bodies get the necessary nutrients to function properly."
        }, {
            name: "Alice Williams",
            articleTitle: "The Art of Mindfulness",
            content: "Mindfulness is a powerful tool that can help us enhance our awareness and improve our overall well-being. It involves focusing on the present moment and accepting it without judgment."
        },
        {
            name: "Charlie Brown",
            articleTitle: "The Importance of Financial Planning",
            content: "Financial planning is a crucial aspect of our lives that we should not overlook. It involves managing our income, savings, and expenditures in a way that allows us to achieve our financial goals."
        },
        {
            name: "David Davis",
            articleTitle: "Exploring the World of Digital Art",
            content: "Digital art is a fascinating field that combines creativity with technology. It offers endless possibilities for artists to express themselves in new and innovative ways."
        },
        {
            name: "Eva Green",
            articleTitle: "Understanding the Basics of Machine Learning",
            content: "Machine learning is a branch of artificial intelligence that enables computers to learn from and make decisions based on data. It's a powerful tool that's being used in a wide range of applications."
        },
        {
            name: "Frank Miller",
            articleTitle: "The Role of Nutrition in Health",
            content: "Nutrition plays a key role in our health. It's important to maintain a balanced diet to ensure our bodies get the necessary nutrients to function properly."
        }, {
            name: "Alice Williams",
            articleTitle: "The Art of Mindfulness",
            content: "Mindfulness is a powerful tool that can help us enhance our awareness and improve our overall well-being. It involves focusing on the present moment and accepting it without judgment."
        },
        {
            name: "Charlie Brown",
            articleTitle: "The Importance of Financial Planning",
            content: "Financial planning is a crucial aspect of our lives that we should not overlook. It involves managing our income, savings, and expenditures in a way that allows us to achieve our financial goals."
        },
        {
            name: "David Davis",
            articleTitle: "Exploring the World of Digital Art",
            content: "Digital art is a fascinating field that combines creativity with technology. It offers endless possibilities for artists to express themselves in new and innovative ways."
        },
        {
            name: "Eva Green",
            articleTitle: "Understanding the Basics of Machine Learning",
            content: "Machine learning is a branch of artificial intelligence that enables computers to learn from and make decisions based on data. It's a powerful tool that's being used in a wide range of applications."
        },
        {
            name: "Frank Miller",
            articleTitle: "The Role of Nutrition in Health",
            content: "Nutrition plays a key role in our health. It's important to maintain a balanced diet to ensure our bodies get the necessary nutrients to function properly."
        }, {
            name: "Alice Williams",
            articleTitle: "The Art of Mindfulness",
            content: "Mindfulness is a powerful tool that can help us enhance our awareness and improve our overall well-being. It involves focusing on the present moment and accepting it without judgment."
        },
        {
            name: "Charlie Brown",
            articleTitle: "The Importance of Financial Planning",
            content: "Financial planning is a crucial aspect of our lives that we should not overlook. It involves managing our income, savings, and expenditures in a way that allows us to achieve our financial goals."
        },
        {
            name: "David Davis",
            articleTitle: "Exploring the World of Digital Art",
            content: "Digital art is a fascinating field that combines creativity with technology. It offers endless possibilities for artists to express themselves in new and innovative ways."
        },
        {
            name: "Eva Green",
            articleTitle: "Understanding the Basics of Machine Learning",
            content: "Machine learning is a branch of artificial intelligence that enables computers to learn from and make decisions based on data. It's a powerful tool that's being used in a wide range of applications."
        },
        {
            name: "Frank Miller",
            articleTitle: "The Role of Nutrition in Health",
            content: "Nutrition plays a key role in our health. It's important to maintain a balanced diet to ensure our bodies get the necessary nutrients to function properly."
        }, {
            name: "Alice Williams",
            articleTitle: "The Art of Mindfulness",
            content: "Mindfulness is a powerful tool that can help us enhance our awareness and improve our overall well-being. It involves focusing on the present moment and accepting it without judgment."
        },
        {
            name: "Charlie Brown",
            articleTitle: "The Importance of Financial Planning",
            content: "Financial planning is a crucial aspect of our lives that we should not overlook. It involves managing our income, savings, and expenditures in a way that allows us to achieve our financial goals."
        },
        {
            name: "David Davis",
            articleTitle: "Exploring the World of Digital Art",
            content: "Digital art is a fascinating field that combines creativity with technology. It offers endless possibilities for artists to express themselves in new and innovative ways."
        },
        {
            name: "Eva Green",
            articleTitle: "Understanding the Basics of Machine Learning",
            content: "Machine learning is a branch of artificial intelligence that enables computers to learn from and make decisions based on data. It's a powerful tool that's being used in a wide range of applications."
        },
        {
            name: "Frank Miller",
            articleTitle: "The Role of Nutrition in Health",
            content: "Nutrition plays a key role in our health. It's important to maintain a balanced diet to ensure our bodies get the necessary nutrients to function properly."
        }, {
            name: "Alice Williams",
            articleTitle: "The Art of Mindfulness",
            content: "Mindfulness is a powerful tool that can help us enhance our awareness and improve our overall well-being. It involves focusing on the present moment and accepting it without judgment."
        },
        {
            name: "Charlie Brown",
            articleTitle: "The Importance of Financial Planning",
            content: "Financial planning is a crucial aspect of our lives that we should not overlook. It involves managing our income, savings, and expenditures in a way that allows us to achieve our financial goals."
        },
        {
            name: "David Davis",
            articleTitle: "Exploring the World of Digital Art",
            content: "Digital art is a fascinating field that combines creativity with technology. It offers endless possibilities for artists to express themselves in new and innovative ways."
        },
        {
            name: "Eva Green",
            articleTitle: "Understanding the Basics of Machine Learning",
            content: "Machine learning is a branch of artificial intelligence that enables computers to learn from and make decisions based on data. It's a powerful tool that's being used in a wide range of applications."
        },
        {
            name: "Frank Miller",
            articleTitle: "The Role of Nutrition in Health",
            content: "Nutrition plays a key role in our health. It's important to maintain a balanced diet to ensure our bodies get the necessary nutrients to function properly."
        }, {
            name: "Alice Williams",
            articleTitle: "The Art of Mindfulness",
            content: "Mindfulness is a powerful tool that can help us enhance our awareness and improve our overall well-being. It involves focusing on the present moment and accepting it without judgment."
        },
        {
            name: "Charlie Brown",
            articleTitle: "The Importance of Financial Planning",
            content: "Financial planning is a crucial aspect of our lives that we should not overlook. It involves managing our income, savings, and expenditures in a way that allows us to achieve our financial goals."
        },
        {
            name: "David Davis",
            articleTitle: "Exploring the World of Digital Art",
            content: "Digital art is a fascinating field that combines creativity with technology. It offers endless possibilities for artists to express themselves in new and innovative ways."
        },
        {
            name: "Eva Green",
            articleTitle: "Understanding the Basics of Machine Learning",
            content: "Machine learning is a branch of artificial intelligence that enables computers to learn from and make decisions based on data. It's a powerful tool that's being used in a wide range of applications."
        },
        {
            name: "Frank Miller",
            articleTitle: "The Role of Nutrition in Health",
            content: "Nutrition plays a key role in our health. It's important to maintain a balanced diet to ensure our bodies get the necessary nutrients to function properly."
        }, {
            name: "Alice Williams",
            articleTitle: "The Art of Mindfulness",
            content: "Mindfulness is a powerful tool that can help us enhance our awareness and improve our overall well-being. It involves focusing on the present moment and accepting it without judgment."
        },
        {
            name: "Charlie Brown",
            articleTitle: "The Importance of Financial Planning",
            content: "Financial planning is a crucial aspect of our lives that we should not overlook. It involves managing our income, savings, and expenditures in a way that allows us to achieve our financial goals."
        },
        {
            name: "David Davis",
            articleTitle: "Exploring the World of Digital Art",
            content: "Digital art is a fascinating field that combines creativity with technology. It offers endless possibilities for artists to express themselves in new and innovative ways."
        },
        {
            name: "Eva Green",
            articleTitle: "Understanding the Basics of Machine Learning",
            content: "Machine learning is a branch of artificial intelligence that enables computers to learn from and make decisions based on data. It's a powerful tool that's being used in a wide range of applications."
        },
        {
            name: "Frank Miller",
            articleTitle: "The Role of Nutrition in Health",
            content: "Nutrition plays a key role in our health. It's important to maintain a balanced diet to ensure our bodies get the necessary nutrients to function properly."
        }
    ];


let refData = ref(articles);


// Flag to track if new data needs to be loaded
let needToLoad = false;

// Function to load new data
const load = () => {
    // If already loading, return
    if (needToLoad) return;

    // Set needToLoad to true to indicate loading
    needToLoad = true;

    // Load new data by concatenating articles to refData
    if (needToLoad) {
        refData.value = refData.value.concat(articles);
    }
    console.log('load new data');

    // Set needToLoad to false after loading
    needToLoad = false;
}

// Function to trigger data loading when user scrolls to bottom
const trigger = () => {
    /*
    頁面長度計算公式：
    頁面總長：
    可視區域：
    可視區域上方：
    可視區域下方： 這是未知，要求的
     */
    const viewTotalHeight = document.body.scrollHeight;
    const viewportHeight = document.documentElement.clientHeight;
    const topHeight = document.body.scrollTop || document.documentElement.scrollTop;
    const bottomHeight = viewTotalHeight - topHeight - viewportHeight;



    console.log('buttomheight');
    console.log(bottomHeight);

    // If distance from bottom is less than 10 pixels, load new data
    if (bottomHeight < 10) {
        console.log('need to load');
        load();
    }

}

// Add scroll event listener when component is mounted
onMounted(() => {
    window.addEventListener("scroll", trigger, false);
})

// Remove scroll event listener when component is unmounted
onUnmounted(() => {
    window.removeEventListener("scroll", trigger, false);
})

</script>
<template>
    <div
        v-for='(item, index) in refData'
        :key='index'
        class='card md:w-4/5 md:h-44  md:flex md:flex-col md:justify-center md:overflow-hidden  '
    >
        <p class='username'>{{ item['name'] }}</p>
        <p class=' title'>{{ item['articleTitle'] }}</p>
        <p class='content'>{{ item['content'] }}</p>
    </div>
</template>
<style scoped lang='scss'>
@media(min-width: 768px) {

    .card{
        padding: 10px;
        border-bottom: 0.5px solid #E0E0E0
    }

    .username {
        text-align: left;
    }

    .title {
        text-align: left;
        margin-top: 5px;
        font-size: 20px;
        
        font-weight: bolder;

    }

    .content {
        margin-top: 10px;

        text-align: left;

        overflow: hidden;
        
        white-space: wrap;
        text-overflow: ellipsis;
        
        line-height: 20px;
        
        
    }

}
</style>