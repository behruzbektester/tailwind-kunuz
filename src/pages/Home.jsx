import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="flex gap-4 mt-10 mb-10">
          <div className="container">
            <h1 className="text-3xl pb-5 pt-10 text-black w-7/12 font-semibold">
              O‘zbekistonda Ikkinchi jahon urushi qatnashchilari va
              nogironlarining har biriga 10 ming dollar pul mukofoti beriladi
            </h1>
            <img className="w-9/12" src="/dollars.jpg" alt="" />
            <p className="text-2xl pb-5 pt-5">
              Mamlakatda 9-may – Xotira va qadrlash kuni umumxalq bayrami
              sifatida keng nishonlanishi munosabati bilan urush qatnashchilari
              va nogironlarini, ularga tenglashtirilgan shaxslarni hamda
              1941–1945-yillardagi urush davridagi mehnat fronti
              qatnashchilarini moddiy rag‘batlantirish maqsadida bir martalik
              pul mukofoti belgilandi.
            </p>

            <p className="text-2xl ">Unga ko‘ra:</p>

            <ul>
              <li className="list-disc text-2xl pt-5">
                Urush qatnashchilari va nogironlarining har biriga 10 ming
                dollar;
              </li>
              <li className="list-disc text-2xl">
                Urush qatnashchilariga tenglashtirilgan shaxslarning har biriga
                25 mln so‘m;
              </li>
              <li className="list-disc text-2xl">
                Urush davridagi mehnat fronti qatnashchilarining har biriga 3
                mln so‘m miqdorida.
              </li>
            </ul>

            <p className="text-2xl pt-5 pb-5">
              Ushbu pul mukofoti tantanali hamda bayramona tarzda topshiriladi.
            </p>
          </div>
          <div className=" pt-10">
            <h3 className="text-1xl">Tavsiya etamiz</h3>
            <div className="boxes-container">
              <div className="quick-news">
                <img className="w-24 " src="/Image.jpg" alt="" />
                <h4 className="text-1xl font-medium w-30">
                  Darz ketgan G'arb kollektivi. Tramp dunyoni qanday
                  o‘zgartirmoqchi?
                </h4>
              </div>
              <div className="quick-news">
                <img className="w-24 " src="/Image.jpg" alt="" />
                <h4 className="text-1xl font-medium w-30">
                  Jurnalist Ruxsora G‘afurova sudga chaqirildi. O‘zgalar pulini
                  o‘zlashtirishda gumon qilinayotgan
                </h4>
              </div>
              <div className="quick-news">
                <img className="w-24 " src="/Image.jpg" alt="" />
                <h4 className="text-1xl font-medium w-30">
                  O‘lim jazosiga hukm qilingan SSSR futbol yulduzi. U qanday
                  qilib sportchidan haqiqiy jallodga
                </h4>
              </div>
              <div className="quick-news">
                <img className="w-24 " src="/Image.jpg" alt="" />
                <h4 className="text-1xl font-medium w-30">
                  O‘zbekiston Abu-Dabida biryo‘la NATO standartidagi uchta
                  harbiy texnikasini namoyish qildi. Ular
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-wrap gap-2 container pb-5">
            <div className="box">
              <img className="w-24" src="/Image.jpg" alt="" />
              <h3 className="text-base w-96 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                labore! Voluptates assumenda quod numquam dolores?
              </h3>
            </div>
            <div className="box">
              <img className="w-24" src="/Image.jpg" alt="" />
              <h3 className="text-base w-96 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                labore! Voluptates assumenda quod numquam dolores?
              </h3>
            </div>
            <div className="box">
              <img className="w-24" src="/Image.jpg" alt="" />
              <h3 className="text-base w-96 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                labore! Voluptates assumenda quod numquam dolores?
              </h3>
            </div>
            <div className="box">
              <img className="w-24" src="/Image.jpg" alt="" />
              <h3 className="text-base w-96 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                labore! Voluptates assumenda quod numquam dolores?
              </h3>
            </div>
            <div className="box">
              <img className="w-24" src="/Image.jpg" alt="" />
              <h3 className="text-base w-96 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                labore! Voluptates assumenda quod numquam dolores?
              </h3>
            </div>
            <div className="box">
              <img className="w-24" src="/Image.jpg" alt="" />
              <h3 className="text-base w-96 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                labore! Voluptates assumenda quod numquam dolores?
              </h3>
            </div>
            <div className="box">
              <img className="w-24" src="/Image.jpg" alt="" />
              <h3 className="text-base w-96 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                labore! Voluptates assumenda quod numquam dolores?
              </h3>
            </div>
            <div className="box">
              <img className="w-24" src="/Image.jpg" alt="" />
              <h3 className="text-base w-96 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                labore! Voluptates assumenda quod numquam dolores?
              </h3>
            </div>
            <div className="box">
              <img className="w-24" src="/Image.jpg" alt="" />
              <h3 className="text-base w-96 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                labore! Voluptates assumenda quod numquam dolores?
              </h3>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
