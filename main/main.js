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


// Load Article
const loadMore = document.querySelector('#load-older-post')
const feedURL = '/feed.xml';
let posts; 
let loadedPost = 0; 

const xhr = new XMLHttpRequest();
xhr.open('GET', feedURL, true);

xhr.onload = function () {
	if (xhr.status === 200) {
		loadArticle(xhr.responseXML)
		loadMore.addEventListener('click', () => {
			loadArticle()
		})
	} else {
		console.log('Gagal mengambil data. Kode status: ' + xhr.status);
	}
};

xhr.send();


function loadArticle(feed) {
	posts ??= feed.querySelectorAll('entry'); 
	let i = loadedPost; 
	let j = loadedPost + postCount; 

	while (i < j && i < posts.length) {
		const post = posts[i]
		const title = post.querySelector('title').innerHTML
		const summary = post.querySelector('summary').innerHTML
		const pub = post.querySelector('published').innerHTML
		const updated = post.querySelector('updated').innerHTML
		const category = post.querySelector('category') 
			? post.querySelector('category').getAttribute('term')
			: '/'
		const author = post.querySelector('author name').innerHTML
		const authorURI = post.querySelector('author uri').innerHTML
		const authorIMG = post.querySelector('author image')
			? post.querySelector('author image').getAttribute('src')
			: 'https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png'
			
		const thumbnail = post.querySelector('thumbnail')
			? post.querySelector('thumbnail').getAttribute('url').replace('s72-c', 's1600')
			: 'https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png'
		
		const url = post.querySelector('link[rel="alternate"]').getAttribute('href')

		const article = document.createElement('article')
		article.innerHTML = `
			<div>
				<div>
					<h3 class="post-title">${title}</h3>
					<div>
						<a href="${authorIMG}" class="author-img">
							<img src="${authorIMG}" alt="${author}'s Profile Picture"/>
						</a> by 
						<a href="${authorURI}" class="author" title="${author}">${author}</a> 
						- Updated
						<span class="date">${updated}</span>
					</div>
				</div>
				<span class="icon share">Share</span>
			</div>
			<img src="${thumbnail}" alt="${title}" class="thumbnail" />
			<div>in <span class="post-label">${category}</span></div>
			<p class="post-snippet">${summary}</p>

			<div class="post-button-container">
				<div class="comment-count">
					<span>143</span>
					Comments
				</div>
				<button type="button" class="secondary-button">${joinDiscussionMessage}</button>
				<button type="button" class="main-button" onclick="location.href = '${url}' ">${continueReading}</button>
			</div>
		`

		document.querySelector('#load-older-post').before(article)
		i++
		loadedPost++
	}
}
