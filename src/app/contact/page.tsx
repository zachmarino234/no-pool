import WaveSection from "@/components/WaveSection";
import Form from "next/form"

export default function Contact() {
  return (
    <main>
      <WaveSection />
      <Form action="/search">
        {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
        <input name="query" />
        <button type="submit">Submit</button>
      </Form>
    </main>
  );
}