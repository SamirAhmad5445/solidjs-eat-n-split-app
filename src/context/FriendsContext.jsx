import { createContext, createSignal, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { initialFriends } from "../data";

const FriendContext = createContext();

export const FriendContextProvider = (props) => {
  const [friends, setFriends] = createStore(initialFriends);
  const [selectedFriend, setSelectedFriend] = createSignal(null);

  return (
    <FriendContext.Provider
      value={{
        friends,
        setFriends,
        selectedFriend,
        setSelectedFriend,
      }}
    >
      {props.children}
    </FriendContext.Provider>
  );
};

export const useFriendsContext = () => {
  return useContext(FriendContext);
};
