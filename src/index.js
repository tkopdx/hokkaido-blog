import data from './assets/posts/posts.json';

function init() {

    // console.log('init');

    // console.log('posts: ', data.posts);

    const posts = data.posts;

    const doc = document.querySelector('html');
    const mainPost = document.querySelector('.blog-text');
    const postDate = document.querySelector('.blog-date');
    const postTitle = document.querySelector('.blog-title');
    const sidebar = document.querySelector('.sidebar');
    const itemsList = document.querySelector('.sidebar-items-list');
    const blogInner = document.querySelector('.blog-inner');
    const content = document.querySelector('.content');

    sidebar.addEventListener('mouseover', removeBlur);
    sidebar.addEventListener('mouseout', addBlur);
    window.onhashchange = hashHandler;
    blogInner.addEventListener('scroll', debounce(scrollHandler));
    blogInner.addEventListener('mousedown', toggleScroll);
    blogInner.addEventListener('mouseup', toggleScroll);
    blogInner.addEventListener('mousemove', (e) => scroll && debounce(scrollHandler(e)));
    
    function setBackground() {
        // console.log('back set');

        const now = new Date();
    
        const month = now.getMonth();
    
        if (month > 10 || month < 3) {
            doc.style.background = `#acdeff url(https://images.unsplash.com/photo-1545014393-76c7b8936c76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80)`;
        } else if (month < 6) {
            doc.style.background = `#acdeff url(https://images.unsplash.com/photo-1603435580027-f30889418372?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80)`;
        } else if (month < 9) {
            doc.style.background = `#acdeff url(https://images.unsplash.com/photo-1545361682-831ddf84b29d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80)`;
        } else {
            doc.style.background = `#acdeff url(https://images.unsplash.com/photo-1573718893672-86144926f4fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`;
        }
    
        doc.style.backgroundSize = 'cover';
    }
    
    function setPost(ind) {

        // console.log('settting post with index: ', ind);
        
        if (posts[ind]) {
            mainPost.innerHTML = posts[ind].post;
            mainPost.insertAdjacentHTML('beforeend', posts[ind].jp);
            postDate.innerText = posts[ind].date;
            postTitle.innerText = posts[ind].title;
        } else {
            mainPost.innerText = `Sorry! No post matches that id.`
        }
        

        // console.log(typeof ind);

        setItemsList(parseInt(ind, 10));
    }

    function setItemsList(index) {

        clearItemsList();

        // console.log('cleared items');

        const items = posts.reduce((acc, post) => {
            acc.push(`<li class="list-item" data-id="${post.id}"><a class="post-link" href="#${post.id}"><span class="list-item-title">${post.title}</span><br><span class="list-item-date">${post.date}</span></a></li>`);
            return acc;
        }, []).join('');

        itemsList.innerHTML = items;
    }

    function clearItemsList() {
        // console.log('clearing items');
        
        while (itemsList.firstChild) {
            itemsList.removeChild(itemsList.firstChild);
        }
    }

    function removeBlur() {
        // console.log('hovered');
        document.querySelector('body').style.backdropFilter = `blur(5px)`;
    }
    
    function addBlur() {
        document.querySelector('body').style.backdropFilter = `blur(15px)`;
    }

    let scroll = false;

    function toggleScroll() {
        scroll = !scroll;
    }

    let prev = 0;

    function scrollHandler(e) {

        const scrollPerc = e.target.scrollTop / e.target.scrollHeight;

        // console.log(scrollPerc);
        
        if (scrollPerc > prev && e.target.scrollTop > 15) {
            // console.log('scrolling down, classes set to fullscreen mode');
            
            content.classList.add('fullscreen');
            sidebar.classList.add('hide');

            sidebar.style.flexBasis = `0`;
            content.style.flexBasis = `200%`
        } else {
            // console.log('scrolling up, reset classes');

            content.classList.remove('fullscreen');
            sidebar.classList.remove('hide');

            sidebar.style.flexBasis = `40%`;
            content.style.flexBasis = `60%`;
        }

        prev = scrollPerc;
    }

    function hashHandler() {
        // console.log('the hash changed!', location.hash);
    
        let id = location.hash.replace('#', '');
    
        // console.log(id);

        id ? null : id = posts.length - 1;
    
        setPost(id);
    }

    function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function() {
          var context = this, args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
    }

    //basic setup

    setBackground();

    if (location.hash) {
        // console.log('not the home page');
        setPost(location.hash.replace('#', ''));
    } else {
        setPost(posts.length - 1);
    }
}



window.addEventListener('DOMContentLoaded', init);




