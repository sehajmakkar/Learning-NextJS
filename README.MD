# 📘 Next.js Learning Notes

<!-- all prev notes i have noted in notion -->

## Navigation
### Link Component Navigation
`<Link>`
dynamic links
replace

### Active Links
usePathname
styling

### params and search params
for a given URL
**params** is a promise that resolves to an object cotaining the dynamic route parameters like id
**searchParams** is a promise that resolves to an object containing the query parameters like filter and sorting 
ex url: ""
/articles/breaking-news-123?lang=en
route parameter => breaking-news-123
query parameter => lang=en

both returns a promise so we need to use asynnc await in the server componenets to get the values

while in the client components we cant use async await, we need to use a "use" hook instead to get the values like 
const {articleId} = use(params);
const { lang = "en"} = use(searchParams);

while page.tsx has access to both params and searchParams, layout.tsx only has access to params