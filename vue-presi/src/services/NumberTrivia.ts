import { reactive } from 'vue';

interface ITrivia {
  found: boolean;
  number: number;
  text: string;
  type: string;
}

export function useTrivia() {
  const trivia = reactive<ITrivia>({
    found: false,
    number: 0,
    text: '',
    type: ''
  });

  async function getTriviaFact(num: number) {
    const url = `http://numbersapi.com/${num}?json`;

    const response = await fetch(url);

    if (response.ok) {
      const json: ITrivia = await response.json();
      trivia.found = json.found;
      trivia.number = json.number;
      trivia.text = json.text;
      trivia.type = json.type;
    }
  }

  return {
    trivia,
    getTriviaFact
  };
}
