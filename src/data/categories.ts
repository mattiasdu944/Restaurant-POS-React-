type Category = {
    name: string;
    slug: string;
    description: string;
};

export const categories: Category[] = [
    {
        name: "🍕 Pizza",
        slug: "pizza",
        description: "Delicious and freshly made pizzas with a variety of toppings."
    },
    {
        name: "🍔 Burger",
        slug: "burger",
        description: "Juicy and flavorful burgers made with the freshest ingredients."
    },
    {
        name: "🥤 Drink",
        slug: "drink",
        description: "Refreshing drinks to pair with your meal."
    },
    {
        name: "🍟 Snacks",
        slug: "snacks",
        description: "Perfect bites to accompany your meal or for a quick snack."
    },
    {
        name: "🍚 Rice",
        slug: "rice",
        description: "A selection of rice-based dishes for hearty meals."
    }
];
