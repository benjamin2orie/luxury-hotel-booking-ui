// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function LanguageDropdown() {
//   const [open, setOpen] = useState(false);
//   const router = useRouter();

//   const changeLanguage = (lang: string) => {
//     setOpen(false);
//     router.push(router.pathname, router.asPath, { locale: lang });
//   };

//   return (
//     <div className="relative inline-block text-left">
//       {/* Trigger */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex items-center gap-1 text-sm font-medium hover:text-gray-700"
//       >
//         Language
//         <svg
//           className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>

//       {/* Dropdown Menu */}
//       {open && (
//         <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-50">
//           <ul className="py-1 text-sm">
//             <li
//               onClick={() => changeLanguage('en')}
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//             >
//               English
//             </li>
//             <li
//               onClick={() => changeLanguage('fr')}
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//             >
//               Français
//             </li>
//             <li
//               onClick={() => changeLanguage('pt')}
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//             >
//               Português
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import Image from "next/image";

// export default function LanguageDropdown() {
//   const [open, setOpen] = useState(false);

//   const changeLanguage = (lang: string) => {
//     i18n.changeLanguage(lang);
//     localStorage.setItem("preferredLanguage", lang);
//     setOpen(false);
//   };

//   return (
//     <div className="relative inline-block text-left text-[#CEB780]" >
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex items-center gap-1 text-sm font-medium"
//       >
//         <Image src={"/globe1.svg"} alt="globe" width={20} height={20} />
//         Language ▼
//       </button>

//       {open && (
//         <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-50">
//           <ul className="py-1 text-sm">
//             <li
//               onClick={() => changeLanguage("en")}
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//             >
//               English
//             </li>
//             <li
//               onClick={() => changeLanguage("fr")}
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//             >
//               Français
//             </li>
//             <li
//               onClick={() => changeLanguage("pt")}
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//             >
//               Português
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

'use client';
import i18n from '../libs/i18n';
import Image from 'next/image';

export default function LanguageDropdown() {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center">
      <Image
        src={'/globe1.svg'}
        alt="globe"
        width={20}
        height={20}
        className="lg:w-[20px] lg:h-[20px] w-4 h-4"
      />
      <select
        defaultValue={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="border-none outline-none px-2 py-1 text-[#CEB780]"
      >
        <option value="en" className="text-black">
          English
        </option>
        <option value="fr" className="text-black">
          Français
        </option>
        <option value="pt" className="text-black">
          Português
        </option>
      </select>
    </div>
  );
}

// "use client";

// export default function LanguageDropdown() {
//   const changeLanguage = (lang: string) => {
//     document.cookie = `googtrans=/en/${lang};path=/;`;
//     window.location.reload();
//   };

//   return (
//     <select onChange={(e) => changeLanguage(e.target.value)} defaultValue="en">
//       <option value="en">English</option>
//       <option value="fr">Français</option>
//       <option value="pt">Português</option>
//     </select>
//   );
// }
