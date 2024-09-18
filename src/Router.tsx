import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";
import { Routes, Route } from "react-router-dom";
export function Router() {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<DefaultLayout />} >

                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<Success />} />
                </Route>
            </Route>
        </Routes>
    );
}