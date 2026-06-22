"use client";
import Image from "next/image";
import publicationData from "@/data/publications.json";
import type { Publication } from "./types";

export default function Home() {
  const publications = publicationData as Publication[];
  const sortedPublications = [...publications].sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date)
  );

  return (
    <main className="min-h-screen bg-white text-black px-8 py-16 max-w-4xl mx-auto font-sans">
      {/* 1. Introduction */}
      <section className="mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Sejun Ahn</h1>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* 자기소개 텍스트: 왼쪽 배치 */}
          <div className="flex-grow">
          <p className="text-md text-gray-700 leading-relaxed mb-6 max-w-2xl">
            I&apos;m a Ph.D. student in Mechanical and Robotics Engineering at Gwangju Institute of Science and Technology (GIST), advised by Prof. <a href="https://mpil-gist.github.io/people/Pyojin_Kim/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pyojin Kim</a>. I&apos;m a member of the <a href="https://mpil-gist.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Machine Perception and Intelligence Lab (MPIL)</a>. I received my B.S. in Electronic Engineering from Chonnam National University in 2024. 
          </p>
          <p className="text-md text-gray-700 leading-relaxed mb-6 max-w-2xl">
            My research focuses on <strong>learning-based state estimation using only IMUs</strong>, aiming to develop robust and generalizable methods across diverse environments and platforms. In particular, my work explores how proprioceptive sensing can provide exteroception-like cues for robust state estimation when external observations are limited or unavailable.          
          </p>
          </div>

          {/* 프로필 사진: 오른쪽 배치 */}
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end">
            <Image
              src="imgs/sejunahn.jpg" // public 폴더에 본인 사진을 넣으세요
              alt="Sejun Ahn"
              width={150}
              height={200}
              className="rounded-lg transition-all duration-300 object-cover shadow-md"
            />
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-medium">
          <p className="whitespace-nowrap text-gray-700">Email: ahnsejun [at] gm.gist.ac.kr</p>
          <div className="flex flex-wrap gap-4 text-blue-600">
            <a href="https://github.com/sejun-ahn" className="hover:underline">GitHub</a>
            <a href="https://scholar.google.com/citations?user=qzPJ-IkAAAAJ" className="hover:underline">Scholar</a>
            <a href="https://www.linkedin.com/in/sejun-ahn/" className="hover:underline">LinkedIn</a>
            <a href="/cv.pdf" className="hover:underline">CV</a>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Publications</h2>
        <div className="space-y-6">
          {sortedPublications.map((pub) => (
            <div key={pub.id} className="group flex items-start gap-5">
              {pub.thumbnail && (
                <div className="relative aspect-[2/1] w-32 shrink-0 overflow-hidden rounded-lg bg-gray-100 shadow-md sm:w-44">
                  <Image
                    src={pub.thumbnail}
                    alt={`${pub.title} thumbnail`}
                    fill
                    sizes="(min-width: 640px) 176px, 128px"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <span className="text-sm text-gray-500">[{pub.venue}]</span>
                <p className="text-md mt-1">
                  <strong>{pub.title}</strong>
                </p>
                <p className="text-sm text-gray-600">
                  {pub.authors.map((author, i) => (
                    <span key={i}>
                      {/* 본인 이름일 때만 <strong> 적용 */}
                      {author === "Sejun Ahn" ? <strong>{author}</strong> : author}
                      {i < pub.authors.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {pub.pdf && (
                    <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">
                      [PDF]
                    </a>
                  )}
                  {pub.code && (
                    <a href={pub.code} target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">
                      [Code]
                    </a>
                  )}
                  {pub.project_page && (
                    <a href={pub.project_page} target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">
                      [Project Page]
                    </a>
                  )}
                  {pub.video && (
                    <a href={pub.video} target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">
                      [Video]
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Education</h2>
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p>Integrated M.S./Ph.D. in Mechanical and Robotics Engineering</p>
              <p className="text-gray-600">Gwangju Institute of Science and Technology</p>
            </div>
            <span className="w-40 shrink-0 text-right text-gray-500">2024.03-Present</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p>B.S. in Electronic Engineering</p>
              <p className="text-gray-600">Chonnam National University</p>
            </div>
            <span className="w-40 shrink-0 text-right text-gray-500">2018.03-2024.02</span>
          </div>
        </div>
      </section>

      <footer className="mt-32 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Sejun Ahn. All rights reserved.
      </footer>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-6 bottom-6 z-50 h-16 w-16 cursor-pointer overflow-hidden rounded-full bg-white shadow-md ring-1 ring-black/5 transition-transform hover:scale-105"
      >
        <Image
          src="/sejun-icon.png"
          alt=""
          fill
          sizes="64px"
          className="object-cover"
        />
      </button>
    </main>
  );
}
