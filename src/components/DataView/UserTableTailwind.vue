<!--suppress ALL -->
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useSuperMarketSaleStore } from "@/stores/SupermarketSaleStore";
import { useUserStore } from '@/stores/UserStore';

import { reactive } from 'vue'


const userStore = useUserStore();

const formInline = reactive({
    user: '',
    region: '',
    date: '',
})


const handleClick = () => {
    console.log('click');
}

onMounted(() => {
    userStore.pageNum = 1;
    userStore.pageSize = 10;
    userStore.getByPage();
    userStore.getUserStatusList();
    userStore.getTotalDataAmount();


    console.log(userStore.requestData?.data.mapperReturnValue);
});




</script>

<template>
    <!-- Main Content -->
    <main class="flex-1 p-4">
        <div class="container mx-auto my-8">
            <div class="grid gap-4">
                <section>
                    <h2 class="text-2xl font-semibold mb-4">Data Table View</h2>
                    <table class="min-w-full bg-white border-collapse">
                        <thead>
                            <tr>
                                <th
                                    class="border-b-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Id</th>
                                <th
                                    class="border-b-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Username</th>
                                <th
                                    class="border-b-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Registration Date</th>
                                <th
                                    class="border-b-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Last Login Date</th>
                                <th
                                    class="border-b-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    User Status</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white">
                            <tr v-for='(item,index) in userStore.requestData?.data' :key='index'>
                                <td class="border-b border-gray-200 px-4 py-2">{{item['id']}}</td>
                                <td class="border-b border-gray-200 px-4 py-2">{{item['username']}}</td>
                                <td class="border-b border-gray-200 px-4 py-2">{{item['registration_date']}}</td>
                                <td class="border-b border-gray-200 px-4 py-2">{{item['last_login_date']}}</td>
                                <td class="border-b border-gray-200 px-4 py-2">{{item['user_status']}}</td>
                            </tr>
                            <!-- More rows can be added here -->
                        </tbody>
                    </table>
                </section>
        </div>
    </div>
</main></template>

<style scoped lang="scss"></style>
