import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function Faq({ question, children }) {
  return (
    <div className="faqItem">
      <h2>👉🏽 &nbsp; {question}</h2>
      <ReactMarkdown
        children={children}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                // style={dark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className="inline-code" {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
}
