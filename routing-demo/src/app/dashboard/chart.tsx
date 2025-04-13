// this is an example of file colocation in nextjs
// the nextjs compiler will not look for this file in the pages directory, it will look for the page.tsx in this folder for the publicle facing route
// so this file can be used as a component in the dashboard page.tsx

export default function Chart() {
  return (
    <div>
      <h2>Chart</h2>
      <p>This is the chart component.</p>
    </div>
  );
}