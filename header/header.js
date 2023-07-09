const header = document.querySelector('header');

const logo = document.createElement('div'); 
logo.classList.add('header-logo'); 
logo.innerHTML = `
    <a href='/' title='Home'>
        <img src='${logoUrl}' alt='' title='Simpli Logo'/>
    </a>
` 

const navHeader = document.createElement('nav'); 

const navHeaderLinks = {
    'Home': '/', 
    'About': '/about.html', 
    'Newsletter': '/newsletter.html'
}

for (let link in navHeaderLinks) {
    const a = document.createElement('a')
    a.innerHTML = link; 
    a.title = link;
    a.href = navHeaderLinks[link];

    navHeader.append(a);
}

header.append(logo, navHeader);