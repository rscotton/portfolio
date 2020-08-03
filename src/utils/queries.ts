import { StackItem } from '@src/types';

// Transformers
export const getFlatStackFromAllStackItems = (
  queryResults: any
): StackItem[] => {
  const allStack = queryResults.allMarkdownRemark.edges.reduce(
    (allStackItems: StackItem[], queryResult: any) =>
      (allStackItems = [
        ...allStackItems,
        ...queryResult.node.frontmatter.stack,
      ]),
    []
  );

  return [...new Set<StackItem>(allStack)];
};
