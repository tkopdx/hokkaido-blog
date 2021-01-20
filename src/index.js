import axios from 'axios';

async function init() {

    console.log('init');

    const res = await axios.get('/posts');

    const posts = res.data.posts;

    console.log('posts: ', posts);

    const doc = document.querySelector('html');
    const mainPost = document.querySelector('.blog-text');
    const postDate = document.querySelector('.blog-date');
    const postTitle = document.querySelector('.blog-title');
    const sidebar = document.querySelector('.sidebar');
    const itemsList = document.querySelector('.sidebar-items-list');

    sidebar.addEventListener('mouseover', removeBlur);
    sidebar.addEventListener('mouseout', addBlur);
    window.onhashchange = hashHandler;

    setBackground();

    if (location.hash) {
        console.log('not the home page');
        setPost(location.hash.replace('#', ''));
    } else {
        setPost(posts.length - 1);
    }
    
    function setBackground() {
        console.log('back set');

        const now = new Date();
    
        const month = now.getMonth();
    
        if (month > 10 || month < 3) {
            doc.style.background = `#acdeff url(./assets/img/winter.jpg)`;
        } else if (month < 6) {
            doc.style.background = `#acdeff url(./assets/img/spring.jpg)`;
        } else if (month < 9) {
            doc.style.background = `#acdeff url(./assets/img/summer.jpg)`;
        } else {
            doc.style.background = `#acdeff url(./assets/img/fall.jpg)`;
        }
    
        doc.style.backgroundSize = 'cover';
    }
    
    function setPost(ind) {

        console.log('settting post with index: ', ind);

        const regLeadingQuotes = new RegExp("'(?=[A-Z])", 'g');
        const regTrailingQuotes = new RegExp("(?<=[.,?!])'", 'g');
        
        if (posts[ind]) {
            mainPost.innerHTML = posts[ind].post.replace(regTrailingQuotes, '" ').replace(regLeadingQuotes, ' "');
            mainPost.insertAdjacentHTML('beforeend', posts[ind].jp);
            postDate.innerText = posts[ind].date;
            postTitle.innerText = posts[ind].title;
        } else {
            mainPost.innerText = `Sorry! No post matches that id.`
        }
        

        console.log(typeof ind);

        setItemsList(parseInt(ind, 10));
    }

    function setItemsList(index) {

        clearItemsList();

        console.log('cleared items');

        const items = posts.reduce((acc, post) => {
            acc.push(`<li class="list-item" data-id="${post.id}"><a class="post-link" href="#${post.id}"><span class="list-item-title">${post.title}</span><br><span class="list-item-date">${post.date}</span></a></li>`);
            return acc;
        }, []).join('');

        itemsList.innerHTML = items;
    }

    function clearItemsList() {
        console.log('clearing items');
        
        while (itemsList.firstChild) {
            itemsList.removeChild(itemsList.firstChild);
        }
    }

    function removeBlur() {
        console.log('hovered');
        document.querySelector('body').style.backdropFilter = `blur(5px)`;
    }
    
    function addBlur() {
        document.querySelector('body').style.backdropFilter = `blur(15px)`;
    }

    function hashHandler() {
        console.log('the hash changed!', location.hash);
    
        let id = location.hash.replace('#', '');
    
        console.log(id);

        id ? null : id = posts.length - 1;
    
        setPost(id);
    }
}



window.addEventListener('DOMContentLoaded', init);




