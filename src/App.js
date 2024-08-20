import { auth, provider, signInWithPopup } from "./firebase";
import { Routes, Route, useNavigate } from "react-router-dom";
import ChatRoom from "./page/ChatRoom";
import Room from "./page/Room";

function Home() {
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      // Kullanıcı bilgileri: result.user
    } catch (error) {
      console.error("Google Sign-In Error: ", error);
    }
    navigate("/chat");
  };

  return (
    <div className="bg-black w-full h-screen text-white flex justify-center items-center ">
      <div className="bg-white w-1/2 h-1/2 rounded-3xl flex justify-center items-center text-black flex-col">
        <h1 className="text-4xl font-bold mb-5">Chat Odası</h1>
        <h3 className="text-2xl font-bold ">Devam Etmek İçin Giriş Yapın</h3>
        <button
          onClick={handleGoogleSignIn}
          className="bg-black rounded-2xl p-3 text-white mt-8 flex items-center"
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
            alt="Google Logo"
            className="w-6 h-6 mr-2"
          />
          Google ile Gir
        </button>
      </div>
    </div>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatRoom />} />
      <Route path="/rooms/:roomId" element={<Room />} />
    </Routes>
  );
}

export default App;
