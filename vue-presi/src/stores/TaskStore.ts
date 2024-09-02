import { computed, reactive, readonly } from 'vue';

interface IItemState {
  items: string[];
  filterStr: string;
}

const ItemState = reactive<IItemState>({
  items: ['Task', 'Task2', 'Task3'],
  filterStr: ''
});

export function useTasks() {
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
    ItemState: readonly(ItemState),
    items: readonly(ItemState.items),
    addItem,
    removeItem,
    filteredItems,
    setFilter
  };
}