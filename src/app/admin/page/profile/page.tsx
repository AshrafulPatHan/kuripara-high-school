import PrivateRoute from "@/components/admin/auth/PrivateRoute";



export default function AdminProfile(){
    return(
        <PrivateRoute>
            <div>
                profile
            </div>
        </PrivateRoute>
    )
}