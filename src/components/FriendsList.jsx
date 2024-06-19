import { For } from "solid-js";
import { useFriendsContext } from "../context/FriendsContext";
import Friend from "./Friend";

const FriendsList = () => {
  const { friends, selectedFriend, setSelectedFriend } = useFriendsContext();

  function handleSelect(friend) {
    setSelectedFriend(selectedFriend()?.id !== friend.id ? friend : null);
  }

  return (
    <div class="grid content-start gap-1">
      <For each={friends}>
        {(friend) => (
          <Friend
            info={friend}
            isSelected={selectedFriend()?.id === friend.id}
            onSelect={handleSelect}
          />
        )}
      </For>
    </div>
  );
};

export default FriendsList;
