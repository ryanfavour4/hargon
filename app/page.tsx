import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import {
    AppleIcon,
    ArrowRightIcon,
    GooglePlayIcon,
    PartnerIcon,
} from "@/public/svg";
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

                    <Image
                        src="/icon/mobile-phone-hero.png"
                        alt="Mobile phone"
                        className="text-center m-auto mt-10 w-4/5 md:w-auto"
                        width={606}
                        height={704}
                        priority
                    />
                </div>

                <div className="wrapper flex md:flex-row flex-col-reverse items-center gap-6 justify-center my-28">
                    <div className="bg-[#F9F9F9] px-10 flex flex-col gap-6">
                        <Image
                            src="/icon/mobile-phone-botttom-navs.png"
                            alt="Mobile phone"
                            className="text-center m-auto w-4/5 md:w-auto"
                            width={412}
                            height={360}
                            priority
                        />

                        <div className="relative pb-10">
                            <h3 className="text-4xl font-bold max-w-md leading-snug">
                                The{" "}
                                <span className="text-primary">
                                    ultimate platform
                                </span>{" "}
                                to control your finances
                            </h3>

                            <div className="bg-primary flex items-center flex-col justify-center rounded-full w-fit cursor-pointer py-3 px-1 bottom-5 right-0 absolute">
                                <ArrowRightIcon className="w-10 h-7 mb-1 ml-2" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F9F9F9] px-10 flex flex-col-reverse gap-6 pt-10">
                        <Image
                            src="/icon/mobile-phone-icons.png"
                            alt="Mobile phone"
                            className="text-center m-auto w-4/5"
                            width={385}
                            height={490}
                            priority
                        />

                        <div className="relative">
                            <h3 className="text-4xl font-bold max-w-md leading-snug">
                                The{" "}
                                <span className="text-primary">
                                    ultimate platform
                                </span>{" "}
                                to control your finances
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="wrapper">
                        <h4 className="text-4xl font-bold text-center">
                            <span className="text-primary">Partnership</span>{" "}
                            guide
                        </h4>
                        <p className="text-dark/80 text-center">
                            Trust Hargon to help you invest your funds with
                            lower risks
                        </p>

                        <div className="flex items-center justify-between gap-4 flex-wrap mt-16">
                            <div className="bg-[#FFFBF0] py-6 px-6 border border-gray-50 max-w-md flex flex-col gap-4 pr-14">
                                <PartnerIcon />
                                <h2 className="text-[#FFC727] font-medium text-2xl">
                                    Loan distrubution
                                </h2>
                                <p className="max-w-52">
                                    Gain visiblity and track outstanding
                                    balances
                                </p>
                            </div>
                            <div className="bg-[#FFFBF0] py-6 px-6 border border-gray-50 max-w-md flex flex-col gap-4 pr-14">
                                <PartnerIcon />
                                <h2 className="text-[#FFC727] font-medium text-2xl">
                                    Loan distrubution
                                </h2>
                                <p className="max-w-52">
                                    Gain visiblity and track outstanding
                                    balances
                                </p>
                            </div>
                            <div className="bg-[#FFFBF0] py-6 px-6 border border-gray-50 max-w-md flex flex-col gap-4 pr-14">
                                <PartnerIcon />
                                <h2 className="text-[#FFC727] font-medium text-2xl">
                                    Loan distrubution
                                </h2>
                                <p className="max-w-52">
                                    Gain visiblity and track outstanding
                                    balances
                                </p>
                            </div>
                            <div className="bg-[#FFFBF0] py-6 px-6 border border-gray-50 max-w-md flex flex-col gap-4 pr-14">
                                <PartnerIcon />
                                <h2 className="text-[#FFC727] font-medium text-2xl">
                                    Loan distrubution
                                </h2>
                                <p className="max-w-52">
                                    Gain visiblity and track outstanding
                                    balances
                                </p>
                            </div>
                        </div>
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

