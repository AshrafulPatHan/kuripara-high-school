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
            <div className="">
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
                    <div className="book-title-text">Ten Principles for Good Design</div>
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
                        <div className="side-book__title">Design Systems</div>
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
                        <h3>Dieter Rams: The Complete Works</h3>
                        <div className="author">by Klaus Klemp</div>
                        <div className="lines-animation">
                            <p>From legendary music producer Rick Rubin comes a profound guide to the powerful source of creative inspiration. The Creative Act is a beautiful and generous course of study that illuminates the path of the artist as a road we all can follow.</p>
                        </div>
                    </div>

                    <div className="book-description" data-book-index="side">
                        <h3>Design Systems</h3>
                        <div className="author">A Practical Guide</div>
                        <div className="lines-animation">
                            <p>A comprehensive guide to creating, documenting, and maintaining design systems. This book covers the essential elements of design systems, from typography and color to components and patterns, helping teams build cohesive and scalable product experiences.</p>
                        </div>
                    </div>

                    <div className="book-description" data-book-index="1">
                        <h3>Zen: The Art of Simple Living</h3>
                        <div className="author">by Shunmyo Masuno</div>
                        <div className="lines-animation">
                            <p>Drawing on centuries of wisdom, renowned Zen Buddhist priest Shunmyo Masuno applies the essence of Zen to modern life. Through simple, practical lessons, discover how a few minutes a day can transform your life and bring happiness and fulfillment.</p>
                        </div>
                    </div>

                    <div className="book-description active" data-book-index="2">
                        <h3>Dieter Rams: Ten Principles for Good Design</h3>
                        <div className="author">by Dieter Rams</div>
                        <div className="lines-animation">
                            <p>The definitive resource for designers at all levels. This comprehensive guide covers Dieter Rams' famous ten principles for good design, providing essential knowledge for creating functional, aesthetic, and long-lasting design solutions.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}