import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <div className="h-screen">
      <Outlet />
    </div>
  );
};
