export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  // slug is an array of all the dynamic segments
  // slug = ["product", "review", "example"]
  const { slug } = await params;
  // console.log(slug);
  if(slug?.length === 2) {
    return (<h1>
      viewing docs for {slug[0]} and {slug[1]}
    </h1>)
  } else if (slug?.length == 1){
    return (<h1>viewing docs for {slug[0]}</h1>)
  } else return <h1>Doc Page</h1>;
}

// folder names 
// [...slug]
// [[...slug]]
