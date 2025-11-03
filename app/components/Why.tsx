// app/components/Why.tsx
export default function Why() {
  return (
    <section className="py-14 md:py-16 bg-slate-950/40">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Why Jounce Exists
        </h2>
        <p className="text-slate-200 mb-4">
          Modern software development has become a patchwork of tools —
          frameworks, bundlers, servers, routers, CSS systems, deployment
          pipelines, and now AI integrations. You spend more time wiring things
          together than building your actual idea.
        </p>
        <p className="text-slate-300 mb-4">
          LLMs made this more obvious: they can generate beautiful single files
          of working code, but once your project splinters into dozens of files
          and configs, they lose track. Versions drift, components desync, and
          the AI assistant becomes unreliable.
        </p>
        <p className="text-slate-300">
          Jounce closes that gap with a single, coherent language and runtime
          where everything lives in one <code>.jnc</code> file. No mismatched
          versions. No dependency hell. No context switching.
        </p>
      </div>
    </section>
  );
}
