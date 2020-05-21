import React from "react";
import shiftKeyOnTypewriter from "../assets/images/shiftKeyOnTypewriter.jpg";

const About = () => {
  return (
    <div className="w-full mx-auto flex-grow">
      <div className="container mx-auto mt-0 bg-white shadow-md rounded">
        <div className="flex flex-col px-1">
          <div className="object-cover w-full">
            <img
              src={shiftKeyOnTypewriter}
              alt="Shift key on a Typewriter"
              className="object-cover  w-full sm:h-64"
            />
          </div>
          <h1 className="px-4 sm:px-0 font-semibold tracking-wider text-2xl">
            About Me
          </h1>
          <div className="px-4 sm:px-0 my-4 text-block tracking-wider leading-normal font-light sm:subpixel-antialiased md:antialiased text-justify">
            <p>
              I am an Aspiring Full Stack Software developer. I took an interest
              in programming after signing up for a degree course in computing
              and IT. The first module required some knowledge of python. I felt
              that i was lacking so, I decided to take the Python for Everybody
              course by Dr Chuck. You could say I caught the bug after taking
              the course. I decided to get stuck in and teach myself to code
              alongside the degree because I am fascinated by it. That need to
              build things, know how it works and the added bonus of a
              fulfilling and challenging career, where no two days are the same
              and there is always something new to learn. I have learnt the
              basic of HTML, CSS, JS, ReactJs, nodejs, Java, python and
              currently looking at Spring and Spring bottom which I am really
              enjoying.
            </p>
            <br />
            <p>
              I love a good laugh. I feel that laughing makes everyone around me
              happy and more at ease. I also enjoy a good discussion. In my free
              time I am on the computer learning new technologies, this is a new
              area for me and I am really enjoying the challenge. I love
              watching movies and there I say it, watching anime with my son,
              skateboarding, going for walks and most importantly family and
              coffee.
            </p>
            <br />
            <p>
              I am looking for a role as a Junior Full Stack developer at a
              company that invest in training for their developers and also,
              provide an opportunity for growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
