import Header from "./Header";
import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <Header />
      <div className="main">
        <Sidebar />
        <section className="content">{children}</section>
      </div>
    </div>
  );
}

export default DashboardLayout;
