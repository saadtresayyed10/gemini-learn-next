import DOMPurify from "dompurify";
import MarkdownIt from "markdown-it";

type Props = {
  text: string;
};

const md = MarkdownIt();

const Markdown = ({ text }: Props) => {
  const htmlContent = md.render(text);
  const sanitized = DOMPurify.sanitize(htmlContent);
  return <div dangerouslySetInnerHTML={{ __html: sanitized }}></div>;
};

export default Markdown;
