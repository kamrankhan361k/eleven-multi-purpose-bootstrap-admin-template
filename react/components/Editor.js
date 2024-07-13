import { Card } from "reactstrap";
import dynamic from "next/dynamic";
import fetch from "../lib/fetch";
import useSWR from "swr";

const ReactQuill = dynamic(import("react-quill"), {
  ssr: false
});

const Editor = () => {
  const { data, error } = useSWR(`${process.env.baseUrl}api/editor`, fetch);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Card>
      <ReactQuill value={data.text} placeholder={"Type your reply"} />
    </Card>
  );
};

export default Editor;
