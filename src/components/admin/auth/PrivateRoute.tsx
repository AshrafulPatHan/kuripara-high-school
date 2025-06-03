"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode }from "jwt-decode";

interface DecodedToken {
  id: string;
  iat: number;
  exp: number;
}

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      router.push("/auth");
      return;
    }

    try {
      const decoded: DecodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        // Token expired
        localStorage.removeItem("adminToken");
        router.push("/auth");
      } else {
        setIsAuth(true);
      }
    } catch (error) {
      console.error("Invalid token:", error);
      localStorage.removeItem("adminToken");
      router.push("/auth");
    }
  }, [router]);

  if (isAuth === null) return <p className="p-4">Checking authentication...</p>;
  return <>{children}</>;
}
