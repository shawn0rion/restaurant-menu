const imageUrlArray = [
  "https://doobydobap.com/wp-content/uploads/2021/06/Thumbnail-42.jpg",
  "https://www.marionskitchen.com/wp-content/uploads/2019/05/Shoyu-Ramen3.jpg",
  "https://www.aheadofthyme.com/wp-content/uploads/2019/10/healthy-miso-ramen-with-chicken-6-1-rotated.jpg",
  "https://thumbs.dreamstime.com/b/tsukemen-ramen-roasted-pork-egg-dipping-soup-japanese-dipping-noodles-tsukemen-ramen-138068016.jpg",
  "https://i1.wp.com/seonkyounglongest.com/wp-content/uploads/2020/08/tantanmen-03-mini.jpg?fit=1000%2C667&ssl=1",
  "https://sudachirecipes.com/wp-content/uploads/2020/05/Abura-soba-6-683x1024.jpg",
  "http://blog.umamimart.com/wp-content/uploads/2012/10/IMG_16381.jpg",
  "https://www.seriouseats.com/thmb/bLULeUCLpIQqdULWbjmxuG3oWeI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__06__20150529-cold-ramen-hiyashi-chuka-shao-zhong-4-899b239879484c05bff9139b0f1cd88c.jpg",
];

const ramenNoodles = [
  {
    id: 1,
    name: "Tonkotsu Ramen",
    price: 12.99,
    image: "https://example.com/tonkotsu-ramen.jpg",
    description:
      "Rich and creamy pork bone broth with tender slices of pork belly and chewy ramen noodles.",
    category: "Classic",
  },
  {
    id: 2,
    name: "Shoyu Ramen",
    price: 10.99,
    image: "https://example.com/shoyu-ramen.jpg",
    description:
      "Light and clear broth made with soy sauce and chicken stock, topped with sliced pork, soft-boiled eggs, and seaweed.",
    category: "Classic",
  },
  {
    id: 3,
    name: "Miso Ramen",
    price: 11.99,
    image: "https://example.com/miso-ramen.jpg",
    description:
      "Broth made with fermented soybean paste and chicken or pork broth, topped with corn, butter, and bean sprouts.",
    category: "Classic",
  },
  {
    id: 4,
    name: "Tsukemen",
    price: 14.99,
    image: "https://example.com/tsukemen.jpg",
    description:
      "Dipping ramen dish with thick and rich pork or fish-based sauce, served with thicker and chewier noodles.",
    category: "Specialty",
  },
  {
    id: 5,
    name: "Tantanmen",
    price: 13.99,
    image: "https://example.com/tantanmen.jpg",
    description:
      "Spicy ramen dish with broth made with chili sauce and ground pork or beef, topped with scallions and sesame seeds.",
    category: "Spicy",
  },
  {
    id: 6,
    name: "Abura Soba",
    price: 11.99,
    image: "https://example.com/abura-soba.jpg",
    description:
      "Brothless ramen dish with noodles coated in rich and flavorful sauce made with soy sauce, vinegar, and pork fat.",
    category: "Specialty",
  },
  {
    id: 7,
    name: "Hiyashi Chuka",
    price: 9.99,
    image: "https://example.com/hiyashi-chuka.jpg",
    description:
      "Cold ramen dish with refreshing toppings like shredded egg, cucumber, ham, and tomatoes, dressed with tangy sauce.",
    category: "Specialty",
  },
  {
    id: 8,
    name: "Jiro Ramen",
    price: 15.99,
    image: "https://example.com/jiro-ramen.jpg",
    description:
      "Massive bowl of ramen with chewy noodles, fatty pork, bean sprouts, and cabbage, in a thick and salty pork-based sauce.",
    category: "Specialty",
  },
];

const menu = document.querySelector("#menu");
const btns = document.querySelectorAll(".filter-button");
updateRamenImages(imageUrlArray);
console.log(ramenNoodles[6].image);
menu.innerHTML = getHTML();

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const filter = e.target.dataset.id;
    menu.innerHTML = getHTML(filter);
  });
});

function updateRamenImages(arr) {
  let i = 0;
  ramenNoodles.forEach((item) => {
    item.image = arr[i];
    i += 1;
  });
}

function getHTML(category = "all") {
  let categories = ramenNoodles;
  if (category !== "all") {
    categories = ramenNoodles.filter((item) => item.category === category);
  }
  let html = "";
  console.log(category);
  console.log(categories);

  categories.forEach((ramenObj) => {
    html += `
    <div class="item">
      <img
        src="${ramenObj.image}"
        alt="Item image"
        data-id="img"
      />
      <div class="item-info">
        <div class="item-header">
          <h2 class="item-title" data-id="title">${ramenObj.name}</h2>
          <h3 class="item-price" data-id="price">$${ramenObj.price.toFixed(
            2
          )}</h3>
        </div>
        <p class="item-description" data-id="description">${
          ramenObj.description
        }</p>
      </div>
    </div>`;
  });
  return html;
}
