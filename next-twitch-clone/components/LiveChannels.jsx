import React from "react";
import LiveChannelitem from "./LiveChannelitem";
import Live1 from "../public/assets/live/live1.jpeg";
import Live2 from "../public/assets/live/live2.jpeg";
import Live3 from "../public/assets/live/live3.jpeg";
import Live4 from "../public/assets/live/live4.jpeg";
import Live5 from "../public/assets/live/live5.jpeg";
import Live6 from "../public/assets/live/live6.jpeg";
import Live7 from "../public/assets/live/live7.jpeg";
import Live8 from "../public/assets/live/live8.jpeg";
import Live9 from "../public/assets/live/live9.jpeg";
import Live10 from "../public/assets/live/live10.jpeg";

const LiveChannels = () => {
  return (
    <div id="live" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span className="text-[#9147ff]">Live Channels</span> we think you'll
        like
      </h2>
      {/*Container*/}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2">
        <LiveChannelitem
          img={Live1}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/82b63a01-628f-4c81-9b05-dd3a5011fdda-profile_image-70x70.png"
          title="CHARITY STREAM! Any support is ap..."
          user="Tufe"
          game="Call of Duty: Warzone"
        />
        <LiveChannelitem
          img={Live2}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/1d41de3c-731d-41ae-b0e7-615ad74db8f3-profile_image-70x70.png"
          title="STUNTIN ON THESE KIDS!"
          user="Nate"
          game="Apex Legends"
        />
        <LiveChannelitem
          img={Live3}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/6342dd1b-3c2c-41dd-9d01-35c5c6660ef9-profile_image-70x70.png"
          title="Hitting diamond today!! With @honey265..."
          user="Snoopi"
          game="League of Legends"
        />
        <LiveChannelitem
          img={Live4}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/80761181-4883-4b87-97dc-9253ca13a9c6-profile_image-70x70.png"
          title=""
          user="ShivFPS"
          game="Just Chatting"
        />
        <LiveChannelitem
          img={Live5}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/bf1d52e3-b46b-4c07-9b4f-a1ab8c4e40f8-profile_image-50x50.png"
          title="Reacting to haters. 12hour stream!!..."
          user="xXTobiXx"
          game="Just Chatting"
        />
        <LiveChannelitem
          img={Live6}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/20ce0b57-c04e-48ea-9dd0-64962b11cb29-profile_image-50x50.png"
          title="Duo rank climbing with @Aeden212! Long Stream! "
          user="Yoshiii"
          game="League of Legends"
        />
        <LiveChannelitem
          img={Live7}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/7032982d-befa-41be-a732-8cf99279f502-profile_image-50x50.png"
          title="Community Day!!"
          user="NatalieDays"
          game="Just Chatting"
        />

        <LiveChannelitem
          img={Live8}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/daffe63d-8a12-4149-a148-a06c98f70801-profile_image-50x50.png"
          title="Day 8! Surviving alone! Short Stream"
          user="Tusky"
          game="Escape from Tarkov"
        />
        <LiveChannelitem
          img={Live9}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/c4d8d415-5d92-489d-b38b-4eaeb1068536-profile_image-50x50.png"
          title="Sleepy stream. Come chill"
          user="CookieKristi"
          game="League of Legends "
        />
        <LiveChannelitem
          img={Live10}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/779312e3-5e00-4957-b33a-247a9db63093-profile_image-50x50.png"
          title="Sweating through platinum lobbies. Day 1..."
          user="Nate"
          game="Valorant"
        />
      </div>
    </div>
  );
};

export default LiveChannels;
