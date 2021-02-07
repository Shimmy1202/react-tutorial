import styled from "styled-components";
import { useEffect, useState } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from "./const/languages";
import { withLoading } from "./hoc/withLoading";
import { Modal } from "./components/modal";

// startStyle------------------------------------------------

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #e0e0e0;
`;
const HeaderUl = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;
const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${(props) => (props.focused ? "2px solid #F44336" : "none")};
`;

// endStyle------------------------------------------------

function App({ data }) {
  // useState() の第一引数は初期値
  const [tab, setTab] = useState("list");
  const [langs, setLangs] = useState(data);

  // useEffect() は、マウンティング時とアップデート時に実行される
  // ただし、第二引数に []：空の配列 を入れるとマウンティング時のみに実行される
  // また、第二引数に特定の変数を入れると、マウンティング時に加えて配列の中身が変化した際にも実行される。
  // useEffect(() => {
  //   fetchLanguages();
  // }, [langs, tab]);

  //
  // const fetchLanguages = async () => {
  //   const languages = await getLanguages();
  //   setLangs(languages);
  // };
  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab("list");
  };

  return (
    <div>
      <Header>
        <HeaderUl>
          <HeaderLi focused={tab === "list"} onClick={() => setTab("list")}>
            リスト
          </HeaderLi>
          <HeaderLi focused={tab === "form"} onClick={() => setTab("form")}>
            フォーム
          </HeaderLi>
        </HeaderUl>
      </Header>
      {tab === "list" ? <List langs={langs} /> : <Form onAddLang={addLang} />}
      <Modal />
    </div>
  );
}

export default withLoading(App, getLanguages);
