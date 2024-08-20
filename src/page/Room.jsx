import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../firebase";

const Room = () => {
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMsg = {
        id: messages.length + 1,
        text: newMessage,
        userName: auth.currentUser.displayName,
        userProfil: auth.currentUser.photoURL,
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };
  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };
  const changeRooms = () => {
    navigate(`/chat`);
  };
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center">
      <div className="bg-indigo-100 w-96 h-[70vh] flex flex-col">
        <div className="h-10 bg-red-300 flex flex-row p-2 justify-around">
          <h1 className="font-thin">Fatma Zehra Çetin</h1>
          <h1>{roomId} Odası</h1>
          <button
            onClick={changeRooms}
            className="bg-red-600 text-white p-1  rounded-lg font-thin text-sm"
          >
            Farklı Oda
          </button>
        </div>
        <div className="flex-grow overflow-y-auto">
          {messages.map((msg) => (
            <div key={msg.id} className="flex items-center justify-end my-2">
              {msg.userProfil && (
                <img src={msg.userProfil} className="w-8 h-8 rounded-full border-2 mr-2" />
              )}
              <div className="bg-gray-100 p-2 rounded-lg">
                <strong>{msg.userName}: </strong> {msg.text}{" "}
              </div>
            </div>
          ))}
        </div>
        <div className="p-2 mt-auto">
          <input
            type="text"
            className="w-full h-8 rounded-md border-2 outline-green-700"
            value={newMessage}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
        </div>
      </div>
    </div>
  );
};

export default Room;
