import { useState } from "react";
import { ReactComponent as ClipboardIcon } from "@app/assets/Clipboard.svg";

export const DisplayField = ({ password }) => {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = (e) => {
    e.preventDefault();
    if (password.length >= 1) {
      copyTextToClipboard(password)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="display-field">
      <input type="text" className="value" value={password} readOnly={true} />

      {isCopied ? (
        <span className="copy-info">Copied!</span>
      ) : (
        <button className="copy-btn" onClick={handleCopyClick}>
          <ClipboardIcon />
        </button>
      )}
    </div>
  );
};
