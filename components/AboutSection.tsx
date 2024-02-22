import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "AI & ML" },
  { skill: "Data Science" },
  { skill: "Tensorflow" },
  { skill: "Keras" },
  { skill: "OpenCV-Python" },
  { skill: "Scikit-Learn" },
  { skill: "Yolo Vision AI" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Kevin and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> student
              currently pursuing my B Tech in Electronics and Computer Engineering
              at Karunya Institute of Technology and Sciences, Coimbatore.
            </p>
            <br />
            <p>
              I have a keen interest in Artificial Intelligence and Machine Learning, 
              and I&#39;m passionate about exploring the endless possibilities in this field. 
              As a third-year student, I&#39;ve been actively involved in various projects and 
              coursework related to AI and ML, constantly seeking to deepen my understanding 
              and expand my skills.
            </p>
            <br />
            <p>
              Outside of academics, I have a diverse set of hobbies that keep me engaged and balanced. 
              I enjoy reading books, particularly novels, as they offer a unique escape into different 
              worlds and perspectives. Additionally, I find solace in playing sports to stay active, and 
              expressing myself through music by playing the piano. These activities not only provide me 
              with relaxation but also contribute to my personal growth and creativity.
            </p>
            <br />
            <p>
              I firmly believe in the philosophy of{" "}
              <span className="font-bold text-teal-500">
                continuous learning and growth.
              </span>{" "}
                With each new experience and challenge, I strive to push my limits and discover my full potential 
                in the world of technology. I am excited about the journey ahead and am always open to new opportunities 
                that allow me to contribute and innovate in meaningful ways. 😊
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
