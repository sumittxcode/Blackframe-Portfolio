import myphoto from "./images/img.jpg.png"

import video1 from "./videos/VID_20260523_090511_073.mp4"
import video2 from "./videos/VID_20260523_090601_412.mp4"
import video3 from "./videos/VID-20260523-WA0005.mp4"
import video4 from "./videos/VID-20260523-WA0009.mp4"
import video5 from "./videos/VID_20260526_053256_840.mp4"

function App() {

  const videos = [
    {
      src: video2,
      title: "Cinematic Visuals",
      desc: "Premium cinematic sequence with dramatic visuals.",
    },
    {
      src: video3,
      title: "Visual Storytelling",
      desc: "Engaging storytelling focused cinematic edit.",
    },
    {
      src: video4,
      title: "Cinematic Reel",
      desc: "High-retention cinematic reel optimized for social media.",
    },
    {
      src: video5,
      title: "Creative Sequence",
      desc: "Modern cinematic sequence with smooth transitions.",
    },
  ]

  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}

      <nav className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-zinc-800 sticky top-0 bg-black/90 backdrop-blur-md z-50">

        <h1 className="text-2xl font-bold tracking-[8px]">
          BLACKFRAME
        </h1>

        <ul className="flex gap-8 text-sm uppercase tracking-[4px] text-zinc-400">

          <li className="hover:text-white transition duration-300">
            <a href="#work">Work</a>
          </li>

          <li className="hover:text-white transition duration-300">
            <a href="#about">About</a>
          </li>

          <li className="hover:text-white transition duration-300">
            <a href="#contact">Contact</a>
          </li>

        </ul>

      </nav>

      {/* Hero Section */}

      <section className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-center px-6 md:px-16 gap-20">

        {/* Left */}

        <div className="flex flex-col items-center">

          <img
            src={myphoto}
            alt="Profile"
            className="w-[260px] h-[260px] rounded-full object-cover grayscale hover:grayscale-0 border border-zinc-700 transition duration-500"
          />

          <p className="mt-8 uppercase tracking-[10px] text-zinc-500 text-sm">
            Sumit Sharma
          </p>

        </div>

        {/* Right */}

        <div className="max-w-2xl text-center lg:text-left">

          <p className="uppercase tracking-[10px] text-zinc-500 mb-6 text-sm">
            Video Editor
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            CINEMATIC <br />
            STORYTELLING
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl">
            I create cinematic edits, emotional storytelling,
            and premium visual experiences for creators,
            brands, and modern digital content.
          </p>

          <div className="flex gap-5 justify-center lg:justify-start">

            <a
              href="https://drive.google.com/drive/folders/1276gD9gYJUcPh2eneOaMg8tE-a5b0QLh"
              target="_blank"
              className="bg-white text-black px-8 py-3 font-semibold hover:bg-zinc-300 transition duration-300"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="border border-zinc-700 px-8 py-3 hover:border-white transition duration-300"
            >
              Contact Me
            </a>

          </div>

        </div>

      </section>

      {/* Work Section */}

      <section
        id="work"
        className="px-6 md:px-12 py-24 border-t border-zinc-800"
      >

        <div className="max-w-7xl mx-auto">

          <div className="flex items-end justify-between mb-16 flex-wrap gap-5">

            <h2 className="text-5xl font-bold">
              Selected Work
            </h2>

            <p className="text-zinc-500 uppercase tracking-[5px] text-sm">
              05 Featured Projects
            </p>

          </div>

          {/* Main Grid */}

          <div className="grid lg:grid-cols-12 gap-8">

            {/* Vertical Featured Video */}

            <div className="lg:col-span-5">

              <div className="sticky top-28">

                <video
                  src={video1}
                  controls
                  muted
                  className="w-full h-[820px] object-cover rounded-3xl border border-zinc-800 hover:border-white transition duration-300"
                />

                <div className="mt-6">

                  <h3 className="text-4xl font-bold mb-3">
                    Wedding Film
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    Emotional cinematic wedding storytelling
                    crafted with immersive visuals and premium pacing.
                  </p>

                </div>

              </div>

            </div>

            {/* Right Grid Videos */}

            <div className="lg:col-span-7">

              <div className="grid md:grid-cols-2 gap-8">

                {videos.map((video, index) => (

                  <div
                    key={index}
                    className="group"
                  >

                    <div className="overflow-hidden rounded-2xl border border-zinc-800 hover:border-white transition duration-300">

                      <video
                        src={video.src}
                        controls
                        muted
                        className="w-full h-[240px] object-cover group-hover:scale-[1.02] transition duration-500"
                      />

                    </div>

                    <div className="mt-5">

                      <h3 className="text-2xl font-semibold mb-2">
                        {video.title}
                      </h3>

                      <p className="text-zinc-400 leading-relaxed text-sm">
                        {video.desc}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* About */}

      <section
        id="about"
        className="px-6 md:px-12 py-24 border-t border-zinc-800"
      >

        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[8px] text-zinc-500 mb-8 text-sm">
            About
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10">
            Minimal visuals. <br />
            Cinematic emotions.
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed">
            I focus on cinematic editing, storytelling,
            smooth transitions, emotional pacing,
            and premium visual aesthetics for modern creators
            and brands.
          </p>

        </div>

      </section>

      {/* Contact */}

      <footer
        id="contact"
        className="border-t border-zinc-800 px-6 md:px-12 py-24"
      >

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-16">
            Let’s Work Together
          </h2>

          <div className="space-y-6 text-zinc-400 text-lg">

            <p>
              Instagram:
              <a
                href="https://instagram.com/sumittsayss"
                target="_blank"
                className="ml-3 text-white hover:text-zinc-300"
              >
                @sumittsayss
              </a>
            </p>

            <p>
              YouTube:
              <a
                href="https://youtube.com/@sumittsayss"
                target="_blank"
                className="ml-3 text-white hover:text-zinc-300"
              >
                @sumittsayss
              </a>
            </p>

            <p>
              Email:
              <span className="ml-3 text-white">
                0sharma.sumit27@gmail.com
              </span>
            </p>

            <p>
              Phone:
              <span className="ml-3 text-white">
                +91 8572956656
              </span>
            </p>

          </div>

        </div>

      </footer>

    </div>
  )
}

export default App