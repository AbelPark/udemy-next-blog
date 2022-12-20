import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="당신의 메시지를 보여주세욧!" />
      </Head>
      <ContactForm />
    </>
  );
}
