// app/error.js または app/error.tsx
"use client"; // クライアントコンポーネントにする

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>エラーが発生しました</h2>
      <p>{error?.message || "An unexpected error occurred"}</p>
      <button onClick={() => reset()}>リロード</button>
    </div>
  );
}
