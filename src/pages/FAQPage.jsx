import React, { useState } from "react";
import { Home, ArrowLeft, ArrowRight } from "lucide-react";
import "./FAQPage.css";

// const Key = ({
//   children,
//   width = 40,
//   height = 40,
//   color = "#FFD1DC",
//   onClick,
// }) => (
//   <button
//     // className={`rounded-lg shadow-md flex items-center justify-center text-purple-700 font-bold`}
//     className={`pastel-key ${isPressed ? "pastel-key-pressed" : ""}`}
//     style={{
//       width: `${width}px`,
//       height: `${height}px`,
//       backgroundColor: color,
//       transition: "all 0.3s ease",
//     }}
//     onClick={() => {
//       setIsPressed(true);
//       onClick();
//       setTimeout(() => setIsPressed(false), 100);
//     }}
//   >
//     {children}
//   </button>
// );

const Key = ({
  children,
  width = 40,
  height = 40,
  color = "#FFD1DC",
  onClick,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <button
      className={`pastel-key ${isPressed ? "pastel-key-pressed" : ""}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
      }}
      onClick={() => {
        setIsPressed(true);
        onClick();
        setTimeout(() => setIsPressed(false), 100);
      }}
    >
      {children}
    </button>
  );
};

// const SocialIcon = ({ icon, color }) => (
//   <div
//     className="w-8 h-8 rounded-full flex items-center justify-center"
//     style={{ backgroundColor: color }}
//   >
//     {icon}
//   </div>
// );
const SocialIcon = ({ icon, color }) => (
  <div
    className="pastel-social-icon w-8 h-8 rounded-full flex items-center justify-center"
    style={{ backgroundColor: color }}
  >
    {icon}
  </div>
);

const FAQPage = () => {
  const [pressedKey, setPressedKey] = useState(null);

  const handleKeyPress = (key) => {
    setPressedKey(key);
    setTimeout(() => setPressedKey(null), 300);
  };

  return (
    <div className="pastel-keyboard">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="grid gap-2">
          <div className="flex gap-2 items-center">
            <Key color="#E6E6FA" onClick={() => handleKeyPress("Home")}>
              <Home size={20} />
            </Key>
            {[...Array(11)].map((_, i) => (
              <Key key={i} onClick={() => handleKeyPress(`F${i + 1}`)}>
                F{i + 1}
              </Key>
            ))}
            <Key width={60} onClick={() => handleKeyPress("Backspace")}>
              <ArrowLeft size={20} />
            </Key>
          </div>

          <div className="flex gap-2">
            <Key width={60} onClick={() => handleKeyPress("Tab")}>
              Tab
            </Key>
            {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map(
              (letter) => (
                <Key key={letter} onClick={() => handleKeyPress(letter)}>
                  {letter}
                </Key>
              )
            )}
            <Key onClick={() => handleKeyPress("{")}>{"{{"}</Key>
            <Key onClick={() => handleKeyPress("}")}>{"}"}</Key>
            <Key width={60} onClick={() => handleKeyPress("\\")}>
              |\
            </Key>
          </div>

          <div className="flex gap-2">
            <Key width={80} onClick={() => handleKeyPress("CapsLk")}>
              CapsLk
            </Key>
            {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((letter) => (
              <Key key={letter} onClick={() => handleKeyPress(letter)}>
                {letter}
              </Key>
            ))}
            <Key onClick={() => handleKeyPress(":")}>:</Key>
            <Key onClick={() => handleKeyPress('"')}>"</Key>
            <Key width={80} onClick={() => handleKeyPress("Enter")}>
              <ArrowRight size={20} />
            </Key>
          </div>

          <div className="flex gap-2">
            <Key width={100} onClick={() => handleKeyPress("Shift")}>
              Shift
            </Key>
            <SocialIcon icon="in" color="#0077B5" />
            <SocialIcon icon="YT" color="#FF0000" />
            <SocialIcon icon="X" color="#000000" />
            <SocialIcon icon="IG" color="#E1306C" />
            <SocialIcon icon="f" color="#1877F2" />
            <SocialIcon icon="@" color="#D44638" />
            <SocialIcon icon="☎" color="#25D366" />
            <Key width={40}></Key>
            <Key width={40}></Key>
            <Key width={40}></Key>
            <Key width={100} onClick={() => handleKeyPress("Shift")}>
              Shift
            </Key>
          </div>

          <div className="flex gap-2">
            <Key width={50} onClick={() => handleKeyPress("Ctrl")}>
              Ctrl
            </Key>
            <Key width={50} onClick={() => handleKeyPress("Win")}>
              Win
            </Key>
            <Key width={50} onClick={() => handleKeyPress("Alt")}>
              Alt
            </Key>
            <Key width={300} onClick={() => handleKeyPress("Space")}></Key>
            <Key width={50} onClick={() => handleKeyPress("Alt")}>
              Alt
            </Key>
            <Key width={50} onClick={() => handleKeyPress("Fn")}>
              Fn
            </Key>
            <Key width={50}>
              <ArrowRight size={20} />
            </Key>
            <Key width={50} onClick={() => handleKeyPress("Ctrl")}>
              Ctrl
            </Key>
          </div>
        </div>
        {pressedKey && (
          <div className="mt-4 text-center text-lg font-bold text-purple-700">
            Key Pressed: {pressedKey}
          </div>
        )}
      </div>
      {pressedKey && (
        <div className="pastel-pressed-key-display">
          Key Pressed: {pressedKey}
        </div>
      )}
    </div>
  );
};

export default FAQPage;
