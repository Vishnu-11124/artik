"use client";

import React, { useState } from "react";
import { BiImage, BiPlusCircle, BiUpload, BiVideo, BiX } from "react-icons/bi";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => (
    <div className="min-h-100 text-sm text-muted">Loading editor...</div>
  ),
});

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-5 py-10 lg:px-8 lg:py-14">
        {/* Page Header */}
        <div className="mb-10 flex items-center justify-between border-b border-border pb-6">
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs">
              Your Creative Space
            </p>
            <h1 className="font-display text-3xl text-foreground sm:text-4xl">
              Write a Story
            </h1>
          </div>

          <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted">
            New Post
          </span>
        </div>

        {/* Editor */}
        <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-8 lg:p-10">
          {/* Title */}
          <input
            type="text"
            placeholder="Give your story a title..."
            className="w-full border-0 bg-transparent font-display text-2xl leading-tight text-foreground outline-none placeholder:text-muted/50 sm:text-4xl"
          />

          <div className="my-6 border-b border-border" />

          {/* Media Toolbar */}
          <div className="relative mb-6 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close media options" : "Add media"}
              aria-expanded={open}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-[#F5EBD0]"
            >
              {open ? (
                <BiX className="text-xl" />
              ) : (
                <BiPlusCircle className="text-xl" />
              )}
            </button>

            <span className="text-xs text-muted">Add media to your story</span>

            {open && (
              <div className="absolute left-12 top-0 z-20 flex items-center gap-2 rounded-xl border border-border bg-background p-2 shadow-lg">
                <button
                  type="button"
                  title="Add image"
                  className="flex size-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <BiImage className="text-xl" />
                </button>

                <button
                  type="button"
                  title="Add video"
                  className="flex size-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <BiVideo className="text-xl" />
                </button>

                <button
                  type="button"
                  title="Upload file"
                  className="flex size-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <BiUpload className="text-xl" />
                </button>
              </div>
            )}
          </div>

          {/* Rich Text Editor */}
          <div className="write-editor min-h-100 sm:min-h-125">
            <ReactQuill
              theme="bubble"
              value={content}
              onChange={setContent}
              placeholder="Tell your story..."
            />
          </div>

          {/* Editor Footer */}
          <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted">
              Your ideas deserve to be shared.
            </p>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-[#F5EBD0] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-md"
            >
              Publish Story
            </button>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mt-5 text-center text-xs text-muted">
          Take your time. Write something meaningful.
        </p>
      </div>
    </main>
  );
};

export default WritePage;
