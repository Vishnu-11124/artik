import React from "react";
import { BiEnvelope, BiMap, BiSend } from "react-icons/bi";

const ContactPage = () => {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-5 py-16 lg:px-8 lg:py-24">
      {/* Header */}
      <section className="mb-14 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Get in Touch
        </p>

        <h1 className="font-display text-4xl text-foreground sm:text-5xl">
          Let's start a conversation.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
          Have a question, suggestion, or just want to say hello? We'd love to
          hear from you.
        </p>
      </section>

      {/* Contact Content */}
      <section className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        {/* Contact Information */}
        <div>
          <h2 className="mb-6 font-display text-2xl text-foreground">
            Contact Information
          </h2>

          <p className="mb-8 text-sm leading-7 text-muted">
            Whether you're a reader, writer, or someone interested in
            collaborating, feel free to reach out.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-surface text-primary">
                <BiEnvelope size={21} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Email Us
                </h3>
                <p className="mt-1 text-sm text-muted">hello@artik.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-surface text-primary">
                <BiMap size={21} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Our Platform
                </h3>
                <p className="mt-1 text-sm text-muted">
                  A space for ideas, stories, and creativity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="mb-6 font-display text-2xl text-foreground">
            Send us a Message
          </h2>

          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="What is this about?"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-[#F5EBD0] transition-colors hover:bg-primary-hover"
            >
              Send Message
              <BiSend size={18} />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
