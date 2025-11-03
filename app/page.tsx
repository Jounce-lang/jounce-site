// app/page.tsx
import Image from "next/image";

const GITHUB_URL = "https://github.com/Jounce-lang/jounce";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* top nav */}
      <header className="border-b border-slate-900/50 bg-slate-950/50 sticky top-0 backdrop-blur z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/jounce-logo.png"
              alt="Jounce"
              width={38}
              height={38}
              className="rounded-md"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="font-semibold tracking-tight">Jounce</span>
              <span className="text-[10px] uppercase tracking-wide text-emerald-200/80">
                single-file → full stack
              </span>
            </div>
          </div>

          <nav className="flex items-center gap-4 text-sm text-slate-100/80">
            <a href="#why" className="hover:text-white">
              Why
            </a>
            <a href="#pipeline" className="hover:text-white">
              Pipeline
            </a>
            <a href="#quickstart" className="hover:text-white">
              Quickstart
            </a>
            <a href="#templates" className="hover:text-white">
              Templates
            </a>
            <a href="#roadmap" className="hover:text-white">
              Roadmap
            </a>
            <a
              href={GITHUB_URL}
              className="inline-flex items-center gap-1 rounded bg-white text-slate-950 px-3 py-1.5 font-medium hover:bg-slate-100 transition"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span aria-hidden>↗</span>
            </a>
          </nav>
        </div>
      </header>

      {/* hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12 grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-300/20 text-emerald-50 rounded-full px-4 py-1 text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
            v0.8.2 — 640/640 tests — 0 known bugs
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            You shouldn’t have to glue ten tools together just to build a modern
            app.
          </h1>
          <p className="text-lg text-slate-200/80 max-w-2xl">
            Meet <strong>Jounce</strong> — the AI-native, single-file full-stack
            language that does it for you. Build production-grade apps without
            switching contexts.{" "}
            <strong>One file. Full output. Zero boilerplate.</strong>
          </p>
          <p className="text-slate-300 max-w-2xl">
            Imagine needing software — a dashboard, a form, an API, a game — and
            being able to <strong>create and deploy it on the fly</strong>. No
            framework setup. No bundler configs. No servers to wire together.
          </p>
          <p className="text-slate-400 max-w-2xl">
            LLMs are great at generating a single long page of code, but they
            struggle to piece multiple files together and keep them in sync.
            Jounce lets humans and machines build in one unified{" "}
            <code>.jnc</code> file — keeping every component, function, and
            style on the same version.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={GITHUB_URL}
              className="bg-emerald-400 text-slate-950 px-6 py-2.5 rounded-md font-medium hover:bg-emerald-300 transition"
              target="_blank"
              rel="noreferrer"
            >
              View repo on GitHub
            </a>
            <a
              href="#quickstart"
              className="border border-slate-700/70 px-6 py-2.5 rounded-md font-medium text-slate-50/90 hover:bg-slate-900/40"
            >
              Getting started
            </a>
          </div>
        </div>

        {/* right card */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 space-y-4">
          <h2 className="text-sm font-semibold text-slate-100">
            One file → multi-target compilation
          </h2>
          <div className="bg-slate-950/40 border border-slate-800 rounded-xl p-4 font-mono text-sm text-slate-100 space-y-2">
            <p>app.jnc</p>
            <p className="text-slate-500">↓ jnc compile</p>
            <p>├── server.js (Node.js SSR)</p>
            <p>├── client.js (reactive runtime)</p>
            <p>├── styles.css (scoped)</p>
            <p>└── index.html</p>
          </div>
          <p className="text-xs text-slate-400">
            Write once. Deploy anywhere. No manual wiring. No CSS-in-JS runtime.
          </p>
        </div>
      </section>

      {/* why jounce exists (new) */}
      <section
        id="why"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-6"
      >
        <h2 className="text-2xl font-semibold tracking-tight">
          Why Jounce Exists
        </h2>
        <p className="text-slate-200/80 max-w-3xl">
          Modern software development has become a patchwork of tools —
          frameworks, bundlers, servers, routers, CSS systems, deployment
          pipelines, and now AI integrations. You spend more time wiring things
          together than building your actual idea.
        </p>
        <p className="text-slate-200/70 max-w-3xl">
          LLMs made this even clearer: they can generate beautiful single files
          of working code, but as soon as your project splinters into dozens of
          files and configs, they lose track. Versions drift, components desync,
          and the AI assistant becomes unreliable.
        </p>
        <p className="text-slate-300 max-w-3xl">
          Jounce closes that gap with a single, coherent language and runtime
          where everything lives in one <code>.jnc</code> file. No mismatched
          versions. No dependency hell. No context switching.
        </p>
      </section>

      {/* how jounce works (new) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          How Jounce Works
        </h2>
        <p className="text-slate-200/80 max-w-3xl">
          Jounce takes a single <code>.jnc</code> file and turns it into
          everything a modern app needs. The compiler, built in Rust,
          understands what runs on the client, what runs on the server, and what
          can be pre-generated.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-4 space-y-2">
            <p className="text-sm text-slate-300">
              From one file, Jounce can emit:
            </p>
            <ul className="text-sm text-slate-200 space-y-1">
              <li>
                • <code>server.js</code> — server/runtime logic
              </li>
              <li>
                • <code>client.js</code> — interactive UI
              </li>
              <li>
                • <code>styles.css</code> — scoped, component-aware styles
              </li>
              <li>
                • <code>index.html</code> — page shell
              </li>
            </ul>
            <p className="text-sm text-slate-300">
              That means you can deploy anywhere without wiring React + Express
              + Webpack + Tailwind + 5 other things.
            </p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-4">
            <pre className="text-xs text-slate-100 overflow-x-auto">{`app MyApp {
  title: "Hello Jounce"

  route "/" {
    view {
      <h1>Hello from Jounce</h1>
      <button on:click={count++}>
        Clicked {count} times
      </button>
    }
  }

  state count = 0
}`}</pre>
          </div>
        </div>
      </section>

      {/* why / features (your original section, kept) */}
      <section
        id="why-original"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-6"
      >
        <h2 className="text-2xl font-semibold tracking-tight">Why Jounce?</h2>
        <p className="text-slate-200/80 max-w-3xl">
          You wanted a language that AI can help write, but that still outputs
          clean, production-ready artifacts. Jounce bakes in reactivity, JSX,
          styles, and templates so you don’t have to glue five tools together.
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4">
            <h3 className="font-semibold mb-2">Fine-grained reactivity</h3>
            <p className="text-sm text-slate-300/90">
              Signal tracking, computed values, batch updates, even reactive
              method calls like <code>.map()</code>.
            </p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4">
            <h3 className="font-semibold mb-2">Component-scoped styles</h3>
            <p className="text-sm text-slate-300/90">
              Automatic scoping with hash-based class names. No runtime styling
              tax.
            </p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4">
            <h3 className="font-semibold mb-2">JSX everywhere</h3>
            <p className="text-sm text-slate-300/90">
              Components, lambdas, lists, conditionals — all in one file.
            </p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4">
            <h3 className="font-semibold mb-2">Production-ready</h3>
            <p className="text-sm text-slate-300/90">
              640/640 tests passing, 0 known bugs, 25+ example apps, MIT
              license.
            </p>
          </div>
        </div>
      </section>

      {/* pipeline / example */}
      <section
        id="pipeline"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-6 lg:grid-cols-2"
      >
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            From .jnc to running app
          </h2>
          <p className="text-slate-200/80 mb-4">
            Jounce’s compiler handles parsing, AST, reactivity analysis, style
            compilation, and JS emission — so your output is ready to drop into
            Node or the browser.
          </p>
          <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-auto">
            <pre>{`component TodoApp() {
  let todos = createSignal(["Buy milk", "Walk dog"]);
  let newTodo = createSignal("");

  let addTodo = () => {
    if (newTodo.value.length() > 0) {
      todos.set([...todos.value, newTodo.value]);
      newTodo.set("");
    }
  };

  <div class="app">
    <h1>My Todos ({todos.value.length()})</h1>
    <input
      value={newTodo.value}
      onInput={(e) => newTodo.set(e.target.value)}
      placeholder="Add todo..."
    />
    <button onClick={addTodo}>Add</button>
    <ul>
      {todos.value.map((todo) => {
        return <li>Task: {todo}</li>;
      })}
    </ul>
  </div>
}

style TodoApp {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}`}</pre>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Compiler outputs</h3>
          <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-4">
            <p className="text-sm text-slate-200 mb-2">CLI</p>
            <pre className="text-sm font-mono text-slate-100">{`cargo run --release -- compile app.jnc
# → dist/server.js
# → dist/client.js
# → dist/styles.css
# → dist/index.html`}</pre>
          </div>
          <p className="text-sm text-slate-400">
            Prefer the dev flow?
            <br />
            <code>jnc init my-app --template counter</code> →{" "}
            <code>cd my-app</code> → <code>jnc dev</code> → open{" "}
            <code>http://localhost:3000</code>.
          </p>
        </div>
      </section>

      {/* quickstart */}
      <section
        id="quickstart"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-5"
      >
        <h2 className="text-2xl font-semibold">Quickstart</h2>
        <p className="text-slate-200/80">
          Jounce is written in Rust. Build the CLI once, then use{" "}
          <code>jnc</code> anywhere.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-4">
            <h3 className="font-semibold mb-3">Install from repo</h3>
            <pre className="text-sm font-mono text-slate-100 overflow-auto">{`git clone https://github.com/Jounce-lang/jounce-pre-production.git
cd jounce-pre-production
cargo build --release

# optional: add to PATH
export PATH="$PATH:$(pwd)/target/release"`}</pre>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-4">
            <h3 className="font-semibold mb-3">Create & run an app</h3>
            <pre className="text-sm font-mono text-slate-100 overflow-auto">{`jnc init my-app --template counter
cd my-app
jnc dev
# open http://localhost:3000`}</pre>
          </div>
        </div>
      </section>

      {/* templates */}
      <section
        id="templates"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-5"
      >
        <h2 className="text-2xl font-semibold">Starter templates (built in)</h2>
        <p className="text-slate-200/80">
          Skip boilerplate — Jounce ships with 5 interactive templates and 25+
          example apps.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {[
            ["Blank", "Minimal starting point"],
            ["Counter", "Signals + events + reactivity"],
            ["Todo", "Arrays, forms, computed values"],
            ["Form", "Validation and error states"],
            ["Dashboard", "Multiple components + layout"],
          ].map(([name, desc]) => (
            <div
              key={name}
              className="bg-slate-900/40 border border-slate-800 rounded-lg p-4 flex flex-col gap-2"
            >
              <p className="text-sm font-semibold">{name}</p>
              <p className="text-xs text-slate-300/90">{desc}</p>
              <code className="text-xs text-slate-400 mt-auto">
                jnc init my-app --template {name.toLowerCase()}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* roadmap */}
      <section
        id="roadmap"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-5"
      >
        <h2 className="text-2xl font-semibold">Roadmap</h2>
        <p className="text-slate-200/80">
          Transparent phases. Core language, reactivity, and styling are done —
          now we layer on DX and app features.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-4 space-y-2">
            <p className="text-xs text-emerald-200/80">✅ Complete</p>
            <p className="font-semibold">Phase 11–13</p>
            <p className="text-sm text-slate-200/80">
              Module system, fine-grained reactivity, style system & themes.
            </p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-4 space-y-2">
            <p className="text-xs text-amber-200/80">🚧 In progress</p>
            <p className="font-semibold">Phase 14 — Database integration</p>
            <p className="text-sm text-slate-200/80">
              ORM, queries, migrations.
            </p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-4 space-y-2">
            <p className="text-xs text-sky-200/80">📋 Planned</p>
            <p className="font-semibold">Router, forms, v1.0 (Q2 2026)</p>
            <p className="text-sm text-slate-200/80">
              Client/server routing, validation, DX improvements.
            </p>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-wrap gap-4 items-center justify-between text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Jounce — MIT Licensed</p>
        <div className="flex gap-4">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span className="text-slate-700">•</span>
          <span>Built in public</span>
        </div>
      </footer>
    </main>
  );
}
