export default function Layout({ footer, children }) {
  return (
    <div className="wrapper">
      <div className="container">
        {children}
        <footer>{footer || "This is an Amplify App written in NextJs"}</footer>
      </div>
    </div>
  );
}
