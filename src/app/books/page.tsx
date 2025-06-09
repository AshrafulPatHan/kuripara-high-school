"use client"

import { useEffect } from "react";
import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import Image from "next/image";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import "./app.css";

export default function LinkPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(CustomEase);
      CustomEase.create("bookEase", "0.25, 1, 0.5, 1");

      const books = document.querySelectorAll(".books__item");
      books.forEach((book) => {
        const hitbox = book.querySelector(".books__hitbox") as HTMLElement;
        const bookImage = book.querySelector(".books__image") as HTMLElement;
        const bookEffect = book.querySelector(".books__effect") as HTMLElement;
        const pages = book.querySelectorAll(".books__page") as NodeListOf<HTMLElement>;
        const bookLight = book.querySelector(".books__light") as HTMLElement;

        gsap.set(bookImage, {
          boxShadow:
            "0 10px 20px rgba(0,0,0,0.15), 0 30px 45px rgba(0,0,0,0.12), 0 60px 80px rgba(0,0,0,0.1)"
        });

        gsap.set(bookLight, {
          opacity: 0.1,
          rotateY: 0
        });

        gsap.set(pages, {
          x: 0
        });

        const hoverIn = gsap.timeline({ paused: true });

        hoverIn.to(
          bookImage,
          {
            duration: 0.7,
            rotateY: -12,
            translateX: -6,
            scaleX: 0.96,
            boxShadow:
              "10px 10px 20px rgba(0,0,0,0.25), 20px 20px 40px rgba(0,0,0,0.2), 40px 40px 60px rgba(0,0,0,0.15)",
            ease: "bookEase"
          },
          0
        );

        hoverIn.to(
          bookEffect,
          {
            duration: 0.7,
            marginLeft: 10,
            ease: "bookEase"
          },
          0
        );

        hoverIn.to(
          bookLight,
          {
            duration: 0.7,
            opacity: 0.2,
            rotateY: -12,
            ease: "bookEase"
          },
          0
        );

        if (pages.length) {
          hoverIn.to(
            pages[0],
            {
              x: "4px",
              duration: 0.7,
              ease: "power1.inOut"
            },
            0
          );

          hoverIn.to(
            pages[1],
            {
              x: "2px",
              duration: 0.7,
              ease: "power1.inOut"
            },
            0
          );

          hoverIn.to(
            pages[2],
            {
              x: "0px",
              duration: 0.7,
              ease: "power1.inOut"
            },
            0
          );
        }

        hitbox.addEventListener("mouseenter", () => hoverIn.play());
        hitbox.addEventListener("mouseleave", () => hoverIn.reverse());
      });
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="body-books">
        <div className="container">
            <div className="top-left">
                <h2><a href="https://nctb.portal.gov.bd/site/page/d01e72b0-8ecd-4c81-bffd-c9e117b7fdad/-" target="_blank" rel="noopener noreferrer">Books For High school </a> </h2>
            </div>
            <div className="top-right">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
            </div>

            <div className="main-content">
            <div className="left-text">
                <h2>Find Your Book You Need</h2>
                <p>
                    This section is for you book, we work this page your all book you need in school
                </p>
            </div>

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
                        <Image
                        src="https://covers.shakespeareandcompany.com/97818388/9781838858636.jpg"
                        alt="Creative Act by Rick Rubin"
                        width={200}
                        height={300}
                        />
                        <div className="books__effect"></div>
                        <div className="books__light"></div>
                    </div>
                    <div className="books__hitbox" data-book-index="0"></div>
                    </div>
                </div>
                <div className="books__title">
                    Creative Act
                    <br />
                    Rick Rubin
                </div>
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
                        <Image
                        src="https://covers.shakespeareandcompany.com/97988885/9798888500002.jpg"
                        alt="Psychedelics and Mental Health by Irene de Caso"
                        width={200}
                        height={300}
                        />
                        <div className="books__effect"></div>
                        <div className="books__light"></div>
                    </div>
                    <div className="books__hitbox" data-book-index="1"></div>
                    </div>
                </div>
                <div className="books__title">
                    Psychedelics and Mental Health
                    <br />
                    Irene de Caso
                </div>
                </div>
            </div>

            <div className="right-text">
                <h2>The Impotent book</h2>
                <p>
                    Find the important book you need for studying on school or you loss your book don't wary find from the website
                </p>
            </div>
            </div>

            <div className="bottom-center">
            <a href="https://nctb.gov.bd/site/page/079828a6-18e6-44c1-9a2d-59f8d223199c" 
            target="_blank" rel="noopener noreferrer"
            className=" underline font-bold text-md">Books for class 10</a>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
