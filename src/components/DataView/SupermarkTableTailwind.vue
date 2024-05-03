<!--suppress ALL -->
<script
  lang="ts"
  setup
>
import { onMounted, ref } from 'vue'
import { useSuperMarketSaleStore } from "../../stores/SupermarketSaleStore";
import { useUserStore } from '../../stores/UserStore';

const superMarketSaleStore = useSuperMarketSaleStore();

onMounted(async () => {
  superMarketSaleStore.pageNum = 1;
  superMarketSaleStore.pageSize = 10;
  await superMarketSaleStore.getByPage();
  await superMarketSaleStore.getTotalDataAmount();
  await superMarketSaleStore.getBranchList();
  await superMarketSaleStore.getCityList();
  await superMarketSaleStore.getCustomerTypeList();

  test();
});


const test = (): void => {
  const data = superMarketSaleStore.requestData?.data;
  console.log(data[0]['id']);
}

const handleClick = () => {
  console.log('click');
}



const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
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
                  class="border-b-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >ID</th>
                <th
                  class="border-b-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Title</th>
                <th
                  class="border-b-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Description</th>
                <th
                  class="border-b-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Category</th>
                <th
                  class="border-b-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Date</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr
                v-for='(item, index) in superMarketSaleStore.requestData?.data'
                :key='index'
              >

                <td class="border-b border-gray-200 px-4 py-2">{{ item['id'] }}</td>
                <td class="border-b border-gray-200 px-4 py-2">{{ item['branch'] }}</td>
                <td class="border-b border-gray-200 px-4 py-2">{{ item['city'] }}</td>
                <td class="border-b border-gray-200 px-4 py-2">{{ item['customer_type'] }}</td>
                <td class="border-b border-gray-200 px-4 py-2">{{ item['gender'] }}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  </main>
</template>

<style
  scoped
  lang="scss"
></style>
