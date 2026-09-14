import Navbar2 from "@/components/Navbar2";

export default function OurStory() {
  return (
    <div className="bg-gray-50 text-gray-900 font-medium">
      <Navbar2 />
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
       
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-(--brand-navy)">
            AHA Awards
          </p>
          <h1 className="text-2xl font-semibold">Our Story</h1>
          <p className="mt-4 text-xl font-medium italic text-(--brand-navy) md:text-2xl">
            A Legacy of Learning, Service and Generosity
          </p>
          <p className="mt-2 text-sm text-slate-500 md:text-base">
            The family story behind the awards
          </p>
        {/* </header> */}

        <div className="mt-10 space-y-8">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Syed Abdul Jaleel: Learning, Discipline and Generosity
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
                My paternal grandfather, Syed Abdul Jaleel, was born in Amroha and
                retired in the late 1940s from his position as a Professor of
                Physics at Aligarh Muslim University (AMU). He travelled around India
                to help raise funds as Aligarh Muslim College developed into AMU. He
                also served as Registrar and was particularly remembered for the strict
                discipline with which he administered his responsibilities as Proctor.
              </p>
              <p>
                He was equally well known for his generosity. Part of his home was
                always reserved for guests, friends and students arriving from
                different parts of the Muslim world as AMU emerged as an important
                center of higher learning. At times, students stayed with him for
                years when hostel accommodation was unavailable. He helped students
                who struggled to pay their fees and, at the request of friends whose
                children were studying in Aligarh, regularly sent their academic
                results by telegram—often at his own expense, much to Dadi Amman's
                displeasure.
              </p>
              <p>
                His affection for AMU was perhaps best reflected in his decision to
                donate his house to the University around 1956, before migrating to
                Pakistan, where his children—including my father, uncles and aunt—had
                already settled.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Syed Abdul Hameed: Service and a New Life in Karachi
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
                Perhaps that instinct for helping the deserving and needy ran
                strongly in the family, because my father and uncles inherited much of
                the same spirit. My father, Syed Abdul Hameed, began his career in
                what was then East Pakistan, working for Burma Shell in Chittagong and
                Khulna for a few years before moving to Karachi. After a few short
                professional ventures, including with the newly established State Bank
                of Pakistan and other organizations, he joined the University of
                Karachi, which was then located in the old city.
              </p>
              <p>
                When my parents moved to the present-day university campus, only forty
                houses had been built: twenty double-storey houses in Category B and
                twenty in Category C. My father retired in 1987 after serving the
                University in a variety of positions.
              </p>
            </div>
          </section>


          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Azra: Compassion as a Way of Life
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
                My mother, Azra, daughter of Kaniz Fatima and Sayyid Muhammad Hamid
                Ali, was the niece of Mr. Mukhtar Hamid Ali, who was a Professor of
                English at AMU. Both her paternal and maternal sides, she was related
                to Sir Syed Ahmad Khan.
              </p>
              <p>
                Her loving nature and care for everyone who crossed her path were
                nothing short of legendary—not simply because she was my mother, but
                because that is how she is remembered by those who knew her:
                long-serving household staff, relatives, in-laws, family friends and,
                of course, her children.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              The Values Behind These Awards
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
                We consider ourselves deeply fortunate to have parents who taught
                us values and ethics not merely through words, but through example: the
                courage to stand for what is right and speak against what is wrong; to
                remain just; not to discriminate; and, above all, to deserve first,
                then desire.
              </p>
              <p className="rounded-xl border-l-4 border-(--brand-navy) bg-slate-50 px-5 py-4 text-center text-xl font-medium italic text-(--brand-navy) md:text-2xl">
                “To deserve first, then desire.”
              </p>
              <p>
                These awards are established in respect for, and in memory of, our
                parents’ values and lifelong examples. Through this modest token of
                appreciation for young and emerging scholars, we hope to encourage
                excellence and, in some small measure, counter the sense of
                despondency that can sometimes be felt in academia.
              </p>
              <p>
                On behalf of my family, I extend my best wishes to all hardworking
                scholars. Thank you.
              </p>
            </div>
          </section>
        </div>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Special thanks for their valuable support.
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Mr. Syed A. A. Akif",
              "Dr. Rozina Karmaliani",
              "Dr. Muhammad Zaheer",
              "Dr. Ali",
              "Dr. Bilqees Ajmal",
              "Dr. Nasira Khatoon",
              "Dr. Huma Baqai",
              "Dr. Shahid Mehmood",
              "Dr. Humayoun A. Azeemi",
              "Dr. Muhammad Saeed",
              "Dr. Aslam Shah",
              "Dr. Ramzan Bamri",
            ].map((name) => (
              <div
                key={name}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
              >
                <p className="font-medium text-slate-800">{name}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 rounded-xl border border-(--brand-navy)/20 bg-white px-5 py-6 text-center text-lg italic text-(--brand-navy) md:text-xl">
            “Their encouragement, guidance, and unwavering support have been
            instrumental in transforming this vision into reality.”
          </p>
        </section>
      </div>
    </div>
  );
}