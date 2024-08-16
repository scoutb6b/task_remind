import Sidemenu from "@/components/sideMenu/Sidemenu";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <Sidemenu />
      {children}
    </main>
  );
};

export default DashboardLayout;
