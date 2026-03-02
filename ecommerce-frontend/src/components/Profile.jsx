import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

import React from "react";

function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="max-w-lg mx-auto bg-card border border-border rounded-lg p-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">My Profile</h1>

        <div className="space-y-5 text-foreground">
          <div>
            <p className="text-muted text-sm">Name</p>
            <p className="font-semibold">{user.name}</p>
          </div>

          <div>
            <p className="text-muted text-sm">Email</p>
            <p className="font-semibold">{user.email}</p>
          </div>

          <div>
            <p className="text-muted text-sm">Role</p>
            <p className="font-semibold capitalize">{user.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
