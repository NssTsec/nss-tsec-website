import React from 'react';

import logo from '../images/nss-logo.png';

const Navbar = () => {
  return (
    <header class="text-gray-600 body-font">
  <div class="container mx-8 flex flex-wrap py-5  flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src='https://upload.wikimedia.org/wikipedia/commons/9/90/NSS-symbol.jpeg' className='h-16 w-16'/>
      <span class="ml-3 text-xl">NSS-TSEC</span>
    </a>
    <nav class="md:ml-auto  flex flex-wrap items-center text-base justify-center">
        <button> <a class="mr-5  hover:text-gray-900 text-xl font-semibold text-gray-500">Home</a> </button>
        <button> <a class="mr-5 hover:text-gray-900 text-xl font-semibold text-gray-500">Events</a></button>
        <button>     <a class="mr-5 hover:text-gray-900 text-xl font-semibold text-gray-500">Commitee</a></button>
        <button> <a class="mr-5 hover:text-gray-900 text-xl font-semibold text-gray-500">About Us</a></button>
        <button> <a class="mr-1 hover:text-gray-900 text-xl font-semibold text-gray-500">Contact Us</a></button>
    </nav>
    
  </div>
</header>
  );
}

export default Navbar;