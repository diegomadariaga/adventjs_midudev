type Inventory = Array<{ name: string; quantity: number; category: string }>;

function organizeInventory(inventory: Inventory): object {
  if (!inventory.length) return {};
  const result = {};
  inventory.forEach((item) => {
    if (!result[item.category]) {
      result[item.category] = {
      };
    }
    if (!result[item.category][item.name]) {
      result[item.category][item.name] = item.quantity;
    } else {
      result[item.category][item.name] =
        result[item.category][item.name] + item.quantity;
    }
  });
  return result;
}

const inventory = [
  { name: "doll", quantity: 5, category: "toys" },
  { name: "car", quantity: 3, category: "toys" },
  { name: "ball", quantity: 2, category: "sports" },
  { name: "car", quantity: 2, category: "toys" },
  { name: "racket", quantity: 4, category: "sports" },
];

console.log(organizeInventory([{ name: "doll", quantity: 5, category: "toys" }]));
console.log(organizeInventory(inventory));