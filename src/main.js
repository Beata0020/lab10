import './style.css'

import { supabase } from './supabase.js';

main();

async function main() {
  console.log('main() start');
  await fetchArticles();
}

async function fetchArticles() {
  const { data, error } = await supabase.from("article").select();

  console.log('data:', data);
  console.log('error:', error);

  if (error) {
    console.error("Błąd pobierania danych:", error.message);
    return;
  }

  const container = document.querySelector('#article');


  if (!data || data.length === 0) {
    container.innerHTML = "<p>Brak artykułów.</p>";
    return;
  }

  const html = data.map((article) => {

    return `<article class="my-4 mx-6">
      <header>
        <h2>${article.title || "Brak tytułu"}</h2>
        <div class="flex items-center gap-2 text-sm text-gray-500">
          <h3>${article.subtitle}</h3>
          <address rel="author">${article.author}</address>
          <time datetime="${article.created_at}">
            ${new Date(article.created_at).toLocaleDateString()}
          </time>
        </div>
          <p class="mt-4 text-lg">${article.content}</p>
      </header>
        

    </article>`;
  }).join("");

  container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("articleForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const newArticle = {
      title: formData.get("title"),
      subtitle: formData.get("subtitle"),
      author: formData.get("author"),
      content: formData.get("content")
    };

    const { error } = await supabase.from("article").insert([newArticle]);

    if (error) {
      console.error("Błąd dodawania artykułu:", error.message);
      alert("Nie udało się dodać artykułu.");
    } else {
      form.reset();
      fetchArticles(); 
    }
  });
});