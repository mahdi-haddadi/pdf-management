import { lazy } from "react";
import { SidebarProvider } from "../components/sidebar/context/SidebarContext";
import Sidebar from "../components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import useToggle from "../hooks/useToggle";
import Container from "../components/container/Container";

const Main = lazy(() => import("./../screens/main/Main"));
const SinglePdf = lazy(() => import("../screens/singlePdf/SinglePdf"));
const NewDocument = lazy(() => import("../screens/newDocument/NewDocument"));
const UpdateDocument = lazy(() => import("../screens/updateDocument"));
const NotFound = lazy(() => import("../screens/404/NotFound"));

const MainLayout = () => {
  const {
    state: isOpenSidebar,
    toggle: toggleSidebar,
    close: closeSidebar,
    open: openSidebar,
  } = useToggle(true);
  return (
    <SidebarProvider
      values={{
        isOpenSidebar,
        toggleSidebar,
        closeSidebar,
        openSidebar,
      }}
    >
      <Sidebar />
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/new-document" element={<NewDocument />} />
          <Route path="/single/:id" element={<SinglePdf />} />
          <Route path="/update-document/:id" element={<UpdateDocument />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </SidebarProvider>
  );
};

export default MainLayout;
