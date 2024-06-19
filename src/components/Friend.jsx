import { Show } from "solid-js";
import Button from "./Button";

const Friend = (props) => {
  const id = () => props.info.id;
  const name = () => props.info.name;
  const image = () => props.info.image;
  const balance = () => props.info.balance;
  const isSelected = () => props.isSelected;
  const onSelect = () => props.onSelect(props.info);

  return (
    <div
      class="flex items-center justify-start gap-2 rounded-lg p-2 hover:bg-slate-500/20"
      classList={{ "bg-slate-500/50": isSelected() }}
    >
      <img src={image()} class="size-12 rounded-full bg-slate-200/50" alt="" />
      <div class="flex-1">
        <p class="font-bold capitalize text-slate-50">{name}</p>
        <Show when={balance() < 0}>
          <p class="text-red-500">
            You owe {name} {+balance()}$
          </p>
        </Show>
        <Show when={balance() > 0}>
          <p class="text-green-500">
            {name} owes you {balance()}$
          </p>
        </Show>
        <Show when={balance() === 0}>
          <p class="text-slate-300">You and {name} are equal</p>
        </Show>
      </div>
      <Button onClick={onSelect} classList={{ "bg-red-500": isSelected() }}>
        {!isSelected() ? "select" : "close"}
      </Button>
    </div>
  );
};

export default Friend;
