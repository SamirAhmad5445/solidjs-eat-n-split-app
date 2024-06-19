import { Show, createMemo, createSignal } from "solid-js";
import { useFriendsContext } from "../context/FriendsContext";
import InputField from "./InputField";
import Button from "./Button";

const SplitBillForm = () => {
  const { selectedFriend, setSelectedFriend, setFriends } = useFriendsContext();

  const [bill, setBill] = createSignal(0);
  const [expense, setExpense] = createSignal(0);
  const [payer, setPayer] = createSignal("user");
  const friendExpense = createMemo(() => +(bill() - expense()));

  function handleExpenseInput(e) {
    if (Number(e.target.value) > bill()) {
      e.target.value = expense();
      return;
    }

    setExpense(+e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill() || !expense() || !friendExpense()) return;

    const newBalance =
      selectedFriend().balance +
      (payer() === "user" ? friendExpense() : -expense());

    setFriends(
      (friend) => friend.id === selectedFriend().id,
      "balance",
      newBalance,
    );

    setSelectedFriend(null);
    setBill(0);
    setExpense(0);
    setPayer("user");
  }

  return (
    <div class="sticky top-8 grid h-[380px] place-items-center rounded-xl bg-slate-700 p-4 lg:h-[420px]">
      <Show
        when={selectedFriend()}
        fallback={
          <p class="text-center text-xl font-bold text-slate-50">
            Select a friend & <br /> Split the bill
          </p>
        }
      >
        <form class="size-full" onSubmit={handleSubmit}>
          <h2 class="mb-8 text-2xl font-bold uppercase">
            split a bill with {selectedFriend().name}
          </h2>

          <div class="grid grid-cols-2 place-content-start gap-x-12 gap-y-4">
            <label htmlFor="bill">💰 Bill value</label>
            <InputField
              id="bill"
              value={bill()}
              onInput={(e) => setBill(+e.target.value)}
            />
            <label htmlFor="user-expense">🧍‍♀️ Your Expense</label>
            <InputField
              id="user-expense"
              value={expense()}
              onInput={handleExpenseInput}
            />

            <label htmlFor="friend-expense">
              👩🏼‍🤝‍👩🏻 {selectedFriend().name}'s expense
            </label>
            <InputField
              id="friend-expense"
              value={friendExpense()}
              disabled={true}
            />

            <label htmlFor="payer">🤑 Who is paying?</label>
            <select
              id="payer"
              value={payer()}
              onChange={(e) => setPayer(e.target.value)}
              class="rounded-lg bg-slate-600 px-2 py-1"
            >
              <option value="user">You</option>
              <option value="friend">{selectedFriend().name}</option>
            </select>
          </div>

          <dir class="py- flex items-center justify-end">
            <Button type="submit">Split the Bill</Button>
          </dir>
        </form>
      </Show>
    </div>
  );
};

export default SplitBillForm;
