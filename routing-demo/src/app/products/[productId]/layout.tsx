// nested layouts.
// This layout will be used for all productId pages only

export default function ProductDetailLayout(
  {children} : {
    children: React.ReactNode;
  }
) {
  return <>
  {/* children prop represents the productId page content */}
    {children}
    <h2>Featured Products</h2>
  </>
}