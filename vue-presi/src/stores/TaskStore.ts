import { computed, reactive } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';

interface IItemState {
  items: string[];
  filterStr: string;
}


export const useTaskStore = defineStore('TaskStore', () => {
  const ItemState = reactive<IItemState>({
    items: ['Task', 'Task2', 'Task3'],
    filterStr: ''
  });

  const filteredItems = computed(() => {
    return ItemState.items.filter((item) => item.includes(ItemState.filterStr));
  });

  function addItem(item: string) {
    ItemState.items.push(item);
  }

  function removeItem(item: string) {
    const index = ItemState.items.indexOf(item);
    ItemState.items.splice(index, 1);
  }

  function setFilter(filter: string) {
    ItemState.filterStr = filter;
  }

 return {
  ItemState,
  filteredItems,
  addItem,
  removeItem,
  setFilter
 }
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot))
}
