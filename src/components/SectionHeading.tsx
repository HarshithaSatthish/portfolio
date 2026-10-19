type Props={eyebrow:string; title:string; description?:string; emphasis?:string};
export default function SectionHeading({eyebrow,title,description,emphasis}:Props){
  return <div className="section-heading"><div className="eyebrow"><span className="eyebrow-dash"/>{eyebrow}</div><h2>{title}{emphasis&&<><br/><span className="accent">{emphasis}</span></>}</h2>{description&&<p>{description}</p>}</div>;
}
