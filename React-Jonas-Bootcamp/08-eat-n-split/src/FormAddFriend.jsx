import { useState } from "react";
import ComponentButton from "./components/ComponentButton";
export default function FormAddFriend({ isOpen, onAddItem, onCloseForm }) {
  const [friendName, setFriendName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  function AddNewFriend(e) {
    e.preventDefault();
    let tempNewData = {
      id: Date.now().toString(),
      name: friendName,
      image: `https://i.pravatar.cc/48?u=${profileImage}`,
      balance: 0,
    };
    console.log(`ini data baru`);
    console.log(tempNewData);
    if (!friendName || !profileImage) return;
    onAddItem(tempNewData);
    setFriendName("");
    setProfileImage("");
    onCloseForm();
  }
  return (
    <>
      {isOpen && (
        <form className="form-add-friend">
          <label>🧑‍🤝‍🧑Name</label>
          <input
            type="text"
            value={friendName}
            placeholder="Input Your Friend Name"
            onChange={(e) => setFriendName(e.target.value)}
          />
          <label>📸Image URL</label>
          <input
            type="text"
            value={profileImage}
            placeholder="Input Your Image Code"
            onChange={(e) => setProfileImage(e.target.value)}
          />
          <ComponentButton
            styleClass={"button"}
            buttonAction={(e) => AddNewFriend(e)}
          >
            Add
          </ComponentButton>
        </form>
      )}
    </>
  );
}
