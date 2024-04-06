"use client";
import { FacebookProvider, CustomChat } from "react-facebook";
const FBMessenger = () => {
  return (
    <div>
      <FacebookProvider appId="423962706887339" chatSupport>
        <CustomChat pageId="104847138003517" />
      </FacebookProvider>
    </div>
  );
};

export default FBMessenger;
