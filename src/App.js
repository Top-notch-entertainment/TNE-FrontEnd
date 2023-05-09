import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
    </Route>
  )
);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
