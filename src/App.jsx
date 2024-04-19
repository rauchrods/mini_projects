import { useState } from "react";
import "./App.css";
import Accordian from "./components/accordian";
import RandomGenerator from "./components/randomColorGenerator";
import StarRating from "./components/starRating";
import ImageSlider from "./components/imageSlider";
import LoadMoreData from "./components/load_more_data";
import TreeView from "./components/tree-view";
import { menus } from "./components/tree-view/data";
import QrCodeGenerator from "./components/qr_code_generator";
import SwitchMode from "./components/switch-mode";
import ScrollIndicator from "./components/scroll_indicator";
import Tabtest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/modal-popup/modal-test";
import GitHubProfileFinder from "./components/github_profile_finder";
import SearchAutoComplete from "./components/search_auto_complete";
import TicTacToe from "./components/tic_tac_toe";
import Weather from "./components/weather_app/weather/Weather";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Accordian /> 
      <RandomGenerator /> 
      <StarRating noOfStars={10}/>
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'25'}/>
      <LoadMoreData/>
      <TreeView menus={menus}/>
      <QrCodeGenerator/>
      <SwitchMode/>
      <ScrollIndicator/>
      <Tabtest/>
      <ModalTest/>
      <GitHubProfileFinder/>
      <SearchAutoComplete/>
      <TicTacToe/>
      <Weather/>
    </>
  );
}

export default App;
