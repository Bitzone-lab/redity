import { memo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * @param {{ children: React.ReactNode }} param0
 */
const LineCode = ({ children }) => {
  return (
    <SyntaxHighlighter
      customStyle={{ marginTop: "0.6em", padding: "0.4em 1em" }}
      language="typescript"
      style={oneLight}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default memo(LineCode);
