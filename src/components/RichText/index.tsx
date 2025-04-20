import {
  DefaultNodeTypes,
  // SerializedLinkNode,
  type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical';
import {
  JSXConvertersFunction,
  // LinkJSXConverter,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react';

type NodeTypes = DefaultNodeTypes;

// const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
//   const { value, relationTo } = linkNode.fields.doc!;
//   if (typeof value !== "object") {
//     throw new Error("Expected value to be an object");
//   }
//   const slug = value.slug;
//   return relationTo === "posts" ? `/posts/${slug}` : `/${slug}`;
// };

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  // ...LinkJSXConverter({ internalDocToHref }),
});

type Props = {
  data: DefaultTypedEditorState;
} & React.HTMLAttributes<HTMLDivElement>;

export default function RichText(props: Props) {
  const { ...rest } = props;
  return (
    <ConvertRichText
      className='w-full rich-text'
      converters={jsxConverters}
      {...rest}
    />
  );
}
