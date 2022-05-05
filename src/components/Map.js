import { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `         
        function initTmap() {
            const map = new Tmapv2.Map("TMapApp", {
                center: new Tmapv2.LatLng(37.59644996896789, 127.06004762649577),
                width: "100%",
                height: "100%",
                zoom:18
            });
        }
        
        initTmap();
   `;
    script.type = "text/javascript";
    script.async = "async";
    document.head.appendChild(script);
  }, []);
  return (
    <div
      id="TMapApp"
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
        zIndex: 0,
      }}
    />
  );
};

export default Map;
