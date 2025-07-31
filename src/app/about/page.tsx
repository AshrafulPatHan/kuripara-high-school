"use client"

import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import Image from "next/image";
import Kuripara from "@/assets/image/school/Kuripara.jpg";
import "./about.css";
import { useEffect } from "react";
import gsap from "gsap";



declare global {
  interface Window {
    SplitType?: any;
  }
}


export default function About_Page(){


  useEffect(() => {
    const themeToggle = document.getElementById("theme-toggle") as HTMLElement | null;
    const body = document.body;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
    } else if (savedTheme === "light") {
      body.classList.remove("dark-mode");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      body.classList.add("dark-mode");
    }

    themeToggle?.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });

    const overlay = document.querySelector(".book-title-overlay") as HTMLElement | null;
    const overlayText = document.querySelector(".book-title-text") as HTMLElement | null;

    let activeBookIndex: number | "side" | null = 2;
    let activeBookTimeline: gsap.core.Timeline | null = null;

    const books = document.querySelectorAll(".books__item");
    const bookTimelines: gsap.core.Timeline[] = [];

    books.forEach((book, index) => {
      const hitbox = book.querySelector(".books__hitbox") as HTMLElement;
      const bookImage = book.querySelector(".books__image");
      const bookEffect = book.querySelector(".books__effect");
      const pages = book.querySelectorAll(".books__page");
      const bookLight = book.querySelector(".books__light");
      const bookTitle = hitbox?.getAttribute("data-book-title") ?? "";
      const bookIndex = hitbox?.getAttribute("data-book-index") ?? "";

      let shadowIndex = index;
      if (index >= 1) shadowIndex += 1;
      const bookShadow = document.querySelectorAll(".book-shadow__item")[shadowIndex] as HTMLElement;

      gsap.set(bookImage, {
        boxShadow: "var(--book-shadow) 10px 5px 20px, var(--book-shadow) 20px 0px 30px"
      });

      gsap.set(bookLight, { opacity: 0.1 });
      gsap.set(pages, { x: 0 });

      const hoverIn = gsap.timeline({
        paused: true,
        defaults: { duration: 0.7, ease: "power2.out" }
      });

      hoverIn.to(bookImage, {
        translateX: -10,
        scaleX: 0.96,
        boxShadow: "var(--book-shadow-strong) 20px 5px 20px, var(--book-shadow) 30px 0px 30px"
      }, 0);

      hoverIn.to(bookShadow, { width: 130, opacity: 0.8 }, 0);
      hoverIn.to(bookEffect, { marginLeft: 10 }, 0);
      hoverIn.to(bookLight, { opacity: 0.2 }, 0);

      if (pages.length >= 3) {
        hoverIn.to(pages[0], { x: "2px", ease: "power1.inOut" }, 0);
        hoverIn.to(pages[1], { x: "0px", ease: "power1.inOut" }, 0);
        hoverIn.to(pages[2], { x: "-2px", ease: "power1.inOut" }, 0);
      }

      bookTimelines[index] = hoverIn;

      hitbox?.addEventListener("mouseenter", () => {
        if (activeBookIndex !== null && activeBookIndex !== index && activeBookTimeline) {
          activeBookTimeline.reverse();
        }

        activeBookIndex = index;
        activeBookTimeline = hoverIn;
        hoverIn.play();

        if (overlayText) overlayText.textContent = bookTitle;
        gsap.to(overlay, { opacity: 1, duration: 0.3 });
        updateDescription(bookIndex);
      });
    });

    const sideBook = document.querySelector(".side-book") as HTMLElement | null;
    const sideBookShadow = document.querySelector(".book-shadow__item.side") as HTMLElement | null;
    const sideBookTitle = sideBook?.getAttribute("data-book-title") ?? "";

    const sideHoverIn = gsap.timeline({
      paused: true,
      defaults: { duration: 0.5, ease: "power2.out" }
    });

    sideHoverIn.to(sideBook, {
      y: -5,
      boxShadow: "var(--book-shadow) 8px -5px 15px, var(--book-shadow) 15px 0px 20px"
    }, 0);

    sideHoverIn.to(sideBookShadow, { width: 35, opacity: 0.8 }, 0);

    sideBook?.addEventListener("mouseenter", () => {
      if (activeBookIndex !== null && activeBookTimeline) {
        activeBookTimeline.reverse();
      }

      activeBookIndex = "side";
      activeBookTimeline = sideHoverIn;

      sideHoverIn.play();
      if (overlayText) overlayText.textContent = sideBookTitle;
      gsap.to(overlay, { opacity: 1, duration: 0.3 });
      updateDescription("side");
    });

    const defaultBook = books[2];
    const defaultBookTitle = defaultBook
      .querySelector(".books__hitbox")
      ?.getAttribute("data-book-title") ?? "";

    activeBookIndex = 2;
    activeBookTimeline = bookTimelines[2];
    bookTimelines[2].play();
    if (overlayText) overlayText.textContent = defaultBookTitle;
    gsap.to(overlay, { opacity: 1, duration: 0.3 });

    document.querySelector(".shelf-container")?.addEventListener("mouseleave", () => {
      if (activeBookIndex !== 2 && activeBookTimeline) {
        activeBookTimeline.reverse();
      }

      activeBookIndex = 2;
      activeBookTimeline = bookTimelines[2];
      bookTimelines[2].play();

      if (overlayText) overlayText.textContent = defaultBookTitle;
      gsap.to(overlay, { opacity: 1, duration: 0.3 });
      updateDescription("2");
    });

    const descriptions = document.querySelectorAll(".book-description");

    descriptions.forEach((desc) => {
      const bookIndex = desc.getAttribute("data-book-index") ?? "";
      const titleElement = desc.querySelector("h3");
      const authorElement = desc.querySelector(".author");
      const textElement = desc.querySelector(".lines-animation p");

      if (window.SplitType) {
        try {
          new window.SplitType(titleElement, { types: "lines", lineClass: "line" });
          new window.SplitType(authorElement, { types: "lines", lineClass: "line" });
          new window.SplitType(textElement, { types: "lines", lineClass: "line" });

          desc.querySelectorAll(".line").forEach((line) => {
            const content = line.innerHTML;
            line.innerHTML = `<span class="line-inner">${content}</span>`;
          });
        } catch (e) {
          console.error("Error with SplitType:", e);
        }
      }

      if (bookIndex !== "2") {
        gsap.set(desc.querySelectorAll(".line-inner"), {
          yPercent: 100,
          opacity: 0
        });
      } else {
        gsap.set(desc.querySelectorAll(".line-inner"), {
          yPercent: 0,
          opacity: 1
        });
      }
    });

    function updateDescription(bookIndex: string) {
      descriptions.forEach((desc) => {
        const descIndex = desc.getAttribute("data-book-index");
        if (descIndex !== bookIndex && desc.classList.contains("active")) {
          desc.classList.remove("active");
          gsap.to(desc.querySelectorAll(".line-inner"), {
            yPercent: 100,
            opacity: 0,
            duration: 0.4,
            ease: "power1.in",
            stagger: 0.03
          });
        }
      });

      const activeDescription = document.querySelector(
        `.book-description[data-book-index="${bookIndex}"]`
      );
      if (activeDescription) {
        activeDescription.classList.add("active");
        gsap.fromTo(
          activeDescription.querySelectorAll(".line-inner"),
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power1.out"
          }
        );
      }
    }

    updateDescription("2");
  }, []);


    return(
        <div>
            <Navbar/>
            <div id="body-about" >
                <div className="theme-toggle" id="theme-toggle"></div>

                <svg
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                }}
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                        id="dottedGrid"
                        width="30"
                        height="30"
                        patternUnits="userSpaceOnUse"
                        >
                        <circle cx="2" cy="2" r="1" fill="rgba(0,0,0,0.15)" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dottedGrid)" />
                </svg>

                <div className="book-title-overlay">
                    <div className="book-title-text">Kuripara High School</div>
                </div>

                <div className="shelf-container">
                <div className="book-shadow">
                    <div className="book-shadow__item"></div>
                    <div className="book-shadow__item side"></div>
                    <div className="book-shadow__item"></div>
                    <div className="book-shadow__item"></div>
                </div>

                <div className="shelf"></div>

                <div className="books-wrapper">
                    <div className="books__item">
                        <div className="books__container">
                            <div className="books__cover">
                                <div className="books__back-cover"></div>
                                <div className="books__inside">
                                    <div className="books__page"></div>
                                    <div className="books__page"></div>
                                    <div className="books__page"></div>
                                </div>
                                <div className="books__image">
                                    <Image src="https://covers.shakespeareandcompany.com/97818386/9781838661533.jpg" width={900} height={900} alt="Dieter Rams: The Complete Works"/>
                                    <div className="books__effect"></div>
                                    <div className="books__light"></div>
                                </div>
                                <div className="books__hitbox" data-book-index="0" data-book-title="The Complete Works"></div>
                            </div>
                        </div>
                    </div>

                    <div className="side-book" data-book-index="side" data-book-title="Design Systems">
                        <div className="side-book__title">Kuripara High School</div>
                        <div className="side-book__decoration"></div>
                        <div className="side-book__decoration"></div>
                    </div>

                    <div className="books__item">
                        <div className="books__container">
                            <div className="books__cover">
                                <div className="books__back-cover"></div>
                                <div className="books__inside">
                                    <div className="books__page"></div>
                                    <div className="books__page"></div>
                                    <div className="books__page"></div>
                                </div>
                                <div className="books__image">
                                    <Image src="https://covers.shakespeareandcompany.com/97802413/9780241371831.jpg" width={900} height={900} alt="Zen: The Art of Simple Living by Shunmyo Masuno" />
                                    <div className="books__effect"></div>
                                    <div className="books__light"></div>
                                </div>
                                <div className="books__hitbox" data-book-index="1" data-book-title="Simple Living"></div>
                            </div>
                        </div>
                    </div>

                    <div className="books__item" id="default-open-book">
                        <div className="books__container">
                            <div className="books__cover">
                                <div className="books__back-cover"></div>
                                <div className="books__inside">
                                    <div className="books__page"></div>
                                    <div className="books__page"></div>
                                    <div className="books__page"></div>
                                </div>
                                <div className="books__image">
                                    <Image src="https://covers.shakespeareandcompany.com/97837913/9783791387321.jpg" width={900} height={900} alt="Dieter Rams: Ten Principles for Good Design" />
                                    <div className="books__effect"></div>
                                    <div className="books__light"></div>
                                </div>
                                <div className="books__hitbox" data-book-index="2" data-book-title="Ten Principles for Good Design"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="book-descriptions">
                    <div className="book-description" data-book-index="0">
                        <h3>Welcome to Kuripara High School!</h3>
                        <div className="author">Ashraful Pathan</div>
                        <div className="lines-animation">
                            <p>
                                Kuripara High School is a renowned educational institution located in the village of Kuripara, in the Madanpur area of Bandar Upazila, Narayanganj District. It is a semi-government school situated near the Shitalakshya River, surrounded by nature, and is known as a model center for education.
                                The school offers education from class 6 to class 10. Experienced and dedicated teachers provide instruction here, ensuring students receive the highest quality education. The school's academic performance is outstanding — with a 100% pass rate every year and numerous students achieving GPA-5 (A+).
                                Kuripara High School is not just an educational institution; it is a noble center for spreading the light of knowledge.
                            </p>
                        </div>
                    </div>

                    <div className="book-description" data-book-index="side">
                        <h3>কুড়িপাড়া উচ্চ বিদ্যালয়ে আপনাকে স্বাগতম!</h3>
                        <div className="author">Ashraful Pathan</div>
                        <div className="lines-animation">
                            <p>
                                কুড়িপাড়া উচ্চ বিদ্যালয় নারায়ণগঞ্জ জেলার বন্দর উপজেলায়, কুড়িপাড়া গ্রামে অবস্থিত একটি খ্যাতনামা শিক্ষা প্রতিষ্ঠান। এটি একটি আধা-সরকারি বিদ্যালয় যা শীতলক্ষ্যা নদীর নিকটবর্তী অবস্থানে অবস্থিত, প্রকৃতির সান্নিধ্যে নির্মিত এই বিদ্যালয়টি শিক্ষার আদর্শ কেন্দ্র হিসেবে পরিচিত।
                                বিদ্যালয়টিতে ৬ষ্ঠ শ্রেণি থেকে ১০ম শ্রেণি পর্যন্ত পাঠদান করা হয়। এখানে অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষকবৃন্দ পাঠদান করেন, যারা শিক্ষার্থীদের সর্বোচ্চ মানের শিক্ষা প্রদান করে থাকেন। বিদ্যালয়ের ফলাফল অত্যন্ত চমৎকার — প্রতি বছর ১০০% পাশের হার এবং অসংখ্য শিক্ষার্থী জিপিএ-৫ (A+) অর্জন করে থাকে।
                                কুড়িপাড়া উচ্চ বিদ্যালয় কেবলমাত্র একটি শিক্ষাপ্রতিষ্ঠান নয়, এটি শিক্ষার আলো ছড়ানোর একটি মহৎ কেন্দ্র।
                            </p>
                        </div>
                    </div>

                    <div className="book-description" data-book-index="1">
                        <h3>কুড়িপাড়া উচ্চ বিদ্যালয়ের ইতিহাস</h3>
                        <div className="author">Ashraful Pathan</div>
                        <div className="lines-animation">
                            <p>
                                কুড়িপাড়া উচ্চ বিদ্যালয় নারায়ণগঞ্জ জেলার বন্দর উপজেলায়, কুড়িপাড়া গ্রামে অবস্থিত একটি খ্যাতনামা ও ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান। এই বিদ্যালয়টি প্রতিষ্ঠা করেন আলহাজ্ব এম. এ. রফিক চেয়ারম্যান। এটি ১৯৬৮ সালে প্রতিষ্ঠিত হয়, অর্থাৎ আজ থেকে প্রায় ৫৭ বছর পূর্বে। দীর্ঘ এই পথচলায় বিদ্যালয়টি গৌরবময় ইতিহাস ও সুনাম অর্জন করেছে।
                                বিদ্যালয়টি একটি আধা-সরকারি প্রতিষ্ঠান, যা শীতলক্ষ্যা নদীর নিকটবর্তী মনোরম পরিবেশে অবস্থিত। বর্তমানে এই বিদ্যালয়ে ৬ষ্ঠ শ্রেণি থেকে ১০ম শ্রেণি পর্যন্ত পাঠদান করা হয়।
                                কুড়িপাড়া উচ্চ বিদ্যালয় কেবল একটি শিক্ষাপ্রতিষ্ঠান নয়, এটি কুড়িপাড়া ও আশেপাশের এলাকার শিক্ষার বাতিঘর হিসেবে বিবেচিত।
                            </p>
                        </div>
                    </div>

                    <div className="book-description active" data-book-index="2">
                        <h3>History of Kuripara High School</h3>
                        <div className="author">Ashraful Pathan</div>
                        <div className="lines-animation">
                            <p>
                                Kuripara High School is a renowned and traditional educational institution located in Kuripara village, Madanpur area, Bandar Upazila of Narayanganj district. The school was founded by Alhaj M. A. Rafiq Chairman. It was established in 1968, which means it has a proud legacy spanning nearly 57 years. Over this long journey, the school has achieved a glorious history and reputation.
                                It is a semi-government institution situated in a scenic environment near the Shitalakshya River. Currently, classes are conducted from grade 6 to grade 10.
                                Kuripara High School is not just an educational institution—it is considered a beacon of education for the people of Kuripara and the surrounding areas.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}