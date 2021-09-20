import fs from "fs";
import path from "path";
import matter from "gray-matter";

const faqsDir = path.join(process.cwd(), "faqs");

export function getFaqs(category) {
  try {
    const categoryPath = path.join(faqsDir, category);
    const fileNames = fs.readdirSync(categoryPath);
    return fileNames.map((fileName) => {
      const fullPath = path.join(categoryPath, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      return {
        id: fileName,
        question: matterResult.data.title,
        content: matterResult.content,
      };
    });
  } catch (err) {
    console.log(`Failed to load faqs for category ${category}`, err);
    return [];
  }
}
