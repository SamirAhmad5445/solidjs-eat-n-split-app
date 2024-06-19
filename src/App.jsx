import { FriendContextProvider } from "./context/FriendsContext";
import {
  AddFriendForm,
  FriendsList,
  SplitBillForm,
  HelpTipTool,
} from "./components";

const App = () => {
  return (
    <FriendContextProvider>
      <main class="relative grid min-h-[420px] gap-4 rounded-2xl bg-slate-800 p-4 sm:w-[560px] lg:w-[840px] lg:grid-cols-2">
        <div class="flex flex-col gap-4">
          <FriendsList />
          <AddFriendForm />
        </div>

        <SplitBillForm />
        <HelpTipTool />
      </main>
    </FriendContextProvider>
  );
};

export default App;
