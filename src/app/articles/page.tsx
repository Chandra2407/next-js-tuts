import Link from "next/link";

export default function Article() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <h1 className="text-2xl font-bold">Articles</h1>
            <p className="mt-4 text-gray-600">Welcome to the articles page!</p>
            <Link href="/articles/breaking-news?lang=en">Read in English</Link>
            <Link href="/articles/breaking-news?lang=es">Leer en Español</Link>
        </div>
    )
}