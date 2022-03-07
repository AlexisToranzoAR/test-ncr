import "./AppLayout.scss";

export default function AppLayout({ children }) {
  return (
    <>
      <div className="appLayoutDiv">
        <main className="appLayoutMain">{children}</main>
      </div>
    </>
  );
}
