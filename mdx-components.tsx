import type { MDXComponents } from "mdx/types";
import { getLessonMDXComponents } from "@/lib/content/mdx-components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...getLessonMDXComponents(),
    ...components,
  };
}
