import Head from "next/head";
import { NavBar } from "components";
import { styled } from "styles/stitches.config";
import { useEffect } from "react";

const StyledSiteWrapper = styled("main", {
    position: "relative",
    zIndex: 10,
});

export const SiteWrapper = (props: any) => {
    const { children, pageTitle } = props;
    useEffect(() => {
        document.querySelector("body")?.classList.remove("menu-on");
    });
    return (
        <div>
            <Head>
                <title>Modern Age Studio</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <StyledSiteWrapper className="site-wrapper">
                {children}
            </StyledSiteWrapper>
        </div>
    );
};
