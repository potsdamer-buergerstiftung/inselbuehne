import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";

type BlockType = "CORE_PARAGRAPH";

interface Block {
  type: BlockType;
  innerHtml: string;
}

const BlockAsComponent: FC<{ block: Block }> = ({ block }) => {
  switch (block.type) {
    case "CORE_PARAGRAPH":
      return (
        <Text
          fontSize="xl"
          dangerouslySetInnerHTML={{ __html: block.innerHtml }}
        />
      );
  }
};

const ContentRenderer: FC<{ blocks: any[] }> = ({ blocks }) => {
  return (
    <Box>
      {blocks.map((block, i) => (
        <BlockAsComponent block={block} key={i} />
      ))}
    </Box>
  );
};

export default ContentRenderer;
