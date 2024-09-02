import { reactive, readonly } from "vue"

interface IExample {
    text: string,
    isValid: boolean,
    numbers: number[]
}

export function useExample() {

    const exampleState = reactive<IExample>({
        text: "Ein Beispiel",
        isValid: true,
        numbers: [1,2,3,4,5]
    });

    function setExample(text: string) {
        exampleState.text = text
    }

    return {
        exampleState: readonly(exampleState),
        setExample
    }
}