import 'tailwindcss/tailwind.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ThemeProvider } from 'next-themes'
import "../styles/globals.css"

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