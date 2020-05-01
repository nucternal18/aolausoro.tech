const Header = () => {
  const template = `
    <header class='bg-black text-white m-auto p-6'>
        <nav class="container mx-auto flex flex-row justify-between">
            <ul class="flex flex-row z-50">
                <li class="px-1 py-2 m-1"><a href="">HOME</a></li>
                <li class="px-1 py-2 m-1"><a href="">ABOUT</a></li>
                <li class="px-1 py-2 m-1"><a href="">PORTFOLIO</a></li>
                <li class="px-1 py-2 m-1"><a href="">CONTACT</a></li>
            </ul>
            <ul class="flex flex-row z-50">
                <li class="px-1 py-2 m-1"><a href=""><i class="fab fa-linkedin"></i></a></li>
                <li class="px-1 py-2 m-1"><a href=""><i class="fab fa-twitter-square"></i></a></li>
                <li class="px-1 py-2 m-1"><a href="https://github.com/nucternal18"><i class="fab fa-github"></i></a></li>
            </ul>
        </nav>
    </header>
  `;

  return template;
};

export default Header;
