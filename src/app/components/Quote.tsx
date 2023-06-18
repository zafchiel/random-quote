"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Balancer } from "react-wrap-balancer"

export default function Quote(randomQuote: QuoteType) {
  const router = useRouter()
  const [fade, setFade] = useState(false)
  return (
    <section className="flex h-screen w-[90%] flex-col items-center justify-center gap-3 lg:w-3/4">
      <div
        className={`flex grow flex-col items-center justify-center transition-opacity duration-1000 ease-in-out
          ${fade ? "opacity-0" : " opacity-100"}`}
      >
        <div className="flex gap-2">
          {randomQuote.tags.map((tag) => (
            <p key={tag}>{tag}, </p>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <p>By: </p>
          <h1 className="text-lg font-bold">{randomQuote.author}</h1>
        </div>

        <div className="mt-3">
          <p className="text-3xl font-bold italic">
            <Balancer>
              &ldquo;{randomQuote.content.replace(".", "")}&bdquo;
            </Balancer>
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          setFade(true)
          setTimeout(() => router.refresh(), 600)
          setTimeout(() => setFade(false), 1000)
        }}
        className="mb-5 w-44 rounded-xl border bg-transparent p-3"
      >
        Get Random Quote
      </button>
    </section>
  )
}
