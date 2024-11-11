import { reactive } from "vue"
import { defineStore, acceptHMRUpdate } from 'pinia'

interface IExample {
    text: string,
    isValid: boolean,
    numbers: number[]
}


export const useSimpleStore = defineStore('SimpleStore', () => {
  const exampleState = reactive<IExample>({
    text: "Ein Beispiel",
    isValid: true,
    numbers: [1,2,3,4,5]
  });

  function setExample(text: string) {
    exampleState.text = text
  }

 return {
  exampleState,
  setExample
 }
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useSimpleStore, import.meta.hot))
}
