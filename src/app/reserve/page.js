

// File : src/app/reserve/page.js
import { Footer } from "@/sections/mainpage/footer";
import Navbar from "@/sections/mainpage/navbar";
import ReservationCTA from "@/sections/mainpage/reservation";

const ReservePage = () => {

    return(
        <>
        <Navbar />
        <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gray-50">
            <ReservationCTA />
        </section>
        <Footer />  
        </>
    )
};
export default ReservePage; 