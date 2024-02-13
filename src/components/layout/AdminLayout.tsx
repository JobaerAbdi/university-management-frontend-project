import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div>
            <h1 style={{background: 'red', width: '100%', height: '60px'}}>Navbar</h1>
            <Outlet/>
        </div>
    );
};

export default AdminLayout;