// components/TextTruncate.js

import { useState, useEffect } from "react";

function TextTruncate({
  text = "Here is the text",
  maxLines = 1.5,
  maxLengthPerLine = 50,
}) {
  const [truncatedText, setTruncatedText] = useState("");

  useEffect(() => {
    // Split the text into lines
    const lines = text.split("\n");

    // Initialize variables for tracking lines and the resulting truncated text
    let currentLines = 0;
    let truncatedText = "";

    // Iterate through each line
    for (const line of lines) {
      // Check if adding the current line would exceed the maximum lines
      if (currentLines + 1 > maxLines) {
        break; // Stop if we've reached the maximum lines
      }

      // Calculate the remaining space available for the line
      const remainingLength = maxLengthPerLine - truncatedText.length;

      // Check if the current line can fit within the remaining space
      if (line.length <= remainingLength) {
        truncatedText += line + "\n"; // Add the entire line
        currentLines += 1;
      } else {
        // Truncate the line to fit within the remaining space
        truncatedText += line.slice(0, remainingLength - 3) + "..." + "\n";
        currentLines += 1;
        break; // Stop after truncating one line
      }
    }

    // Remove the trailing newline character if present
    if (truncatedText.endsWith("\n")) {
      truncatedText = truncatedText.slice(0, -1);
    }

    setTruncatedText(truncatedText);
  }, [text, maxLines, maxLengthPerLine]);

  return <div>{truncatedText}</div>;
}

export default TextTruncate;
