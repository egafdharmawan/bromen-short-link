import React from 'react';

const CLOUDINARY_BASE = "https://res.cloudinary.com/daxjf0uyj/image/upload/v1786996904/";

export default function Home() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/bromen.official",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@bromen_id",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .56.04.82.1v-3.6a6.37 6.37 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15.5a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-2.91-1.36z"/>
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/bromen.indonesia",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@BromenMedia",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
  ];

  const mainButtons = [
    { label: "Official Webstore", url: "https://bromen.id/" },
    { label: "Official Store Tiktok", url: "https://www.tiktok.com/@bromen_id" },
    { label: "Official Store Shopee", url: "https://shopee.co.id/shop/6490430?mmp_pid=an_11344460795&uls_trackid=55a8mm0g00pr&utm_campaign=id_jO9wIgDJo2&utm_content=----&utm_medium=affiliates&utm_source=an_11344460795&utm_term=eowsqym8omp4" },
    { label: "Official Store Tokopedia", url: "https://www.tokopedia.com/bromenofficial" },
    { label: "Official Store Lazada", url: "https://www.lazada.co.id/tag/bromen-official-store/" },
    { label: "Official Store Blibli", url: "https://www.blibli.com/merchant/bromen-id-flagship-store/BRP-70118?pickupPointCode=PP-3486717" },
    { label: "Bergabung bersama jutaan brodi tampil beda!", url: "https://www.whatsapp.com/channel/0029VbAQTEGHrDZh6jwzrO00" },
    { label: "PEMUDA JOSJIS", url: "https://drive.google.com/drive/folders/1cykBstY1_WF_6uqcMe-H3g3bkWQpRbD4" },
    { label: "Extra Voucher up to 50%", url: "https://wa.me/6285134542292" },
  ];

  return (
    <div 
      className="bg-[#001D4A] text-white min-h-screen flex flex-col items-center px-6 py-16 bg-fixed bg-bottom bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('${CLOUDINARY_BASE}/BG_Mountain_ty1e5r.png')` }}
    >
      <div className="mb-12">
        <img 
          src={`${CLOUDINARY_BASE}/Logo_02_iwhuod.png`} 
          alt="Bromen Logo" 
          className="w-72 object-contain filter drop-shadow-lg"
        />
      </div>

      <div className="max-w-md text-center space-y-3 mb-10">
        <p className="italic font-light text-lg lg:text-xl leading-relaxed">
          Buat lo yang berani tampil beda. Jadilah nyata, Jadilah yang terbaik, tunjukkan siapa lo sebenarnya.
        </p>
        <p className="font-bold text-sm tracking-[0.2em]">#JadilahVersiTerbaikmu!</p>
      </div>

      <div className="flex gap-5 mb-12">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-[#001D4A] transition-all duration-300"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 opacity-70">
        Mulai Perjalanan Lo!
      </p>

      <div className="w-full max-w-[420px] space-y-4 pb-24">
        {mainButtons.map((btn, index) => (
          <a
            key={index}
            href={btn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-white text-[#001D4A] py-4 px-4 rounded-md font-bold text-center shadow-lg hover:bg-gray-100 transform active:scale-95 transition-all"
          >
            {btn.label}
          </a>
        ))}
      </div>

      <div className="w-full mt-auto pb-6 border-t border-white/10 px-6 pt-6">
        <div className="flex flex-row justify-between items-center max-w-2xl mx-auto w-full text-xs md:text-sm tracking-widest uppercase opacity-70">
          <div>BROMEN</div>
          <div>#JadilahVersiTerbaikmu!</div>
        </div>
      </div>
    </div>
  );
}