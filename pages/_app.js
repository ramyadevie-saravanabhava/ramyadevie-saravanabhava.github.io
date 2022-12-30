import 'tailwindcss/tailwind.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function MyApp({Component, pageProps}) {
    return <>
        <ThemeProvider attribute="class" enableSystem={false}>
            <Navigation/>
            <Component {...pageProps} />
            <Footer/>
        </ThemeProvider>
    </>
}

export default MyApp