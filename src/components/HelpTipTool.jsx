import { Show, createEffect, createSignal } from "solid-js";

const HelpTipTool = () => {
  const [active, setActive] = createSignal(false);

  createEffect(() => {
    if (!active()) return;

    setTimeout(() => setActive(false), 3000);
  });

  return (
    <div class="absolute bottom-9 right-9 cursor-pointer hover:text-indigo-300">
      <button onClick={() => setActive((is) => !is)}>
        <Svg />
      </button>
      <Show when={active()}>
        <div class="absolute bottom-[110%] right-4 w-56 cursor-auto rounded-xl bg-indigo-200 p-2 text-start text-sm font-medium text-slate-950 shadow-lg [border-bottom-right-radius:0]">
          Select a friend, enter the bill, your expense, and who will pay. The
          friend's balance will update accordingly.
        </div>
      </Show>
    </div>
  );
};

const Svg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <g fill="currentColor">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
      <path d="M7.002 11a1 1 0 1 1 2 0a1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
    </g>
  </svg>
);

export default HelpTipTool;
