import { useEffect, useState } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from "./languages";

function App() {
  // useState() の第一引数は初期値
  const [tab, setTab] = useState("list");
  const [langs, setLangs] = useState([]);

  // useEffect() は、マウンティング時とアップデート時に実行される
  // ただし、第二引数に []：空の配列 を入れるとマウンティング時のみに実行される
  // また、第二引数に特定の変数を入れると、マウンティング時に加えて配列の中身が変化した際にも実行される。
  useEffect(() => {
    fetchLanguages();
  }, [langs, tab]);

  //
  const fetchLanguages = async () => {
    const languages = await getLanguages();
    setLangs(languages);
  };
  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab("list");
  };

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab("list")}>リスト</li>
          <li onClick={() => setTab("form")}>フォーム</li>
        </ul>
      </header>
      <hr />
      {tab === "list" ? <List langs={langs} /> : <Form onAddLang={addLang} />}
    </div>
  );
}

export default App;
