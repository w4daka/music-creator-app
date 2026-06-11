import { useState } from "react";

function CreatePage() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleGenerate = () => {
    console.log("音楽生成開始", { title, genre, prompt });
    // ここで音楽生成処理を実装予定
  };

  return (
    <div>
      <h1>音楽生成ページ</h1>
      <div>
        <div>
          <label>楽曲タイトル</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="楽曲のタイトルを入力"
          />
        </div>

        <div>
          <label>ジャンル</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">ジャンルを選択</option>
            <option value="electronic">エレクトロニック</option>
            <option value="jazz">ジャズ</option>
            <option value="classical">クラシック</option>
            <option value="ambient">アンビエント</option>
            <option value="rock">ロック</option>
            <option value="pop">ポップ</option>
          </select>
        </div>
        <label>音楽の説明</label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="どんな音楽が作りたいか説明してください"
        />
        <button onClick={handleGenerate}>音楽を生成</button>
      </div>
    </div>
  );
}
export default CreatePage;
