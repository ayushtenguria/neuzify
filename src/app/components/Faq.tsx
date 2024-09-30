import FAQAccordion from "./FaqAccordian";

export const Faq = () => {
  return (
    <>
      <section className="flex text-black md:space-x-32 xl:space-x-48 flex-col md:flex-row p-10 justify-start md:p-32">
        <div className="md:ml-20">
          <p className="text-3xl md:text-5xl font-semibold md:w-72 xl:w-96 leading-tight">
            Frequently asked questions
          </p>
          <a href="/">
            <p className="mt-7">Contact us for more info</p>
          </a>
        </div>
        <div className="mt-10 md:mt-0 space-y-">
          <FAQAccordion />
        </div>
      </section>
    </>
  );
};
