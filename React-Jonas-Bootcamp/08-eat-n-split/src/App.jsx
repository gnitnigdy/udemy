import { useState } from "react";
import ComponentButton from "./components/ComponentButton";
import Friend from "./components/Friend";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import FriendList from "./FriendList";

export default function App() {
  const [initialFriends, setInitialFriends] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ]);
  const [isOpenFriendForm, setIsOpenFriendForm] = useState(false);
  const [splitBillFormID, setSplitBillFormID] = useState(null);

  function handleOnOpenCloseFriendForm() {
    setIsOpenFriendForm((prev) => !prev);
  }

  function handleAddFriend(param) {
    setInitialFriends((prev) => [...prev, param]);
  }

  function handleSetSplitBillFormID(param) {
    setSplitBillFormID((prev) => (prev?.id === param.id ? null : param));
    setIsOpenFriendForm(false);
  }

  function handleSplitBill(param) {
    console.log("split bill di app.jsx");
    console.log(param);
    setInitialFriends((prev) =>
      prev.map((item) => {
        if (item.id === splitBillFormID.id) {
          return { ...item, balance: item.balance + param.balance };
        } else {
          return { ...item };
        }
      })
    );
    setSplitBillFormID(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          data={initialFriends}
          selected={splitBillFormID}
          onSetSplitBill={handleSetSplitBillFormID}
        />
        <FormAddFriend
          isOpen={isOpenFriendForm}
          onAddItem={handleAddFriend}
          onCloseForm={handleOnOpenCloseFriendForm}
        />
        <ComponentButton
          styleClass={"button"}
          buttonAction={handleOnOpenCloseFriendForm}
        >
          {isOpenFriendForm ? "Close" : "Add Friend"}
        </ComponentButton>
      </div>
      {splitBillFormID && (
        <FormSplitBill
          idForm={splitBillFormID}
          onSplitBillTransaction={handleSplitBill}
        />
      )}
    </div>
  );
}
