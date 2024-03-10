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
    </>
  );
}

export default App;
