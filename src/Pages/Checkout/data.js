//http://3.17.134.84:8000/orders
const totalOrder = {
  shoppingbag: [
    {
      id: 26,
      quantity: 1,
      name:
        "\ubb34\ub4dc\uc778\ud578\uc11c \ub9ac\ud034\ub4dc \ub9c8\ub728 \uc624\uc6b4 \uc2a4\ud0a8",
      price: 19000,
      image:
        "http://hince.co.kr/web/product/tiny/20200617/b4b788b34fdd1c711ee75bf74a8096a6.jpg",
    },
    {
      id: 32,
      quantity: 1,
      name:
        "\ubb34\ub4dc\uc778\ud578\uc11c \uc824 \uae00\ub85c\uc2a4 \ub77c\uc774\ud2b8 \ud50c\ub85c\uc6b0",
      price: 19000,
      image:
        "http://hince.co.kr/web/product/tiny/20200304/724a6699ad63ccdad879d7259fa57d28.jpg",
    },
    {
      id: 35,
      quantity: 3,
      name:
        "\ubb34\ub4dc\uc778\ud578\uc11c \ub9ac\ud034\ub4dc \ub9c8\ub728 \ud3ec\uc778\ud2b8 \uc624\ube0c \ubdf0",
      price: 57000,
      image:
        "http://hince.co.kr/web/product/tiny/20200617/7817d7c6e2e336bddc5d037b89c4ccc6.jpg",
    },
  ],
  total_price: 95000,
};


//http://3.17.134.84:8000/orders?product_id=32&product_id=35
const pickedOrder = {
  shoppingbag: [
    {
      id: 32,
      quantity: 1,
      name:
        "\ubb34\ub4dc\uc778\ud578\uc11c \uc824 \uae00\ub85c\uc2a4 \ub77c\uc774\ud2b8 \ud50c\ub85c\uc6b0",
      price: 19000,
      image:
        "http://hince.co.kr/web/product/tiny/20200304/724a6699ad63ccdad879d7259fa57d28.jpg",
    },
    {
      id: 35,
      quantity: 3,
      name:
        "\ubb34\ub4dc\uc778\ud578\uc11c \ub9ac\ud034\ub4dc \ub9c8\ub728 \ud3ec\uc778\ud2b8 \uc624\ube0c \ubdf0",
      price: 57000,
      image:
        "http://hince.co.kr/web/product/tiny/20200617/7817d7c6e2e336bddc5d037b89c4ccc6.jpg",
    },
  ],
  total_price: 95000,
};
