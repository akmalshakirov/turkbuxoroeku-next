// import { IntlProvider } from "next-intl";
// import { ReactNode } from "react";

// export const dynamicParams = false;
// export function generateStaticParams() {
//     return ["uz", "en", "ru"].map((locale) => ({ locale }));
// }

// export default function LocaleLayout({
//     children,
//     params,
// }: {
//     children: ReactNode;
//     params: { locale: string };
// }) {
//     const messages = require(`../../../public/locales/${params.locale}/common.json`);

//     return (
//         <html lang={params.locale}>
//             <body>
//                 <IntlProvider locale={params.locale} messages={messages}>
//                     {children}
//                 </IntlProvider>
//             </body>
//         </html>
//     );
// }
