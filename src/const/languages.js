export const LANGUAGES = ["JavaScript", "C++", "Ruby", "Java", "PHP", "Go"];

export const getLanguages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 1000);
  });
};

// Promiseを使うのは関数の中で const など値を定義することなく return するときに使うといい
// それ以外は async/await で書くのが良さげ
