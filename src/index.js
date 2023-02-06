import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

import { AppProvider } from "./components/conext/ProductContext";
import {Filtercontextprov} from "./components/conext/filter_conext"
import { CartProvider } from "./components/conext/CartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Auth0Provider
    domain="dev-3d5couz3jx3engt8.us.auth0.com"
    clientId="JDpSSKjziGMwvsVA16Ep2JUpr33Bs24Q"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
<AppProvider>
    <Filtercontextprov>
        <CartProvider>
        <App />


        </CartProvider>



    </Filtercontextprov>


</AppProvider>
</Auth0Provider>
);
