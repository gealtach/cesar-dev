'use client';

import Navigation from "./Navigation";
import { Roboto_Mono, Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({
  subsets: ['cyrillic'],
  variable: '--font-sourceCodePro'
});

const roboto = Roboto_Mono({
  subsets: ['cyrillic'],
  variable: '--font-roboto'
});

const page = () => {
  return (
    <div className={`${roboto.variable} ${sourceCodePro.variable}`}>
      <Navigation />
    </div>
  )
};

export default page;
