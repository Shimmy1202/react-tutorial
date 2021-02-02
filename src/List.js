const LANGUAGES = [
  'JavaScript',
  'C++',
  'Ruby',
  'Java',
  'PHP',
  'Go',
];
export const List = () => {
  return (
    <div>
      {
        LANGUAGES.map((lang: string, index: number) => {
          return <div key={index}>{ lang }</div>
        })
      }
    </div>
  );
};
