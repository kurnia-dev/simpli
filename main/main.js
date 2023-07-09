const main = document.querySelector('main')
const hero = document.createElement('div')
hero.classList.add('hero')


const headline = document.createElement('h1')
headline.innerHTML = `Start Your Blogging Journey with <span>${blogName}</span>!`

const desc = document.createElement('p')
desc.classList.add('headline-desc')
desc.innerHTML = blogDesc; 


const mainHeroBtnText = 'Buy'
const secondaryHeroBtnText = 'Get Demo'

const mainButton = document.createElement('button')
        mainButton.type = 'button'
        mainButton.title = mainHeroBtnText
        mainButton.id = 'main-hero-btn'
        mainButton.classList.add('main-button')
        mainButton.innerHTML = mainHeroBtnText

const secondaryButton = document.createElement('button')
        secondaryButton.type = 'button'
        secondaryButton.title = secondaryHeroBtnText
        secondaryButton.id = 'secondary-hero-btn'
        secondaryButton.classList.add('secondary-button')
        secondaryButton.innerHTML = secondaryHeroBtnText

const ctaButton = document.createElement('div')
ctaButton.classList.add('cta-button')
ctaButton.append(secondaryButton, mainButton)

const heroContent = document.createElement('div')
heroContent.classList.add('hero-content')
heroContent.append(headline, desc, ctaButton)
hero.append(heroContent)

const articleWrapper = document.createElement('div')
articleWrapper.classList.add('article-wrapper')

const title = document.createElement('h2')
title.classList.add('title')
title.innerText = recentPostText;

const loadOlderPost = document.createElement('button'); 
loadOlderPost.type = 'button'; 
loadOlderPost.id = 'load-older-post'; 
loadOlderPost.classList.add('main-button'); 
loadOlderPost.innerText = loadOlderPostMessage; 

articleWrapper.append(title, loadOlderPost)

main.prepend(hero, articleWrapper); 