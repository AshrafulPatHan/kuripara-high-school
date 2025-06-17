"use client"

import PrivateRoute from "@/components/admin/auth/PrivateRoute"

export default function UpdateProfile() {
    return(
        <PrivateRoute>
            <div>
                <h2>Update profile</h2>
            </div>
        </PrivateRoute>
    )
}