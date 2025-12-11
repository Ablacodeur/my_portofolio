import React from "react";
import SideElements from "../SideElements/SideElements";

export default function BlobSpline() {
  return (
    <div
      style={{
        width: "100%",
        height: "95%", 
        pointerEvents: "none", 
        position:'relative'
      }}
    >
<spline-viewer 
url="https://prod.spline.design/7zrDzCifAboq0qlU/scene.splinecode"

style={{ width: "100%", height: "100%" }} >
</spline-viewer>      
<SideElements />
    </div>
  );
}
