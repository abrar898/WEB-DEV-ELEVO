// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
// import { cn } from "../lib/utils";
// import { motion } from "framer-motion";


// export default function Navbar({ className }) {
//   const [active, setActive] = useState(null);

//   return (
//     <motion.div
//       className={cn(
//         "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
//         className
//       )}
//       initial={{ opacity: 0, y: -50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       viewport={{ once: false, amount: 0.2 }} // replay every time it enters view
//     >
//       <Menu setActive={setActive}>
//         {/* Services Menu */}
//         <MenuItem setActive={setActive} active={active} item="Services">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/web-dev">Web Development</HoveredLink>
//             <HoveredLink href="/interface-design">Interface Design</HoveredLink>
//             <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
//             <HoveredLink href="/branding">Branding</HoveredLink>
//           </div>
//         </MenuItem>

//         {/* Products Menu */}
//         <MenuItem setActive={setActive} active={active} item="Products">
//           <div className="text-sm grid grid-cols-2 gap-10 p-4">
//             <ProductItem
//               title="Algochurn"
//               href="https://algochurn.com"
//               src="https://assets.aceternity.com/demos/algochurn.webp"
//               description="Prepare for tech interviews like never before."
//             />
//             <ProductItem
//               title="Tailwind Master Kit"
//               href="https://tailwindmasterkit.com"
//               src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
//               description="Production ready Tailwind CSS components for your next project"
//             />
//             <ProductItem
//               title="Moonbeam"
//               href="https://gomoonbeam.com"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
//               description="Never write from scratch again. Go from idea to blog in minutes."
//             />
//             <ProductItem
//               title="Rogue"
//               href="https://userogue.com"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
//               description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
//             />
//           </div>
//         </MenuItem>

//         {/* Pricing Menu */}
//         <MenuItem setActive={setActive} active={active} item="Pricing">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Hobby</HoveredLink>
//             <HoveredLink href="/individual">Individual</HoveredLink>
//             <HoveredLink href="/team">Team</HoveredLink>
//             <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//           </div>
//         </MenuItem>
//       </Menu>
//     </motion.div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

export default function Navbar({ className }) {
  return (
    <motion.nav
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 flex justify-between items-center px-8 py-4 bg-neutral  shadow-md rounded-full",
        className
      )}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <Link to="/" className="text-lg font-medium hover:text-blue-500">
        Home
      </Link>
      <Link to="/pricing" className="text-lg font-medium hover:text-blue-500">
        Pricing
      </Link>
      <Link to="/services" className="text-lg font-medium hover:text-blue-500">
        Services
      </Link>
      <Link to="/about" className="text-lg font-medium hover:text-blue-500">
        About
      </Link>
    </motion.nav>
  );
}
