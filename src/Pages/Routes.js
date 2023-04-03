//import { Home } from "./Home";
import React from "react";
const Home=React.lazy(()=>import("../Pages/Home")) 
// lazy is a function it takes call back function and that call abck function is importing ---lazy loading---code spliting---dynamic
const PlayGround=React.lazy(()=>import("../Pages/PlayGround"));
const Page404=React.lazy(()=>import("../Pages/Page404"));

const routes =[
         {
                  path:"/",
                  component:<Home />
         },
         {
                  path:"/code/:folderID/:playgroundID",
                  component:<PlayGround />
         },
         {
                  path:"*",
                  component:<Page404 />
         },

]
export default routes;
