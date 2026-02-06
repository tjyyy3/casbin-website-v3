import defaultMdxComponents from "fumadocs-ui/mdx";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import type { MDXComponents } from "mdx/types";
import { DisabledFeedbackBlock } from "./mdx-components-disabled-feedback";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Tabs,
    Tab,
    TabItem: Tab, // For compatibility
    FeedbackBlock: DisabledFeedbackBlock,
    ...components,
  };
}
