import { memo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * @param {{ code: string }} param0
 */
const Syntax = ({ code }) => {
  return (
    <SyntaxHighlighter showLineNumbers language="jsx" style={oneLight}>
      {code}
    </SyntaxHighlighter>
  );
};

export default memo(Syntax);
