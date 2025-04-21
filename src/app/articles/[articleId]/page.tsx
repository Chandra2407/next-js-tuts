// import Link from "next/link";

// export default async function NewsArticle({ params, searchParams }:
//     { 
//         params: Promise<{ articleId: string }>, 
//         searchParams: Promise<{ lang?: "en" | "es" }> 
//     }

// ) {
//     const { articleId } = await params;
//     const { lang } = await searchParams;
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
//             <h1 className="text-2xl font-bold">News Article {articleId}</h1>
//             <p className="mt-4 text-gray-600">Reading article in {lang === "en" ? "English" : "Español"}</p>
//             <Link href="/articles/breaking-news?lang=en">Read in English</Link>
//             <Link href="/articles/breaking-news?lang=es">Leer en Español</Link>
//         </div>
//     )
// }
"use client";

import Link from "next/link";
import { use } from "react";

export default function NewsArticle({ params, searchParams }:
    {
        params: Promise<{ articleId: string }>,
        searchParams: Promise<{ lang?: "en" | "es" }>
    }

) {
    const { articleId } =  use(params);
    const { lang } =  use(searchParams);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <h1 className="text-2xl font-bold">News Article {articleId}</h1>
            <p className="mt-4 text-gray-600">Reading article in {lang === "en" ? "English" : "Español"}</p>    
            <Link href="/articles/breaking-news?lang=en">Read in English</Link>
            <Link href="/articles/breaking-news?lang=es">Leer en Español</Link>
        </div>
    )
}