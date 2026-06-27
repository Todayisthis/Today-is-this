export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold text-gray-900 mb-8">
        오늘은 이거다!
      </h1>

      <p className="text-xl text-gray-600 text-center leading-9">
        매일 똑같은 하루에 지친 당신.
        <br />
        당신의 오늘을
        <br />
        제가 대신 골라드립니다.
      </p>

      <button className="mt-12 rounded-2xl bg-orange-500 px-8 py-4 text-xl font-semibold text-white hover:bg-orange-600 transition">
        🍚 오늘 뭐 먹지?
      </button>

      <div className="mt-16 text-center text-gray-400 space-y-2">
        <p>🚧 오늘 뭐 보지?</p>
        <p>🚧 오늘 어디 가지?</p>
        <p>🚧 오늘 뭐 마시지?</p>
        <p>🚧 오늘 뭐 하지?</p>
      </div>
    </main>
  );
}