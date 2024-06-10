import { mergeProps } from "solid-js";
interface Props {
	title: string;
	body: string;
  show: boolean;
}

export default function(props: Props) {
  const merged = mergeProps({ title: "", body: "", show:false }, props);

  return <dialog open={merged.show}>
    {merged.title} {merged.body}
      </dialog>
}