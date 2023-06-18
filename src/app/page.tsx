import Quote from "./components/Quote"

export default async function Home() {
  const res = await fetch("https://api.quotable.io/random", {
    cache: "no-cache",
  })
  const randomQuote = await res.json()
  return (
    <>
      <Quote {...randomQuote} />
    </>
  )
}
