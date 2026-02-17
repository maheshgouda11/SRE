import React from 'react'

function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
     <Route element={<UserLayout/>}>
        <Route path="/" element={<Home/>}/>
    </Route>
    <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
    </Route>
    <Route path="/login" element={<Login />} />
    
    </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
