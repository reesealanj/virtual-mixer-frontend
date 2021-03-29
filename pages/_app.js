import "../styles/globals.css";
import Router from "next/router";
import { parseCookies } from "nookies";
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />;
        </>
    );
}

function redirectUser(ctx, location) {
    if (ctx.req) {
        ctx.res.writeHead(302, { Location: location });
        ctx.res.end();
    } else {
        Router.push(location);
    }
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    const jwt = parseCookies(ctx).jwt;

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    if (!jwt) {
        if (ctx.pathname === "/admin/create") {
            redirectUser(ctx, "/login");
        } else if (ctx.pathname === "/admin/submit") {
            redirectUser(ctx, "/login");
        } else if (ctx.pathname === "/admin/dashboard") {
            redirectUser(ctx, "/login");
        }
    }

    return { jwt, pageProps };
};
export default MyApp;
