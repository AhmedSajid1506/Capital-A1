import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "./Button";

const faqs = [
  {
    q: "What makes Capital Æ1 unique in the market?",
    ans: "Æ1 is the UK's first private account management firm focusing on online businesses and third-party delivery participants. Our Account Managers have direct experience with businesses that operate online and manage delivery services. ",
  },
  {
    q: "What services does Capital Æ1 offer?",
    ans: "Æ1 specialises in account managing online businesses, including third-party delivery participants. Our focus for now is to offer both 'Basic' Administrative & Reporting support as well as 'Advanced' Reporting & Consulation with yourself and third party representatives.",
  },
  {
    q: "What's required from me as a client?",
    ans: "All we require is your trust in our abilities and access to your 'Manager's Link' portal, enabling us to perform our duties.",
  },
  {
    q: "How does Æther improve market visibility for my business?",
    ans: "Æther enhances your market presence by accurately showcasing an accumulatioin of your business's performance and value through an innovative NFV Metric.",
  },
  {
    q: "Service Fees, Duration of Contract, & Cancellation?",
    ans: "Our pricing model is tailored to your business's specific needs and scale. Contact us for a personalised quote. Duration goes as per agreement with a free of charge cancellation at anytime.",
  },
  {
    q: "How quickly can I see results after partnering with Capital Æ1?",
    ans: "While results vary, many clients will notice significant improvements within the first month.",
  },
  {
    q: "Will my data be secure?",
    ans: "Security is our top priority; your data is protected with the latest encryption and security measures.",
  },
];

export default function FAQ() {
  return (
    <section className="container px-4 md:px-0 py-24">
      <h2 className="text-5xl font-semibold mb-10">Got Questions?</h2>
      <div className="flex justify-center items-center flex-wrap space-y-10 lg:space-y-0">
        <Accordion type="single" collapsible className="w-full lg:w-1/2">
          {faqs.map((faq, i) => (
            <AccordionItem
              value={`item-${i + 0}`}
              className="border-t border-[#e8e8e8]/10 border-b-0"
              key={i}
            >
              <AccordionTrigger className="text-white hover:no-underline text-2xl py-8 text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-lg">
                {faq.ans}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="w-full lg:w-1/2 text-center">
          <h2 className="text-5xl font-semibold mb-10">Still Wondering?</h2>
          <p className="mb-8">More Questions and Answers at the bottom of the &ldquo;About Us&ldquo; page.<br />Alternatively…<br />You can email us at partners@capitala1.com</p>
          <Button href="/about-us">Know more about Æ1</Button>
          <h2 className="text-5xl font-semibold mt-16 mb-10">I&apos;m Interested, but would like to know more</h2>
          <p className="mb-8">More Questions and Answers at the bottom of the &ldquo;About Us&ldquo; page.<br />Alternatively…<br />You can email us at partners@capitala1.com</p>
          <Button href="/contact-us">Contact Æ1</Button>
        </div>
      </div>
    </section>
  );
}
