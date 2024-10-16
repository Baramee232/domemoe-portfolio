import "./profile-section.css";
export default function ProfileSection() {
  return (
    <>
      <div
        id="profiles"
        className="text-5xl font-semibold flex w-full justify-start pl-20 bg-red-500 text-white h-[10vh] items-center sticky left-0 top-0 z-50 mt-20"
      >
        Profile
      </div>
      <div className="h-[80vh] w-full profile-main left-0 flex justify-center relative">
        <div className="absolute title-prof bg-gradient-to-r from-pink-600 via-orange-500 to-red-400 inline-block text-transparent bg-clip-text">
          Domemie
        </div>
        <div className="h-auto w-[650px]">
          <img className="dome-prof" src="./public/images/idomeStanding.png" />
        </div>
        <div className="details-card bg-white p-5 absolute top-[7%] left-[10%]">
          <div className="text-3xl text-black">Personal Information</div>
          <div className="text-xl">• Baramee Saiphan</div>
          <div className="text-xl">
            • 288, moo 7,Ban Klongsai, Tambon Rung, Amphoe Kantharalak, Si sa
            ket, 33110
          </div>
          <div className="text-xl">• 0821251323</div>
          <div className="text-xl">• Baramee_saiphan@cmu.ac.th</div>{" "}
          <div className="absolute top-0 text-black text-5xl top-[-10%] left-[45%]">
            📌
          </div>
        </div>
        <div className="details-card bg-white p-5 absolute top-[62%] left-[10%]">
          <div className="text-3xl text-black">Work Experience</div>
          <div className="text-xl">
            • Student Assistance of Chiang Mai University Student Development
            Division
          </div>
          <div className="text-xl">• Auditor of training documents</div>
          <div className="text-3xl text-black">Skills</div>
          <div className="text-xl">• Ms Excel, Ms Word</div>{" "}
          <div className="text-xl">• problem-solving skills</div>{" "}
          <div className="text-xl">• Creative Skills</div>{" "}
          <div className="absolute top-0 text-black text-5xl top-[-10%] left-[45%]">
            📌
          </div>
        </div>
        <div className="details-card bg-white p-5 absolute top-[7%] left-[70%]">
          <div className="text-3xl text-black">Education</div>
          <div className="text-xl">
            • secondary school from Kantharalakwittaya School{" "}
          </div>
          <div className="text-xl">
            • bachelor's of Digital Game Degree Chiang Mai University
          </div>
          <div className="text-xl">
            • Studying at College of Arts, Media and Technology, Digitalgame
          </div>
          <div className="text-xl">• GPAX 2.88</div>{" "}
          <div className="absolute top-0 text-black text-5xl top-[-10%] left-[45%]">
            📌
          </div>
        </div>
        <div className="details-card bg-white p-5 absolute top-[62%] left-[70%]">
          <div className="text-3xl text-black">Awards and Honors</div>
          <div className="text-xl">
            • Representing university athletes in the University Games
          </div>
          <div className="text-xl">
            • Representing university athletes in the Thailand Pétanque
            Championships
          </div>
          <div className="text-xl">
            • 5th Prize in Men's Shooting at the Thailand Pétanque Championship
          </div>{" "}
          <div className="absolute top-0 text-black text-5xl top-[-10%] left-[45%]">
            📌
          </div>
        </div>
      </div>
    </>
  );
}
