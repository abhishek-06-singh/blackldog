"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import BackToHomeLink from "../../components/Shared/BackToHomeLink";
import SecurityNotice from "../../components/Auth/SignIn/SecurityNotice";
import LeftPanel from "../../components/Shared/LeftPanel";
import CreatePasswordHeading from "../../components/Auth/ResetPassword/CreatePasswordHeading";
import CreatePassword from "../../components/Auth/ResetPassword/CreatePassword";
import CreatePasswordButton from "../../components/Auth/ResetPassword/CreatePasswordButton";
import { ResetPassword } from "../../../services/api";
import { toast } from "sonner";

export default function NewPassword() {
  const [newPassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const router = useRouter();

  // ✅ Get token from URL (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const t = params.get("token");
      setToken(t);
    }
  }, []);

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.info("Passwords do not match!");
      return;
    }

    if (!token) {
      toast.error("Invalid or missing token.");
      return;
    }

    try {
      await ResetPassword({ token, newPassword, confirmPassword });
      toast.success("Password changed successfully!");
      router.push("/signin");
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error("Error changing password. Please try again.");
    }
  };

  return (
    <div className="h-screen flex w-full">
      <LeftPanel />

      <div className="relative lg:w-7/12 md:w-full w-full flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-lg space-y-8">
          <BackToHomeLink />
          <CreatePasswordHeading />
          <CreatePassword
            password={newPassword}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            showConfirmPassword={showConfirmPassword}
            setShowConfirmPassword={setShowConfirmPassword}
          />
          <CreatePasswordButton handleChangePassword={handleChangePassword} />
          <SecurityNotice />
        </div>
      </div>
    </div>
  );
}
