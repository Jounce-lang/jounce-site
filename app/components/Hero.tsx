// app/components/Hero.tsx
export default function Hero() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-sm font-mono text-purple-400 mb-3">
          AI-native full-stack language
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          You shouldn’t have to glue ten tools together just to build a modern
          app.
        </h1>
        <p className="text-lg md:text-2xl text-slate-200 mb-6">
          Meet <span className="font-semibold text-white">Jounce</span> — the
          AI-native, single-file full-stack language that does it for you. Build
          production-grade apps without switching contexts.{" "}
          <strong>One file. Full output. Zero boilerplate.</strong>
        </p>
        <p className="text-slate-300 mb-6">
          LLMs are great at generating a single long page of code, but they
          struggle to piece multiple files together and keep them in sync.
          Jounce lets humans <em>and</em> LLMs build in one unified{" "}
          <code>.jnc</code> file — always on the same version.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#docs"
            className="bg-white text-slate-950 px-5 py-2 rounded-md font-medium"
          >
            Explore the Docs
          </a>
          <a
            href="https://github.com/Jounce-lang/jounce"
            className="border border-slate-500 px-5 py-2 rounded-md"
          >
            View on GitHub
          </a>
          <a
            href="#roadmap"
            className="text-slate-300 underline underline-offset-4"
          >
            Follow the Roadmap
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Single File</h3>
            <p className="text-sm text-slate-300">
              Logic, UI, and styling unified in one <code>.jnc</code> file.
            </p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2">AI-Native</h3>
            <p className="text-sm text-slate-300">
              Built for humans and LLMs to code together.
            </p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Deploy Instantly</h3>
            <p className="text-sm text-slate-300">
              Compile → launch. Ship apps on the fly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
