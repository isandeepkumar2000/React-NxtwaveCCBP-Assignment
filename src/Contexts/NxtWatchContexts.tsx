import React from "react";
import { VideoDetailType } from "../Components/VideoDetails.tsx";
interface NxtwatchContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  showBanner: boolean;
  closeBanner: () => void;
  savedVideo: VideoDetailType[];
}
const NxtwatchContext = React.createContext<NxtwatchContextType>({
  isDarkMode: true,
  toggleDarkMode: () => {},
  showBanner: true,
  closeBanner: () => {},
  savedVideo: [],
});

export default NxtwatchContext;
