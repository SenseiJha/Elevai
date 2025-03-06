"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
    const imgRef = useRef(null);
    useEffect(() => {
        const imgElement = imgRef.current;
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;
            if (scrollPosition > scrollThreshold){
                imgElement.classList.add("scrolled");
            }
            else{
                imgElement.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[])
    return (
        <section className="w-full pt-36 md:pt-48 pb-10">
            <div className="space-y-6 text-center">
                <div className="space-y-6 mx-auto">
                    <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title">
                        The AI Co-pilot 
                    <br/>
                    For Career Success
                    </h1>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                        Level-Up your career with personalized mentorship, Hard-Boiled Interview Prep and 
                        AI-Fueled tools to throttle-up your professional life.
                    </p>
                </div>
                <div className="flex justify-center space-x-4">
                    <Link href="/dashboard">
                    <Button size="lg" className="px-8">Get Started</Button>
                    </Link>

                    <Link href="/dashboard">
                    <Button size="lg" className="px-8" variant="outline">Watch a Demo</Button>
                    </Link>
                </div>
                <div className="hero-image-wrapper mt-5 md:mt-0">
                    <div ref={imgRef} className="hero-image">
                        <Image 
                        src={"/land_1.jpg"} 
                        width={1100} 
                        height={650} 
                        alt="Banner 1" 
                        className="rounded-lg shadow-2xl border mx-auto" 
                        priority/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;