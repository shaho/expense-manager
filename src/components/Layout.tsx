import Sidebar from "./Sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="main">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">{children}</div>
    </div>
  );
};

export default Layout;
