import React from "react";
import CaseStudyLayout from "../CaseStudyLayout";
import { caseStudies, caseStudySlugs, basePath } from "../caseStudies";
import { caseStudyContents } from "../contents";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const study = caseStudies[params.slug];
  if (!study) return { title: "Case Study" };
  return {
    title: `${study.title} — Case Study | Prerna Tripathy`,
    description: study.overview,
  };
}

export default function CaseStudyPage({ params }) {
  const study = caseStudies[params.slug];
  const ContentComponent = caseStudyContents[params.slug];
  if (!study || !ContentComponent) notFound();

  return (
    <CaseStudyLayout>
      <ContentComponent basePath={basePath} />
    </CaseStudyLayout>
  );
}
