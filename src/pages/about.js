import React from "react";

const url =
  "https://firebasestorage.googleapis.com/v0/b/aolausoro-tech.appspot.com/o/shiftKeyOnTypewriter.jpg?alt=media&token=f6b8e05b-9e54-475c-be9d-dfb4b2d6324d";

const About = () => {
  return (
    <div className="w-full mx-auto flex-grow bg-gradient-to-br via-red-500 to-pink-500">
      <div className="container mx-auto -mt-1 shadow-md rounded">
        <div className="flex flex-col">
          <div className="object-cover w-full">
            <img
              src={url}
              alt="Shift key on a Typewriter"
              className="object-cover  w-full sm:h-64"
            />
          </div>
          <div className="px-2 my-4 text-block tracking-wider leading-normal font-light sm:subpixel-antialiased md:antialiased text-justify">
            <h1 className="font-semibold tracking-wider text-2xl mb-2">
              About Me
            </h1>
            <p className="mb-2">
              I am a Full Stack Software developer. I took an interest in
              programming after signing up for a BSC in computing and IT. The
              first module required I had some skills in python programming. My
              interest was piqued so I decided to take a quick course in Python.
              I really enjoyed the course, so I decided to get stuck in and
              teach myself to code alongside my degree. I have cultivated a
              desire to build things, know how it works with the added bonus of
              starting a fulfilling and challenging career.
            </p>
            <p className="mb-2">
              As a coder, no two days are the same as there is always something
              new to learn. I have learnt the basic of HTML, CSS, JS, ReactJS,
              NodeJS, NextJS Java, python and I am currently learning at Java,
              Spring as well as Spring boot which I am really enjoying.
            </p>
            <p className="mb-2">
              I love a good laugh. I feel that laughing makes everyone around me
              happy and more at ease. I also enjoy a good intellectual
              conversation. In my free time, you will find me on the computer
              learning new technologies, watching a great movie or anime with my
              sons, skateboarding, going for walks and most importantly family
              and coffee.
            </p>
            <p className="mb-2">
              I am looking for a role as a Full Stack developer at a company
              that provides an opportunity for growth through ongoing training
              support and career advancements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
