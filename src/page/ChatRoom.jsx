import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const ChatRoom = () => {
  const [roomName, setRoomName] = useState("");
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Sign outh error:", error);
    }
  };

  const handleRoomEnter = () => {
    if (roomName.trim()) {
      navigate(`/rooms/${roomName}`);
    } else {
      alert("Lütfen bir oda adı girin");
    }
  };

  return (
    <div className="bg-black w-full h-screen text-white flex justify-center items-center">
      <div className="bg-white w-1/2 h-1/2 rounded-3xl flex justify-center items-center text-black flex-col">
        <h1 className="text-4xl font-bold mb-5">Chat Odası</h1>
        <h2 className="text-2xl font-bold ">Hangi Odaya Gireceksiniz</h2>
        <input
          className="w-1/3 my-5 h-10 shadow-md border-2"
          placeholder="ör:haftaiçi"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <button onClick={handleRoomEnter} className="w-1/3 bg-black text-white p-2 rounded-xl my-2">
          Odaya Gir
        </button>
        <button onClick={handleSignOut} className="w-1/3 bg-red-700 text-white p-2 rounded-xl my-2">
          Çıkış yap
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
