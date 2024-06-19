import { Show, createSignal, createUniqueId } from "solid-js";
import { useFriendsContext } from "../context/FriendsContext";
import Button from "./Button";
import InputField from "./InputField";

const AddFriendForm = () => {
  const { friends, setFriends } = useFriendsContext();
  const [isOpen, setOpen] = createSignal(false);
  const [name, setName] = createSignal("");
  const [image, setImage] = createSignal("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name() || !image()) return;

    const id = createUniqueId();

    setFriends(friends.length, {
      id: id,
      name: name(),
      image: `${image()}?u=${id}`,
      balance: 0,
    });

    setName("");
    setOpen(false);
  }

  return (
    <form
      class="grid gap-2 rounded-xl px-2 py-4"
      classList={{ "bg-slate-700": isOpen() }}
      onSubmit={handleSubmit}
    >
      <Show
        when={isOpen()}
        fallback={
          <div class="ml-auto">
            <Button onClick={() => setOpen(true)} type="button">
              Add Friend
            </Button>
          </div>
        }
      >
        <label class="flex items-center justify-between gap-3 pl-4">
          <span class="font-medium text-slate-50">👩🏼‍🤝‍👩🏻 Friend name:</span>
          <InputField value={name()} onInput={(e) => setName(e.target.value)} />
        </label>

        <label class="flex items-center justify-between gap-3 pl-4">
          <span class="font-medium text-slate-50">🎴 Image URL:</span>
          <InputField
            value={image()}
            onInput={(e) => setImage(e.target.value)}
          />
        </label>
        <div class="grid grid-cols-2 gap-2">
          <Button type="submit">Add</Button>
          <Button type="button" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </div>
      </Show>
    </form>
  );
};

export default AddFriendForm;
