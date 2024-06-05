import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import { AppleIcon, GooglePlayIcon } from "@/public/svg";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="">
                <div className="wrapper text-center pt-20">
                    <h1 className="md:text-5xl text-3xl md:font-bold font-semibold max-w-xl m-auto">
                        Easy and Affordable{" "}
                        <span className="text-primary">credit solutions</span>{" "}
                        you can trust.
                    </h1>

                    <p className="mt-10 max-w-md font-semibold m-auto">
                        Experience the power of a seamless credit platform where
                        your needs are made a priority
                    </p>

                    <div className="flex items-center gap-6 justify-center mt-10">
                        <button className="flex gap-4 bg-dark text-light text-left rounded-full px-6 py-3 hover:opacity-90 border">
                            <AppleIcon className="w-10 h-10 scale-90" />
                            <span>
                                <p>Coming soon on</p>
                                <b>App Store</b>
                            </span>
                        </button>
                        <button className="flex gap-4 border-dark border text-dark text-left rounded-full px-6 py-3 hover:opacity-90">
                            <GooglePlayIcon className="w-10 h-10 scale-90" />
                            <span>
                                <p>Available on</p>
                                <b>PlayStore</b>
                            </span>
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

{
    /* <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          /> */
}

