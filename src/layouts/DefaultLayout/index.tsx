import { Outlet } from "react-router";
import { Header } from "../../components/Header";
import { DefaultLayoutContainer } from "./styles";

export function DefaultLayout() {
    return (
        <DefaultLayoutContainer>
            <Header />
            {/* The Outlet component is a special component that acts as a placeholder for the child route components */}
            <Outlet /> 
        </DefaultLayoutContainer>
    );
}