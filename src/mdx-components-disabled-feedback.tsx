"use client";

import { FeedbackBlock } from "@/components/feedback/client";
import type { FeedbackBlockProps } from "fumadocs-core/mdx-plugins/remark-feedback-block";
import type { ReactNode } from "react";

// Client-side version of disabled feedback component
export function DisabledFeedbackBlock({
  id,
  body,
  children,
}: FeedbackBlockProps & { children?: ReactNode }) {
  async function disabledAction() {
    console.log("Feedback disabled in static export mode");
    return { githubUrl: undefined };
  }

  return (
    <FeedbackBlock id={id} body={body} onSendAction={disabledAction}>
      {children}
    </FeedbackBlock>
  );
}
