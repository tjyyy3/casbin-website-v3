import {
  BlockFeedback,
  pageFeedback,
  type ActionResponse,
  type PageFeedback,
} from "@/components/feedback/schema";

export const repo = "casbin-website-v3";
export const owner = "casbin";
export const DocsCategory = "Docs Feedback";

// Temporarily disabled: user feedback feature
// Needs to be refactored to client-side solution (redirect to GitHub Discussion)

export async function onPageFeedbackAction(feedback: PageFeedback): Promise<ActionResponse> {
  console.log("Feedback disabled in static export mode");
  return { githubUrl: undefined };
}

export async function onBlockFeedbackAction(feedback: BlockFeedback): Promise<ActionResponse> {
  console.log("Block feedback disabled in static export mode");
  return { githubUrl: undefined };
}
