import React, { useState, useEffect } from "react";
import { createBaseAccountSDK } from "@base-org/account";
import { useNavigate, useLocation } from "react-router-dom";

export default function BaseWalletConnect() {
  const [sdk, setSdk] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const initSDK = async () => {
      try {
        const instance = await createBaseAccountSDK({
          network: "base-mainnet", // or "base-sepolia" for testing
        });
        setSdk(instance);
      } catch (error) {
        console.error("SDK initialization failed:", error);
      }
    };
    initSDK();
  }, []);

  const handleSignIn = async () => {
    if (!sdk) return;
    setLoading(true);

    try {

      const provider = sdk.getProvider();
      await provider.request({ method: "wallet_connect" });


      const accounts = await provider.request({ method: "eth_accounts" });
      const walletAddress = accounts[0];

      if (!walletAddress) {
        throw new Error("No wallet address found");
      }

      console.log("Wallet connected:", walletAddress);

      localStorage.setItem("walletAddress", walletAddress);
      sessionStorage.setItem("user", JSON.stringify({ walletAddress }));

 
      navigate("/dashboard");
    } catch (error) {
      console.error("❌ Sign-in failed:", error);
      alert("Failed to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  const isHero = location.pathname === "/";

  return (
    <button
      className={isHero ? "primary-btn" : "login-btn"}
      onClick={handleSignIn}
      disabled={loading}
    >
      <span className={isHero ? "btn-icon" : "login-icon"}></span>
      {loading
        ? "Connecting..."
        : isHero
        ? "Get Started with Base"
        : "Log in with Base"}
    </button>
  );
}
