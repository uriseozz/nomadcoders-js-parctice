const quotes = [
  {
    quote: "세상의 중요한 업적 중 대부분은, 희망이 보이지 않는 상황에서도 끊임없이 도전한 사람들이 이룬 것이다.",
    author: "Dale Carnegie",
  },
  {
    quote: "나는 한 인간에 불과하지만, 오롯한 인간이다. 나는 모든 것을 할 수는 없지만, 무엇인가 할 수 있다. 그러므로 나는 내가 할 수 있는 것을 기꺼이 하겠다",
    author: "Helen Keller",
  },
  {
    quote: "지금의 시대도, 언제나 그렇듯, 아주 훌륭한 시대입니다. 이 시대에 우리가 무엇을 해야 하는지만 알고 있다면.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "무미건조한 단조로움에 할애할 시간은 없다. 일할 시간과 사랑할 시간을 빼고 나면 다른 것을 할 시간은 없다!",
    author: "Gabriel Coco Chane",
  },
  {
    quote: "인생에 있는 큰 비밀은 큰 비밀 따위는 없다는 것이다. 당신의 목표가 무엇이든 열심히 할 의지가 있다면 달성할 수 있다.",
    author: "Oprah Winfrey",
  },
  {
    quote: "행동 없는 말은 이상주의를 훼손한다.",
    author: "Herbert Hoover",
  },
  {
    quote: "교육은 최상의 노후 대비책이다.",
    author: "Aristotle",
  },
  {
    quote: "배움이란 일생동안 알고 있었던 것을 어느 날 갑자기 완전히 새로운 방식으로 이해하는 것이다.",
    author: "Doris Lessing",
  },
  {
    quote: "자신이 어떻게 변해왔는지 알려면 변하지 않은 곳으로 돌아가는 것보다 더 좋은 방법은 없다.",
    author: "Nelson Mandela",
  },
  {
    quote: "이 세상에 보장된 것은 아무것도 없으며 오직 기회만 있을 뿐이다.",
    author: "General Douglas MacArthur",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;