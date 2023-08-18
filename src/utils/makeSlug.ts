export default function(text:string) {
  return text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}