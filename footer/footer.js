const footer = document.querySelector('footer');
const copyright = document.createElement('div')
        copyright.classList.add('copyright'); 
        copyright.innerHTML = copyRightMessage; 

const footerContent = document.createElement('div')
        footerContent.classList.add('footer-content-wrapper')

const footerLogo = document.createElement('div')
        footerLogo.classList.add('footer-logo')
        footerLogo.innerHTML = `
            <img alt='' src='${logoUrl}' title='${blogName}'/>
            <p class='blog-desc'>${blogDesc}</p>
        `


const footerLinksContainer = document.createElement('div')
        footerLinksContainer.classList.add('footer-link'); 

/**
 * Footer links configuration object.
 * Please dont' change this Object Structure, just follow the pattern
 * 
 * @type {FooterLinks}
 */
const footerLinks = {
    'Category': { // Link Group Title
        // Link Text : Link Url
        'Blogging': '/search/label/Blogging', 
        'Life style': '/search/label/Life style', 
        'Traveling': '/search/label/Traveling', 
    }, 

    'Pages': { // Link Group Title
        // Page Name : Page Url
        'About': '/about.html', 
        'Contact': '/contact.html', 
        'Newsletter': '/newsletter.html' 
    }, 

    'Lets Connect': { 
        'Twitter': { // Social Media Name, used for link title. 
            'icon': '../src/twitter.svg', // Icon URL
            'url': 'https://twitter.com' // Social media link 
        }, 
        'Instagram': {
            'icon': '../src/insta.svg', 
            'url': 'https://instagram.com'
        }, 
        'Tiktok': {
            'icon': '../src/tiktok.svg', 
            'url': 'https://tiktok.com'
        }, 
    }
} 


// Load Footer Links Object
for (const groupName in footerLinks) {
    const linkWrapper = document.createElement('div');
    const linkContainer = document.createElement('div'); 
    const title = document.createElement('h4')
    title.innerText = groupName; 
    linkWrapper.append(title);
    
    for (const link in footerLinks[groupName]) {
        const isObject = typeof footerLinks[groupName][link] == 'object'; 
        
        const a = document.createElement('a')
        a.href = isObject ? footerLinks[groupName][link]['url'] : footerLinks[groupName][link]; 

        // create Icon
        if (isObject) {
            const icon = document.createElement('span')
            icon.classList.add('footer-icon')
            icon.style.background = `url(${footerLinks[groupName][link]['icon']})`
            a.append(icon); 
        } else {
            a.innerText = link;
        }

        a.title = link; 
        linkContainer.append(a);
    }

    linkWrapper.append(linkContainer);
    footerLinksContainer.append(linkWrapper);
}

footerContent.append(footerLogo, footerLinksContainer); 
footer.append(footerContent, copyright);