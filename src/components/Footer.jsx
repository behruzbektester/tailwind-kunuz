export default function Footer() {
  return (
    <>
      <footer className="footer w-full bg-black flex flex-col justify-start items-start pt-5 pb-5">
        <div className="container">
          <div className="space-x-2 ">
            <img
              className="bg-black inline-block"
              src="/logo-white.svg"
              alt=""
            />
          </div>

          <p className="text-white footer-text text-lg ">
            “Daryo” internet-nashrining O‘zbekiston matbuot va axborot agentligi
            (O‘zMAA, hozirgi O‘zbekiston Respublikasi Prezidenti
            Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar
            agentligi) tomonidan 13.03.2015 yil sanasida 0944-sonli guvohnoma
            bilan ommaviy axborot vositasi sifatida ro‘yxatga olingan. Matnli
            materiallarni to‘liq ko‘chirish yoki qisman iqtibos keltirishga,
            shuningdek, fotografik, grafik, audio va/yoki videomateriallaridan
            foydalanishga “daryo.uz” saytiga giperhavola mavjud bo‘lgan va/yoki
            “Daryo” internet-nashrining muallifligini ko‘rsatuvchi yozuv ilova
            qilingan taqdirda yo‘l qo‘yiladi. Chop etiladigan ba’zi ma’lumotlar
            18 yoshga to‘lmagan foydalanuvchilarga mo‘ljallanmagan bo‘lishi
            mumkin. Info@daryo.uz
          </p>
        </div>
      </footer>
    </>
  );
}
