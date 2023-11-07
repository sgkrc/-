import React from "react";

const Question = () => {
  return (
    <section className="my-28" id="contact">
      <header className="px-5 text-2xl font-bold pt-10">
        <h2>Contact Me</h2>
        <p className="text-base font-thin">I'd love to hear your thoughts!</p>
      </header>
      <div className="md:mx-6 flex flex-col flex-wrap md:flex-row justify-between">
        <div className="bg-gray px-5 py-10 md:py-8 sm:p-8 my-2 md:rounded-lg shadow-lg  justify-between w-full  md:w-6/12 ">
          <form
            className="flex flex-col space-y-3 m-auto w-full"
            name="contact"
            method="post"
          >
            <input type="hidden" name="form-name" value="contact" />

            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="gradient"
              required
            ></input>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="gradient"
              required
            ></input>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="25"
              rows="5"
              className="gradient"
              required
            ></textarea>
            <button
              type="submit"
              className="border border-gray-500 p-2 rounded-lg w-auto mr-auto shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div
        className="relative md:bottom-56 mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm"
        onClick={() => window.scroll(0, 0)}
      ></div>
    </section>
  );
};

export default Question;
